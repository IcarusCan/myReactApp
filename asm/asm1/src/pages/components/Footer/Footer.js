import footerData from './footer.json';
import './Footer.css';

// Create a small component for footer listing
const FooterColumnItem = ({ value }) => {
  return <li className="footer-item">{value}</li>;
};

function Footer() {
  return (
    <div className="booking-footer">
      <div className="footer-container">
        {/* Scan the data from JSON file for rendering */}
        {footerData.map(data => (
          // Render col by col, start from col-1
          <ul key={data.col_number} className="footer-items">
            {data.col_values.map((value, index) => (
              <FooterColumnItem value={value} key={index} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Footer;
