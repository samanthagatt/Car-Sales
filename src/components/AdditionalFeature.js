import React from 'react';

const AdditionalFeature = ({ feature, toggleFeature }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => toggleFeature(feature.id)}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
