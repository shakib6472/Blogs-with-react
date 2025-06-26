import React from 'react';
import style from '../assets/css/Header.module.scss';

const Footer = () => (
    <footer className={style.footer}>
        <div>
            <p>&copy; {new Date().getFullYear()} Blog App. All rights reserved.</p>
          
        </div>
    </footer>
);

export default Footer;