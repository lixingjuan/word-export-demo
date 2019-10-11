import React, { Component } from "react";
import gt from "../../libs/gt";
import { message } from "antd";
import "./index.less";
export default class GTcode extends Component {
  getGTcode(gt_params) {
    const { validateGT } = this.props.opts;
    return new Promise((resolve, reject) => {
      window.initGeetest(
        {
          product: "float",
          gt: gt_params.gt,
          challenge: gt_params.challenge,
          offline: !gt_params.success,
          new_captcha:
            gt_params.new_captcha == null ? true : gt_params.new_captcha
        },
        captchaObj => {
          captchaObj.appendTo("#captcha");
          captchaObj.onReady(() => {
            document.getElementById("wait").style.display = "none";
          });
          captchaObj.onSuccess(() => {
            const result = captchaObj.getValidate();
            validateGT({ success: gt_params.success, ...result }).then(resolve);
          });
        }
      );
    });
  }
  componentDidMount() {
    const { registerGT } = this.props.opts;
    registerGT()
      .then(this.getGTcode.bind(this))
      .then(this.props.onChange)
      .catch(e => {
        message.error(e.message || "验证码加载失败，刷新页面重试");
      });
  }
  render() {
    return (
      <div id="captcha" style={{ marginBottom: 20 }}>
        <p id="wait">正在加载验证码......</p>
      </div>
    );
  }
}
