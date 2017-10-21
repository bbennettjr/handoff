import { Table, Button } from "antd"
import React from "react"
import PropTypes from "prop-types"
import PatientModal from "./PatientModal.js"
import HandoffTag from "/imports/ui/components/patients/patient/HandoffTag"

export default class NewPatientList extends React.Component {
  static propTypes = {
    patients: PropTypes.array.isRequired,
    selectedRowKeys: PropTypes.array.isRequired,
    setSelectedRowKeys: PropTypes.func.isRequired
  }

  state = {
    visible: false,
    patient: null
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
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: (text, record) => <Button type="dashed">{record.name}</Button>,
        width: "150px",
        onCellClick: (record, event) => {
          this.setState({ visible: true, patient: record })
          event.stopPropagation()
          event.preventDefault()
        }
      },
      {
        title: "Room",
        dataIndex: "room",
        sorter: (a, b) => {
          return a.room.charCodeAt(0) - b.room.charCodeAt(0)
        },
        width: "200px"
      },
      {
        title: "Condition",
        dataIndex: "condition",
        render: text => {
          let color =
            text === "Unstable" ? "red" : text === "Watcher" ? "orange" : "blue"
          return <HandoffTag color={color}>{text}</HandoffTag>
        },
        sorter: (a, b) => {
          return a.condition.length - b.condition.length
        },
        width: "88px"
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
        width: "100px"
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
    let patientsList = this.props.patients
    patientsList.forEach(el => (el.key = el._id))
    return (
      <div style={{ backgroundColor: "white" }}>
        <Table
          {...this.state}
          rowSelection={{
            selectedRowKeys: this.props.selectedRowKeys,
            onChange: selectedRowKeys => {
              this.props.setSelectedRowKeys(selectedRowKeys)
            }
          }}
          onRowClick={this.onRowClick}
          columns={columns}
          dataSource={patientsList}
          pagination={false}
        />
        <PatientModal
          visible={this.state.visible}
          patient={this.state.patient}
          setVisible={visible => this.setState({ visible })}
        />
      </div>
    )
  }
}
