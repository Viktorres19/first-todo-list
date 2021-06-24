import {observer} from 'mobx-react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../pages/Login";

const UnautorizedLayout = () => {

	return (
		<Switch>
			<Route path='/login' component={Login} />
			<Redirect to="/login" />
		</Switch>
	);
}

export default observer(UnautorizedLayout);
