// 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Phone, Menu, X } from "lucide-react";
import { useCartStore, useAuthStore, useSearchStore } from "../store/store";
import Image from "./Image";
import logo from "../assets/images/SJD_logo.png";
import HorizontalFilterBar from "./HorizontalFilterBar";

interface SelectedFilters {
  [key: string]: string[];
}

interface HeaderProps {
  selectedFilters?: SelectedFilters;
  onFilterChange?: (filters: SelectedFilters) => void;
  onClearFilters?: () => void;
  showFilters?: boolean;
}

export default function Header({ 
  selectedFilters = {}, 
  onFilterChange = () => {}, 
  onClearFilters = () => {},
  showFilters = false 
}: HeaderProps) {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const { getTotalItems } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    if (mounted) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileMenuOpen, mounted]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, mounted]);

  // Shared search submit handler
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  if (!mounted) {
    // SSR fallback with centered logo area
    return (
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 sm:px-6 py-2">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-500" />
            <span className="text-xs sm:text-sm text-gray-700">+1-234-567-890</span>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <Image
                src={logo}
                alt="Logo"
                className="h-6 sm:h-8 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div />
        </div>
      </header>
    );
  }

  return (
    <>
      {/* Sticky, subtle glass effect header */}
<header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
  {/* Top row: Flex layout with proper spacing */}
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
    {/* Left: Contact + Phone - Hidden on smaller screens */}
    <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
      <a
        href="tel:+1234567890"
        className="group inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="Call us"
      >
        <span className="relative inline-flex items-center justify-center">
          <Phone size={18} className="text-gray-500 group-hover:text-blue-600 transition-colors" />
        </span>
        <span className="text-sm font-medium">+1-234-567-890</span>
      </a>
    </div>

    {/* Center: Logo - responsive positioning */}
    <div className="flex-1 flex justify-center xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:flex-none">
      <Link to="/" className="inline-flex items-center">
        <Image
          src={logo}
          alt="Logo"
          className="h-6 sm:h-8 xl:h-9 w-auto cursor-pointer hover:opacity-90 transition-opacity"
        />
      </Link>
    </div>

    {/* Right: Search then icons - Responsive visibility */}
    <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
      {/* Search Bar - Hidden on smaller screens */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden lg:flex items-center border border-gray-200 rounded-full ps-3 pe-2 py-1.5 bg-white/80 hover:bg-white transition-colors focus-within:ring-2 focus-within:ring-blue-200"
      >
        <Search size={16} className="text-gray-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="outline-none bg-transparent px-2 py-1 w-24 xl:w-40 text-sm"
          suppressHydrationWarning
          aria-label="Search"
        />
        <button
          type="submit"
          className="ms-1 rounded-full bg-blue-600 text-white text-xs px-2 py-1 hover:bg-blue-700 active:bg-blue-800 transition-colors"
          aria-label="Submit search"
        >
          Go
        </button>
      </form>

      {/* Icons: Contact, Wishlist, Cart, Account */}
      <nav className="flex items-center gap-2 lg:gap-3 text-gray-700 text-sm font-medium">
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-1 hover:text-blue-600 transition-colors"
        >
          <span>Contact</span>
        </Link>

        <Link
          to="/wishlist"
          className="hover:text-blue-600 flex items-center gap-1 transition-colors"
          title="Wishlist"
        >
          <Heart size={16} />
          <span className="hidden xl:inline">WishList</span>
        </Link>

        <Link
          to="/cart"
          className="hover:text-blue-600 flex items-center gap-1 transition-colors relative"
          title="Shopping Cart"
        >
          <ShoppingCart size={16} />
          <span className="hidden xl:inline">Cart</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full h-5 min-w-[1.25rem] px-1 flex items-center justify-center leading-none">
            {getTotalItems()}
          </span>
        </Link>

        {isAuthenticated ? (
          <Link
            to="/account"
            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            title="My Account"
          >
            <User size={16} />
            <span className="hidden xl:inline">Account</span>
          </Link>
        ) : (
          <Link
            to="/login"
            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            title="Login"
          >
            <User size={16} />
          </Link>
        )}
      </nav>
    </div>

    {/* Mobile menu button */}
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Toggle mobile menu"
        suppressHydrationWarning
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Rest of the mobile search bar code remains the same */}
  <div className="lg:hidden border-t border-gray-200 px-4 py-3 bg-white/80 backdrop-blur">
    <form
      onSubmit={handleSearchSubmit}
      className="flex items-center border rounded-full ps-3 pe-2 py-2 bg-white"
    >
      <Search size={18} className="text-gray-500" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search jewelry..."
        className="outline-none bg-transparent px-2 py-1 flex-1 text-sm"
        suppressHydrationWarning
        aria-label="Search"
      />
      <button
        type="submit"
        className="ms-1 rounded-full bg-blue-600 text-white text-xs px-3 py-1 hover:bg-blue-700 active:bg-blue-800 transition-colors"
        aria-label="Submit search"
      >
        Go
      </button>
    </form>
  </div>

  {/* Navigation Bar */}
  <nav className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-center space-x-8 py-3">
        {/* Rings Dropdown */}
        <div className="relative group">
          <Link to="/categories/rings" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
            Rings
          </Link>
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link to="/categories/rings/engagement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Engagement Rings</Link>
              <Link to="/categories/rings/wedding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Wedding Rings</Link>
              <Link to="/categories/rings/fashion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Fashion Rings</Link>
              <Link to="/categories/rings/stackable" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Stackable Rings</Link>
            </div>
          </div>
        </div>

        {/* Necklaces Dropdown */}
        <div className="relative group">
          <Link to="/categories/necklaces" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
            Necklaces
          </Link>
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link to="/categories/necklaces/pendants" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pendant Necklaces</Link>
              <Link to="/categories/necklaces/chains" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Chain Necklaces</Link>
              <Link to="/categories/necklaces/chokers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Chokers</Link>
              <Link to="/categories/necklaces/layered" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Layered Sets</Link>
            </div>
          </div>
        </div>

        {/* Earrings Dropdown */}
        <div className="relative group">
          <Link to="/categories/earrings" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
            Earrings
          </Link>
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link to="/categories/earrings/studs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Stud Earrings</Link>
              <Link to="/categories/earrings/hoops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Hoop Earrings</Link>
              <Link to="/categories/earrings/drops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Drop Earrings</Link>
              <Link to="/categories/earrings/statement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Statement Earrings</Link>
            </div>
          </div>
        </div>

        {/* Engagement Rings */}
        <Link to="/categories/engagement-rings" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
          Engagement Rings
        </Link>

        {/* Wedding Rings */}
        <Link to="/categories/wedding-rings" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
          Wedding Rings
        </Link>

        {/* Bracelets Dropdown */}
        <div className="relative group">
          <Link to="/categories/bracelets" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
            Bracelets
          </Link>
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link to="/categories/bracelets/tennis" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Tennis Bracelets</Link>
              <Link to="/categories/bracelets/charm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Charm Bracelets</Link>
              <Link to="/categories/bracelets/bangles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bangles</Link>
              <Link to="/categories/bracelets/cuff" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Cuff Bracelets</Link>
            </div>
          </div>
        </div>

        {/* Collections Dropdown */}
        <div className="relative group">
          <Link to="/collections" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
            Collections
          </Link>
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link to="/collections/diamond" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Diamond Collection</Link>
              <Link to="/collections/gold" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Gold Collection</Link>
              <Link to="/collections/vintage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Vintage Collection</Link>
              <Link to="/collections/modern" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Modern Collection</Link>
            </div>
          </div>
        </div>

        {/* Gifts */}
        <Link to="/gifts" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
          Gifts
        </Link>

        {/* The Edit */}
        <Link to="/the-edit" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase">
          The Edit
        </Link>
      </div>
    </div>
  </nav>
</header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="mobile-menu-container absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Menu</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                suppressHydrationWarning
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick contact strip */}
            <div className="px-4 py-3 border-b border-gray-200">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">+1-234-567-890</span>
              </a>
            </div>

            {/* Menu Content */}
            <nav className="p-4 space-y-1">
              <Link
                to="/contact"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                <span className="font-medium">Contact</span>
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart size={20} />
                <span className="font-medium">Wishlist</span>
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                </div>
                <span className="font-medium">Shopping Cart</span>
              </Link>

              {isAuthenticated ? (
                <Link
                  to="/account"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User size={20} />
                  <span className="font-medium">My Account</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User size={20} />
                  <span className="font-medium">Login</span>
                </Link>
              )}

              {/* Divider */}
              <div className="border-t border-gray-200 my-4" />

              {/* Navigation Links */}
              <Link
                to="/categories/rings"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Rings</span>
              </Link>

              <Link
                to="/categories/necklaces"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Necklaces</span>
              </Link>

              <Link
                to="/categories/earrings"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Earrings</span>
              </Link>

              <Link
                to="/categories/engagement-rings"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Engagement Rings</span>
              </Link>

              <Link
                to="/categories/wedding-rings"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Wedding Rings</span>
              </Link>

              <Link
                to="/categories/bracelets"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Bracelets</span>
              </Link>
            </nav>

            {/* Mobile Contact Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone size={16} />
                <span>+1-234-567-890</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Call us for wholesale inquiries</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// 