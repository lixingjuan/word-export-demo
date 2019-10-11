import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
import "./index.less";

class UserMenu extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  render() {
    const { user = {}, logout } = this.props;
    const menu = (
      <Menu className="userMenu-box">
        <Menu.Item>
          <Link
            to={{
              pathname: `/users/info`,
              state: { modal: true, from: this.props.location }
            }}
          >
            个人信息
          </Link>
        </Menu.Item>
        {!!user.user_type ? (
          <Menu.Item>
            <Link
              to={{
                pathname: `/users/repassword`,
                state: { modal: true, from: this.props.location }
              }}
            >
              修改密码
            </Link>
          </Menu.Item>
        ) : null}

        <Menu.Item>
          <a
            onClick={() => {
              logout().then(this.props.history.push("/login"));
            }}
          >
            退出
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <div className="UserMenu">
          <Icon
            type="user"
            style={{
              border: "1px solid",
              borderRadius: "50%",
              marginRight: "5px"
            }}
          />
          <span>{user.nick_name || "获取用户失败"}</span>
        </div>
      </Dropdown>
    );
  }
}

export default withRouter(UserMenu);
