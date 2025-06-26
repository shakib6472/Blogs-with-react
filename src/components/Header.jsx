import react from "react";
import {Link, Routes, Route} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import style from "../assets/css/Header.module.scss";

function Header() {
	return (
		<header className={style.header}>
			{/* Logo */}
			<div className={style.logo}>
				<Link to='/'>My Blog</Link>
			</div>
			<nav className={style.nav}>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/blog'>Blog</Link>
				<Link to='/contact'>Contact</Link>
			</nav>
		</header>
	);
}

export default Header;
