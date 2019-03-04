import * as React from "react";
import {
  Route,
  NavLink 
} from 'react-router-dom';
import {Switch, Redirect} from 'react-router';
import Assets from'./main/assets';
import Mine from './main/mine';
interface IProps {
 match?:any,
 location?:object,
 history?:any
}
class Index extends React.Component<IProps, {}> {
    
  public state = {
		count:1
	};
	public componentDidMount(){
		
	}
  public render(){
	 const {match, location} = this.props;
	 let newArray:any = [{englishName:"Shanghai Jiao Tong University", chineseName:'上海交通大学'},{englishName:"", chineseName:'上海交通大学医学部'},{englishName:"", chineseName:'华中科技大学'}]
	 return(
		<div>
		首页
		<NavLink  to={`${match.url}/main`}>资产</NavLink >
		<NavLink  to={`${match.url}/mine`}>我的</NavLink >
		<input type='text' placeholder='请输入' onChange={(e)=>{
			let reg:any = new RegExp(e.target.value,'gi');
			//let a:string = '上海交通大学Shanghai Jiao Tong University';
			let arr:any = newArray.filter((res)=>{
				//console.log(reg.test(res.chineseName+''+res.englishName));
				return reg.test(res.chineseName+''+res.englishName);
			})
			 console.log(arr);
		}} />
		<Switch location={location}>
			 <Route       path={`${match.url}/mine`} component={Mine} />
			 <Route       path={`${match.url}/assets`}  component={Assets} />
			 <Route render={() => <Redirect to={`${match.url}/assets`} />} />
		</Switch>
		</div>
	 )
 }
}

export default Index;