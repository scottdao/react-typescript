import * as React from "react";
import {
  Route,
  NavLink 
} from 'react-router-dom';
import {Switch, Redirect} from 'react-router';
import Assets from'./main/assets';
import Mine from './main/mine';
import Quotation from './main/quotation';
import '@/css/main.css';
interface IProps {
 match?:any,
 location?:object,
 history?:any
}
class Index extends React.Component<IProps, {}> {

	
  public render(){
	 const {match, location} = this.props;
	 return(
		<div className="main-index">
			<ul className='main-nav'>
				<NavLink  to={`${match.url}/assets`} activeClassName="activeName">
					<li>
						<p>
						<span className="iconfont">&#xe605;</span>
						</p>
						<p>资产</p>
					</li>
				</NavLink >
				<NavLink  to={`${match.url}/quotation`}activeClassName="activeName" >
				<li>
				<p>
						<span className="iconfont">&#xe632;</span>
						</p>
						<p>行情</p>
					</li>
				</NavLink>
				<NavLink  to={`${match.url}/mine`} activeClassName="activeName">
					<li>	
						<p>
						<span className="iconfont">&#xe618;</span>
						</p>
						<p>我的</p>
					</li>
				</NavLink>
			</ul>
		{/*<input type='text' placeholder='请输入' onChange={(e)=>{
			let reg:any = new RegExp(e.target.value,'gi');
			let a:string = '上海交通大学Shanghai Jiao Tong University';
			 console.log(reg.test(a));
		}} />*/}
		<Switch location={location}>
			 <Route  exact     path={`${match.url}/mine`} component={Mine} />
			 <Route   exact    path={`${match.url}/quotation`}  component={Quotation} />
			 <Route   exact    path={`${match.url}/assets`}  component={Assets} />
			 <Route render={() => <Redirect to={`${match.url}/assets`} />} />
		</Switch>
		</div>
	 )
 }
}

export default Index;