import Detail from '@/ts/ts-formal/detail';
import LeadIndex from '@/ts/ts-formal/leadIndex';
import LeadTip from '@/ts/ts-formal/leadTip';
import SetPassword from '@/ts/ts-formal/setPassword'
import Backups from '@/ts/ts-formal/backups'
import * as React from "react";
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import Main from '@/ts/ts-formal/main';

interface IState {
	routerPower: object
};
class RouterIndex extends React.Component<{}, IState> {
	public state = {
		routerPower: [{ url: '/main', limitURL: "/backups", components: (props) => <Main {...props} /> }, { url: '/detail', limitURL: "/backups", components: (props) => <Detail {...props} /> }]
	};
	public routerManagent = (logPower: string): any => {
		const { routerPower } = this.state;
		return (<Switch >
			{
				routerPower && routerPower.map((item, index) => {
					return <Route key={index} path={`${item.url}`} component={(props) => logPower == "liudaoyun" ? <item.components {...props} /> : <Redirect to={`${item.limitURL}`} />} />
				})
			}
			<Route component={() => <div>404</div>} />
		</Switch>);
	}
	public render() {
		//登录权限变量
		const loginPower: string = 'liudaoyun';
		//console.log(React);
		//console.log(useState);
		return (
			<Switch >
				<Route exact={true} path="/" component={LeadIndex} />
				<Route path="/leadTip" component={LeadTip} />
				<Route path="/setPassword" component={SetPassword} />
				<Route path="/backups" component={Backups} />
				{this.routerManagent(loginPower)}
				
			</Switch>
		)
	}
}

export default RouterIndex;