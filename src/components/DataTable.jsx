import React from 'react';
import { Table, Button } from 'antd';

const DataTable = ({ connections, onEdit }) => {
  const columns = [
    { title: 'ID', dataIndex: 'ID', key: 'ID' },
    { title: 'Applicant Name', dataIndex: 'Applicant_Name', key: 'Applicant_Name' },
    { title: 'ID Number', dataIndex: 'ID_Number', key: 'ID_Number' },
    { title: 'Gender', dataIndex: 'Gender', key: 'Gender' },
    { title: 'District', dataIndex: 'District', key: 'District' },
    { title: 'State', dataIndex: 'State', key: 'State' },
    { title: 'Pincode', dataIndex: 'Pincode', key: 'Pincode' },
    { title: 'Ownership', dataIndex: 'Ownership', key: 'Ownership' },
    { title: 'Govt ID Type', dataIndex: 'GovtID_Type', key: 'GovtID_Type' },
    { title: 'Category', dataIndex: 'Category', key: 'Category' },
    { title: 'Load Applied (KV)', dataIndex: 'Load_Applied (in KV)', key: 'Load_Applied (in KV)' },
    { title: 'Date of Application', dataIndex: 'Date_of_Application', key: 'Date_of_Application' },
    { title: 'Date of Approval', dataIndex: 'Date_of_Approval', key: 'Date_of_Approval' },
    { title: 'Modified Date', dataIndex: 'Modified_Date', key: 'Modified_Date' },
    { title: 'Status', dataIndex: 'Status', key: 'Status' },
    { title: 'Reviewer ID', dataIndex: 'Reviewer_ID', key: 'Reviewer_ID' },
    { title: 'Reviewer Name', dataIndex: 'Reviewer_Name', key: 'Reviewer_Name' },
    { title: 'Reviewer Comments', dataIndex: 'Reviewer_Comments', key: 'Reviewer_Comments' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" onClick={() => onEdit(record)}>
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={connections}
      columns={columns}
      rowKey="ID"
    />
  );
};

export default DataTable;
