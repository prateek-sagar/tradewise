export default function Footer() {
  return (
    <footer>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
      &copy; {new Date().getFullYear()} TradeWise. All rights reserved.
    </footer>
  );
}
