import logo from "../assets/images/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand, Description, Social Links */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Brand Block */}
          <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
            {/* Logo Image */}
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 text-xs font-semibold text-slate-700 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <span className="text-slate-300 block lg:hidden">•</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
              <span className="text-slate-300 block lg:hidden">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Link Groups */}
          <div className="hidden lg:grid lg:col-span-3 grid-cols-3 gap-8">
            {/* Product Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li>
                  <a
                    href="#about"
                    className="hover:text-slate-800 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                Legal
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-800 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-100"></div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
