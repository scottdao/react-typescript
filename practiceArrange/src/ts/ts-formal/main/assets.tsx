import * as React from "react";
import Axios from 'axios';
class Main extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
	public componentDidMount(){
		document.title= '资产';
	}
	public componentWillUnmount(){
		document.title = '';
	}
	public download = ():any =>{
		console.log(111);
		let url:string = 'http://192.168.2.68:4100/download?callId=cTYDtZhZsLRFtWMfd';
		Axios({
		  method: 'get',
		  url,
		  responseType: 'blob',
		})
		  .then(res => {
			console.log(res);
			// this.downloadPass(res);
		  })
		  .catch(error => {
			console.log(error);
		  });
	}
  public render(){
		
	 return(
		<div>
		主页界面
		<a href="javascript:;" onClick={this.download}>点击下载</a>
		</div>
	 )
 }
}

export default Main;