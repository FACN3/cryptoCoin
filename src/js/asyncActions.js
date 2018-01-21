import axios from 'axios';
import moment from 'moment';
import { addAPIData, setFetchingData } from './actionCreators';

export function getData1(url, coin, duration) {
  return dispatch => {
    dispatch(setFetchingData(true));
    // const { duration, coin } = this.state;
    axios.get(url).then(Coindata => {
      const apiData = Coindata.data.Data;
      const sortedData = apiData.map((val, index) => ({
        d: moment.unix(val.time).format('MMM DD h:mm a'),
        p: val.close.toLocaleString('us-EN', {
          style: 'currency',
          currency: 'USD'
        }),
        x: index,
        y: val.close
      }));
      const result = {};
      result[coin] = {};
      result[coin][duration] = sortedData;
      // result[coin] = {};
      // const result = { ...this.state.data };
      // result[coin][duration] = sortedData;
      dispatch(addAPIData(sortedData, coin, duration)); // check if two seperate dispatches will dispatch together
      // this.setState({ data: result, fetchingData: false });
    });
  };
}

export function getData2(url, coin, duration) {
  return dispatch => {
    // const { duration, coin } = this.state;
    console.log('running getData2');
    console.log('coin is', coin);
    console.log('duration is', duration);
    fetch(url)
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
        const result = { ...state.data };
        console.log('duration is ', duration);
        result[coin][duration] = sortedData;
        // this.setState({ data, fetchingData: false });
        dispatch(addAPIData(result));
        dispatch(setFetchingData(false));
      })
      .then(() => {
        debugger;
        dispatch(setFetchingData(false));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
