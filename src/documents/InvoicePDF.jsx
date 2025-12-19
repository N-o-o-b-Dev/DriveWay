import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Register fonts if needed (using standard fonts for now for reliability)
// Font.register({ family: 'Inter', src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.ttf' });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
        color: '#1a1a1a',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#DC2626', // Red-600
        paddingBottom: 20,
    },
    brandColumn: {
        flexDirection: 'column',
    },
    brandTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        letterSpacing: 1,
    },
    brandSubtitle: {
        fontSize: 10,
        color: '#DC2626', // Red accent
        marginTop: 4,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    invoiceInfoColumn: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    invoiceTitle: {
        fontSize: 32,
        fontWeight: 'extrabold',
        color: '#e5e5e5', // Subtle gray backing
        position: 'absolute',
        top: -15,
        right: 0,
        zIndex: -1,
    },
    invoiceId: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#DC2626',
    },
    dateText: {
        fontSize: 10,
        color: '#555555',
        marginTop: 4,
    },
    section: {
        flexDirection: 'row',
        marginBottom: 30,
        justifyContent: 'space-between',
    },
    box: {
        width: '45%',
    },
    boxTitle: {
        fontSize: 10,
        color: '#999999',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
        marginBottom: 8,
        paddingBottom: 2,
        textTransform: 'uppercase',
    },
    text: {
        fontSize: 10,
        marginBottom: 3,
        lineHeight: 1.4,
    },
    bold: {
        fontWeight: 'bold',
        color: '#000000',
    },
    table: {
        display: 'table',
        width: 'auto',
        marginBottom: 30,
    },
    tableRow: {
        margin: 'auto',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
        minHeight: 30,
        alignItems: 'center',
    },
    tableHeader: {
        backgroundColor: '#18181b', // Zinc-900
        color: '#ffffff',
        height: 35,
    },
    tableCol: {
        width: '15%',
    },
    tableColDesc: {
        width: '40%',
    },
    tableCellHeader: {
        margin: 'auto',
        fontSize: 9,
        fontWeight: 'bold',
    },
    tableCell: {
        margin: 'auto',
        fontSize: 9,
        paddingTop: 5,
        paddingBottom: 5,
    },
    totalsSection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        marginBottom: 5,
        paddingVertical: 5,
    },
    totalLabel: {
        fontSize: 10,
        color: '#666',
        textAlign: 'left',
    },
    totalValue: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#1a1a1a',
    },
    grandTotal: {
        borderTopWidth: 2,
        borderTopColor: '#DC2626',
        paddingTop: 10,
        marginTop: 5,
    },
    grandTotalValue: {
        color: '#DC2626',
        fontSize: 16,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 8,
        color: '#9ca3af',
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
        paddingTop: 10,
    },
    thankYou: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#DC2626',
        letterSpacing: 2,
        textTransform: 'uppercase',
    }
});

const Currency = ({ value }) => (
    <Text>Rs. {Number(value).toLocaleString()}</Text>
);

export const InvoicePDF = ({ invoice }) => {
    const {
        invoiceNo,
        date,
        customerDetails,
        vehicles = [],
        additionalCharges = [],
        settings = {},
        subtotal,
        tax,
        discount,
        grandTotal,
        notes
    } = invoice;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.brandColumn}>
                        <Text style={styles.brandTitle}>{settings.shopName || 'DRIVEWAY'}</Text>
                        <Text style={styles.brandSubtitle}>Premium Rental Services</Text>
                    </View>
                    <View style={styles.invoiceInfoColumn}>
                        <Text style={styles.invoiceTitle}>INVOICE</Text>
                        <Text style={styles.invoiceId}>#{invoiceNo}</Text>
                        <Text style={styles.dateText}>{date ? new Date(date).toLocaleDateString() : new Date().toLocaleDateString()}</Text>
                    </View>
                </View>

                {/* Info Section */}
                <View style={styles.section}>
                    <View style={styles.box}>
                        <Text style={styles.boxTitle}>Bill To</Text>
                        <Text style={[styles.text, styles.bold]}>{customerDetails.name}</Text>
                        <Text style={styles.text}>{customerDetails.phone}</Text>
                        <Text style={styles.text}>{customerDetails.email}</Text>
                        <Text style={styles.text}>{customerDetails.address}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.boxTitle}>Pay To</Text>
                        <Text style={[styles.text, styles.bold]}>{settings.shopName || 'Driveway Motors'}</Text>
                        <Text style={styles.text}>{settings.phone || '+91 95677777112 / +918075448758'}</Text>
                        <Text style={styles.text}>{settings.email || 'billing@driveway.com'}</Text>
                        <Text style={styles.text}>{settings.address || 'Vettichira, Malappuram, Kerala'}</Text>
                    </View>
                </View>

                {/* Table */}
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={styles.tableColDesc}><Text style={styles.tableCellHeader}>Vehicle / Item</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCellHeader}>Rate/Day</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCellHeader}>Days</Text></View>
                        <View style={styles.tableCol}><Text style={styles.tableCellHeader}>Amount</Text></View>
                    </View>

                    {vehicles.map((item, index) => (
                        <View style={styles.tableRow} key={index}>
                            <View style={styles.tableColDesc}>
                                <Text style={[styles.tableCell, styles.bold]}>{item.model}</Text>
                                <Text style={{ fontSize: 8, color: '#666' }}>{item.regNo}</Text>
                                <Text style={{ fontSize: 8, color: '#666' }}>
                                    {item.startDate ? new Date(item.startDate).toLocaleDateString() : ''} - {item.endDate ? new Date(item.endDate).toLocaleDateString() : ''}
                                </Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}><Currency value={item.rate} /></Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{item.days}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}><Currency value={item.amount} /></Text>
                            </View>
                        </View>
                    ))}

                    {/* Additional Charges */}
                    {additionalCharges.map((item, index) => (
                        <View style={styles.tableRow} key={`extra-${index}`}>
                            <View style={styles.tableColDesc}>
                                <Text style={[styles.tableCell, styles.bold]}>{item.description || 'Charge'}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>-</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>-</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}><Currency value={item.amount} /></Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Totals */}
                <View style={styles.totalsSection}>
                    <View>
                        <View style={styles.totalRow}>
                            <Text style={styles.totalLabel}>Subtotal</Text>
                            <Text style={styles.totalValue}><Currency value={subtotal} /></Text>
                        </View>
                        {Number(tax) > 0 && (
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Tax / VAT</Text>
                                <Text style={styles.totalValue}><Currency value={tax} /></Text>
                            </View>
                        )}
                        {Number(discount) > 0 && (
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Discount</Text>
                                <Text style={styles.totalValue}>-<Currency value={discount} /></Text>
                            </View>
                        )}
                        <View style={[styles.totalRow, styles.grandTotal]}>
                            <Text style={[styles.totalLabel, { color: '#000', fontWeight: 'bold' }]}>Grand Total</Text>
                            <Text style={[styles.totalValue, styles.grandTotalValue]}><Currency value={grandTotal} /></Text>
                        </View>
                    </View>
                </View>

                {notes ? (
                    <View style={{ marginTop: 20, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 10 }}>
                        <Text style={{ fontSize: 9, fontWeight: 'bold', marginBottom: 4 }}>Notes:</Text>
                        <Text style={{ fontSize: 9, color: '#666' }}>{notes}</Text>
                    </View>
                ) : null}

                <Text style={styles.thankYou}>Thank You For Your Business</Text>

                <Text style={styles.footer}>
                    {settings.website || 'www.driveway.app'} | Generated by DriveWay
                </Text>
            </Page>
        </Document>
    );
};
