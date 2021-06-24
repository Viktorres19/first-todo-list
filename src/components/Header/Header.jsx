import {observer} from 'mobx-react';
import classes from './Header.module.css';
import React from "react";
import {useStores} from "../../hooks/use-stores";
import { GiExitDoor } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";

const Header = () => {
	const {authStore, todoStore} = useStores();

	const logOut = () => {
		authStore.logOut();
	}

	return (
		<div className={classes.header}>
			<div className={classes.container}>
				<h1 className={classes.h1}><FcApproval />Universal checklist</h1>
				<div className={classes.counter}>
					<div className={classes.infoRow}><div className={classes.infoName}>Tasks totally:</div> <div>{todoStore.total}</div></div>
					<div className={classes.infoRow}><div className={classes.infoName}>Tasks completed:</div> <div>{todoStore.completedTasks}</div></div>
				</div>
				<button onClick={ () => logOut() } className={classes.button}><GiExitDoor /></button>
			</div>
		</div>
	);
}

export default observer(Header);