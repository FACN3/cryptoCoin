import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBox from './InfoBox';
import Spinner from './Spinner';

class MarketData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: {
        BTC: {
          '1H |': null,
          ' 1D |': null,
          ' 1W |': null,
          ' 1M |': null,
          ' 1Y': null
        },
        ETH: {
          '1H |': null,
          ' 1D |': null,
          ' 1W |': null,
          ' 1M |': null,
          ' 1Y': null
        },
        LTC: {
          '1H |': null,
          ' 1D |': null,
          ' 1W |': null,
          ' 1M |': null,
          ' 1Y': null
        }
      },
      coin: 'BTC',
      hoverLoc: null,
      activePoint: null,
      duration: ' 1D |'
    };
    this.url = {
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
        ' 1M |': null,
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
        ' 1M |': null,
        ' 1Y':
          'https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=365&aggregate=1'
      }
    };
    this.coinCode = {
      Bitcoin: 'BTC',
      Ethereum: 'ETH',
      Litecoin: 'LTC',
      BTC: 'Bitcoin',
      ETH: 'Ethereum',
      LTC: 'Litecoin'
    };
    this.handleDuration = this.handleDuration.bind(this);
    this.handleCoin = this.handleCoin.bind(this);
  }
  componentDidMount() {
    if (this.state.duration === ' 1M |') {
      this.getData2(this.url[this.state.coin]);
    } else {
      this.getData1(this.url[this.state.coin]);
    }
  }

  getData1(url) {
    const { duration, coin } = this.state;
    console.log('running getData1');
    axios.get(url[duration]).then(Coindata => {
      const apiData = Coindata.data.Data;
      const sortedData = [];
      apiData.map((val, index) =>
        sortedData.push({
          d: moment.unix(val.time).format('MMM DD h:mm a'),
          p: val.close.toLocaleString('us-EN', {
            style: 'currency',
            currency: 'USD'
          }),
          x: index,
          y: val.close
        })
      );
      console.log(sortedData);
      const result = { ...this.state.data };
      result[coin][duration] = sortedData;
      console.log('result is', result);

      this.setState({ data: result, fetchingData: false });
    });
  }
  getData2(url) {
    const { duration, coin } = this.state;
    fetch(url[duration])
      .then(r => r.json())
      .then(bitcoinData => {
        const sortedData = [];
        let count = 0;
        for (let date in bitcoinData.bpi) {
          sortedData.push({
            d: moment(date).format('MMM DD'),
            p: bitcoinData.bpi[date].toLocaleString('us-EN', {
              style: 'currency',
              currency: 'USD'
            }),
            x: count, //previous days
            y: bitcoinData.bpi[date] // numerical price
          });
          count++;
        }
        let data = { ...this.state.data };
        console.log('duration is ', duration);
        data[coin][duration] = sortedData;
        this.setState({
          data,
          fetchingData: false
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  handleDuration(event) {
    event.preventDefault();
    this.setState(
      {
        duration: event.target.text,
        fetchingData: true
      },
      () => {
        if (this.state.duration === ' 1M |') {
          this.getData2(this.url[this.state.coin]);
        } else {
          this.getData1(this.url[this.state.coin]);
        }
      }
    );
  }
  handleChartHover(hoverLoc, activePoint) {
    this.setState({
      hoverLoc,
      activePoint
    });
  }
  handleCoin(event) {
    event.preventDefault();
    console.log(this.coins);
    this.setState(
      {
        coin: this.coinCode[event.target.value],
        fetchingData: true
      },
      () => {
        if (this.state.duration === ' 1M |') {
          this.getData2(this.url[this.state.coin]);
        } else {
          this.getData1(this.url[this.state.coin]);
        }
      }
    );
  }

  render() {
    const Wrapper = styled.h2`
      color: #fc4a1a;
    `;

    const { duration, coin } = this.state;
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
          <Wrapper>{`${this.coinCode[this.state.coin]} Price Chart`}</Wrapper>
        </div>
        <div className="row">
          {durations.map(
            (durationVal, i) =>
              durationVal === this.state.duration ? (
                <a
                  style={(style, bold)}
                  key={i}
                  href=""
                  onClick={this.handleDuration}
                >
                  {durationVal}
                </a>
              ) : (
                <a style={style} key={i} href="" onClick={this.handleDuration}>
                  {durationVal}
                </a>
              )
          )}
        </div>
        <div className="row">
          {!this.state.fetchingData ? (
            <InfoBox
              data={this.state.data}
              duration={this.state.duration}
              coin={this.state.coin}
            />
          ) : null}
        </div>
        <div className="row">
          <div className="popup">
            {this.state.hoverLoc ? (
              <ToolTip
                hoverLoc={this.state.hoverLoc}
                activePoint={this.state.activePoint}
              />
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="chart">
            {!this.state.data[coin][duration] ? <Spinner /> : null}
            {!this.state.fetchingData ? (
              <LineChart
                duration={this.state.duration}
                data={this.state.data}
                coin={this.state.coin}
                onChartHover={(a, b) => this.handleChartHover(a, b)}
              />
            ) : null}
          </div>
        </div>

        <div className="row">
          <select onChange={this.handleCoin}>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Litecoin">Litecoin</option>
          </select>;
        </div>
      </div>
    );
  }
}

export default MarketData;
