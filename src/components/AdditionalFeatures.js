import React from 'react';
import { connect } from "react-redux";
import { toggleFeature } from "../actions/featuresActions";
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ additionalFeatures, toggleFeature }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} toggleFeature={toggleFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  additionalFeatures: state.additionalFeatures
});

export default connect(mapStateToProps, { toggleFeature })(AdditionalFeatures);
