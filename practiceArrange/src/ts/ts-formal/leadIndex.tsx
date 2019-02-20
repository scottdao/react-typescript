import * as React from "react";
import {Link } from 'react-router-dom';
import {observer, inject} from 'mobx-react'
import '@/css/leadIndex.css';

interface IProps {
 match?:any,
 location?:object,
 history?:any,
 store?:any,
 actions?:any
}
@inject('store', 'actions')
@observer
class Login extends React.Component<IProps,{}> {
    
  public state = {
		count:1
	};

  public componentDidMount(){
		document.title = '冷钱包-首页';
  }
  public componentWillUnmount(){
		document.title = '';
	}
  public render(){
//const { store, actions } = this.props;
//console.log(this.props);
	 return(
		<div className="leadIndex">
		
		{/* <p>{store.a}</p>
        <p>
          <button className="ui-btn" onClick={actions.incA}>增加 a</button>
          <button className="ui-btn" onClick={actions.decA}>减少 a</button>
        </p>*/}
				<Link to='./leadTip'>
					<div className="index-btn">确认使用</div>	
				</Link>
		</div>
	 )
 }
}

export default Login;