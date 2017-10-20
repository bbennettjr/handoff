import { Modal, Button } from "antd"
import PatientModalForm from "./patient-modal-form.js"
import React from "react"

class PatientModal extends React.Component {
  state = { visible: false }
  showModal = e => {
    e.stopPropagation()
    this.setState({
      visible: true
    })
  }
  handleOk = e => {
    this.setState({
      visible: false
    })
  }
  handleCancel = e => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div>
        <Button type="dashed" onClick={this.showModal}>
          {this.props.patient.name}
        </Button>
        <Modal
          title={this.props.patient.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <PatientModalForm
            patient={this.props.patient}
            closeModal={this.handleOk}
          />
        </Modal>
      </div>
    )
  }
}

export default PatientModal
