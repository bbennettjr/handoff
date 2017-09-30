import { Table, Row, Col } from "antd"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import PatientModal from "./PatientModal.js"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => <PatientModal patient={record} />
  },
  {
    title: "Condition",
    dataIndex: "condition"
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
    title: "Todo",
    dataIndex: "todo"
  }
]

export default class NewPatientList extends React.Component {
  static propTypes = {
    patients: PropTypes.array.isRequired,
    selectedRowKeys: PropTypes.array.isRequired,
    setSelectedRowKeys: PropTypes.func.isRequired
  }

  onRowClick = record => {
    console.log(record)
    console.log(this.props.selectedRowKeys)
    let keys = this.props.selectedRowKeys.slice()
    if (keys.includes(record._id)) {
      keys.splice(keys.indexOf(record._id), 1)
    } else {
      keys.push(record._id)
    }
    this.props.setSelectedRowKeys(keys)
  }

  render() {
    let patientsList = this.props.patients
    patientsList.forEach(el => (el.key = el._id))
    return (
      <div style={{ backgroundColor: "white" }}>
        <Table
          {...this.state}
          rowSelection={{
            selectedRowKeys: this.props.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              this.props.setSelectedRowKeys(selectedRowKeys)
            }
          }}
          onRowClick={this.onRowClick}
          columns={columns}
          dataSource={patientsList}
          pagination={false}
        />
      </div>
    )
  }
}
