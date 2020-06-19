const colors = {
  blue: '#2A3F50'
}


const fontName = 'Montserrat'
const fonts = {
  regular: {
    fontFamily: fontName,
    fontWeight: 400
  },
  bold: {
    fontFamily: fontName,
    fontWeight: 700
  },
  extraBold: {
    fontFamily: fontName,
    fontWeight: 800
  },
  black: {
    fontFamily: fontName,
    fontWeight: 900
  }
}

export const styles = {
  billingHeaders: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...fonts.bold
  },
  billingInfo: {
    fontSize: '10pt',
    paddingTop: '3%',
  },      
  bold: {
    ...fonts.bold
  },
  borderBottom: {
    borderBottomWidth: .5,
    borderBottomColor: 'grey',
    borderBottomStyle: 'solid',
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingContainer: {
    width: '100%',
  },
  headingSizeText: {
    fontSize: '30pt',
    ...fonts.bold
  },
  headingTitle: {
    fontSize: '10pt',
    paddingBottom: '1%',
    ...fonts.bold,
  },
  invoiceDetails: {
    fontSize: '10pt',
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  lineItem: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  page: {
    paddingTop: '5%',
    paddingRight: '5%',
    paddingLeft: '5%',
    display: 'flex',
    flexDirection: 'column',
    color: colors.blue,
    ...fonts.regular
  },
  paymentInfo: {
    fontSize: '8pt',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  peopleDetails: {
    fontSize: '10pt',
    paddingTop: '3%',
    paddingBottom: '3%'
  },
  rightAlign: {
    textAlign: 'right',
    width: '33%',
  },
  serviceDetails: {
    fontSize: '10pt',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
  third: {
    width: '33%',
  },
  total: {
    textAlign: 'center',
    marginLeft: '50%',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
  quarter: {
    width: '25%'
  }
};
