import {observer} from 'mobx-react';
import classes from './ProfileForm.module.css';
import React from "react";
import {useStores} from "../../hooks/use-stores";

const ProfileForm = () => {
	const {authStore} = useStores();

	return (
		<div>
			<div className={classes.container}>
				<div className={classes.containerMini}>
					<h1 className="h1">
						Profile data:
					</h1>
					<table className={classes.table}>
						<thead>
							<tr>
								<th>Title:</th>
								<th>Value:</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Name:</td>
								<td>{ authStore.users[0].name }</td>
							</tr>
							<tr>
								<td>Surname:</td>
								<td>{ authStore.users[0].surname }</td>
							</tr>
							<tr>
								<td>Age:</td>
								<td>{ authStore.users[0].age }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default observer(ProfileForm);