import { Table } from "antd"
import React from "react"
import PropTypes from "prop-types"
const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    render: text => <span style={{ color: "#49a9ee" }}>{text}</span>
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    render: text => <span style={{ color: "#49a9ee" }}>{text}</span>
  },
  {
    title: "Diagnosis",
    dataIndex: "diagnosis"
  },
  {
    title: "Condition",
    dataIndex: "condition"
  }
]

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    )
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User" // Column configuration not to be checked
  })
}

export default class NewPatientList extends React.Component {
  static propTypes = {
    patients: PropTypes.array.isRequired
  }

  render() {
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={this.props.patients}
        pagination={false}
      />
    )
  }
}
