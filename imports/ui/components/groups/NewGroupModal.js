import { Modal, Button, Icon } from "antd"
import React from "react"
import { insertGroup } from "/imports/api/groups/group-methods.js"
import NewGroupForm from "/imports/ui/components/groups/NewGroupForm.js"
import { styles } from "/imports/ui/styles/styles.js"

class NewGroupModal extends React.Component {
  state = {
    visible: false
  }
  showModal() {
    this.setState({ visible: true })
  }
  handleCancel() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button
          style={styles.leftButtons}
          type="primary"
          onClick={this.showModal.bind(this)}
        >
          <Icon type="share-alt" />New Group
        </Button>
        <Modal
          title="New Group"
          visible={visible}
          footer={null}
          onCancel={this.handleCancel.bind(this)}
        >
          <NewGroupForm closeModal={this.handleCancel.bind(this)} />
        </Modal>
      </div>
    )
  }
}

export default NewGroupModal
