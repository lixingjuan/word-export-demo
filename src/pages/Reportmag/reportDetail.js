import React, { useState, useEffect } from "react";
import parse5 from "parse5";
import axios from "axios";

import Tpl from "./CompanyReportTpl";
import PageLayout from "../../components/PageLayout";
import { exportReport, createScanObj } from "./exportReport";

export default function Reportmag(props) {
  const {
    location: { pathname, search },
    history,
  } = props;
  const reportId = 369;
  const params = { deptLevel: "2" };
  console.log(reportId, params);
  const { type, deptLevel } = params;
  const [data, setData] = useState();
  const [state, setState] = useState({});

  const [hiddenHtml, setHiddenHtml] = useState("");

  const onFieldChange = (field, val) => {
    setState({ ...state, [field]: val });
  };

  function createMarkup() {
    return { __html: hiddenHtml };
  }

  useEffect(() => {
    const demo = async () => {
      const res = await axios.get("http://localhost:4000/");
      setHiddenHtml(res.data);
    };
    demo();
    const dataValue = {
      common: {
        reportMonth: "2019-09",
        id: 369,
        name: "word导出测试",
        createTime: "2019-10-10 14:49:13",
        updateTime: "2019-10-10 16:32:28",
        detail: "",
        period: "09",
        totalIssue: 66,
      },
      incomeInformation: [
        {
          reportId: 369,
          name: "楚天",
          monthIncome: 63289556,
          monthIncomePerday: 2041598.625,
          monthIncomeMom: -53.71900177001953,
          monthIncomeYoy: -39.39799880981445,
          planCompletionMonth: 5.440000057220459,
          yearIncome: 955429120,
          yearIncomePerday: 3931807,
          yearIncomeYoy: -98.09100341796875,
          planCompletionYear: 82.11699676513672,
          type: 2,
        },
        {
          reportId: 369,
          name: "XX",
          monthIncome: 55182236,
          monthIncomePerday: 1780072.125,
          monthIncomeMom: -54.19599914550781,
          monthIncomeYoy: -39.762001037597656,
          planCompletionMonth: 5.230999946594238,
          yearIncome: 836755328,
          yearIncomePerday: 3443437.75,
          yearIncomeYoy: -98.08300018310547,
          planCompletionYear: 79.31300354003906,
          type: 1,
        },
        {
          reportId: 369,
          name: "XX",
          monthIncome: 3277673.25,
          monthIncomePerday: 105731.3984375,
          monthIncomeMom: -42.62099838256836,
          monthIncomeYoy: -15.383000373840332,
          planCompletionMonth: 4.489999771118164,
          yearIncome: 40940904,
          yearIncomePerday: 168481.09375,
          yearIncomeYoy: -97.96600341796875,
          planCompletionYear: 56.08300018310547,
          type: 1,
        },
        {
          reportId: 369,
          name: "XX",
          monthIncome: 4829646,
          monthIncomePerday: 155795.03125,
          monthIncomeMom: -54.279998779296875,
          monthIncomeYoy: -46.06700134277344,
          planCompletionMonth: 13.604999542236328,
          yearIncome: 77732840,
          yearIncomePerday: 319888.21875,
          yearIncomeYoy: -98.23100280761719,
          planCompletionYear: 218.96600341796875,
          type: 1,
        },
      ],
    };
    setData(dataValue);
    console.log(data);
  }, []);

  const handleReportExport = async (idText) => {
    const { common } = data;
    let styles = require("./reportExportStyle").default;
    let contentObj = document.getElementById("content");
    console.log(contentObj);
    let WordSection2Obj = document.getElementsByClassName("WordSection2")[0];
    if (WordSection2Obj) {
      contentObj.insertBefore(createScanObj(), WordSection2Obj);
      contentObj.insertBefore(createScanObj(), WordSection2Obj.nextSibling);
    }
    console.log(contentObj, WordSection2Obj);
    exportReport(styles, contentObj.innerHTML, common.name);
  };

  // 不同报表类型，加载不同的模板

  return (
    <>
      {/* <PageLayout title="测试">
        <div
          id="hidden"
          style={{
            width: 1100,
            margin: "0 auto",
            padding: "30px 60px 90px",
            backgroundColor: "#fff",
          }}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </PageLayout> */}

      <PageLayout title="报告详情">
        <div
          id="content"
          style={{
            width: 1100,
            margin: "0 auto",
            padding: "30px 60px 90px",
            backgroundColor: "#fff",
          }}
        >
          {data && (
            <Tpl
              data={data}
              extraProps={{ type, deptLevel, state, onFieldChange }}
            />
          )}
        </div>
      </PageLayout>

      <div
        style={{
          textAlign: "right",
          padding: "10px 16px",
          backgroundColor: "#fff",
          borderTop: "1px solid #E6E6E6",
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <button type="primary" onClick={() => handleReportExport("content")}>
          导出demo报告
        </button>
        <button type="primary" onClick={() => handleReportExport("hidden")}>
          导出测试报告
        </button>
      </div>
    </>
  );
}
