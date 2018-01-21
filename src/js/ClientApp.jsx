import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
renderApp();

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default;
//
//     render(
//       <BrowserRouter>
//         <NextApp />
//       </BrowserRouter>,
//       document.getElementById('root')
//     );
//   });
// }

// const renderApp = () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('app')
//   );
// };
// renderApp();
//
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     renderApp();
//   });
// }
