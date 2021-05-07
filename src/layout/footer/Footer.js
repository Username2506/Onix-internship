import React from 'react';
import './css/Footer.css';

const Footer = () => {
  const author = 'Никита Ламекин';
  const gitRef = 'https://github.com/Username2506';
  const designRef = 'https://nodejs.org/uk/docs/';
  const onixRef = 'https://onix.kr.ua/';
  return (
    <footer>
      <span className="author">
        &copy; 
        {author}
      </span>
      <div>
        <ul className="reference">
          <li>
            <a href={gitRef} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={designRef} target="_blank" rel="noreferrer">
              Original design
            </a>
          </li>
          <li>
            <a href={onixRef} target="_blank" rel="noreferrer">
              Onix
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
