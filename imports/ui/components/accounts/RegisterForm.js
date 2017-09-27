import { Form, Icon, Input, Button, notification } from "antd"
import React from "react"
import "antd/dist/antd.css"
const FormItem = Form.Item

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
      Accounts.createUser(
        {
          email: values.email,
          password: values.password
        },
        err => {
          if (err) {
            notification.error({
              description: "There was an error creating your account",
              message: "Error in Create"
            })
            console.log("Create Account error: " + err.reason)
          } else {
            // this.context.router.push("/app")
          }
        }
      )
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("email", {
            rules: [
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Put in valid email" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
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
            Create Account
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NormalLoginForm)
