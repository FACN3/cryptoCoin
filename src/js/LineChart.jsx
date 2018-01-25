import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setDuration,
  setCoin,
  setHoverLoc,
  setActivePoint
} from './actionCreators';
import './LineChart.css';

class LineChart extends Component {
  constructor(props) {
    super(props);
  }
  getX() {
    const { data, duration, coin } = this.props;
    const lookAt = data[coin];
    return {
      min: lookAt[duration][0].x,
      max: data[coin][duration][data[coin][duration].length - 1].x
    };
  }
  getY() {
    const { data, duration, coin } = this.props;
    return {
      min: data[coin][duration].reduce(
        (min, p) => (p.y < min ? p.y : min),
        data[coin][duration][0].y
      ),
      max: data[coin][duration].reduce(
        (max, p) => (p.y > max ? p.y : max),
        data[coin][duration][0].y
      )
    };
  }
  getSvgX(x) {
    const { svgWidth, yLabelSize, duration, coin } = this.props;
    return yLabelSize + x / this.getX().max * (svgWidth - yLabelSize);
  }
  getSvgY(y) {
    const { svgHeight, xLabelSize, duration, coin } = this.props;
    const gY = this.getY();
    return (
      ((svgHeight - xLabelSize) * gY.max - (svgHeight - xLabelSize) * y) /
      (gY.max - gY.min)
    );
  }
  makePath() {
    const { data, color, duration, coin } = this.props;
    let pathD =
      'M ' +
      this.getSvgX(data[coin][duration][0].x) +
      ' ' +
      this.getSvgY(data[coin][duration][0].y) +
      ' ';

    pathD += data[coin][duration]
      .map((point, i) => {
        return 'L ' + this.getSvgX(point.x) + ' ' + this.getSvgY(point.y) + ' ';
      })
      .join('');

    return (
      <path className="linechart_path" d={pathD} style={{ stroke: color }} />
    );
  }
  makeArea() {
    const { data, duration, coin } = this.props;
    let pathD =
      'M ' +
      this.getSvgX(data[coin][duration][0].x) +
      ' ' +
      this.getSvgY(data[coin][duration][0].y) +
      ' ';

    pathD += data[coin][duration]
      .map((point, i) => {
        return 'L ' + this.getSvgX(point.x) + ' ' + this.getSvgY(point.y) + ' ';
      })
      .join('');

    const x = this.getX();
    const y = this.getY();
    pathD +=
      'L ' +
      this.getSvgX(x.max) +
      ' ' +
      this.getSvgY(y.min) +
      ' ' +
      'L ' +
      this.getSvgX(x.min) +
      ' ' +
      this.getSvgY(y.min) +
      ' ';

    return <path className="linechart_area" d={pathD} />;
  }
  makeAxis() {
    const { yLabelSize } = this.props;
    const x = this.getX();
    const y = this.getY();

    return (
      <g className="linechart_axis">
        <line
          x1={this.getSvgX(x.min) - yLabelSize}
          y1={this.getSvgY(y.min)}
          x2={this.getSvgX(x.max)}
          y2={this.getSvgY(y.min)}
          strokeDasharray="5"
        />
        <line
          x1={this.getSvgX(x.min) - yLabelSize}
          y1={this.getSvgY(y.max)}
          x2={this.getSvgX(x.max)}
          y2={this.getSvgY(y.max)}
          strokeDasharray="5"
        />
      </g>
    );
  }
  makeLabels() {
    const {
      svgHeight,
      svgWidth,
      xLabelSize,
      yLabelSize,
      duration,
      coin
    } = this.props;
    const padding = 5;
    return (
      <g className="linechart_label">

        <text
          transform={`translate(${yLabelSize / 2}, 20)`}
          textAnchor="middle"
        >
          {this.getY().max.toLocaleString('us-EN', {
            style: 'currency',
            currency: 'USD'
          })}
        </text>
        <text
          transform={`translate(${yLabelSize / 2}, ${svgHeight -
            xLabelSize -
            padding})`}
          textAnchor="middle"
        >
          {this.getY().min.toLocaleString('us-EN', {
            style: 'currency',
            currency: 'USD'
          })}
        </text>
        <text
          transform={`translate(${yLabelSize}, ${svgHeight})`}
          textAnchor="start"
        >
          {this.props.data[coin][duration][0].d}
        </text>
        <text
          transform={`translate(${svgWidth}, ${svgHeight})`}
          textAnchor="end"
        >
          {[this.props.data[coin][duration].length - 1].d}
        </text>
      </g>
    );
  }
  getCoords(e) {
    const { svgWidth, data, yLabelSize, duration, coin } = this.props;
    const svgLocation = document
      .getElementsByClassName('linechart')[0]
      .getBoundingClientRect();
    const adjustment = (svgLocation.width - svgWidth) / 2; 
    const relativeLoc = e.clientX - svgLocation.left - adjustment;

    let svgData = [];
    data[coin][duration].map((point, i) => {
      svgData.push({
        svgX: this.getSvgX(point.x),
        svgY: this.getSvgY(point.y),
        d: point.d,
        p: point.p
      });
    });

    let closestPoint = {};
    for (let i = 0, c = 500; i < svgData.length; i++) {
      if (Math.abs(svgData[i].svgX - this.props.hoverLoc) <= c) {
        c = Math.abs(svgData[i].svgX - this.props.hoverLoc);
        closestPoint = svgData[i];
      }
    }

    if (relativeLoc - yLabelSize < 0) {
      this.stopHover();
    } else {
      this.props.handleHover(relativeLoc, closestPoint);
    }
    this.props.onChartHover(relativeLoc, closestPoint);
  }

  stopHover() {
    this.props.handleHover(null, null);
    this.props.onChartHover(null, null);
  }
  makeActivePoint() {
    const { color, pointRadius } = this.props;
    return (
      <circle
        className="linechart_point"
        style={{ stroke: color }}
        r={pointRadius}
        cx={this.props.activePoint.svgX}
        cy={this.props.activePoint.svgY}
      />
    );
  }
  createLine() {
    const { svgHeight, xLabelSize } = this.props;
    return (
      <line
        className="hoverLine"
        x1={this.props.hoverLoc}
        y1={-8}
        x2={this.props.hoverLoc}
        y2={svgHeight - xLabelSize}
      />
    );
  }

  render() {
    const { svgHeight, svgWidth } = this.props;

    return (
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="linechart"
        onMouseLeave={() => this.stopHover()}
        onMouseMove={e => this.getCoords(e)}
      >
        <g>
          {this.makeAxis()}
          {this.makePath()}
          {this.makeArea()}
          {this.makeLabels()}
          {this.props.hoverLoc ? this.createLine() : null}
          {this.props.hoverLoc ? this.makeActivePoint() : null}
        </g>
      </svg>
    );
  }
}
LineChart.defaultProps = {
  data: [],
  color: '#fc4a1a',
  pointRadius: 5,
  svgHeight: 300,
  svgWidth: 900,
  xLabelSize: 20,
  yLabelSize: 80
};

const mapStateToProps = ({ duration, data, coin, hoverLoc, activePoint }) => ({
  duration,
  data,
  coin,
  hoverLoc,
  activePoint
});

const mapDispatchToProps = dispatch => ({
  handleHover(relativeLoc, closestPoint) {
    dispatch(setHoverLoc(relativeLoc));
    dispatch(setActivePoint(closestPoint));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
