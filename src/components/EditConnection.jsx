import React, { useState } from 'react';
import { Input, Button, Modal, Form, message } from 'antd';

const EditConnection = ({ visible, connection, onSave, onCancel }) => {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState('');

  const validateLoad = () => {
    const loadApplied = form.getFieldValue('Load_Applied (in KV)');
    if (loadApplied > 200) {
      setErrors('Load Applied cannot exceed 200 KV');
      return false;
    }
    setErrors('');
    return true;
  };

  const handleSave = () => {
    if (validateLoad()) {
      onSave({ ...form.getFieldsValue() });
    } else {
      message.error(errors);
    }
  };

  return (
    <Modal
      title="Edit Connection"
      visible={visible}
      onOk={handleSave}
      onCancel={onCancel}
      okText="Save"
      cancelText="Cancel"
    >
      <Form
        form={form}
        initialValues={connection}
        layout="vertical"
      >
        <Form.Item label="ID" name="ID">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Applicant Name" name="Applicant_Name">
          <Input />
        </Form.Item>
        <Form.Item label="ID Number" name="ID_Number">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Gender" name="Gender">
          <Input />
        </Form.Item>
        <Form.Item label="District" name="District">
          <Input />
        </Form.Item>
        <Form.Item label="State" name="State">
          <Input />
        </Form.Item>
        <Form.Item label="Pincode" name="Pincode">
          <Input />
        </Form.Item>
        <Form.Item label="Ownership" name="Ownership">
          <Input />
        </Form.Item>
        <Form.Item label="Govt ID Type" name="GovtID_Type">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Category" name="Category">
          <Input />
        </Form.Item>
        <Form.Item label="Load Applied (KV)" name="Load_Applied (in KV)">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Date of Application" name="Date_of_Application">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Date of Approval" name="Date_of_Approval">
          <Input />
        </Form.Item>
        <Form.Item label="Modified Date" name="Modified_Date">
          <Input />
        </Form.Item>
        <Form.Item label="Status" name="Status">
          <Input />
        </Form.Item>
        <Form.Item label="Reviewer ID" name="Reviewer_ID">
          <Input />
        </Form.Item>
        <Form.Item label="Reviewer Name" name="Reviewer_Name">
          <Input />
        </Form.Item>
        <Form.Item label="Reviewer Comments" name="Reviewer_Comments">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditConnection;
