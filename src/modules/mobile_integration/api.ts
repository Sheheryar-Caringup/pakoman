// import {MOBILE_INTEGRATION_API_KEY} from '@env';
import {mobile_integration_instance} from '../../config/http';
import {storeAccCode} from '../../config/asyncStorage/acc_code';
import {getDashboardUserInfoApi} from '../m_transactions/api';

const MOBILE_INTEGRATION_API_KEY = '8b5844dc-d2bd-4d37-9227-51b334a936cc';
const loginApi = async (username: string, password: string) => {
  var newPassword = password.split('');

  let passwordElement = '';
  newPassword.forEach((element: string, key: number) => {
    passwordElement = `${passwordElement} <char>${password.charCodeAt(
      key,
    )}</char>`;
  });
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/SignIn',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap:Body>\
              <SignIn xmlns="http://tempuri.org/">\
                <Username>' +
      username +
      '</Username>\
                <pwd>' +
      passwordElement +
      '</pwd>\
                <indices><int>0</int></indices>\
                <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
              </SignIn>\
            </soap:Body>\
          </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignInResponse']?.[
          'length'
        ] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignInResponse']?.[0]?.[
          'SignInResult'
        ]?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignInResponse']?.[0]?.[
          'SignInResult'
        ]?.[0];

      let message = '';
      let success = false;
      if (resultCode == '-1') {
        message = 'Invalid Key';
      } else if (resultCode == '0') {
        message = 'Invaild Username or Password';
      } else if (resultCode == '1') {
        success = true;
        message = 'Successful Login';
      } else if (resultCode == '2') {
        message = 'Inactive User';
      } else if (resultCode == '3') {
        success = true;
      } else if (resultCode == '4') {
        message =
          'Account locked for making too many unsuccessful login attempts';
      } else if (resultCode == '5') {
        message = 'Password expired';
      } else if (resultCode == '7') {
        message = 'CNIC expired';
      }
      let accCode = '';
      let userProfile = {};

      if (success) {
        const getAccCode: any = await getMappedAccountApi(username);
        if (getAccCode?.success) {
          accCode = getAccCode?.accCode;
          const data: any = await getDashboardUserInfoApi(getAccCode?.accCode);
          if (data.success) {
            userProfile = data?.data;
          }
        }
      }

      return {
        code: resultCode,
        accCode: accCode,
        userProfile: userProfile,
        success: success,
        message: message,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const signUpApi = async (
  title: string,
  email: string,
  userID: string,
  cellNumber: string,
  accCode: string,
  cnic: string,
  dateofBirth: string,
  accountType: string,
) => {
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/SignUp',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap:Body>\
              <SignUp xmlns="http://tempuri.org/">\
                <accCode>' +
      accCode +
      '</accCode>\
                      <UserID>' +
      userID +
      '</UserID>\
                      <Title>' +
      title +
      '</Title>\
                      <AccountType>' +
      accountType +
      '</AccountType>\
                      <CNIC>' +
      cnic +
      '</CNIC>\
                      <Email>' +
      email +
      '</Email>\
                      <CellNumber>' +
      cellNumber +
      '</CellNumber>\
                      <DateofBirth>' +
      dateofBirth +
      '</DateofBirth>\
                      <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
              </SignUp>\
        </soap:Envelope>',
  })
    .then(async (data: any) => {
      var resultCode =
        data?.['soap:Envelope']?.['soap:Body']?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignUpResponse']?.[
          'length'
        ] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignUpResponse']?.[0]?.[
          'SignUpResult'
        ]?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.['SignUpResponse']?.[0]?.[
          'SignUpResult'
        ]?.[0];

      // let message = '';
      // let success = false;
      // if (resultCode == '-1') {
      //   message = 'Invalid Key';
      // } else if (resultCode == '0') {
      //   message = 'Invaild Username or Password';
      // } else if (resultCode == '1') {
      //   success = true;
      //   message = 'Successful Login';
      // } else if (resultCode == '2') {
      //   message = 'Inactive User';
      // } else if (resultCode == '3') {
      //   success = true;
      // } else if (resultCode == '4') {
      //   message =
      //     'Account locked for making too many unsuccessful login attempts';
      // } else if (resultCode == '5') {
      //   message = 'Password expired';
      // } else if (resultCode == '7') {
      //   message = 'CNIC expired';
      // }
      // return {
      //   code: resultCode,
      //   success: success,
      //   message: message,
      // };
      return {};
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

const getMappedAccountApi = async (username: string) => {
  return mobile_integration_instance({
    method: 'post',
    headers: {
      SOAPAction: 'http://tempuri.org/GetMappedAccount',
    },
    data:
      '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <GetMappedAccount xmlns="http://tempuri.org/">\
          <Username>' +
      username +
      '</Username>\
          <Key>' +
      MOBILE_INTEGRATION_API_KEY +
      '</Key>\
        </GetMappedAccount>\
      </soap:Body>\
    </soap:Envelope>',
  })
    .then(async (data: any) => {
      var newData =
        data?.['soap:Envelope']?.['soap:Body']?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetMappedAccountResponse'
        ]?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetMappedAccountResponse'
        ]?.[0]?.['GetMappedAccountResult']?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetMappedAccountResponse'
        ]?.[0]?.['GetMappedAccountResult']?.[0]?.['diffgr:diffgram']?.[
          'length'
        ] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetMappedAccountResponse'
        ]?.[0]?.['GetMappedAccountResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'DocumentElement'
        ]?.['length'] > 0 &&
        data?.['soap:Envelope']?.['soap:Body']?.[0]?.[
          'GetMappedAccountResponse'
        ]?.[0]?.['GetMappedAccountResult']?.[0]?.['diffgr:diffgram']?.[0]?.[
          'DocumentElement'
        ]?.[0]?.['MAPPED_ACCOUNT'];

      let accCode = '';
      newData.map(async (item: any) => {
        accCode = item?.ACC_CODE?.[0];
        storeAccCode(item?.ACC_CODE?.[0]);
      });

      return {
        success: true,
        accCode: accCode,
      };
    })
    .catch(err => {
      return {
        success: false,
        message: err?.message,
      };
    });
};

export {signUpApi, loginApi, getMappedAccountApi};
