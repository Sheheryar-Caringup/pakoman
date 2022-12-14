// import {M_TRANSACTIONS_API_KEY} from '@env';

import {mTransactions_instance} from '../../config/http';
import {getAccCode} from '../../config/asyncStorage/acc_code';
import {transformDataInfo, transformChartInfo} from './transformer';
import {storeService} from '../../config/asyncStorage/asynDataStore';
import {languageTxt} from '../../utils/constants/languageTxt';

const M_TRANSACTIONS_API_KEY = '5a64df56-rt45-yu41-8974-5f64ad56f4a5';
const getDashboardUserInfoApi = async (accCode: any) => {
  console.log(accCode, 'resultCoderesultCode accCode');

  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/DashboardUserInfo',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <DashboardUserInfo xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
        </DashboardUserInfo>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      console.log(data, 'resultCoderesultCode DashboardUserInfo');
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'DashboardUserInfoResponse'
        ]?.[0]?.['DashboardUserInfoResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['Table']?.[0];

      newData = transformDataInfo(newData);
      storeService(languageTxt?.reactAsyncStorageKeys?.userInfo, newData);

      return {
        success: true,
        data: newData,
      };
    })
    .catch(err => {
      console.log(err?.message, 'resultCoderesultCode err');
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getDashboardChartInfoApi = async () => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/DashboardChartInfo',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <DashboardChartInfo xmlns="http://www.sidathyder.com.pk/">\
          <AccCode>' +
      accCode +
      '</AccCode>\
          <AccessKey>' +
      M_TRANSACTIONS_API_KEY +
      '</AccessKey>\
        </DashboardChartInfo>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'DashboardChartInfoResponse'
        ]?.[0]?.['DashboardChartInfoResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'NewDataSet'
        ]?.[0]?.['Table'];

      newData = transformChartInfo(newData);
      return {
        success: true,
        data: newData,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getGenerateAccountStatmentApi = async (
  dateFrom: string,
  dateTo: string,
) => {
  const accCode = await getAccCode();
  return mTransactions_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://www.sidathyder.com.pk/Generate_AccountStatment',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <Generate_AccountStatment xmlns="http://www.sidathyder.com.pk/">\
          <_accountCode>' +
      accCode +
      '</_accountCode>\
          <_dateFrom>' +
      dateFrom +
      '</_dateFrom>\
          <_dateTo>' +
      dateTo +
      '</_dateTo>\
        </Generate_AccountStatment>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then((data: any) => {
      console.log(data, 'datadatadatadatadatadata');
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'Generate_AccountStatmentResponse'
        ]?.[0]?.['Generate_AccountStatmentResult']?.[0];
      return {
        success: true,
        data: newData,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

export {
  getDashboardUserInfoApi,
  getDashboardChartInfoApi,
  getGenerateAccountStatmentApi,
};
