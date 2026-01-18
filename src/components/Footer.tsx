"use client"
import React from 'react';
import './Footer.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const router = useRouter()
  return (
    <footer className="footer-wrapper">
      <div className="footer-cta">
        <div className="cta-content">
          <h2>Ready to join our community?</h2>
          <p>Connect with fellow developers, learn new skills, and build amazing projects together.</p>
          <button className="cta-button" onClick={() => router.push("/gdg-registration-form")}>Become a Member</button>
        </div>
        {/* Ambient Glows behind the card */}
        <div className="cta-glow glow-blue"></div>
        <div className="cta-glow glow-red"></div>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-column brand-column">
            <div className="footer-logo">
              <span className="g-dot blue"></span>
              <span className="g-dot red"></span>
              <span className="g-dot yellow"></span>
              <span className="g-dot green"></span>
              <span className="brand-name">GDG JIIT</span>
            </div>
            <p className="brand-desc">
              Google Developer Group at Jaypee Institute of Information Technology. A community of developers interested in Google's technologies.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/team">Team</ Link></li>
              <li><Link href="/bitbox">Bitbox</Link></li>
              <li><Link href="/studyjam">StudyJam</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li><a href="https://github.com/dsc-jiit-128" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://www.instagram.com/gdg_jiit/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/dsc-jiit" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/gdgjiit" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://discord.com/invite/HqatsVyq5H" target="_blank" rel="noreferrer">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2026 Google Developer Group JIIT. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;