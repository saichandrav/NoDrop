import { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import logo from '../assets/1.png';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';


const SCROLL_THRESHOLD = 12;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const { cartCount } = useContext(CartContext);

  const navItems = [
    { label: 'about', href: '#footer' },
    { label: 'our products', href: '/products' },
    { label: 'subscription', href: '/#suscription' },
    { label: 'become a partner', href: '/#becomeapartner' },
    { label: 'order now', href: '/products' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = Math.abs(currentY - lastScrollY.current);

        if (delta > SCROLL_THRESHOLD) {
          const shouldShow = currentY < lastScrollY.current || currentY < window.innerHeight;
          if (isVisible !== shouldShow) setIsVisible(shouldShow);
          lastScrollY.current = currentY;
        }

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const closeMobileMenu = () => setMobileOpen(false);

  const renderNavLinks = (className = 'flex space-x-10 text-white', onItemClick) => (
    <ul className={className}>
      {navItems.map((item) => (
        <li key={item.label} className="py-4 px-1 hover:text-blue-200">
          <Link to={item.href} onClick={onItemClick}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );

  const renderAuthActions = (isMobile = false) => (
    <div className={isMobile ? 'flex flex-col gap-3 mt-6' : 'flex items-center space-x-10 '}>
      <Link
        to="/login"
        className={
          isMobile
            ? 'py-3 px-4 border rounded-md hover:bg-white text-center'
            : 'py-1.5 px-3.5 border rounded-md bg-white hover:bg-linear-to-r from-blue-500 to-blue-800 transition'
        }
      >
        Sign In
      </Link>
      {isMobile && (
        <Link
          to="/signup"
          className="py-3 px-4 rounded-md bg-linear-to-r from-blue-500 to-blue-800 text-center"
        >
          Create an account
        </Link>
      )}

      {!isMobile && (
        <Link to="/cart" className="relative hover:text-blue-200 transition">
          <FaShoppingCart className="text-white cursor-pointer" size={23} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      )}
    </div>
  );

  return (
    <nav
      className={`sticky top-0 z-50 py-2 backdrop-blur-lg bg-black border-b border-neutral-700/80 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <Link to="/" aria-label="Home">
              <img className="h-auto w-20 mr-2" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md ml-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div className="hidden lg:flex ml-14 space-x-10">
            {renderNavLinks()}
          </div>

          <div className="hidden lg:flex justify-center items-center">
            {renderAuthActions(false)}
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className="p-1"
            >
              {mobileOpen ? <X /> : <Menu className='text-white' />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 z-40 bg-black w-full p-2.5 flex flex-col justify-start items-center gap-6 lg:hidden">
            <div className="w-full max-w-md flex items-center justify-between text-white">
              <p className="uppercase tracking-[0.25em] text-xs">Menu</p>
              <button onClick={closeMobileMenu} aria-label="Close menu" className="p-2 rounded-full hover:bg-neutral-800 transition">
                <X />
              </button>
            </div>
            <div>
              <div className="w-full max-w-md ">
                {renderNavLinks('flex flex-col items-center space-y-2 text-black', closeMobileMenu)}
              </div>
              <div className="w-full max-w-md">
                {renderAuthActions(true)}
              </div>
              <Link to="/cart" className="relative mt-2 text-white flex items-center gap-2" onClick={closeMobileMenu}>
                <FaShoppingCart size={22} />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Navbar;