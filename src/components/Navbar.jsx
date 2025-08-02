import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "Nature", search: "nature" },
    { name: "Travel", search: "travel" },
    { name: "City", search: "city" },
    { name: "Cars", search: "car" },
    { name: "Fashion", search: "fashion" },
    { name: "Animals", search: "animals" },
    { name: "Technology", search: "technology" },
    { name: "Business", search: "business" },
    { name: "Food", search: "food" },
    { name: "Sports", search: "sports" },
    { name: "Music", search: "music" },
    { name: "Fitness", search: "fitness" },
  ];

  const handleCategoryClick = (searchTerm) => {
    setSearch(searchTerm);
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearch(searchQuery.trim());
      navigate("/");
    }
  };

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname]);

  return (
    <header className="navbar">
      {/* Top Navigation Bar */}
      <div className="navbar-top">
        <div className="container">
          {/* Logo */}
          <div className="navbar-brand">
            <h1 className="logo">
              <i className="fas fa-play-circle"></i>
              VideoHub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar-nav desktop-nav">
            {location.pathname === "/saved" ? (
              <button className="nav-btn primary" onClick={() => navigate("/")}>
                <i className="fas fa-home"></i>
                Home
              </button>
            ) : (
              <button
                className="nav-btn secondary"
                onClick={() => navigate("/saved")}
              >
                <i className="fas fa-bookmark"></i>
                Saved
              </button>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Search Section */}
      {location.pathname === "/" && (
        <div className="search-section">
          <div className="container">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-wrapper">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="clear-btn"
                    onClick={() => setSearchQuery("")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <div className="categories-section">
        <div className="container">
          <div
            className={`categories-wrapper ${isMenuOpen ? "mobile-open" : ""}`}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className="category-chip"
                onClick={() => handleCategoryClick(category.search)}
              >
                {category.name}
              </button>
            ))}

            {/* Mobile Navigation in Categories */}
            <div className="mobile-nav">
              {location.pathname === "/saved" ? (
                <button
                  className="nav-btn primary mobile"
                  onClick={() => {
                    navigate("/");
                    setIsMenuOpen(false);
                  }}
                >
                  <i className="fas fa-home"></i>
                  Home
                </button>
              ) : (
                <button
                  className="nav-btn secondary mobile"
                  onClick={() => {
                    navigate("/saved");
                    setIsMenuOpen(false);
                  }}
                >
                  <i className="fas fa-bookmark"></i>
                  Saved Videos
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Navbar = ({ setSearch }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const categories = [
//     { name: "Nature", icon: "🌿", color: "success", search: "nature" },
//     { name: "Travel", icon: "✈️", color: "primary", search: "travel" },
//     { name: "City", icon: "🏙️", color: "info", search: "city" },
//     { name: "Cars", icon: "🚗", color: "secondary", search: "car" },
//     { name: "Fashion", icon: "👗", color: "warning", search: "fashion" },
//     { name: "Animals", icon: "🐾", color: "light", search: "animals" },
//     { name: "Technology", icon: "💻", color: "dark", search: "technology" },
//     { name: "Business", icon: "💼", color: "warning", search: "business" },
//     { name: "Food", icon: "🍕", color: "primary", search: "food" },
//     { name: "Sports", icon: "⚽", color: "info", search: "sports" },
//     { name: "Music", icon: "🎵", color: "success", search: "music" },
//     { name: "Fitness", icon: "💪", color: "danger", search: "fitness" }
//   ];

//   const handleCategoryClick = (searchTerm) => {
//     setSearch(searchTerm);
//     navigate('/');
//     setIsMenuOpen(false);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       setSearch(searchQuery.trim());
//       navigate('/');
//     }
//   };

//   useEffect(() => {
//     setSearchQuery('');
//   }, [location.pathname]);

//   return (
//     <>
//       <nav className="navbar-container">
//         {/* Brand Section */}
//         <div className="navbar-brand">
//           <div className="brand-logo">
//             <i className="fas fa-video brand-icon"></i>
//             <span className="brand-text">VideoVault</span>
//           </div>

//           <button
//             className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>

//         {/* Navigation Menu */}
//         <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//           {/* Category Buttons */}
//           <div className="nav-categories">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className={`category-btn btn-${category.color}`}
//                 onClick={() => handleCategoryClick(category.search)}
//                 title={`Browse ${category.name} videos`}
//               >
//                 <span className="category-icon">{category.icon}</span>
//                 <span className="category-text">{category.name}</span>
//               </button>
//             ))}
//           </div>

//           {/* Page Navigation */}
//           <div className="nav-actions">
//             {location.pathname === '/saved' ? (
//               <button
//                 className="action-btn home-btn"
//                 onClick={() => {navigate('/'); setIsMenuOpen(false);}}
//               >
//                 <i className="fas fa-home"></i>
//                 <span>Home</span>
//               </button>
//             ) : (
//               <button
//                 className="action-btn saved-btn"
//                 onClick={() => {navigate('/saved'); setIsMenuOpen(false);}}
//               >
//                 <i className="fas fa-heart"></i>
//                 <span>Saved Videos</span>
//               </button>
//             )}
//           </div>

//           {/* Search Bar */}
//           {location.pathname === '/' && (
//             <div className="search-container">
//               <form onSubmit={handleSearchSubmit} className="search-form">
//                 <div className="search-input-group">
//                   <i className="fas fa-search search-icon"></i>
//                   <input
//                     type="text"
//                     className="search-input"
//                     placeholder="Search amazing videos..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   {searchQuery && (
//                     <button
//                       type="button"
//                       className="clear-search"
//                       onClick={() => setSearchQuery('')}
//                     >
//                       <i className="fas fa-times"></i>
//                     </button>
//                   )}
//                 </div>
//                 <button type="submit" className="search-submit">
//                   <i className="fas fa-arrow-right"></i>
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>

//         {/* Overlay for mobile */}
//         {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}></div>}
//       </nav>
//     </>
//   );
// };

// export default Navbar;
