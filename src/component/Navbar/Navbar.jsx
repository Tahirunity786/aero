'use client';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const Navbar = () => {

  // Set active
  const [active, setActive] = useState(0);
  
  const handleActive = (index) => {
    setActive(index);
  }

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((err) =>
      console.error('Bootstrap JS not loaded:', err)
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src="/Images/logo.svg"
            alt="logo"
            className="navbar-logo"
            height={300}
            width={300}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mb-2" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            {['Features', 'Blogs', 'Free Test', 'Faqs', 'E-Shop'].map((item, index) => (
              <li className="nav-item ps-3" key={index}>
                <Link href={`/${item.replace(/\s+/g, '-').toLowerCase()}`} onClick={()=>{handleActive(index)}}  className={`nav-link fw-medium ${active === index ? 'active-link' : ''}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <Link href="#" className="btn btn-warning rounded-4 me-4 fw-medium">
              Try for free
            </Link>
            <Link href="/login" className="btn btn-outline-dark rounded-4 fw-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
