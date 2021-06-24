import {observer} from 'mobx-react';
import {Redirect, Route, Switch} from "react-router-dom";
import Welcome from "../pages/Welcome";

const AuthorizedLayout = () => {

	return (
		<Switch>
			<Route exact path='/welcome' component={Welcome} />
			<Redirect to="/welcome" />
		</Switch>
	);
}

export default observer(AuthorizedLayout);