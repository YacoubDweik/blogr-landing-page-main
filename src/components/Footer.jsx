import logo from "/src/images/logo.svg";
function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text py-24 text-center md:text-left font-[Ubuntu] font-medium rounded-tr-[100px]">
      <div className="container">
        <nav className="flex flex-col justify-center items-center gap-8 md:flex-row md:justify-between md:items-start">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <ul className="space-y-2">
            <span className="mb-6 block text-lg text-white font-bold">Product</span>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
          <ul className="space-y-2">
            <span className="mb-6 block text-lg text-white font-bold">Company</span>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <ul className="space-y-2">
            <span className="mb-6 block text-lg text-white font-bold">Connect</span>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
