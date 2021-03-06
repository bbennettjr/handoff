import React from "react"
import {
  Button,
  Row,
  Col,
  Card,
  Table,
  Form,
  Icon,
  Input,
  notification
} from "antd"
import { updateUser } from "/imports/api/users/user-methods.js"
const FormItem = Form.Item

class AccountPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }

      const profile = {
        name: values.name,
        degree: values.degree,
        company: values.company
      }

      updateUser.call({ profile }, err => {
        if (err) {
          notification.error({
            description: err.reason,
            message: err.details
          })
        } else {
          notification.success({
            description: "Account updated",
            message: "Profile updated successfully"
          })
        }
      })
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const user = Meteor.user()
    if (!user) {
      return null
    }
    return (
      <Card>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Put in name" }],
              initialValue: user.profile.name
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="name"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("degree", {
              rules: [{ required: true, message: "Put in valid degree" }],
              initialValue: user.profile.degree
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Degree"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("company", {
              rules: [{ required: true, message: "Put in valid company" }],
              initialValue: user.profile.company
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Company"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("npi", {
              rules: [{ required: true, message: "Put in valid npi" }],
              initialValue: user.profile.npi
            })(
              <Input
                disabled={true}
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="NPI Number"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                { type: "email", message: "The input is not valid E-mail!" },
                { required: true, message: "Put in valid email" }
              ],
              initialValue: user.emails[0].address
            })(
              <Input
                disabled={true}
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Email"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Update Account
            </Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(AccountPage)
