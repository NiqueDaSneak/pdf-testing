import React from 'react';
import ReactPDF, { Page, Text, View, Font } from '@react-pdf/renderer';
import InvoiceDetails from './InvoiceDetails';
import PeopleDetails from './PeopleDetails';
import ServiceDetails from './ServiceDetails';
import BillingInfo from './BillingInfo';
import { styles } from './styles';
import Regular from './fonts/Montserrat-Regular.ttf';
import Bold from './fonts/Montserrat-Bold.ttf';
import ExtraBold from './fonts/Montserrat-ExtraBold.ttf';
import Black from './fonts/Montserrat-Black.ttf';
import JobSummary from './JobSummary';
import Footer from './Footer';

Font.register({ family: 'Montserrat', fonts: [
  {src: Regular, fontWeight: 400},
  {src: Bold, fontWeight: 700},
  {src: ExtraBold, fontWeight: 800},
  {src: Black, fontWeight: 900}
]});

const Invoice = ({providerInfo, organizationInfo, customerInfo, invoiceDetails, serviceDetails}) => (
  <React.Fragment>
    <Page style={styles.page}>
      <View style={[styles.headingContainer, styles.borderBottom]}>
        <Text style={styles.headingTitle}>HOMEE ON DEMAND</Text>
      </View>
      <InvoiceDetails invoiceDetails={invoiceDetails} customerInfo={customerInfo} />
      <PeopleDetails providerInfo={providerInfo} customerInfo={customerInfo} organizationInfo={organizationInfo} /> 
      <ServiceDetails serviceDetails={serviceDetails} />
      <BillingInfo invoiceDetails={invoiceDetails} billingLineItems={serviceDetails.billingLineItems}/>
      <Footer pageNumber={1} />
    </Page>
    <Page style={styles.page}>
      <View style={[styles.headingContainer, styles.borderBottom]}>
        <Text style={styles.headingTitle}>{`HOMEE ON DEMAND  - Invoice # ${invoiceDetails.invoiceNumber}`}</Text>
      </View>
      <JobSummary serviceDetails={serviceDetails} />
      <Footer pageNumber={2} />
    </Page>
  </React.Fragment>
);

// ReactPDF.render(Invoice, `${__dirname}/output.pdf`);
export default Invoice