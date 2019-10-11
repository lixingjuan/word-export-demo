import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { getActiveMenuByPathname } from "./menu";
const { SubMenu } = Menu;
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    
  }
  getPathname(path) {
    if(path.split('/')[1]=='notification'){return ['1'];}
    if(path.split('/')[1]=='reportmag'){return ['2'];}
}
  componentDidMount() {}

  render() {
    const { location: {pathname} } = this.props;
    let current=this.getPathname(pathname);

    return (
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={current}
        style={{ height: "100%", borderRight: 0 }}
      >
                    <Menu.Item key="1">
                        <Icon type="environment" />
                        <span>通知发布</span>
                        <Link to="/notification" />
                    </Menu.Item>
                    <Menu.Item key="2" onSelect={()=>this.state.current=['2']}>
                        <Icon type="table" />
                        <span>报告管理</span>
                        <Link to="/reportmag" />
                    </Menu.Item>
      </Menu>
    );
  }
}
