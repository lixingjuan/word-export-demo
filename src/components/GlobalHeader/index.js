import React, { Component, useEffect } from 'react';
import { Divider } from "antd";
import CommonMethod from "../../service/index";
import weatherPictures from "./weatherPicture"
class GlobalHeader extends Component {
    constructor(props) {   
        super(props);
        this.state={
            weather: "",
            temperature: "",
            code: ""
        }
      }
    getWeather = async(longitude, latitude)=>{
        const {weather,temperature,code} = await CommonMethod.fetchWeatherData(longitude, latitude);
        this.setState({weather,temperature,code})
    }
    componentDidMount(){
        const {common}=this.props;
        this.getWeather(common.longitude,common.latitude);
    }
    render(){
        const {common} = this. props;
        const day='time'in common?common.time.split(" "):common.date.split(" ");
        return(
                <div style={{height:"3.13rem", marginLeft:"1.25rem", marginRight:"1.25rem", paddingTop:"0.625rem"}}>
                    <span style={{color:"#ccc", fontSize:"1.25rem"}}>{common.name}信息总览</span>
                    <div style={{float:"right", color:"#ccc", fontSize:"1rem"}}>
                        <span >{day[0]}</span>
                        <span style={{marginLeft:"1rem"}}>{common.week}</span>
                        <Divider type="vertical" style={{marginLeft:"0.625rem"}}/>
                        <span>{this.state.weather}</span>
                        <span style={{marginLeft:"0.6875rem"}}>{this.state.temperature}</span>    
                        <img src={weatherPictures[this.state.code]} style={{marginLeft:"0.625rem",height:"1.5rem",marginTop:"-0.3125rem"}}/>
                    </div>    
                </div>
        )
    }    
}
export default GlobalHeader;