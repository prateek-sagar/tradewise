export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center py-6 px-10 text-white lg:flex">
      <ul className="flex flex-col space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
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
