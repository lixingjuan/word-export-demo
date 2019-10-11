import React, { Component } from "react";
import { Layout, Icon } from "antd";
import "./index.less";
import UserMenu from "../UserMenu";
import SideMenu from "../SideMenu";
import cdn from "../../libs/cdn";
const { Header, Content, Sider } = Layout;
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  onCollapse(collapsed) {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    const { children, title = "收费运营平台", user, logout, menu } = this.props;
    return (
      <Layout className="Page">
            <div>{children}</div>
      </Layout>
    );
  }
}
