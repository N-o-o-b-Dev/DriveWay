import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { format } from 'date-fns';

// Register fonts if needed, or stick to standard Helvetica as requested
// Font.register({ family: 'Helvetica', src: '...' });

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 10,
        padding: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    // Header Section
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#D32F2F', // Red
        paddingBottom: 10,
    },
    brandContainer: {
        flexDirection: 'column',
    },
    brandName: {
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        color: '#D32F2F', // Red
        textTransform: 'uppercase',
    },
    brandSubtitle: {
        fontSize: 8,
        letterSpacing: 2,
        color: '#000000',
        marginTop: 2,
        textTransform: 'uppercase',
    },
    invoiceInfoContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    invoiceLabel: {
        fontSize: 16,
        fontFamily: 'Helvetica-Bold',
        color: '#000000',
        marginBottom: 4,
    },
    invoiceDetail: {
        fontSize: 10,
        color: '#333333',
    },

    // Company Info
    companyInfo: {
        marginBottom: 20,
        color: '#555555',
    },

    // Customer & Vehicle Section
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        gap: 20,
    },
    box: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F9FAFB', // Light gray 
        borderLeftWidth: 4,
        borderLeftColor: '#D32F2F',
        borderRadius: 2,
    },
    boxTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
        marginBottom: 5,
        textTransform: 'uppercase',
        color: '#333333',
    },
    boxText: {
        fontSize: 10,
        marginBottom: 3,
        color: '#000000',
    },

    // Table
    table: {
        flexDirection: 'column',
        marginBottom: 20,
        borderColor: '#E5E7EB',
        borderWidth: 1,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#D32F2F',
        color: '#FFFFFF',
        padding: 8,
        fontFamily: 'Helvetica-Bold',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomColor: '#E5E7EB',
        borderBottomWidth: 1,
        padding: 8,
    },
    colDesc: { flex: 3 },
    colQty: { flex: 1, textAlign: 'center' },
    colAmount: { flex: 1, textAlign: 'right' },

    // Totals
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 40,
    },
    totalBox: {
        width: '40%',
        padding: 10,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    grandTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#000000',
        fontFamily: 'Helvetica-Bold',
    },

    // Footer / Signatures
    footer: {
        marginTop: 'auto', // Push to bottom
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    signatureLine: {
        width: '40%',
        borderTopWidth: 1,
        borderTopColor: '#000000',
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 8,
        color: '#555555',
    },
    thankYou: {
        textAlign: 'center',
        fontSize: 10,
        color: '#D32F2F',
        fontFamily: 'Helvetica-Bold',
        marginTop: 30,
    },
});

const InvoiceDocument = ({ data }) => {
    const {
        invoiceId,
        date,
        customerName,
        phone,
        address,
        vehicles = [],
        extraCharges = [],
        companyInfo = {},
    } = data;

    // Calculate Grand Total
    const vehicleTotal = vehicles.reduce(
        (acc, v) => acc + (v.rentDays * v.ratePerDay),
        0
    );
    const extrasTotal = extraCharges.reduce((acc, e) => acc + e.amount, 0);
    const grandTotal = vehicleTotal + extrasTotal;

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.brandContainer}>
                        <Text style={styles.brandName}>DRIVEWAY</Text>
                        <Text style={styles.brandSubtitle}>Motors & Consultancy</Text>
                    </View>
                    <View style={styles.invoiceInfoContainer}>
                        <Text style={styles.invoiceLabel}>INVOICE</Text>
                        <Text style={styles.invoiceDetail}>#{invoiceId}</Text>
                        <Text style={styles.invoiceDetail}>{format(new Date(date), 'dd MMM yyyy')}</Text>
                    </View>
                </View>

                {/* Company Info */}
                <View style={styles.companyInfo}>
                    <Text>{companyInfo.name || 'DriveWay Motors'}</Text>
                    <Text>{companyInfo.address || 'Address Line 1, City, State'}</Text>
                    <Text>Phone: {companyInfo.phone || '+91 0000000000'}</Text>
                </View>

                {/* Customer & Vehicle Info */}
                <View style={styles.sectionContainer}>
                    {/* Bill To */}
                    <View style={styles.box}>
                        <Text style={styles.boxTitle}>Bill To</Text>
                        <Text style={styles.boxText}>{customerName}</Text>
                        {phone && <Text style={styles.boxText}>Phone: {phone}</Text>}
                        {address && <Text style={styles.boxText}>{address}</Text>}
                    </View>
                </View>

                {/* Table */}
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableHeader}>
                        <Text style={styles.colDesc}>Description</Text>
                        <Text style={styles.colQty}>Days/Qty</Text>
                        <Text style={styles.colAmount}>Amount</Text>
                    </View>

                    {/* Vehicle Rows */}
                    {vehicles.map((v, index) => (
                        <View key={`veh-${index}`} style={styles.tableRow}>
                            <View style={styles.colDesc}>
                                <Text style={{ fontFamily: 'Helvetica-Bold' }}>Rental: {v.vehicleModel}</Text>
                                <Text style={{ fontSize: 8, color: '#555' }}>Reg: {v.vehicleNo}</Text>
                                <Text style={{ fontSize: 8, color: '#555' }}>
                                    {format(new Date(v.startDate), 'dd MMM')} - {format(new Date(v.endDate), 'dd MMM yyyy')}
                                </Text>
                            </View>
                            <View style={styles.colQty}>
                                <Text>{v.rentDays}</Text>
                                <Text style={{ fontSize: 8, color: '#555' }}>@ {v.ratePerDay}/day</Text>
                            </View>
                            <View style={styles.colAmount}>
                                <Text>{(v.rentDays * v.ratePerDay).toLocaleString()}</Text>
                            </View>
                        </View>
                    ))}

                    {/* Extra Charges Rows */}
                    {extraCharges.map((c, index) => (
                        <View key={`ext-${index}`} style={styles.tableRow}>
                            <Text style={styles.colDesc}>{c.description}</Text>
                            <Text style={styles.colQty}>-</Text>
                            <Text style={styles.colAmount}>{c.amount.toLocaleString()}</Text>
                        </View>
                    ))}
                </View>

                {/* Grand Total */}
                <View style={styles.totalContainer}>
                    <View style={styles.totalBox}>
                        <View style={styles.grandTotal}>
                            <Text>Grand Total</Text>
                            <Text>INR {grandTotal.toLocaleString()}</Text>
                        </View>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.thankYou}>
                    <Text>Thank you for your business!</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.signatureLine}>Authorized Signatory</Text>
                    <Text style={styles.signatureLine}>Customer Signature</Text>
                </View>

            </Page>
        </Document>
    );
};

export default InvoiceDocument;
