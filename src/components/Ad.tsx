import styled from 'styled-components';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  grid-area: ${(props: any) => props.gridArea};
  margin: auto;
  text-align: center;
  filter: opacity(0.1);
`;

const Email = styled.span`
  &:before {
    content: attr(data-domain) '\u0040'attr(data-user);
    unicode-bidi: bidi-override;
    direction: rtl;
  }
`;

const Ad = (props: any) => {
  const { t } = useTranslation();

  return (
    <Wrapper gridArea={`ad${props.space || 1}`}>
      <div>{t('ad')}</div>
      <Email data-user="irassof" data-domain="si.irassof" />
    </Wrapper>
  );
};

export default Ad;
