export const feedbackEmailTemplateAdmin = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Customer Feedback Alert - Admin Notification</title>
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
                background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
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
            .feedback-type {
                display: inline-block;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                margin-bottom: 20px;
            }
            .feedback-positive {
                background-color: #d4edda;
                color: #155724;
            }
            .feedback-negative {
                background-color: #f8d7da;
                color: #721c24;
            }
            .order-info {
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                border-left: 4px solid #f39c12;
            }
            .feedback-content {
                background-color: #fff3cd;
                border: 1px solid #ffeaa7;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
                position: relative;
            }
            .feedback-content:before {
                content: """;
                font-size: 60px;
                color: #f39c12;
                position: absolute;
                top: -10px;
                left: 15px;
                opacity: 0.3;
            }
            .feedback-text {
                font-style: italic;
                font-size: 16px;
                line-height: 1.8;
                margin-left: 30px;
            }
            .priority-section {
                padding: 20px;
                margin: 25px 0;
                text-align: center;
                border-radius: 8px;
            }
            .priority-high {
                background-color: #f8d7da;
                border: 1px solid #f5c6cb;
            }
            .priority-normal {
                background-color: #d4edda;
                border: 1px solid #c3e6cb;
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
            .btn-respond {
                background-color: #f39c12;
            }
            .btn-escalate {
                background-color: #e74c3c;
            }
            .btn-archive {
                background-color: #95a5a6;
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
                .btn {
                    display: block;
                    margin: 10px 0;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📢 Customer Feedback Alert</h1>
                <p>Admin Action Required</p>
            </div>
            
            <div class="content">
                <div class="order-info">
                    <h3 style="margin-bottom: 15px; color: #f39c12;">📦 Customer & Order Information</h3>
                    <p><strong>Order Number:</strong> #${data.orderNumber}</p>
                    <p><strong>Customer Name:</strong> ${data.name}</p>
                    <p><strong>Customer Email:</strong> ${data.email}</p>
                    <p><strong>Customer Mobile:</strong> {data.mobile}</p>
                </div>
                
                <div class="feedback-content">
                    <div class="feedback-text">
                        ${data.feedbackOrComplain}
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>FGITO Admin Panel</strong></p>
                <p>Customer Feedback Management</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export const feedbackEmailTemplateUser = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to HomeChef Network</title>
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
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
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
            .welcome-message {
                background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
                color: white;
                padding: 25px;
                border-radius: 8px;
                text-align: center;
                margin-bottom: 30px;
            }
            .chef-details {
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
                border-left: 4px solid #ff6b6b;
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
            .status-badge {
                display: inline-block;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
            }
            .status-approved {
                background-color: #d4edda;
                color: #155724;
            }
            .status-pending {
                background-color: #fff3cd;
                color: #856404;
            }
            .next-steps {
                background-color: #e8f5e8;
                border: 1px solid #c3e6c3;
                border-radius: 8px;
                padding: 20px;
                margin: 25px 0;
            }
            .next-steps h3 {
                color: #2d5a2d;
                margin-bottom: 15px;
            }
            .next-steps ul {
                list-style: none;
                padding-left: 0;
            }
            .next-steps li {
                padding: 8px 0;
                padding-left: 25px;
                position: relative;
            }
            .next-steps li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #28a745;
                font-weight: bold;
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
                <h1>👨‍🍳 Welcome to HomeChef!</h1>
                <p>Your culinary journey starts here</p>
            </div>
            
            <div class="content">
                <div class="welcome-message">
                    <h2>🎉 Registration Successful!</h2>
                    <p>Welcome to our growing community of talented home chefs</p>
                </div>
                
                <p>Dear <strong>${data.homechefName}</strong>,</p>
                
                <p>Congratulations! Your registration as a HomeChef has been successfully submitted. We're thrilled to have you join our platform and share your culinary expertise with food lovers in your area.</p>
                
                <div class="chef-details">
                    <h3 style="margin-bottom: 20px; color: #ff6b6b;">👨‍🍳 Your Registration Details</h3>
                    
                    <div class="detail-row">
                        <span class="detail-label">📧 Email Address:</span>
                        <span class="detail-value">${data.email}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">🏪 Kitchen Name:</span>
                        <span class="detail-value">${data.nameOfKitchen}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">👨‍🍳 Chef Name:</span>
                        <span class="detail-value">${data.homechefName}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📞 Contact Number:</span>
                        <span class="detail-value">${data.contactNumber}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📍 Kitchen Address:</span>
                        <span class="detail-value">${data.kitchenAddress}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="detail-label">📜 FSSAI License:</span>
                        <span class="detail-value">
                            <span class="status-badge ${data.fssaiLicence === 'yes' ? 'status-approved' : 'status-pending'}">
                                ${data.fssaiLicence === 'yes' ? '✓ Verified' : '⏳ Pending Verification'}
                            </span>
                        </span>
                    </div>
                </div>
                
                <div class="next-steps">
                    <h3>🚀 What Happens Next?</h3>
                    <ul>
                        <li>Our team will review your application within 24-48 hours</li>
                        <li>We'll verify your FSSAI license and kitchen details</li>
                        <li>You'll receive a confirmation email once approved</li>
                        <li>Access to your HomeChef dashboard will be granted</li>
                        <li>Start receiving orders from hungry customers!</li>
                    </ul>
                </div>
                
                ${data.fssaiLicence !== 'yes' ? `
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; padding: 15px; margin: 20px 0;">
                    <strong>⚠️ Important:</strong> Please ensure you have a valid FSSAI license to complete your registration and start receiving orders.
                </div>
                ` : ''}
                
                <p>We're excited to see the delicious creations you'll share with our community. If you have any questions during the onboarding process, our support team is here to help!</p>
            </div>
            
            <div class="footer">
                <p><strong>Welcome to the HomeChef family! 🏠👨‍🍳</strong></p>
                <div class="contact-info">
                    <p>📞 Support: +91 8081221164</p>
                    <p>🌐 Portal: chef.fgito.com</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};
