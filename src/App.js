import {observer} from 'mobx-react';
import React from "react";
import AuthorizedLayout from "./layouts/AuthorizedLayout"
import UnautorizedLayout from "./layouts/UnautorizedLayout"
import {useStores} from "./hooks/use-stores";

const App = () => {
    /*const [inputText, setInputText] = useState("");*/
    const {authStore} = useStores();
    // console.log(authStore.isAuth);
    return (
      <div>
          { authStore.isAuth ? <AuthorizedLayout /> : <UnautorizedLayout /> }
      </div>
    );
}


export default observer(App);
