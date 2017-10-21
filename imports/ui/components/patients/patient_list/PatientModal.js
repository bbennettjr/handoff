import { Modal, Button } from "antd"
import PatientModalForm from "./patient-modal-form.js"
import React from "react"
import PropTypes from "prop-types"
class PatientModal extends React.Component {
  static propTypes = {
    patient: PropTypes.object,
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
  }

  // state = { visible: false }
  // showModal = e => {
  //   e.stopPropagation()
  //   this.setState({
  //     visible: true
  //   })
  // }
  // handleOk = e => {
  //   this.setState({
  //     visible: false
  //   })
  // }
  // handleCancel = e => {
  //   this.setState({
  //     visible: false
  //   })
  // }
  render() {
    if (!this.props.patient) {
      return null
    }

    return (
      <div>
        <Modal
          title={this.props.patient.name}
          visible={this.props.visible}
          onOk={() => this.props.setVisible(false)}
          onCancel={() => this.props.setVisible(false)}
          footer={null}
        >
          <PatientModalForm
            patient={this.props.patient}
            closeModal={() => this.props.setVisible(false)}
          />
        </Modal>
      </div>
    )
  }
}

export default PatientModal
