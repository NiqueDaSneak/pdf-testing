import React from 'react';
import { PDFViewer, Document } from '@react-pdf/renderer';
import Invoice from './Invoice/Invoice.jsx'

const config = {
  serviceDetails: {
    requestDate: 'February 24th, 2020',
    serviceType: 'Handyman',
    handymanNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh orci, volutpat quis euismod eu, facilisis vitae nulla. Duis eu eleifend nisl. Morbi orci est, bibendum eget est quis, interdum consectetur neque. Phasellus sit amet odio eu augue interdum tempor. Vivamus vehicula, nulla in tincidunt venenatis, ipsum nibh convallis lorem, vitae viverra leo sem quis tellus. In tellus nulla, fringilla nec sapien sed, congue condimentum dolor.',
    customerNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris massa, pellentesque sit amet quam ut, posuere vulputate justo. Donec ac ligula elit. Cras porttitor nisi enim, a scelerisque ipsum faucibus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sit amet nisl dictum, egestas dui nec, elementum metus. Duis auctor diam vitae nisl ullamcorper euismod. Duis aliquam id lacus vel tempor.',
    location: {
      street: '477 Skippack Creek Rd',
      city: 'Collegeville',
      state: 'PA'
    },
    images: [
      {
        source: 'https://source.unsplash.com/1600x900/?home,handyman'
      },
      {
        source: 'https://source.unsplash.com/1600x900/?home,door'
      },
      {
        source: 'https://source.unsplash.com/1600x900/?home,fix'
      },
      {
        source: 'https://source.unsplash.com/1600x900/?home,outside'
      }
    ],
    billingLineItems: [
      {
        description: 'Labor (0 hours, 0 minutes and 0 seconds)',
        quantity: '1',
        rate: '$ 0.00',
        amount: '$ 1,375.00',
      },
      {
        description: 'Labor (0 hours, 0 minutes and 0 seconds)',
        quantity: '1',
        rate: '$ 0.00',
        amount: '$ 1,375.00',
      },
      {
        description: 'Labor (0 hours, 0 minutes and 0 seconds)',
        quantity: '1',
        rate: '$ 0.00',
        amount: '$ 1,375.00',
      },
    ],
  },
  providerInfo: {
    name: 'Robert Anderson',
    role: 'Handyman'
  },
  organizationInfo: {
    name: 'Rentwell',
    phone: '(484)550-7488'
  },
  customerInfo: {
    addressee: 'TJ Hock',
    address: '630 Parkway Dr',
    city: 'Broomall',
    state: 'PA',
    zip: '19008',
    email: 'jvelardi@rentwell.com',
    phone: '(848) 209-7910',
  },
  invoiceDetails: {
    id: 'MHHDG2HG',
    jobIdLink: 'google.com',
    invoiceNumber: '0C525C6-0127',
    total: '$1,375.00',
    dates: {
      // moment js?
      workCompleted: 'February 24th, 2020',
      invoiceCreated: 'May 27th, 2020',
      due: 'June 26th, 2020'
    },
    sender: {
      addressee: 'Homee Inc',
      address: '1413 S. Howard Ave Suite 220',
      city: 'Tampa',
      state: 'FL',
      zip: '33606',
      phone: '1-855-964-6633',
      email: 'info@homeeondemand.com'
    }
  }
}

const Output = () => (
  <Document
    author="NA"
    keywords="invoice"
    subject="This is an invoice for Homee services"
    title="Homee Invoice"
  >
    <Invoice 
    size="A4" 
    {...config}
    />
  </Document>
);

function App() {
  return (
    <PDFViewer>
      <Output />
    </PDFViewer>
  );
}

export default App;
