import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import {styles} from './styles'

const JobSummary = ({serviceDetails}) => (
    <View style={styles.invoiceDetails}>
        <Text style={[{paddingBottom: '3%'}, styles.headingSizeText]}>Job Summary</Text>
        <Text style={[{paddingBottom: '3%'}, styles.bold]}>Handyman Job Notes:</Text>
        <Text style={{paddingBottom: '3%'}}>{serviceDetails.handymanNotes}</Text>
        <Text style={[{paddingBottom: '3%'}, styles.bold]}>Handyman Photos:</Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {serviceDetails.images.map(image => (
                <Image style={{width: '30%', marginBottom: '3%'}} src={image.source} /> 
            ))}
        </View>
    </View>
);

export default JobSummary