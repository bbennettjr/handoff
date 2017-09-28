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

  state = {
    expandedRowKeys: []
  }

  handleRowClick = (record, index) => {
    let rows = this.state.expandedRowKeys.slice()
    if (rows.includes(record._id)) {
      rows.splice(rows.indexOf(record._id), 1)
    } else {
      rows.push(record._id)
    }
    this.setState({
      expandedRowKeys: rows
    })
  }

  handleContent = (record, ...rest) => {
    const { pmh, medications, coverageTodo } = record
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={5}>
          <p>{`PMH:
            ${pmh}.`}</p>
        </Col>
        <Col span={5}>
          <p>{`Medications:
            ${medications}.`}</p>
        </Col>
        <Col span={5}>
          <p>{`Covering todo:
            ${coverageTodo}.`}</p>
        </Col>
      </Row>
    )
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
          columns={columns}
          dataSource={patientsList}
          onRowClick={this.handleRowClick.bind(this)}
          expandedRowRender={this.handleContent.bind(this)}
          pagination={false}
        />
      </div>
    )
  }
}
