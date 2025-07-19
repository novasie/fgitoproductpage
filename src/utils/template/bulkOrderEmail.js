
export const bulkEmailTemplateAdmin = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Bulk Order Received - Admin Notification</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
            .header {
                background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                font-size: 28px;
                margin-bottom: 10px;
                font-weight: 300;
            }
            .header p {
                font-size: 16px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .alert-badge {
                background-color: #ff6b6b;
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                display: inline-block;
                margin-bottom: 20px;
            }
            .order-details {
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
                border-left: 4px solid #e74c3c;
            }
            .detail-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid #e9ecef;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .detail-label {
                font-weight: 600;
                color: #495057;
                flex: 1;
            }
            .detail-value {
                flex: 2;
                text-align: right;
                color: #2c3e50;
            }
            .urgent-action {
                background-color: #fff3cd;
                border: 1px solid #ffeaa7;
                border-radius: 4px;
                padding: 20px;
                margin: 20px 0;
                text-align: center;
            }
            .action-buttons {
                text-align: center;
                margin: 30px 0;
            }
            .btn {
                display: inline-block;
                padding: 12px 24px;
                margin: 0 10px;
                border-radius: 6px;
                text-decoration: none;
                font-weight: 600;
                color: white;
            }
            .btn-primary {
                background-color: #e74c3c;
            }
            .btn-secondary {
                background-color: #3498db;
            }
            .footer {
                background-color: #2c3e50;
                color: white;
                padding: 30px;
                text-align: center;
            }
            @media (max-width: 600px) {
                .container {
                    margin: 0;
                    box-shadow: none;
                }
                .content {
                    padding: 20px 15px;
                }
                .detail-row {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .detail-value {
                    text-align: left;
                    margin-top: 5px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚨 New Order Alert!</h1>
                <p>Admin Notification - Immediate Action Required</p>
            </div>
            
            <div class="content">
                <div class="alert-badge">
                    🔔 New Order Received
                </div>
                
                <p><strong>Admin Dashboard Alert:</strong> A new catering order has been submitted and requires your immediate attention for processing and confirmation.</p>
                
                <div class="order-details">
                    <h3 style="margin-bottom: 20px; color: #e74c3c;">📋 Order Details for Processing</h3>
                    
                    <div class="detail-row">
                        <span class="detail-label">👤 Customer Name:</span>
                        <span class="detail-value">${data.name}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📧 Customer Email:</span>
                        <span class="detail-value">${data.email}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">☎️ Mobile:</span>
                        <span class="detail-value">${data.mobile}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📅 Event Date:</span>
                        <span class="detail-value">${data.dateOfEvent}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">🎊 Occasion:</span>
                        <span class="detail-value">${data.occasion}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📍 Delivery Address:</span>
                        <span class="detail-value">${data.fullAddress}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">👥 Guest Count:</span>
                        <span class="detail-value">${data.noOfPeople} people</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">🕐 Delivery Time:</span>
                        <span class="detail-value">${data.preferedDeliveryTime}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">🍽️ Items Requested:</span>
                        <span class="detail-value">${data.requiredItems}</span>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>FGITO Admin Panel</strong></p>
                <p>Order Management System</p>
            </div>
        </div>
    </body>
    </html>
  `;
};


export const bulkEmailTemplateUser = (data) => {
  return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bulk Order Confirmation</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                font-size: 28px;
                margin-bottom: 10px;
                font-weight: 300;
            }
            .header p {
                font-size: 16px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .greeting {
                font-size: 18px;
                margin-bottom: 20px;
                color: #2c3e50;
            }
            .order-details {
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
                border-left: 4px solid #667eea;
            }
            .detail-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid #e9ecef;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .detail-label {
                font-weight: 600;
                color: #495057;
                flex: 1;
            }
            .detail-value {
                flex: 2;
                text-align: right;
                color: #2c3e50;
            }
            .highlight {
                background-color: #fff3cd;
                border: 1px solid #ffeaa7;
                border-radius: 4px;
                padding: 15px;
                margin: 20px 0;
                text-align: center;
            }
            .footer {
                background-color: #2c3e50;
                color: white;
                padding: 30px;
                text-align: center;
            }
            .footer p {
                margin-bottom: 10px;
            }
            .contact-info {
                margin-top: 20px;
                font-size: 14px;
                opacity: 0.8;
            }
            @media (max-width: 600px) {
                .container {
                    margin: 0;
                    box-shadow: none;
                }
                .content {
                    padding: 20px 15px;
                }
                .detail-row {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .detail-value {
                    text-align: left;
                    margin-top: 5px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Order Query!</h1>
                <p>Your event catering order has been successfully received</p>
            </div>
            
            <div class="content">
                <div class="greeting">
                    Hello <strong>${data.name}</strong>,
                </div>
                
                <p>Thank you for choosing our catering services! We're excited to be part of your special event. Your bulk order has been confirmed and our team is already preparing to make your <strong>${data.occasion}</strong> memorable.</p>
                
                <div class="order-details">
                    <h3 style="margin-bottom: 20px; color: #667eea;">📋 Your Order Details</h3>
                    
                    <div class="detail-row">
                        <span class="detail-label">📧 Contact Email:</span>
                        <span class="detail-value">${data.email}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">☎️ Mobile:</span>
                        <span class="detail-value">${data.mobile}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📅 Event Date:</span>
                        <span class="detail-value">${data.dateOfEvent}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">🎊 Occasion:</span>
                        <span class="detail-value">${data.occasion}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📍 Delivery Address:</span>
                        <span class="detail-value">${data.fullAddress}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">👥 Number of People:</span>
                        <span class="detail-value">${data.noOfPeople} guests</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">🕐 Preferred Delivery Time:</span>
                        <span class="detail-value">${data.preferedDeliveryTime}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">🍽️ Required Items:</span>
                        <span class="detail-value">${data.requiredItems}</span>
                    </div>
                    
                </div>
                
                <div class="highlight">
                    <strong>🚀 What's Next?</strong><br>
                    Our team will contact you within 24 hours to confirm final details and provide you with a detailed quote.
                </div>
                
                <p>If you have any questions or need to make changes to your order, please don't hesitate to contact us immediately.</p>
            </div>
            
            <div class="footer">
                <p><strong>Thank you for choosing our catering services!</strong></p>
                <div class="contact-info">
                    <p>📞 Customer Support: +91 80812 21164 </p>
                    <p>🌐 Website: www.fgito.com</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};



