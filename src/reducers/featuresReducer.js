const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    featuresDict: {
        "1": false,
        "2": false,
        "3": false,
        "4": false
    }
};

export const featuresReducer = (state = initialState, action) => {
    switch(action.type) {
        case "TOGGLE_FEATURE":
            const isAdded = state.featuresDict[action.payload];
            if (isAdded === undefined) { return state };
            const targetArr = isAdded ? state.car.features : state.additionalFeatures;
            const index = targetArr.findIndex(feature => (
                feature.id === Number(action.payload)
            ));
            const feature = targetArr[index];
            const newArr = [...targetArr];
            newArr.splice(index, 1);
            if (isAdded) {
                return {
                    ...state,
                    additionalPrice: state.additionalPrice - feature.price,
                    car: {
                        ...state.car,
                        features: newArr
                    },
                    additionalFeatures: [
                        ...state.additionalFeatures,
                        { ...feature }
                    ],
                    featuresDict: {
                        ...state.featuresDict,
                        [action.payload]: !isAdded
                    }
                };
            } else {
                return {
                    ...state,
                    additionalPrice: state.additionalPrice + feature.price,
                    car: {
                        ...state.car,
                        features: [
                            ...state.car.features,
                            { ...feature }
                        ]
                    },
                    additionalFeatures: newArr,
                    featuresDict: {
                        ...state.featuresDict,
                        [action.payload]: !isAdded
                    }
                };
            }
        default: return state;
    }
}