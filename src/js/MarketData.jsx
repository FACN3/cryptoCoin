import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import {
  setDuration,
  setCoin,
  setHoverLoc,
  setActivePoint,
  setFetchingData
} from './actionCreators';
import getData from './asyncActions';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBox from './InfoBox';
import Spinner from './Spinner';

const coinCode = {
  Bitcoin: 'BTC',
  Ethereum: 'ETH',
  Litecoin: 'LTC',
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  LTC: 'Litecoin'
};

class MarketData extends Component {
  componentDidMount() {
    this.props.handleGetData(this.props);
  }

  // getData1(url) {

  render() {
    const Wrapper = styled.h2`
      color: #fc4a1a;
    `;

    const { duration, coin } = this.props;
    const style = {
      'text-decoration': 'none',
      border: 'none'
    };
    const bold = {
      'font-weight': 'bold',
      'text-decoration': 'none'
    };
    const durations = ['1H |', ' 1D |', ' 1W |', ' 1M |', ' 1Y'];
    return (
      <div className="container">
        <div className="row">
          <Wrapper>{`${coinCode[this.props.coin]} Price Chart`}</Wrapper>
        </div>
        <div className="row">
          {durations.map(
            (durationVal, i) =>
              durationVal === this.props.duration ? (
                <a
                  style={(style, bold)}
                  key={i}
                  href=""
                  onClick={event =>
                    this.props.handleDuration(event, this.props)
                  }
                >
                  {durationVal}
                </a>
              ) : (
                <a
                  style={style}
                  key={i}
                  href=""
                  onClick={event =>
                    this.props.handleDuration(event, this.props)
                  }
                >
                  {durationVal}
                </a>
              )
          )}
        </div>
        <div className="row">
          {!this.props.fetchingData ? (
            <InfoBox
              data={this.props.data}
              duration={this.props.duration}
              coin={this.props.coin}
            />
          ) : null}
        </div>
        <div className="row">
          <div className="popup">
            {this.props.hoverLoc ? (
              <ToolTip
                hoverLoc={this.props.hoverLoc}
                activePoint={this.props.activePoint}
              />
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="chart">
            {!this.props.data[coin][duration] ? <Spinner /> : null}
            {!this.props.fetchingData ? (
              <LineChart
                duration={this.props.duration}
                data={this.props.data}
                coin={this.props.coin}
                onChartHover={(a, b) => this.props.handleChartHover(a, b)}
              />
            ) : null}
          </div>
        </div>

        <div className="row">
          <select onChange={event => this.props.handleCoin(event, this.props)}>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Litecoin">Litecoin</option>
          </select>;
        </div>
      </div>
    );
  }
}

const url = {
  BTC: {
    '1H |':
      'https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=60&aggregate=1',
    ' 1D |':
      'https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=24&aggregate=1',
    ' 1W |':
      'https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=168',
    ' 1M |': 'https://api.coindesk.com/v1/bpi/historical/close.json',
    ' 1Y':
      'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=365&aggregate=1'
  },
  ETH: {
    '1H |':
      'https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=USD&limit=60&aggregate=1',
    ' 1D |':
      'https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=24&aggregate=1',
    ' 1W |':
      'https://min-api.cryptocompare.com/data/histohour?fsym=ETH&tsym=USD&limit=168',
    ' 1M |':
      'https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=30&aggregate=1',
    ' 1Y':
      'https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=365&aggregate=1'
  },
  LTC: {
    '1H |':
      'https://min-api.cryptocompare.com/data/histominute?fsym=LTC&tsym=USD&limit=60&aggregate=1',
    ' 1D |':
      'https://min-api.cryptocompare.com/data/histohour?fsym=LTC&tsym=USD&limit=24&aggregate=1',
    ' 1W |':
      'https://min-api.cryptocompare.com/data/histohour?fsym=LTC&tsym=USD&limit=168',
    ' 1M |':
      'https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=30&aggregate=1',
    ' 1Y':
      'https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=365&aggregate=1'
  }
};

const mapStateToProps = state => ({
  coin: state.coin,
  duration: state.duration,
  fetchingData: state.data.isFetching,
  data: state.data,
  hoverLoc: state.hoverLoc,
  activePoint: state.activePoint
});
const mapDispatchToProps = dispatch => ({
  handleDuration(event, props) {
    event.preventDefault();
    dispatch(setDuration(event.target.text));
    dispatch(
      getData(url[props.coin][event.target.text], props.coin, event.target.text)
    );
  },
  handleChartHover(hoverLoc, activePoint) {
    // dispatch(setHoverLoc(hoverLoc));
    // dispatch(setActivePoint(activePoint));
  },
  handleCoin(event, props) {
    event.preventDefault();
    const coin = coinCode[event.target.value];
    dispatch(setCoin(coin));
    dispatch(getData(url[coin][props.duration], coin, props.duration));
  },

  handleGetData(props) {
    dispatch(setDuration(props.duration));
    dispatch(setCoin(props.coin));
    dispatch(
      getData(url[props.coin][props.duration], props.coin, props.duration)
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketData);
