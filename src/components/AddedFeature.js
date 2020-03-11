import React from 'react';

const AddedFeature = ({ feature, toggleFeature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => toggleFeature(feature.id)}>X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
