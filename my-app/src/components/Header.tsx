// 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Phone, Menu, X } from "lucide-react";
import { useCartStore, useAuthStore, useSearchStore } from "../store/store";
import Image from "./Image";
import logo from "../assets/images/SJD_logo_PhotoGrid.png";
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
      {/* Enhanced Sticky Header with Better Visual Appeal */}
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 shadow-lg border-b border-gray-100">
        {/* Top Row: Contact Info, Logo, and User Actions */}
        <div className="max-w-7xl mx-auto flex-1 ">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 ">
            {/* Left: Contact Info - Hidden on smaller screens */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <a
                href="tel:+1234567890"
                className="group inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Call us"
              >
                <Phone size={18} className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                <span className="text-sm font-medium">+1-234-567-890</span>
              </a>
            </div>

            {/* Center: Logo - Perfectly Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="inline-flex items-center group">
                <Image
                  src={logo}
                  alt="SJD Jewelry Logo"
                  className="h-8 sm:h-10 lg:h-12 w-auto cursor-pointer group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Right: User Actions - Responsive Layout */}
            <div className="flex items-center gap-4 lg:gap-4 flex-shrink-0 ">
              {/* Search Bar - Hidden on smaller screens */}
              <form
                onSubmit={handleSearchSubmit}
                className="hidden lg:flex items-center border border-gray-200  ps-4 pe-3 py-2 bg-gray-100 hover:bg-white hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300 h-10"
              >
                <Search size={16} className="text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jewelry..."
                  className="outline-none bg-transparent px-3 py-1 w-32 xl:w-48 text-sm placeholder-gray-400"
                  suppressHydrationWarning
                  aria-label="Search"
                />
                {/* <button
                  type="submit"
                  className="ml-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-1.5 hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all duration-200 font-medium"
                  aria-label="Submit search"
                >
                  Go
                </button> */}
              </form>

              {/* Action Icons */}

              
              <nav className="flex items-center gap-4 lg:gap-3">
                <Link
                  to="/wishlist"
                  className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 group"
                  title="Wishlist"
                >
                  <Heart size={25} className="group-hover:scale-110 transition-transform duration-200" />
                </Link>

                <Link
                  to="/cart"
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 group relative"
                  title="Shopping Cart"
                >
                  <ShoppingCart size={25} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-5 min-w-[1.25rem] px-1 flex items-center justify-center leading-none font-medium">
                    {getTotalItems()}
                  </span>
                </Link>

                {isAuthenticated ? (
                  <Link
                    to="/account"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 group"
                    title="My Account"
                  >
                    <User size={25} className="group-hover:scale-110 transition-transform duration-200" />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 group"
                    title="Login"
                  >
                    <User size={25} className="group-hover:scale-110 transition-transform duration-200" />
                  </Link>
                )}
              </nav>
              

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Toggle mobile menu"
                suppressHydrationWarning
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden border-t border-gray-100 px-4 py-3 bg-white/80 backdrop-blur">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border border-gray-200 rounded-full ps-4 pe-3 py-2.5 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300"
          >
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jewelry..."
              className="outline-none bg-transparent px-3 py-1 flex-1 text-sm placeholder-gray-400"
              suppressHydrationWarning
              aria-label="Search"
            />
            {/* <button
              type="submit"
              className="ml-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-1.5 hover:from-blue-700 hover:to-blue-800 active:scale-95 transition-all duration-200 font-medium"
              aria-label="Submit search"
            >
              Go
            </button> */}
          </form>
        </div>

        {/* Enhanced Navigation Bar */}
        <nav className="bg-white border-t border-gray-100 shadow-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-1 lg:space-x-2 xl:space-x-4 py-4">
              {/* Rings Dropdown */}
              <div className="relative group flex-1">
                <Link 
                  to="/categories/rings" 
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide text-center"
                >
                  Rings
                </Link>
                <div className="fixed left-0 right-0 top-[calc(100%+2px)] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="mx-auto max-w-7xl px-4">
                    <div className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link to="/categories/rings?occasion=engagement" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-center">Engagement Rings</Link>
                      <Link to="/categories/rings?occasion=wedding" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-200 text-center">Wedding Rings</Link>
                      <Link to="/categories/rings?occasion=casual" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors duration-200 text-center">Casual Rings</Link>
                      <Link to="/categories/rings?occasion=cocktail" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 text-center">Cocktail Rings</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Necklaces Dropdown */}
              <div className="relative group flex-1">
                <Link 
                  to="/categories/necklaces" 
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide text-center"
                >
                  Necklaces
                </Link>
                <div className="fixed left-0 right-0 top-[calc(100%+2px)] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="mx-auto max-w-7xl px-4">
                    <div className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link to="/categories/necklaces?occasion=formal" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-center">Formal Necklaces</Link>
                      <Link to="/categories/necklaces?occasion=casual" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-200 text-center">Casual Necklaces</Link>
                      <Link to="/categories/necklaces?occasion=luxury" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors duration-200 text-center">Luxury Necklaces</Link>
                      <Link to="/categories/necklaces?occasion=holiday" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 text-center">Holiday Necklaces</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Earrings Dropdown */}
              <div className="relative group flex-1">
                <Link 
                  to="/categories/earrings" 
                  className="px-3 py-2  text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide"
                >
                  Earrings
                </Link>
                <div className="fixed left-0 right-0 top-[calc(100%+2px)] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="mx-auto max-w-7xl px-4">
                    <div className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-gradient-to-r from-yellow-400 via-blue-400 to-pink-400 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link to="/categories/earrings?occasion=formal" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-center">Formal Earrings</Link>
                      <Link to="/categories/earrings?occasion=casual" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-200 text-center">Casual Earrings</Link>
                      <Link to="/categories/earrings?occasion=spring" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors duration-200 text-center">Spring Earrings</Link>
                      <Link to="/categories/earrings?occasion=evening" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 text-center">Evening Earrings</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bracelets Dropdown */}
              <div className="relative group flex-1">
                <Link 
                  to="/categories/bangles_bracelets" 
                  className="px-3 py-2   text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide"
                >
                  Bracelets
                </Link>
                <div className="fixed left-0 right-0 top-[calc(100%+2px)] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="mx-auto max-w-7xl px-4">
                    <div className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-gradient-to-r from-purple-400 via-yellow-400 to-blue-400 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link to="/categories/bangles_bracelets?occasion=casual" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-center">Casual Bracelets</Link>
                      <Link to="/categories/bangles_bracelets?occasion=formal" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-200 text-center">Formal Bracelets</Link>
                      <Link to="/categories/bangles_bracelets?occasion=vintage" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors duration-200 text-center">Vintage Bracelets</Link>
                      <Link to="/categories/bangles_bracelets?occasion=bohemian" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 text-center">Bohemian Bracelets</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collections Dropdown */}
              <div className="relative group flex-1">
                <Link 
                  to="/collections" 
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide"
                >
                  Collections
                </Link>
                <div className="fixed left-0 right-0 top-[calc(100%+2px)] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="mx-auto max-w-7xl px-4">
                    <div className="bg-white rounded-b-2xl shadow-2xl border-t-4 border-gradient-to-r from-blue-400 via-yellow-400 to-pink-400 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Link to="/collections/diamond" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-center">Diamond Collection</Link>
                      <Link to="/collections/gold" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg transition-colors duration-200 text-center">Gold Collection</Link>
                      <Link to="/collections/vintage" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-lg transition-colors duration-200 text-center">Vintage Collection</Link>
                      <Link to="/collections/modern" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 text-center">Modern Collection</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Rings */}
              <Link 
                to="/categories/rings?occasion=engagement" 
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide flex-1"
              >
                Engagement
              </Link>

              {/* Wedding Rings */}
              <Link 
                to="/categories/rings?occasion=wedding" 
                className="px-3   py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide flex-1 text-center"
              >
                Wedding
              </Link>

              {/* Gifts */}
              <Link 
                to="/gifts" 
                className="px-3   py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide flex-1 text-center"
              >
                Gifts
              </Link>

              {/* The Edit */}
              <Link 
                to="/the-edit" 
                className="px-3   py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 uppercase tracking-wide flex-1 text-center"
              >
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