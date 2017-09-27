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

export default class NewPatientList extends React.Component {
  static propTypes = {
    patients: PropTypes.array.isRequired,
    selectedRowKeys: PropTypes.array.isRequired,
    setSelectedRowKeys: PropTypes.func.isRequired
  }

  render() {
    let patientsList = this.props.patients
    patientsList.forEach(el => (el.key = el._id))
    return (
      <div style={{ backgroundColor: "white" }}>
        <Table
          rowSelection={{
            selectedRowKeys: this.props.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              this.props.setSelectedRowKeys(selectedRowKeys)
            }
          }}
          columns={columns}
          dataSource={patientsList}
          pagination={false}
        />
      </div>
    )
  }
}
