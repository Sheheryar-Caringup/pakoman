import React from 'react';

import AtlasFundsLogo from '../../../assets/Icons/Splash/AtlasFunds.svg';
import AtlasMeraj from '../../../assets/Icons/Splash/AtlasMeraj.svg';
import AtlasPension from '../../../assets/Icons/Splash/AtlasPension.svg';
import AtlasInvestment from '../../../assets/Icons/Splash/AtlasInvestment.svg';

import {languageTxt} from '../../../utils/languageTxt';
const slides = [
  {
    key: 1,
    description: languageTxt.atlasFundsDescription,
    image: <AtlasFundsLogo width={'100%'} height={150} />,
  },
  {
    key: 2,
    description: languageTxt.atlasMirajDescription,
    image: <AtlasMeraj width={'100%'} height={150} />,
  },
  {
    key: 3,
    description: languageTxt.atlasPensionDescription,
    image: <AtlasPension width={'100%'} height={150} />,
  },
  {
    key: 4,
    description: languageTxt.atlasInvestmentDescription,
    image: <AtlasInvestment width={'100%'} height={150} />,
  },
];

export {slides};
