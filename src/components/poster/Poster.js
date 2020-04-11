import React from 'react';

import PosterTitle from '../poster-title';
import PosterDesc from '../poster-desc';
import PosterView from '../poster-view';

import { PosterContainer, PosterInfo, PosterImg } from './poster.style';

export default () => (
  <PosterContainer>
    <PosterInfo>
      <PosterTitle />
      <PosterDesc />
    </PosterInfo>
    <PosterImg>
      <PosterView />
    </PosterImg>
  </PosterContainer>
);
