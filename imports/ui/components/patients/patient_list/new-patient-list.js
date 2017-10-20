import { Table, Tag } from "antd"
import React from "react"
import PropTypes from "prop-types"
import PatientModal from "./PatientModal.js"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => <PatientModal patient={record} />,
    width: "150px"
  },
  {
    title: "Room",
    dataIndex: "room",
    width: "50px"
  },
  {
    title: "Condition",
    dataIndex: "condition",
    render: text => {
      let color =
        text === "Unstable" ? "red" : text === "Watcher" ? "orange" : "blue"
      return <Tag color={color}>{text}</Tag>
    },
    width: "70px"
  },
  {
    title: "Diagnosis",
    dataIndex: "diagnosis",
    width: "150px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "200px"
  },
  {
    title: "History",
    dataIndex: "hpi",
    width: "250px"
  },
  {
    title: "Vitals",
    dataIndex: "vitals",
    width: "150px"
  },
  {
    title: "Todo",
    dataIndex: "todo",
    width: "150px"
  }
]

export default class NewPatientList extends React.Component {
  static propTypes = {
    patients: PropTypes.array.isRequired,
    selectedRowKeys: PropTypes.array.isRequired,
    setSelectedRowKeys: PropTypes.func.isRequired
  }

  onRowClick = record => {
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
