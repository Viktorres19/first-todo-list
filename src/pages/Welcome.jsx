import {observer} from 'mobx-react';
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";

const Welcome = () => {

	return (
		<div>
			<Header />
			<Form />
		</div>
	);
}

export default observer(Welcome);