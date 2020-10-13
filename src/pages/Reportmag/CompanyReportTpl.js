import React, { useState, useEffect } from "react";
import { Textarea } from "tengitsui/dist";
import "./reportTpl.css";
import moment from "moment/moment";

const tdFirstStyle = {
  borderTop: "double black 1.5pt",
  padding: "5px 1px",
  whiteSpace: "nowrap",
};
const tdLastStyle = { ...tdFirstStyle, borderRight: "none" };
const tdNowrap = { whiteSpace: "nowrap", padding: "5px 1px" };

export default function CompanyReportTpl(props) {
  const {
    data,
    extraProps: { type, state, onFieldChange },
  } = props;
  const { note = "", suggestion = "" } = state;
  const {
    common,
    earnInformation,
    incomeInformation,
    beforeEarnInformation,
    inspectionInformation,
    laneFlowInformation,
    freeCarInformation,
    publicityInformation,
    hotlineInformation,
    billInformation,
    maintainInformation,
    checkInformation,
  } = data;
  console.log(props);
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
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p
          className="MsoNormal"
          style={{ textAlign: "center", margin: "10px 0", lineHeight: "30pt" }}
        >
          <span className="aa">
            第{moment(common.reportMonth).format("M")}期
          </span>
          <br />
          <span className="aa">（总第{common.totalIssue}期）</span>
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
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <b className="monthTitle">
            {moment(common.reportMonth).format("YYYY年M月")}
            XX公司收费运营调度管理报告
          </b>
        </p>
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
        {earnInformation &&
          earnInformation.map((item, index) => (
            <p
              key={index}
              className="MsoNormal mainTextP"
              style={{ textIndent: "32pt" }}
            >
              <span className="mainTextStyle">
                <b>
                  {["", "XX段：", "XX段：", "XX段："][index]}
                  {moment(common.reportMonth).format("M月")}
                </b>
                车道收入{(item.passAllEarn / 10000).toFixed(2)}万元（日均
                {(item.earnAvgDay / 10000).toFixed(2)}万元），环比日均
                {item.earnAvgDayMom >= 0
                  ? "上升" + item.earnAvgDayMom.toFixed(2)
                  : "下降" + -item.earnAvgDayMom.toFixed(2)}
                %，同比
                {item.earnAvgDayYoy >= 0
                  ? "上升" + item.earnAvgDayYoy.toFixed(2)
                  : "下降" + -item.earnAvgDayYoy.toFixed(2)}
                %，完成全年计划{item.planCompletionMonth.toFixed(2)}%。
                <b>
                  1
                  {moment(common.reportMonth).format("M月") === "1月"
                    ? "月"
                    : `-${moment(common.reportMonth).format("M月")}`}
                  累计
                </b>
                车道收入{(item.passEarnYear / 10000).toFixed(2)}万元（日均
                {(item.earnAvgDayYear / 10000).toFixed(2)}万元），同比
                {item.earnGrowthYoy >= 0
                  ? "上升" + item.earnGrowthYoy.toFixed(2)
                  : "下降" + -item.earnGrowthYoy.toFixed(2)}
                %，完成全年计划{item.planCompletionYear.toFixed(2)}%。
              </span>
            </p>
          ))}
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">（二）到账收入</span>
        </p>
        {incomeInformation &&
          incomeInformation.map((item, index) => (
            <p
              key={index}
              className="MsoNormal mainTextP"
              style={{ textIndent: "32pt" }}
            >
              <span className="mainTextStyle">
                <b>
                  {["", "XX段：", "XX段：", "XX段："][index]}
                  {moment(common.reportMonth).format("M月")}
                </b>
                {index === 0 ? "公司" : ""}到账收入
                {(item.monthIncome / 10000).toFixed(2)}万元（日均
                {(item.monthIncomePerday / 10000).toFixed(2)}万元），环比日均
                {item.monthIncomeMom >= 0
                  ? "上升" + item.monthIncomeMom.toFixed(2)
                  : "下降" + -item.monthIncomeMom.toFixed(2)}
                %，同比
                {item.monthIncomeYoy >= 0
                  ? "上升" + item.monthIncomeYoy.toFixed(2)
                  : "下降" + -item.monthIncomeYoy.toFixed(2)}
                %，完成全年计划{item.planCompletionMonth.toFixed(2)}%。
                <b>
                  1
                  {moment(common.reportMonth).format("M月") === "1月"
                    ? "月"
                    : `-${moment(common.reportMonth).format("M月")}`}
                  累计
                </b>
                到账收入{(item.yearIncome / 10000).toFixed(2)}万元（日均
                {(item.yearIncomePerday / 10000).toFixed(2)}万元），同比
                {item.yearIncomeYoy >= 0
                  ? "上升" + item.yearIncomeYoy.toFixed(2)
                  : "下降" + -item.yearIncomeYoy.toFixed(2)}
                %，完成年度计划{item.planCompletionYear.toFixed(2)}%。
              </span>
            </p>
          ))}
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <b className="titleFirstLevel">二、各路段运营情况</b>
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">
            （一）{moment(common.reportMonth).format("M月")}
            累计收入情况（单位：万元）
          </span>
        </p>
        {beforeEarnInformation && (
          <div align="center">
            <table
              className="MsoNormalTable table1"
              border="1"
              cellSpacing="0"
              cellPadding="0"
            >
              <tbody>
                <tr>
                  <td
                    rowSpan="2"
                    width="75"
                    align="center"
                    style={tdFirstStyle}
                  >
                    单位
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    车道收入
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    日均
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    占本路段通
                    <br />
                    行费比%
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    占总收
                    <br />
                    入比%
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    年度计划
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    完成年度
                    <br />
                    计划比%
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    客车收入
                  </td>
                  <td rowSpan="2" align="center" style={tdFirstStyle}>
                    货车收入
                  </td>
                  <td colSpan="3" align="center" style={tdLastStyle}>
                    同比
                  </td>
                </tr>
                <tr>
                  <td align="center" style={tdNowrap}>
                    车道
                    <br />
                    收入
                  </td>
                  <td align="center" style={tdNowrap}>
                    客车
                    <br />
                    收入
                  </td>
                  <td
                    align="center"
                    style={{ ...tdNowrap, borderRight: "none" }}
                  >
                    货车
                    <br />
                    收入
                  </td>
                </tr>
                {beforeEarnInformation.map((item, index, arr) => (
                  <tr key={index}>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.type === 1 || item.type === 2 ? (
                        <b>{item.name}</b>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.allEarn / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.allEarnAvgday / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.percentCenter === -1
                        ? "--"
                        : item.percentCenter.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.percentCompany.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.planningmoney / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.planCompletion.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.coachEarn / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.struckEarn / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.allEarnYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.coachEarnYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={{
                        borderBottom:
                          index === arr.length - 1 ? "double black 1.5pt" : "",
                        borderRight: "none",
                        ...tdNowrap,
                      }}
                    >
                      {item.struckEarnYoy.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">
            （二）{moment(common.reportMonth).format("M月")}
            累计堵漏情况（单位：次、万元）
          </span>
        </p>
        {inspectionInformation && (
          <div align="center">
            <table
              className="MsoNormalTable table1"
              border="1"
              cellSpacing="0"
              cellPadding="0"
            >
              <tbody>
                <tr>
                  <td
                    rowSpan="2"
                    width="65"
                    align="center"
                    style={tdFirstStyle}
                  >
                    单位
                  </td>
                  <td
                    colSpan="6"
                    width="338"
                    align="center"
                    style={tdFirstStyle}
                  >
                    {moment(common.reportMonth).format("YYYY年M月")}累计
                  </td>
                  <td
                    rowSpan="2"
                    width="55"
                    align="center"
                    style={tdFirstStyle}
                  >
                    年度计划
                  </td>
                  <td
                    rowSpan="2"
                    width="55"
                    align="center"
                    style={tdFirstStyle}
                  >
                    完成年度计划比%
                  </td>
                  <td
                    colSpan="2"
                    width="103"
                    align="center"
                    style={tdFirstStyle}
                  >
                    去年同期数据
                  </td>
                  <td colSpan="2" align="center" style={tdLastStyle}>
                    同比%
                  </td>
                </tr>
                <tr>
                  <td align="center" width="57">
                    堵漏次数
                  </td>
                  <td align="center" width="57">
                    占路段比%
                  </td>
                  <td align="center" width="57">
                    占公司比%
                  </td>
                  <td align="center" width="57">
                    堵漏金额
                  </td>
                  <td align="center" width="57">
                    占路段比%
                  </td>
                  <td align="center" width="57">
                    占公司比%
                  </td>
                  <td align="center" width="57">
                    堵漏次数
                  </td>
                  <td align="center" width="57">
                    堵漏金额
                  </td>
                  <td align="center" width="57">
                    堵漏次数
                  </td>
                  <td align="center" width="57" style={{ borderRight: "none" }}>
                    堵漏金额
                  </td>
                </tr>
                {inspectionInformation.map((item, index, arr) => (
                  <tr key={index}>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.type === 1 || item.type === 2 ? (
                        <b>{item.name}</b>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.amount}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {index === 0 ? "--" : item.amountPercentCenter.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.amountPercentCompany.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.money / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {index === 0 ? "--" : item.moneyPercentCenter.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyPercentCompany.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.plan / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.planCompletion.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.lastYearAmount}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.lastYearMoney / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.amountYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={{
                        borderBottom:
                          index === arr.length - 1 ? "double black 1.5pt" : "",
                        borderRight: "none",
                        ...tdNowrap,
                      }}
                    >
                      {item.moneyYoy.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
      </div>
      <div className="WordSection2" style={{ layoutGrid: "15.6pt" }}>
        {laneFlowInformation && (
          <div align="center">
            <table
              className="MsoNormalTable table1"
              border="1"
              cellSpacing="0"
              cellPadding="0"
            >
              <tbody>
                <tr>
                  <td
                    rowSpan="2"
                    width="63"
                    align="center"
                    style={tdFirstStyle}
                  >
                    单位
                  </td>
                  <td colSpan="4" align="center" style={tdFirstStyle}>
                    入出口
                  </td>
                  <td colSpan="2" align="center" style={tdFirstStyle}>
                    入口
                  </td>
                  <td colSpan="10" align="center" style={tdLastStyle}>
                    出口
                  </td>
                </tr>
                <tr>
                  <td align="center">流量</td>
                  <td align="center">占路段比%</td>
                  <td align="center">占公司比%</td>
                  <td align="center">同比%</td>
                  <td align="center">流量</td>
                  <td align="center">同比%</td>
                  <td align="center">流量</td>
                  <td align="center">同比%</td>
                  <td align="center">交费流量</td>
                  <td align="center">同比%</td>
                  <td align="center">交费客车流量</td>
                  <td align="center">同比%</td>
                  <td align="center">交费货车流量</td>
                  <td align="center">同比%</td>
                  <td align="center">免费流量</td>
                  <td align="center" style={{ borderRight: "none" }}>
                    同比%
                  </td>
                </tr>
                {laneFlowInformation.map((item, index, arr) => (
                  <tr key={index}>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.type === 1 || item.type === 2 ? (
                        <b>{item.name}</b>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.total / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {index === 0 ? "--" : item.totalPercentCenter.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.totalPercentCompany.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.totalYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.into / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.intoYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.outAll / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.outYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.outTc / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.outTcYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.outC / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.outCYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.outT / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.outTYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.outFree / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={{
                        borderBottom:
                          index === arr.length - 1 ? "double black 1.5pt" : "",
                        borderRight: "none",
                        ...tdNowrap,
                      }}
                    >
                      {item.outFreeYoy.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">
            （四）{moment(common.reportMonth).format("M月")}
            累计免费车情况（单位：万辆、万元）
          </span>
        </p>
        {freeCarInformation && (
          <div align="center">
            <table
              className="MsoNormalTable table1"
              style={{ fontSize: "8pt" }}
              border="1"
              cellSpacing="0"
              cellPadding="0"
            >
              <tbody>
                <tr>
                  <td rowSpan="3" align="center" style={tdFirstStyle}>
                    单位
                  </td>
                  <td colSpan="8" align="center" style={tdFirstStyle}>
                    {moment(common.reportMonth).format("YYYY年M月")}累计
                  </td>
                  <td colSpan="8" align="center" style={tdFirstStyle}>
                    占比%
                  </td>
                  <td colSpan="8" align="center" style={tdLastStyle}>
                    同比%
                  </td>
                </tr>
                <tr>
                  <td align="center" style={tdNowrap} colSpan="2">
                    合计
                  </td>
                  <td align="center" style={tdNowrap} colSpan="2">
                    军警车
                  </td>
                  <td align="center" style={tdNowrap} colSpan="2">
                    绿色通道车
                  </td>
                  <td align="center" style={tdNowrap} colSpan="2">
                    其他免费车
                  </td>
                  <td align="center" style={tdNowrap} colSpan="4">
                    免费流量占出口交费车流量比
                  </td>
                  <td align="center" style={tdNowrap} colSpan="4">
                    免费金额占车道收入比
                  </td>
                  <td align="center" style={tdNowrap} colSpan="2">
                    合计
                  </td>
                  <td align="center" style={tdNowrap} colSpan="2">
                    军警车
                  </td>
                  <td align="center" style={tdNowrap} colSpan="2">
                    绿色通道车
                  </td>
                  <td
                    align="center"
                    colSpan="2"
                    style={{ ...tdNowrap, borderRight: "none" }}
                  >
                    其他免费车
                  </td>
                </tr>
                <tr>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td align="center" style={tdNowrap}>
                    金额
                  </td>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td align="center" style={tdNowrap}>
                    金额
                  </td>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td align="center" style={tdNowrap}>
                    金额
                  </td>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td align="center" style={tdNowrap}>
                    金额
                  </td>
                  <td align="center" style={tdNowrap}>
                    合计
                  </td>
                  <td align="center" style={tdNowrap}>
                    军警车
                  </td>
                  <td align="center" style={tdNowrap}>
                    绿色
                    <br />
                    通道
                  </td>
                  <td align="center" style={tdNowrap}>
                    其他免
                    <br />
                    费车
                  </td>
                  <td align="center" style={tdNowrap}>
                    合计
                  </td>
                  <td align="center" style={tdNowrap}>
                    军警车
                  </td>
                  <td align="center" style={tdNowrap}>
                    绿色
                    <br />
                    通道
                  </td>
                  <td align="center" style={tdNowrap}>
                    其他免
                    <br />
                    费车
                  </td>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td align="center" style={tdNowrap}>
                    金额
                  </td>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td align="center" style={tdNowrap}>
                    金额
                  </td>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td align="center" style={tdNowrap}>
                    金额
                  </td>
                  <td align="center" style={tdNowrap}>
                    流量
                  </td>
                  <td
                    align="center"
                    style={{ ...tdNowrap, borderRight: "none" }}
                  >
                    金额
                  </td>
                </tr>
                {freeCarInformation.map((item, index, arr) => (
                  <tr key={index}>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.type === 1 || item.type === 2 ? (
                        <b>{item.name}</b>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.flowTotal / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.moneyTotal / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.flowM / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.moneyM / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.flowG / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.moneyG / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.flowF / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {(item.moneyF / 10000).toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowTotalRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowMRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowGRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowFRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyTotalRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyMRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyGRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyFRatio.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowTotalYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyTotalYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowMYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyMYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowGYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.moneyGYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.flowFYoy.toFixed(2)}
                    </td>
                    <td
                      align="center"
                      style={{
                        borderBottom:
                          index === arr.length - 1 ? "double black 1.5pt" : "",
                        borderRight: "none",
                        ...tdNowrap,
                      }}
                    >
                      {item.moneyFYoy.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
      </div>
      <div className="WordSection1">
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">
            （五）{moment(common.reportMonth).format("M月")}
            累计宣传报道情况（单位：篇）
          </span>
        </p>
        {publicityInformation && (
          <div align="center">
            <table
              className="MsoNormalTable table1"
              border="1"
              cellSpacing="0"
              cellPadding="0"
            >
              <tbody>
                <tr>
                  <td
                    rowSpan="2"
                    width="80"
                    align="center"
                    style={tdFirstStyle}
                  >
                    单位
                  </td>
                  <td colSpan="2" align="center" style={tdFirstStyle}>
                    合计
                  </td>
                  <td colSpan="2" align="center" style={tdFirstStyle}>
                    管理动态
                  </td>
                  <td colSpan="2" align="center" style={tdFirstStyle}>
                    典型案例
                  </td>
                  <td colSpan="2" align="center" style={tdLastStyle}>
                    好人好事
                  </td>
                </tr>
                <tr>
                  <td width="70" style={tdNowrap} align="center">
                    {moment(common.reportMonth).format("M月")}
                  </td>
                  <td width="90" style={tdNowrap} align="center">
                    全年累计
                  </td>
                  <td width="70" style={tdNowrap} align="center">
                    {moment(common.reportMonth).format("M月")}
                  </td>
                  <td width="90" style={tdNowrap} align="center">
                    全年累计
                  </td>
                  <td width="70" style={tdNowrap} align="center">
                    {moment(common.reportMonth).format("M月")}
                  </td>
                  <td width="90" style={tdNowrap} align="center">
                    全年累计
                  </td>
                  <td width="70" style={tdNowrap} align="center">
                    {moment(common.reportMonth).format("M月")}
                  </td>
                  <td
                    width="90"
                    style={{ ...tdNowrap, borderRight: "none" }}
                    align="center"
                  >
                    全年累计
                  </td>
                </tr>
                {publicityInformation.map((item, index, arr) => (
                  <tr key={index}>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.type === 1 || item.type === 2 ? (
                        <b>{item.name}</b>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.monthSummary}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.yearSummary}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.monthManage}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.yearManage}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.monthCase}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.yearCase}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.monthGood}
                    </td>
                    <td
                      align="center"
                      style={{
                        borderBottom:
                          index === arr.length - 1 ? "double black 1.5pt" : "",
                        borderRight: "none",
                        ...tdNowrap,
                      }}
                    >
                      {item.yearGood}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">
            （六）{moment(common.reportMonth).format("M月")}
            累计投诉情况（单位：次）
          </span>
        </p>
        {hotlineInformation && (
          <div align="center">
            <table
              className="MsoNormalTable table1"
              border="1"
              cellSpacing="0"
              cellPadding="0"
            >
              <tbody>
                <tr>
                  <td width="90" align="center" style={tdFirstStyle}>
                    单位
                  </td>
                  <td width="80" align="center" style={tdFirstStyle}>
                    单位合计
                  </td>
                  <td width="80" align="center" style={tdFirstStyle}>
                    文明服务
                  </td>
                  <td width="80" align="center" style={tdFirstStyle}>
                    优惠政策
                  </td>
                  <td width="80" align="center" style={tdFirstStyle}>
                    免费政策
                  </td>
                  <td width="80" align="center" style={tdFirstStyle}>
                    车型争议
                  </td>
                  <td width="80" align="center" style={tdFirstStyle}>
                    称重争议
                  </td>
                  <td width="80" align="center" style={tdFirstStyle}>
                    排队堵道
                  </td>
                  <td width="80" align="center" style={tdLastStyle}>
                    其它
                  </td>
                </tr>
                {hotlineInformation.map((item, index, arr) => (
                  <tr key={index}>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.type === 1 || item.type === 2 ? (
                        <b>{item.name}</b>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.all}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.service}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.discount}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.free}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.style}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.weight}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.traffic}
                    </td>
                    <td
                      align="center"
                      style={{
                        borderBottom:
                          index === arr.length - 1 ? "double black 1.5pt" : "",
                        borderRight: "none",
                        ...tdNowrap,
                      }}
                    >
                      {item.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>
        <p className="MsoNormal mainTextP" style={{ textIndent: "32pt" }}>
          <span className="titleSecondLevel">
            （八）{moment(common.reportMonth).format("M月")}
            机电故障累计情况（单位：次）
          </span>
        </p>
        {maintainInformation && (
          <div align="center">
            <table
              className="MsoNormalTable table1"
              border="1"
              cellSpacing="0"
              cellPadding="0"
            >
              <tbody>
                <tr>
                  <td width="90" align="center" style={tdFirstStyle}>
                    单位
                  </td>
                  <td width="90" align="center" style={tdFirstStyle}>
                    合计
                  </td>
                  <td width="90" align="center" style={tdFirstStyle}>
                    收费系统
                  </td>
                  <td width="90" align="center" style={tdFirstStyle}>
                    计重系统
                  </td>
                  <td width="90" align="center" style={tdFirstStyle}>
                    监控系统
                  </td>
                  <td width="90" align="center" style={tdFirstStyle}>
                    通讯系统
                  </td>
                  <td width="100" align="center" style={tdLastStyle}>
                    供配电系统
                  </td>
                </tr>
                {maintainInformation.map((item, index, arr) => (
                  <tr key={index}>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.type === 1 || item.type === 2 ? (
                        <b>{item.name}</b>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.inall}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.fee}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.weight}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.monitor}
                    </td>
                    <td
                      align="center"
                      style={
                        index === arr.length - 1
                          ? { ...tdNowrap, borderBottom: "double black 1.5pt" }
                          : tdNowrap
                      }
                    >
                      {item.message}
                    </td>
                    <td
                      align="center"
                      style={{
                        borderBottom:
                          index === arr.length - 1 ? "double black 1.5pt" : "",
                        borderRight: "none",
                        ...tdNowrap,
                      }}
                    >
                      {item.power}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="MsoNormal" style={{ textAlign: "center" }}>
          <br />
        </p>

        <p className="MsoNormal mainTextP">
          <br />
        </p>
        <p className="MsoNormal mainTextP">
          <br />
        </p>
        <p
          className="MsoNormal mainTextP"
          style={{ textIndent: "32pt", textAlign: "right" }}
        >
          <span className="mainTextStyle">
            {moment(common.updateTime).format("YYYY年M月D日")}
          </span>
        </p>
      </div>
    </>
  );
}
