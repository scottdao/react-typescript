import Detail from '@/ts/ts-formal/detail';
import LeadIndex from '@/ts/ts-formal/leadIndex';
import LeadTip from '@/ts/ts-formal/leadTip';
import SetPassword from '@/ts/ts-formal/setPassword'
import Backups from '@/ts/ts-formal/backups'
import * as React from "react";
import { Route } from 'react-router-dom';
import {Switch} from 'react-router';
import Index from '@/ts/ts-formal';


class RouterIndex extends React.Component<{}, {}> {
  public render(){
	 return(
			<Switch >
			  <Route  exact={true} path="/" component={LeadIndex}/>
				<Route  path="/leadTip"  component={LeadTip}/>
				<Route  path="/setPassword"  component={SetPassword}/>
				<Route  path="/backups"  component={Backups}/>
				<Route  path="/index"  component={props=> <Index {...props} />}/>
				<Route  path='/detail' component={Detail} />
				<Route       component={() => <div>404</div>} />
			</Switch>
	 )
 }
}

export default RouterIndex;