import {observer} from 'mobx-react';
import { Link, useHistory } from 'react-router-dom';
import classes from './Header.module.css';
import React from "react";
import {useStores} from "../../hooks/use-stores";
import { GiExitDoor } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiChevronsLeft } from "react-icons/fi";
import Headercounter from "./Headercounter/Headercounter";

const Header = () => {
	let history = useHistory();
	const {authStore} = useStores();
	const {todoStore} = useStores();

	const logOut = () => {
		authStore.logOut();
	}

	return (
		<div className={classes.header}>
			<div className={classes.container}>
				<h1 className={classes.h1}><FcApproval />Universal checklist</h1>
				{ (window.location.href.indexOf("profile") > -1) ?
						<button className={classes.navButton} onClick={() => history.goBack()}><FiChevronsLeft /></button>
					:
					<Link to="/profile">
						<button className={classes.navButton}><BsFillPersonLinesFill /></button>
					</Link>
				}
				{todoStore.todos.length ? <Headercounter /> : <p> </p> }
				<button onClick={ () => logOut() } className={classes.button}><GiExitDoor /></button>
			</div>
		</div>
	);
}

export default observer(Header);