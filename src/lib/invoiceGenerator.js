import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateInvoice = async (transaction, car, customer) => {
    const doc = new jsPDF();

    // 1. Add Logo
    // We attempt to load the image from the public folder
    const logoUrl = '/logo-day.png';
    try {
        const img = await loadImage(logoUrl);
        // Add image to PDF (x, y, width, height) - Adjust dimensions as needed
        doc.addImage(img, 'PNG', 15, 10, 40, 15);
    } catch (error) {
        console.error("Could not load logo for invoice", error);
        // Fallback text if logo fails
        doc.setFontSize(22);
        doc.setTextColor(220, 38, 38); // Driveway Red-ish
        doc.text("DriveWay", 15, 20);
    }

    // 2. Header Info
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Invoice ID: ${transaction.id.slice(0, 8).toUpperCase()}`, 150, 20, { align: 'right' });
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 25, { align: 'right' });

    // 3. Customer & Car Details
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text("Bill To:", 15, 40);
    doc.setFontSize(10);
    doc.setTextColor(50);
    doc.text(customer?.name || "Guest", 15, 46);
    doc.text(customer?.phone || "", 15, 51);
    if (customer?.email) doc.text(customer.email, 15, 56);

    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text("Vehicle Details:", 150, 40, { align: 'right' });
    doc.setFontSize(10);
    doc.setTextColor(50);
    doc.text(`${car?.make} ${car?.model} (${car?.year})`, 150, 46, { align: 'right' });
    doc.text(car?.plateNumber || "", 150, 51, { align: 'right' });

    // 4. Billing Table Data Preparation
    const tableRows = [];
    let slNo = 1;
    let totalCredited = 0;

    // A. Rental Cost (Debit)
    tableRows.push([
        slNo++,
        `Rental Charges (${transaction.startDate.split('T')[0]} to ${transaction.endDate.split('T')[0]})`,
        'Debit',
        `${transaction.total}`
    ]);

    // B. Payments (Credit)
    if (transaction.payments && transaction.payments.length > 0) {
        transaction.payments.forEach(payment => {
            tableRows.push([
                slNo++,
                `Payment Received (${payment.medium}) - ${payment.date ? payment.date.split('T')[0] : ''}`,
                'Credit',
                `${payment.amount}`
            ]);
            if (payment.type === 'Credit') {
                totalCredited += Number(payment.amount);
            } else {
                // If there's a refund/debit adjustment
                totalCredited -= Number(payment.amount);
            }
        });
    }

    const balanceDue = Number(transaction.total) - totalCredited;

    // 5. Generate Table
    doc.autoTable({
        startY: 65,
        head: [['Sl No', 'Description', 'Credit/Debit', 'Amount (INR)']],
        body: tableRows,
        theme: 'striped',
        headStyles: { fillColor: [220, 38, 38] }, // Driveway Red
        columnStyles: {
            0: { cellWidth: 20 },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 30 },
            3: { cellWidth: 30, halign: 'right' }
        },
        styles: { fontSize: 10, cellPadding: 3 },
    });

    // 6. Totals Section
    const finalY = doc.lastAutoTable.finalY + 10;

    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text(`Total Amount:`, 140, finalY, { align: 'right' });
    doc.text(`${transaction.total}`, 180, finalY, { align: 'right' });

    doc.text(`Total Paid:`, 140, finalY + 6, { align: 'right' });
    doc.setTextColor(22, 163, 74); // Green
    doc.text(`${totalCredited}`, 180, finalY + 6, { align: 'right' });

    doc.setTextColor(0);
    doc.text(`Balance Due:`, 140, finalY + 12, { align: 'right' });

    if (balanceDue > 0) {
        doc.setTextColor(220, 38, 38); // Red
    }
    doc.text(`${balanceDue}`, 180, finalY + 12, { align: 'right' });

    // 7. Footer
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text("Thank you for choosing DriveWay.", 105, 280, { align: 'center' });


    // Save the PDF
    doc.save(`Invoice_${transaction.id}.pdf`);
};

// Helper to load image for PDF
const loadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
    });
};
