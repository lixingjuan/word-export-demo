import React, { Component, PureComponent } from 'react';
import guangbo from "../../asset/guangbo.png"
import CommonMethod from "../../service/index.js"
var timer,timer1,timer2;
class Message extends Component {
    constructor(props) {
        console.log("props",props) 
        super(props);
        this.state={
            oldMessageList:[],
            newMessageList:[],
            index:0,
        }
      }
    componentDidMount(){
        const loop1=async()=>{
            clearTimeout(timer1)
            let oldMessages = await CommonMethod.getMessageList(this.props.id);
            this.setState({oldMessageList: oldMessages});
        }
        const loop2=async()=>{
            clearTimeout(timer2);
            let newMessages = await CommonMethod.getMessageList(this.props.id);
            this.setState({newMessageList: newMessages});
            timer2=setTimeout(loop2,10000)
        }
        const loop=async()=>{
            clearTimeout(timer);      
            if(this.state.index<this.state.oldMessageList.length-1){
                this.setState({index: (this.state.index)+1});
            }else{      
                this.setState({index:0, oldMessageList:this.state.newMessageList});
            }
            timer=setTimeout(loop,5000);
        }
        timer1=setTimeout(loop1,0)
        timer2=setTimeout(loop2,10000)
        timer=setTimeout(loop,5000);  
    }    
    render(){
        return(
                <div style={{backgroundColor:"rgb(107,72,39)", marginLeft:"0.92%", marginRight:"0.92%", borderTop:"0.0625rem solid rgb(171,104,5)",
                borderBottom:"0.0625rem solid rgb(171,104,5)", height:"3rem", paddingLeft:"1%", paddingTop:"0.3%"}}>
                    <img src={guangbo}/>
                    <span style={{paddingLeft:"1%", color:"#ccc", fontSize:"1.25rem"}}>{this.state.oldMessageList[this.state.index]}</span>
                </div>
        )
    }
    
}
export default Message;