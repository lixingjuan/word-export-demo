/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React from "react";
import { Table } from "antd";

function IndexPage() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  console.log("页面重新渲染");
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
      onRow={(record) => {
        return {
          onClick: (event) => {}, // 点击行
          onDoubleClick: (event) => {},
          onContextMenu: (event) => {},
          onMouseEnter: (event) => {}, // 鼠标移入行
          onMouseLeave: (event) => {},
        };
      }}
    />
  );
}

export default IndexPage;
