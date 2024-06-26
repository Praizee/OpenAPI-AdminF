"use client";

import React from "react";
import Link from "next/link";
import { Dropdown } from "antd";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import type { TableColumnsType, MenuProps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  customerType: string;
  status: string;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/business/details/customer-details">View details</Link>,
  },
];

const statusClasses: { [key: string]: string } = {
  Active: "text-[#1AD48D]",
  Pending: "text-[#FFD03A]",
  Inactive: "text-[#F6513B]",
};

const getInitials = (name: string) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return initials.toUpperCase();
};

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name: string) => (
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-8 h-8 bg-[#00000033] rounded-full text-black">
          {getInitials(name)}
        </div>
        <span>{name}</span>
      </div>
    ),
  },
  {
    title: "Created",
    dataIndex: "date",
    sorter: true,
  },
  {
    title: "Customer Type",
    dataIndex: "customerType",
    sorter: true,
  },
  {
    title: (
      <span className="flex items-center">
        <p>Status</p>
      </span>
    ),
    dataIndex: "status",
    sorter: true,
    render: (_: any, record: DataType) => {
      const statusClass = statusClasses[record.status] || "text-gray-500";
      return (
        <span className={`text-[14px] ${statusClass}`}>{record.status}</span>
      );
    },
  },
  {
    title: (
      <span className="flex items-center">
        <p>Action</p>
      </span>
    ),
    dataIndex: "_id",
    render: (_id: any, _record: DataType) => (
      <Dropdown menu={{ items }} placement="bottomRight">
        <button
          type="button"
          className="text-lg font-semibold"
          onClick={() => {
            sessionStorage.setItem("customer_id", _id);
          }}
        >
          ...
        </button>
      </Dropdown>
    ),
  },
];

const transformData = (apiData: any[]) => {
  return apiData.map((item, index) => ({
    key: index,
    _id: item._id,
    name: `${item.firstName} ${item.lastName}`,
    date: new Date(item.createdAt).toLocaleDateString(),
    customerType: item.userType,
    status: item.status.charAt(0).toUpperCase() + item.status.slice(1),
  }));
};

const CustomersTab = ({ data: apiResponse, loading }: any) => {
  const data = transformData(apiResponse?.data);

  return (
    <section className="max-w-[1640px] h-full overflow-x-scroll md:overflow-x-clip bg-white rounded-lg space-y-4 py-6">
      <Table columns={columns} dataSource={data} loading={loading} />
    </section>
  );
};

export default CustomersTab;
