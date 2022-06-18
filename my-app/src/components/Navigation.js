import React, { useState } from 'react';
import Header from './Header';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // Passes the current page prop as the state of the currentPage variable and
      and passes the handlePageChange */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // Calls the renderPage function. */}
      {renderPage()}
    </div>
  );
}
