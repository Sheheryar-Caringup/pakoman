export const languageTxt: any = {
  //Stacks and Screen
  reactAsyncStorageKeys: {
    appInfo: 'appInfo',
    userInfo: 'userInfo',
  },
  reactStackKeys: {
    splash: 'Splash',
    auth: {
      name: 'Auth Screen',
      login: 'Login',
      register: {
        name: 'Register',
        investorTypes: 'Investor Types',
        corporateInvestor: 'Corporate Investor',
        individualInvestor: 'Individual Investor',
        pensionInvestor: 'Pension Investor',
        sahulatSarmayakari: 'Sahulat Sarmayakari',
      },
    },
    guest: {
      name: 'Guest',
      aboutus: {
        name: 'About us',
        menus: 'About us Menus',
        whoWeAre: 'Who We Are',
        codeofConduct: 'Code Of Conduct',
        whistleBlower: 'Whistle Blower',
      },
      whatWeDo: {
        name: 'What We Do',
        menus: 'What We Do Menus',
        conventionalSolutions: {
          name: 'Conventional Solutions',
          acf: 'ACF (Money Market)',
          poif: 'POIF (POGSF)',
          asye: 'ASYE (Income)',
          poaaaf: 'POAAAF (Asset Allocation)',
          ahys: 'AHYS (Aggressive Income)',
        },
        shariahCompliantSolutions: {
          name: 'Shariah-Compliant Solutions',
          poaiif: 'POAIIF (Islamic Income)',
          poiaaf: 'POIAAF (Islamic Allocation)',
          poddf: 'PODDF (Islamic Money Market)',
        },
        portfolioManagement: 'Portfolio Management',
      },
      weServeYou: {
        name: 'We Serve You',
        menus: 'We Serve You Menus',
      },
      downloads: {
        name: 'Downloads',
        menus: 'Downloads Menus',
        fundManagersReport: 'Fund Managers Report',
        navHistory: 'Nav History',
        applicationForms: 'Application Forms',
        constitutiveDocuments: 'Constitutive Documents',
        financialStatements: 'Financial Statements',
        howToInvest: 'How To Invest',
        proxyVotingPolicy: 'Proxy Voting Policy',
        provisioningPolicyFinal: 'Provisioning Policy Final',
        fatwah: 'Fatwah',
        complianceCertificate: 'Compliance Certificate',
      },
    },
    user: {
      name: 'User',
      home: {
        name: 'Root Home',
        screen: 'Home',
      },
      alerts: 'Alerts',
      eTransactions: {
        name: 'E-Transactions',
        menus: 'E-Transactions Menus',
        eRedemption: {
          form: 'Form',
          name: 'E-Redemption',
          declaration: 'Declaration',
        },
        eConversion: {
          form: 'Form',
          name: 'E-Conversion',
          declaration: 'Declaration',
        },
        summary: {
          name: 'Summary',
          transactionSummary: 'Pending Transaction(s) Summary',
        },
      },
      addAccount: 'Add Account',
      accountStatement: {
        name: 'Account Statement',
        screen: 'Account Statement Screen',
        pdf: 'Account Statement PDF',
      },
      statement: 'Statement',
    },
    profile: 'Personal Information',
  },
  reactQueryKeys: {
    dashboard: {
      mappedAccount: 'mappedAccount',
      chartInfo: 'chartInfo',
      userInfo: 'userInfo',
    },
    generateAccountStatment: 'generateAccountStatment',
  },
  noDataAvailable: 'No data available',
  // ErrorMessages
  txtUserNameError: 'Username is required',
  txtPasswordError: 'Password is required',
  txtAccRegCodeError: 'Account No./ Registration No is required',
  txtCompanyNameError: 'Company Name is required',
  txtNTNError: 'National Tax Number (NTN) is required',
  txtCompIncorporationNumberError: 'Company Registration Number is required',
  txtAuthPersonNameError: 'Authorized Person Name is required',
  txtAuthPersonCNICError: 'Authorized Person CNIC is required',
  txtEmailError: 'Email ID (only company domain email id required) is required',
  txtRegContactError: 'Registered Contact is required',
  txtRegAddressError: 'Registered Address is required',
  txtNameError: 'Applicant Name is required',
  txtRegEmailError: 'Registered E-mail address is required',
  txtRegMobileNumError: 'Mobile Number is required',
  txtRegNoError: 'Folio Number is required',
  txtCNICError: 'CNIC(XXXXXXXXXXXXX) is required',
  txtDOBError: 'Date of Birth(DD/MM/YYYY) is required',
  txtCNICIssueDateError: 'CNIC Issue date(DD/MM/YYYY) is required',
  txtCNICExpiryDateError: 'CNIC Expiry date(DD/MM/YYYY) is required',
  txtSpouseError: 'Father/Spouse Name is required',
  txtAddressError: 'Address is required',
  txtNationalityError: 'Nationality is required',
  txtBankAccountNumError: 'Bank Acc. Number is required',
  txtIBAN_NumberError: 'IBAN Number is required',
  txtKnowError: 'Know is required',
  ddlGenderError: 'Gender is required',
  ddlCityError: 'City is required',
  ddlCountryError: 'Country is required',
  ddlOccupationError: 'Occupation is required',
  ddlSourceOfIncomeError: 'Income Source is required',
  ddlBankError: 'Bank is required',
  ddlAdvisorError: 'Advisor is required',
  txtNamePerCNICError: 'Name (as per CNIC)  is required',
  txtStartDateError: 'Start Date  is required',
  txtEndDateError: 'End Date  is required',

  unexpectedError: 'Something went wrong!',
  emailPatternError: 'Invalid email address',
  invalidUsernameOrPassword: 'Invalid credentials!',
  tryAgainLater: 'Could not post at this time. Try again later.',

  // InputPlaceholder
  txtUserName: 'Username',
  txtPassword: 'Password',
  txtAccRegCode: 'Account No./ Registration No',
  txtCompanyName: 'Company Name',
  txtNTN: 'National Tax Number (NTN)',
  txtCompIncorporationNumber: 'Company Registration Number',
  txtAuthPersonName: 'Authorized Person Name',
  txtAuthPersonCNIC: 'Authorized Person CNIC',
  txtEmail: 'Email ID (only company domain email id required)',
  txtRegContact: 'Registered Contact',
  txtRegAddress: 'Registered Address',
  txtName: 'Applicant Name',
  txtRegEmail: 'Registered E-mail address',
  txtRegMobileNum: 'Mobile Number',
  txtRegNo: 'Folio Number',
  txtCNIC: 'CNIC(XXXXXXXXXXXXX)',
  txtDOB: 'Date of Birth(DD/MM/YYYY)',
  txtCNICIssueDate: 'CNIC Issue date(DD/MM/YYYY)',
  txtCNICExpiryDate: 'CNIC Expiry date(DD/MM/YYYY)',
  txtSpouse: 'Father/Spouse Name',
  txtAddress: 'Address',
  txtNationality: 'Nationality',
  txtBankAccountNum: 'Bank Acc. Number',
  txtIBAN_Number: 'IBAN Number',
  txtKnow: 'How Did You Know About Pak Oman?',
  txtNamePerCNIC: 'Name (as per CNIC)',
  txtStartDate: 'Start Date',
  txtEndDate: 'End Date',

  // Select
  ddlGender: 'Select Gender',
  ddlCity: 'Select City',
  ddlCountry: 'Select Country',
  ddlOccupation: 'Select Occupation',
  ddlSourceOfIncome: 'Select Income Source',
  ddlBank: 'Select Bank',
  ddlAdvisor: 'Select Advisor',
  FileUpload1: '',

  next: 'Next',
  login: 'Login',
  registerNow: 'Register Now',
  openAccount: 'Open an Account',
  forgotUsername: 'Forgot Username?',
  submitRequest: 'Submit Request',
  clear: 'Clear',
  register: 'Register',

  selectYourInvestmentType: 'Select Your Investment Type',
  servicesRequestFormForCorporateInvestors:
    'Services Request Form For Corporate Investors',
  sahulatSarmayakariAccountCap: 'SAHULAT SARMAYAKARI ACCOUNT',

  welcomeMsg: 'Welcome to Pak Oman Digital Sigin in your account',
  onlineServicesRequest: 'Online Services Request',
  investorWelcome:
    'Welcome to Online Service Registration for PakOman Investments.',
  investorWelcome2:
    'Please kindly fill out the fields as below and submit. A customer service representative will be in touch shortly. Please note mandatory fields are marked with an *',
  investorWelcome3:
    'If you need assistance please email us on xxx@XXXXX.com or call 021-xxx-Xxx-xxx',
  sahulatSarmayakariAccountInfo:
    'Please enter your infomation and proceed to the next step so we can build your accounts.',
  sahulatSarmayakariAccountOpen:
    'Not yet PakomanInvestor? \nOpen a New Sahulat Sarmayakari Account',
  copyrights: '?? All Copyrights Reserved - Powered By Sidat Hyder',

  registerAsA: 'Register as a',
  corporateInvestorTitle: 'Corporate Investor',
  corporateInvestorDetail:
    'Manage the investment of your Corporate Funds. From cash management to long term investments, we have options that are best suited to your institutional needs.',
  individualInvestorTitle: 'Individual Investor',
  individualInvestorDetail:
    'Manage your own Savings and Investments. The broad array of investment options offered by AGIML cover multiple risk/return profiles to enable you to make an investment appropriate for your needs.',
  pensionInvestorTitle: 'Pension Investor',
  pensionInvestorDetail:
    'Manage your employee retirement funds and endowment plans with confidence through our professional advisory services and wide product range.',

  // ETransactions
  eTransactionsDeclaration1: 'I/We, the undersigned, hereby declare that:',
  eTransactionsDeclaration2:
    'I acknowledge having read and understood the e-transact Terms and Conditions and agree to be bound by whatever written in the e-transact Terms and Conditions.',
  eTransactionsDeclaration3:
    'I understand that redemption / conversion of units will be made in accordance with the terms and conditions as mentioned in the Constitutive Documents of selected funds;',
  eTransactionsDeclaration4:
    'I understand that the redemption / conversion price of units will differ due to Front-end Load/Back-end Load where applicable;',
  eTransactionsDeclaration5:
    'I understand that in case of mutual funds operating under forward pricing mechanism, the price of units applicable for redemption / conversion will not be known at the time of redemption / conversion;',
  eTransactionsDeclaration6:
    'I understand that redemption / conversion of units transaction may be subject to capital gain tax in accordance with the requirements of Income Tax Ordinance, 2001 applicable in Pakistan and the directives issued by Federal Board of Revenue (FBR) from time to time;',
  eTransactionsDeclaration7:
    'I understand that once the redemption / conversion request has been received through e-transact by Alfalah GHP Investment Management Limited, it cannot be cancelled/altered.',

  generateReport: 'Generate Report',
};
