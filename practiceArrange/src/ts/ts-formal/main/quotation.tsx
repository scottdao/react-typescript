import * as React from "react";
import Tag from "@/ts/components/tag";
interface IState {
 match?:any,
 location?:object,
 history?:any,
 quotationList:object
}
class Quotation extends React.Component<{},IState> {
    
  public state = {
		quotationList:[{
			coinName:"BTC"
		},{coinName:"ETH"}, {coinName:"LTC"}]
	};
	public componentDidMount(){
		document.title= '行情';
	}
	public componentWillUnmount(){
		document.title = '';
	}
  public render(){
	const {quotationList} = this.state;
	 return(
		<div className="quotation-cotain-all">
			<ul>
			{
				quotationList && quotationList.map((res, index)=>{
					return(
					<li className='quotation-list' key={index}>
							<span>
								<p>BTC</p>
								<p style={{fontSize:"calc(18rem/14)", color:"#000",marginTop:'1rem'}}>ETH</p>
							</span>	
							<span >
								<p>
									¥5140.70
								</p> 
								<p style={{fontSize:"calc(18rem/14)", color:"#000", marginTop:'1rem'}}>
									0.1
								</p>
							</span>	
							<Tag className="quotation-ta" Color="red">
								-1.68%
							</Tag>
					</li>
					)
				})
			}
			</ul>
		</div>
	 )
 }
}

export default Quotation;