import React from "react";
import { withRouter } from "react-router-dom";
import {Icon } from "tengitsui/dist";

const PageLayout=({title,content,children,history })=><div>
    <div style={{ height: "48px" , backgroundColor: "#fff",display:'flex',alignItems:'center',position:'fixed',
        zIndex:2,width:'100%'}}>
        <span className="back" onClick={() => history.goBack()}><Icon type="left" /></span>
        <span style={{fontSize:14}}>{title}</span>
        {content}
    </div>
    <div style={{padding:24 }}>
        {children}
    </div>
</div>
export default withRouter(PageLayout);


