import React from 'react';
import { connect } from "react-redux";
import { toggleFeature } from "../actions/featuresActions";
import AddedFeature from './AddedFeature';

const AddedFeatures = ({ features, toggleFeature }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} toggleFeature={toggleFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  features: state.car.features
});

export default connect(mapStateToProps, { toggleFeature })(AddedFeatures);
