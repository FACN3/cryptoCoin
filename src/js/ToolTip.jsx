import React from 'react';
import './ToolTip.css';

const ToolTip = props => {
  const { hoverLoc, activePoint } = props;
  const svgLocation = document
    .getElementsByClassName('linechart')[0]
    .getBoundingClientRect();

  const placementStyles = {};
  const width = 115;
  placementStyles.width = width + 'px';
  placementStyles.left = hoverLoc + svgLocation.left - width / 2;

  return (
    <div className="hover" style={placementStyles}>
      <div className="date">{activePoint.d}</div>
      <div className="price">{activePoint.p}</div>
    </div>
  );
};

export default ToolTip;
