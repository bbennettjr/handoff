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
    console.log(rows)
  }

  render() {
    let patientsList = this.props.patients
    console.log(patientsList)
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
          expandedRowRender={() => console.log("rendering expansion")}
          pagination={false}
        />
      </div>
    )
  }
}
