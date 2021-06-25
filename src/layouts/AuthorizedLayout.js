import {observer} from 'mobx-react';
import {Redirect, Route, Switch} from "react-router-dom";
import Welcome from "../pages/Welcome";
import Profile from "../pages/Profile";

const AuthorizedLayout = () => {

	return (
		<Switch>
			<Route exact path='/welcome' component={Welcome} />
			<Route path='/profile' component={Profile} />
			<Redirect to="/welcome" />
		</Switch>
	);
}

export default observer(AuthorizedLayout);