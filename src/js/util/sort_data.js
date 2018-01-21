import moment from 'moment';

export function sortData1(apiData) {
  const sortedData = apiData.map((val, index) => ({
    d: moment.unix(val.time).format('MMM DD h:mm a'),
    p: val.close.toLocaleString('us-EN', {
      style: 'currency',
      currency: 'USD'
    }),
    x: index,
    y: val.close
  }));
  return sortedData;
}

export function sortData2(apiData) {
  const sortedData = [];
  let count = 0;
  for (let date in apiData) {
    sortedData.push({
      d: moment(date).format('MMM DD'),
      p: apiData[date].toLocaleString('us-EN', {
        style: 'currency',
        currency: 'USD'
      }),
      x: count, //previous days
      y: apiData[date] // numerical price
    });
    count++;
  }
  console.log('unicorndata', sortedData);

  return sortedData;
}
