import React from 'react';

const FacebookLike = (props: any) => (
  <span
    id="fb-like"
    className="fb-like"
    data-href={props.url}
    data-layout="button_count"
    data-action="like"
    data-show-faces="true"
    data-share="true"
    {...props}
  />
);

export default FacebookLike;
