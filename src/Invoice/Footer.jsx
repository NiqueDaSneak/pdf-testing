import React from 'react';
import ReactPDF, { Page, Text, View, Font } from '@react-pdf/renderer';
import { styles } from './styles';

const Logo = () => (
    <View style={{width: '30px', height: '30px', backgroundColor: 'green'}}></View>
);

const Footer = ({pageNumber}) => (
    <View style={{position: 'fixed', left: '0', bottom: '0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View />
        <Logo />
        <Text style={[{fontSize: '8pt'}, styles.bold]}>{`Pg ${pageNumber} of 2`}</Text>
    </View>
);

export default Footer