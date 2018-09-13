import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import FacebookLike from './FacebookLike';
import GitHub from '../components/GitHub';
import IsItFriday from '../components/IsItFriday';
import LanguageBar from './LanguageBar';
import Version from './Version';

const pkgVersion = require('../../package.json').version;

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div id="Wrapper">
        <GlobalStyle />
        <IsItFriday />
        <LanguageBar />
        <Version number={pkgVersion} />
        <GitHub url="https://github.com/gaui/fossari.is" />
        <FacebookLike url="http://fossari.is" />
      </div>
    );
  }
}

export default App;
