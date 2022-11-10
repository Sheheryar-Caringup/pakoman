import React from 'react';
import {View} from 'react-native';
import {languageTxt} from '../../../../../utils/constants/languageTxt';
import CustomPdfView from '../../../../shared/CustomPdfView';
import Skeleton from '../../../../shared/Skeleton';
import {styles} from './styles';

const PDFViewer = ({route}: any) => {
  const {data} = route?.params;
  const source = {uri: `data:application/pdf;base64,${data}`};
  return (
    <Skeleton
      title={languageTxt?.reactStackKeys?.user?.accountStatement?.name}
      isBottomNav={true}
      isBack={true}>
      <CustomPdfView
        uri={`data:application/pdf;base64,${data}`}
        // isHorizontal={true}
      />
    </Skeleton>
  );
};

export default PDFViewer;
