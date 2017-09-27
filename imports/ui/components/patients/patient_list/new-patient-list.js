import { Table } from "antd"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => (
      <Link to={`/patient/${record._id}`} style={{ color: "#49a9ee" }}>
        {text}
      </Link>
    )
  },
  {
    title: "Diagnosis",
    dataIndex: "diagnosis"
  },
  {
    title: "History",
    dataIndex: "hpi"
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
    console.log(patientsList)
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
