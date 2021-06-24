import {action, observable, computed, runInAction} from "mobx";
import {go} from "../utils/history";
/*import {useStores} from "../hooks/use-stores";*/
class AuthStore {
	/*mobX декоратор который позволяет переменной быть видной во всем проекте*/
	@observable auth = !!localStorage.getItem('UUID');
	/*исчисляет локалсторедж и ауз*/
	/*!!!hint*/
	@computed get isAuth() {
		return this.auth && !!localStorage.getItem('UUID');
	}

	users = [
		{login: 'Vasya', password: '123'}
	]
	@action login = (values) => {

		let user = this.users.find(item => values.userName === item.login && values.password === item.password)
		console.log(values.userName);
		/*записываем в локалсторедж*/
		user && localStorage.setItem('UUID', user.login);
		runInAction(() => this.auth = true);
		go('/welcome');
	}
	@action logOut = () => {
		this.auth = false;
		localStorage.removeItem('UUID');
		go('/login');
	}
}


export default new AuthStore();