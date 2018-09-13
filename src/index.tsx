import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import App from './components/App';
import { i18nInstance } from './misc/i18n';

class Entry extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <I18nextProvider i18n={i18nInstance}>
        <App />
      </I18nextProvider>
    );
  }
}

const WDYU = false;
if (WDYU && process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

ReactDOM.render(<Entry />, document.getElementById('App'));
