import {observer} from 'mobx-react';
import {useStores} from "../hooks/use-stores";
import {useState} from "react";

const Login = () => {

	const {authStore} = useStores();

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		authStore.login({userName, password});
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<p>Username</p>
				<input name="username" type="text" onChange={event => setUserName(event.target.value)} />
			</label>
			<label>
				<p>Password</p>
				<input name="password" type="password" onChange={event => setPassword(event.target.value)} />
			</label>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
}

export default observer(Login);