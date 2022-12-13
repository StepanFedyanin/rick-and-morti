import React from "react";
import cls from './Header.module.css'
import { Link, NavLink, BrowserRouter } from 'react-router-dom'

function HeaderItem() {
	return (
		<div className={cls.HeaderItem}>
			<div className={cls.HeaderTitle}>
				<a className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="/HomePage" >
					Rick and morty portal
				</a>
			</div>
			<div className={cls.HeaderNav}>
				<nav>
					<ul>
						<li>
							<NavLink className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="*" >
								Characters
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="locationPage" >
								Location
							</NavLink>
						</li>
						<li>
							<NavLink className={({ isActive }) => isActive ? cls.itemactive : cls.listitem} to="/episode" >
								Episode
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default HeaderItem;