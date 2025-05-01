import React from 'react'
import '../styles/footer.style.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <footer className="book-footer">
            <div className="footer-container">
            <div className="footer-left">
                <h3>Nnbooks</h3>
                <p>© 2025 BookShare. Let's read together.</p>
            </div>
            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/library">library</a>
                <a href="/rental">rental</a>
                <a href="/Mypage">Mypage</a>
                <a href="/">About Us</a>
            </div>
            <div className="footer-social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
            </div>
            </div>
        </footer>
        </>
  )
}

export default Footer