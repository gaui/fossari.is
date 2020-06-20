import 'flag-icon-css/css/flag-icon.min.css';
import React from 'react';
import styled from 'styled-components';
import { mapCountryCode } from '../misc/i18n';
import { withTranslation } from 'react-i18next';

class LanguageBar extends React.Component {
  private i18n: any;

  constructor(props: any) {
    super(props);
    this.i18n = props.i18n;
  }

  public static Flag = styled.div.attrs((props: { [key: string]: string }) => ({
    className: `flag-icon flag-icon-${
      mapCountryCode(props.country)
        ? mapCountryCode(props.country)
        : props.country
    }`,
  }))`
    font-size: 1.5rem;
    margin: 0 10px 0 0;
    cursor: pointer;
  `;

  changeLang(lang: string) {
    this.i18n.changeLanguage(lang);
  }

  render() {
    const languages = Object.keys(this.i18n.services.resourceStore.data);

    return (
      <div id="lang">
        {languages
          .filter((l: string) => !l.includes('-'))
          .map((l: string) => (
            <LanguageBar.Flag
              key={l}
              country={l}
              onClick={() => this.changeLang(l)}
            />
          ))}
      </div>
    );
  }
}

export default withTranslation()(LanguageBar);
