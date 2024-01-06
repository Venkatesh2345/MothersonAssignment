import React from 'react';
import './index.css';

const navItemsList = [
  {
    id: '#about',
    displayText: 'About',
  },
  {
    id: '#projects',
    displayText: 'Projects',
  },
  {
    id: '#contact-us',
    displayText: 'Contact Us',
  },
];

const Header = () => {
  const handleNavLinkClick = (id) => {
    const element = document.querySelector(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="page-header header-container">
      <section className="container header-section-container">
        <h2 className="website-logo">Venkatesh Athyam</h2>
        <nav>
          <ul className="nav-items-container">
            {navItemsList.map((eachItem) => (
              <li key={eachItem.id}>
                <a
                  href={eachItem.id}
                  className="nav-links"
                  onClick={() => handleNavLinkClick(eachItem.id)}
                >
                  {eachItem.displayText}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
