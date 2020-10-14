import React, { useState, useEffect } from "react";
import "./reportTpl.css";
import moment from "moment/moment";
import { Table } from "antd";

const tdFirstStyle = {
  borderTop: "double black 1.5pt",
  padding: "5px 1px",
  whiteSpace: "nowrap",
};

const tdLastStyle = { ...tdFirstStyle, borderRight: "none" };

export default function CompanyReportTpl(props) {
  console.log({ props });
  const {
    data,
    extraProps: { type, state, onFieldChange },
  } = props;

  const { note = "", suggestion = "" } = state;

  const { common, earnInformation } = data;

  return (
    <>
      <div className="WordSection1">
        <h1
          className="MsoNormal"
          align="center"
          style={{ textAlign: "center" }}
        >
          <b className="reportTitle">XX高速收费工作简报</b>
        </h1>
        <img src="https://pic.qqtn.com/up/2019-9/15690311636958128.jpg" />
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>

        <p
          className="MsoNormal"
          style={{
            fontSize: "14.0pt",
            fontFamily: "楷体_GB2312",
            lineHeight: "30pt",
            textAlign: "center",
            margin: "10px 0",
            borderBottom: "6px solid #0070C0",
          }}
        >
          XX公司运营管理部&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {moment(common.updateTime).format("YYYY年M月D日")}
        </p>

        <table
          border="1"
          cellPadding="0"
          cellSpacing="0"
          style={{ border: "green 1px solid" }}
        >
          <tbody>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
          </tbody>
        </table>

        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="mainTextStyle">
            为进一步提高公司收费运营管理水平，准确把握收费形势，加大对各管理所目标完成情况的指导和督办，现结合
            {moment(common.reportMonth).format("M月")}
            份收费运营实际情况，形成月度调度管理报告如下：
          </span>
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <b className="titleFirstLevel">
            一、{moment(common.reportMonth).format("M月")}份通行费收入完成情况
          </b>
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">（一）车道收入</span>
        </p>
      </div>
    </>
  );
}
