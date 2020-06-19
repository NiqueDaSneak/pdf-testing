import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import { styles } from './styles'

const BillingInfo = ({billingLineItems, invoiceDetails}) => (
  <View style={styles.billingInfo}>
    <View style={styles.billingHeaders}>
      <Text style={{width: '50%'}}>Description:</Text>
      <Text style={{width: '16%'}}>Quantity:</Text>
      <Text style={{width: '16%'}}>Rate:</Text>
      <Text style={{width: '16%'}}>Amount:</Text>
    </View>
    {billingLineItems.map(lineItem => (
      <View style={styles.lineItem}>
        <Text style={{width: '50%'}}>{lineItem.description}</Text>
    <Text style={{width: '16%'}}>{lineItem.quantity}</Text>
        <Text style={{width: '16%'}}>{lineItem.rate}</Text>
    <Text style={{width: '16%'}}>{lineItem.amount}</Text>
      </View>
    ))}
    <View style={styles.total}>
      <Text style={styles.headingSizeText}>Total: {invoiceDetails.total}</Text>
    <Text style={{paddingTop: '8%'}}>Due: {invoiceDetails.dates.due}</Text>
    </View>
    <View style={styles.paymentInfo}>
      <View style={{width: '40%', textAlign: 'center'}}>
        <Text style={styles.bold}>Pay with ACH</Text>
        <Text>Bank Name: Silicon Valley Bank; Routing: 121140399; Account: 3302470450</Text>
      </View>
      <View style={{width: '40%', textAlign: 'center'}}>
        <Text style={styles.bold}>Pay with Credit Card</Text>
        <Text ><Link src='https://pay.stripe.com/invoice/acct_17D4XYEOOklg8xOA/invst_HLxQYsBPyHLsbT5pOWUeYZRQz9y2DNn'>https://pay.stripe.com/invoice/acct_17D4XYEOOklg8xOA/invst_HLxQYsBPyHLsbT5pOWUeYZRQz9y2DNn</Link></Text>
      </View>
    </View>
  </View>
)

export default BillingInfo