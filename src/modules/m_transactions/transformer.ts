function transformDataInfo(data: any) {
  return {
    'Account Title': data['ACC_TITLE']?.[0],
    'Account Status': data['ACC_STATUS']?.[0],
    'Email Address': data['ACC_EMAILADDRESS']?.[0],
    'Account Opening Date': data['ACC_OPENINGDATE']?.[0],
    'Cell Number': data['ACC_SMSCELLNUMBER']?.[0],
    'Account Type': data['ACC_ACCOUNTTYPE']?.[0],
    'CNIC Expiry': data['ACC_CNICEXPIRYDATE']?.[0],
    'Account Risk Level': data['ACC_RISKLEVEL']?.[0],
    'Account Zakat Status': data['ACC_ZAKATSTATUS']?.[0],
    'Bank Name': data['BankName']?.[0],
    'Account No': data['AccountNo']?.[0],
  };
}

function transformChartInfo(data: any) {
  const colorCode = [
    'rgba(213, 155, 40, 1)',
    'rgba(213, 155, 40, 0.8)',
    'rgba(213, 155, 40, 0.6)',
    'rgba(213, 155, 40, 0.3)',
    'rgba(194, 146, 60, 1)',
    'rgba(194, 146, 60, 0.8)',
    'rgba(194, 146, 60, 0.5)',
    'rgba(163, 118, 29, 1)',
    'rgba(163, 118, 29, 0.8)',
    'rgba(163, 118, 29, 0.5)',
  ];
  return (
    data &&
    data.map((info: any, key: number) => {
      const json = {
        name: info?.PRD_NAME?.[0],
        population: parseInt(info?.NetAmount?.[0]),
        percentages: parseFloat(info?.HoldingPercentage?.[0]),
        unit: info?.Units?.[0],
        nav: info?.NAV?.[0],
        color: colorCode[key],
        legendFontColor: '#7F7F7F',
        legendFontSize: 10,
      };
      return json;
    })
  );
}

export {transformDataInfo, transformChartInfo};
