import React from "react"
import { Form, Input, Button, notification } from "antd"
const FormItem = Form.Item
import { insertGroup } from "/imports/api/groups/group-methods.js"

class NewGroupForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        throw new Meteor.Error(
          "Cannot validate new group",
          "All input fields must meet the validation requirement"
        )
      }
      let group = Object.assign({ createdAt: new Date(), activity: 1 }, values)
      insertGroup.call({ group }, (err, res) => {
        if (err) {
          console.error(err)
        }
        console.log("newly created group id: ", res._id)
        notification.success({
          message: "New Group Added",
          description: "Successfully added the group"
        })
        this.props.closeModal()
      })
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    }
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <FormItem {...formItemLayout} label="Group Name" hasFeedback>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input a group name"
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Make Group
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NewGroupForm)
