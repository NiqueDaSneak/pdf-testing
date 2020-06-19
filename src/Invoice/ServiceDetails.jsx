import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

const ServiceDetails = ({serviceDetails}) => (
  <View style={[styles.serviceDetails, styles.borderBottom]}>
    <View style={styles.columns}>
      <View style={{width: '50%'}}>
        <Text style={styles.bold}>Service Details</Text>
        <Text><Text style={styles.bold}>Request Date: </Text>{serviceDetails.requestDate}</Text>
        <Text><Text style={styles.bold}>Type: </Text>{serviceDetails.serviceType}</Text>
        <Text><Text style={styles.bold}>Location: </Text>{`${serviceDetails.location.street}, ${serviceDetails.location.city} ${serviceDetails.location.state}`}</Text>
      </View>
      <View style={{width: '50%'}}>
        <Text style={styles.bold}>Customer Job Notes:</Text>
        <Text>{serviceDetails.customerNotes}</Text>
      </View>
    </View>
  </View>
);

export default ServiceDetails