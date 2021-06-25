import {observer} from 'mobx-react';
import classes from './Headercounter.module.css';
import React from "react";
import {useStores} from "../../../hooks/use-stores";

const Headercounter = () => {
	const {todoStore} = useStores();

	return (
		/*2nd variant*/
		<div className={classes.counter}>
			<div className={classes.infoRow}><div className={classes.infoName}>Tasks totally:</div> <div>{todoStore.total}</div></div>
			<div className={classes.infoRow}><div className={classes.infoName}>Tasks completed:</div> <div>{todoStore.completedTasks}</div></div>
		</div>
	);
}

export default observer(Headercounter);