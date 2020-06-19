import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import {styles} from './styles'

const PeopleDetails = ({providerInfo, customerInfo, organizationInfo}) => (
  <View style={[styles.peopleDetails, styles.borderBottom]}>
    <View style={styles.columns}>
      <View style={[styles.provider, styles.third]}>
        <Text style={styles.bold}>Provider:</Text>
        <Text>{providerInfo.name}</Text>
        <Text>{providerInfo.role}</Text>
      </View>
      <View style={[styles.customer, styles.third]}>
        <Text style={styles.bold}>Customer:</Text>
        <Text>{customerInfo.addressee}</Text>
        <Text>{customerInfo.email}</Text>
        <Text>{customerInfo.phone}</Text>
      </View>
      <View style={[styles.org, styles.rightAlign, styles.third]}>
        <Text style={styles.bold}>Organization:</Text>
        <Text>{organizationInfo.name}</Text>
        <Text>{organizationInfo.phone}</Text>
      </View>
    </View>
  </View>
);

export default PeopleDetails