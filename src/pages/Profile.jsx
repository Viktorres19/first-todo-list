import {observer} from 'mobx-react';
import Header from "../components/Header/Header";
import ProfileForm from "../components/ProfileForm/ProfileForm";

const Profile = () => {

	return (
		<div>
			<Header />
			<ProfileForm />
		</div>
	);
}

export default observer(Profile);