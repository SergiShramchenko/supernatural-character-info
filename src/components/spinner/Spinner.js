import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { override } from './spinner.style';

export default () => <ClipLoader css={override} size={150} color={'#123abc'} />;
