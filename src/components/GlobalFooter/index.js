import React from "react";

export default function GlobalFooter(props) {
    const {time} = props
    return (
        <div style={{
            padding: "1rem 0",
            textAlign: 'center',
            // backgroundColor: 'green',
            fontSize: "1rem",
            color: "#3e3e3e",
            marginTop: "2.5rem"
        }}>
            <img src={require('../../asset/com-logo.png')} style={{width: '7rem', opacity: '0.65'}}/>
            数据同步时间：{'time' in time ? time.time : time.date}
            {/*<div style={{display:"inline-block", width:"4%", marginLeft:"44%"}}>腾路智行</div>*/}
            {/*<div style={{display:"inline-block", width:"6%" }}>数据同步时间:{'time'in time?time.time:time.date}</div>*/}
            {/*<div style={{display:"inline-block"}}>{'time'in time?time.time:time.date}</div>*/}
        </div>
    )
}