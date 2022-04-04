import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyles from './src/components/GlobalStyles';

export const wrapPageElement = ({ element }) => {
  return (
    <GlobalStyles>
      <RecoilRoot>
        {element}
      </RecoilRoot>
    </GlobalStyles>
  )
}
