import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Website của tôi. Tất cả các quyền được bảo lưu.</p>
        <nav>
          <ul className="footer-links">
            <li><a href="/privacy-policy">Chính sách bảo mật</a></li>
            <li><a href="/terms-of-service">Điều khoản dịch vụ</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
