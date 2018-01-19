import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './InfoBox.css';

class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: null,
      monthChangeD: null,
      monthChangeP: null,
      updatedAt: null
    };
  }
  componentDidMount() {
<<<<<<< HEAD
    this.getData();
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextpropsis ', nextProps);
    console.log('this.props.coin', this.props.coin);

    return (
      this.props.coin !== nextProps.coin ||
      this.state.currentPrice !== nextState.currentPrice
    );
  }
  componentWillUpdate() {
    console.log('componentwillupdate running');
    this.getData();
=======
    const { duration, coin } = this.props;
    this.getData = () => {
      const { data } = this.props;
      const url = {
        BTC: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        ETH: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        LTC: 'https://api.coindesk.com/v1/bpi/currentprice.json'
      };

      fetch(url[this.props.coin])
        .then(r => r.json())
        .then(bitcoinData => {
          const price = bitcoinData.bpi.USD.rate_float;
          const change = price - data[coin][duration][0].y;
          const changeP =
            (price - data[coin][duration][0].y) /
            data[coin][duration][0].y *
            100;

          this.setState({
            currentPrice: bitcoinData.bpi.USD.rate_float,
            monthChangeD: change.toLocaleString('us-EN', {
              style: 'currency',
              currency: 'USD'
            }),
            monthChangeP: `${changeP.toFixed(2)} + %`,
            updatedAt: bitcoinData.time.updated
          });
        })
        .catch(e => {
          console.log(e);
        });
    };
    this.getData();
    this.refresh = setInterval(() => this.getData(), 90000);
>>>>>>> 23ba3a84cd508ef4ec209f729e5a1b4302ae0588
  }
  componentWillUnmount() {
    clearInterval(this.refresh);
  }
<<<<<<< HEAD
  getData() {
    const { data, coin, duration } = this.props;
    const url = {
      BTC: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      ETH: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
      LTC: 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD'
    };

    fetch(url[this.props.coin])
      .then(r => r.json())
      .then(bitcoinData => {
        const price =
          this.props.coin === 'BTC'
            ? bitcoinData.bpi.USD.rate_float
            : bitcoinData.USD;

        console.log('bitcoinData is', bitcoinData);
        console.log('price is', price);
        console.log('coin', this.props.coin);
        const change = price - data[coin][duration][0].y;
        const changeP =
          (price - data[coin][duration][0].y) / data[coin][duration][0].y * 100;

        const updatedAt =
          this.props.coin === 'BTC'
            ? bitcoinData.time.updated
            : moment.utc().format('MMM D, YYYY hh:mm:ss');
        this.setState({
          currentPrice: price,
          monthChangeD: change.toLocaleString('us-EN', {
            style: 'currency',
            currency: 'USD'
          }),
          monthChangeP: `${changeP.toFixed(2)} %`,
          updatedAt
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    this.refresh = setInterval(() => this.getData(), 90000);

=======
  render() {
>>>>>>> 23ba3a84cd508ef4ec209f729e5a1b4302ae0588
    let durationText = '';
    switch (this.props.duration) {
      case '1H |':
        durationText = 'Hour';
        break;
      case ' 1D |':
        durationText = 'Day';
        break;
      case ' 1W |':
        durationText = 'Week';
        break;
      case ' 1M |':
        durationText = 'Month';
        break;
      case ' 1Y':
        durationText = 'Year';
        break;
      default:
        durationText = 'Term';
    }
    return (
      <div id="data-container">
        {this.state.currentPrice ? (
          <div id="left" className="box">
            <div className="heading">
              {this.state.currentPrice.toLocaleString('us-EN', {
                style: 'currency',
                currency: 'USD'
              })}
            </div>
            <div className="subtext">
<<<<<<< HEAD
              Updated {moment(this.state.updatedAt).fromNow()}
=======
              `Updated ${moment(this.state.updatedAt).fromNow()}`
>>>>>>> 23ba3a84cd508ef4ec209f729e5a1b4302ae0588
            </div>
          </div>
        ) : null}
        {this.state.currentPrice ? (
          <div id="middle" className="box">
            <div className="heading">{this.state.monthChangeD}</div>
            <div className="subtext">{`Change Since Last ${durationText} (USD)`}</div>
          </div>
        ) : null}
        <div id="right" className="box">
          <div className="heading">{this.state.monthChangeP}</div>
          <div className="subtext">
            {`Change Since Last ${durationText} (%)`}{' '}
          </div>
        </div>
      </div>
    );
  }
}

// DEFAULT PROPS
InfoBox.propTypes = {
  duration: PropTypes.string.isRequired,
<<<<<<< HEAD
  coin: PropTypes.string.isRequired
=======
  coin: PropTypes.string.isRequired,
  data: PropTypes.shape
>>>>>>> 23ba3a84cd508ef4ec209f729e5a1b4302ae0588
};

export default InfoBox;
