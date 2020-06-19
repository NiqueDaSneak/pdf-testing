import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import {styles} from './styles'

const InvoiceDetails = ({customerInfo, invoiceDetails}) => (
    <View style={[styles.invoiceDetails, styles.borderBottom]}>
    <Text style={styles.headingSizeText}>Invoice</Text>
    <View style={styles.columns}>
      <View style={[styles.jobDetails, styles.third]}>
        <Text><Text style={styles.bold}>Job Id: </Text><Link src={invoiceDetails.jobIdLink}>{invoiceDetails.id}</Link></Text>
        <Text><Text style={styles.bold}>Work Completed: </Text>{invoiceDetails.dates.workCompleted}</Text>
        <Text><Text style={styles.bold}>Invoice #: </Text>{invoiceDetails.invoiceNumber}</Text>
        <Text><Text style={styles.bold}>Invoice Date: </Text>{invoiceDetails.dates.invoiceCreated}</Text>
        <Text><Text style={styles.bold}>Due Date: </Text>{invoiceDetails.dates.due}</Text>
      </View>
      <View style={[styles.fromAddress, styles.rightAlign, styles.third]}>
        <Text style={styles.bold}>From:</Text>
        <Text>{invoiceDetails.sender.addressee}</Text>
        <Text>{invoiceDetails.sender.address}</Text>
        <Text>{`${invoiceDetails.sender.city} ${invoiceDetails.sender.state}, ${invoiceDetails.sender.zip}`}</Text>
        <Text>{invoiceDetails.sender.phone}</Text>
        <Text>{invoiceDetails.sender.email}</Text>
      </View>
      <View style={[styles.toAddress, styles.rightAlign, styles.third]}>
        <Text style={styles.bold}>To:</Text>
        <Text>{customerInfo.addressee}</Text>
        <Text>{customerInfo.address}</Text>
        <Text>{`${customerInfo.city} ${customerInfo.state}, ${customerInfo.zip}`}</Text>
      </View>
    </View>
  </View>
);

export default InvoiceDetails