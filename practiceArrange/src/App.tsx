import * as React from "react";
import Router from './router';
import {
  HashRouter,
} from 'react-router-dom'
import {actions, store} from './component/store/store';

import { Provider } from 'mobx-react';

class App extends React.Component<{}, {}> {
  public render(){
	return(
	 <Provider store={store} actions={actions}>
		<HashRouter>
			<Router />
		</HashRouter>
	</Provider>
	 )
 }
}

export default App;
  
