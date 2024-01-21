interface Props {
  children: React.ReactNode;
}
const PharmaApp = ({ children }: Props) => {
  return (
    <article className="prose">
      {children}
      <ol>
        <li className="font-bold">{"Inventory Management:"}</li>
        <ul>
          <li>
            {
              "Centralized control of all pharmaceutical products with detailed information on each item."
            }
          </li>
          <li>
            {
              "Real-time tracking of stock levels, expiration dates, and batch details."
            }
          </li>
          <li>
            {"Easy addition, removal, or modification of product entries."}
          </li>
        </ul>
        <li className="font-bold">{"Barcode Scanning:"}</li>
        <ul>
          <li>
            {
              "Seamless integration of barcode scanning functionality for quick and accurate identification of products."
            }
          </li>
          <li>
            {
              "Efficient stock replenishment and order processing through barcode scanning."
            }
          </li>
        </ul>
        <li className="font-bold">{"Stock Alerts and Notifications:"}</li>
        <ul>
          <li>
            {
              "Automated alerts for low stock levels, ensuring timely reordering and preventing stockouts."
            }
          </li>
          <li>
            {
              "Expiry date notifications to minimize product wastage and maintain product quality."
            }
          </li>
        </ul>
        <li className="font-bold">{"Order Management:"}</li>
        <ul>
          <li>{"Simplified creation and processing of purchase orders."}</li>
          <li>
            {
              "Integration with suppliers and vendors for streamlined order fulfillment."
            }
          </li>
        </ul>
        <li className="font-bold">{"Sales and Transaction History:"}</li>
        <ul>
          <li>
            {
              "Record-keeping of all sales transactions for audit and analysis purposes."
            }
          </li>
          <li>
            {
              "Access to detailed sales reports and analytics to identify popular products and trends."
            }
          </li>
        </ul>
        <li className="font-bold">{"User Authentication and Permissions:"}</li>
        <ul>
          <li>
            {
              "Secure login system with user authentication for different roles (e.g., admin, pharmacist, cashier)."
            }
          </li>
          <li>
            {
              "Role-based permissions to control access to specific features and data."
            }
          </li>
        </ul>
        <li className="font-bold">{"Multi-Platform Accessibility:"}</li>
        <ul>
          <li>
            {
              "Built using the Flutter framework, ensuring a consistent user experience across multiple platforms (iOS and Android)."
            }
          </li>
          <li>
            {
              "Responsive design for various screen sizes, including tablets and smartphones."
            }
          </li>
        </ul>
        <li className="font-bold">{"Data Synchronization:"}</li>
        <ul>
          <li>
            {
              "Cloud-based storage for data synchronization and accessibility from multiple devices."
            }
          </li>
          <li>
            {
              "Offline functionality to ensure uninterrupted operation even in low-connectivity environments."
            }
          </li>
        </ul>
      </ol>
    </article>
  );
};

export default PharmaApp;
