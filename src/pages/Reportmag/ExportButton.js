/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React from "react";

function ExportButton() {
  const handleReportExport = async (idText) => {
    const { common } = data;
    let styles = require("./reportExportStyle").default;
    let contentObj = document.getElementById(idText);
    console.log(contentObj);
    let WordSection2Obj = document.getElementsByClassName("WordSection2")[0];
    if (WordSection2Obj) {
      contentObj.insertBefore(createScanObj(), WordSection2Obj);
      contentObj.insertBefore(createScanObj(), WordSection2Obj.nextSibling);
    }
    console.log(contentObj, WordSection2Obj);
    exportReport(styles, contentObj.innerHTML, common.name);
  };

  return (
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
  );
}

export default ExportButton;
