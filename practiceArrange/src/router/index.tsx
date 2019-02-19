import Detail from '@/ts/detail';
import LeadIndex from '@/ts/leadIndex';
import LeadTip from '@/ts/leadTip';
import SetPassword from '@/ts/setPassword'
import * as React from "react";
import { Route } from 'react-router-dom';
import {Switch} from 'react-router';
import Index from '@/ts';


class RouterIndex extends React.Component<{}, {}> {
  public render(){
	 return(
			<Switch >
			  <Route  exact={true} path="/" component={LeadIndex}/>
				<Route  path="/leadTip"  component={LeadTip}/>
				<Route  path="/setPassword"  component={SetPassword}/>
				<Route  path="/index"  component={props=> <Index {...props} />}/>
				<Route  path='/detail' component={Detail} />
				<Route       component={() => <div>404</div>} />
			</Switch>
	 )
 }
}

export default RouterIndex;