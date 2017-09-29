import { Modal, Form, Input, Checkbox, Button, notification } from "antd"
import React from "react"
const FormItem = Form.Item

class PatientModalForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        throw new Meteor.Error(
          "Cannot validate the patient data",
          "All input fields must meet the validation requirement"
        )
      }

      // destructure out the names to combine them
      let { firstName, lastName } = values
      values.name = `${firstName} ${lastName}`

      // stick values into patients
      let patient = this.props.patient
      patient = Object.assign(patient, values)
      Meteor.call("patient.update", patient, (error, result) => {
        if (error) {
          notification.error({
            message: "Can't update patient",
            description: error.reason
          })
        } else {
          this.props.closeModal()
        }
      })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const patient = this.props.patient

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
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="First Name" hasFeedback>
          {getFieldDecorator("firstName", {
            rules: [
              {
                required: true,
                message: "Please input first name"
              }
            ],
            initialValue: patient.firstName
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Last Name" hasFeedback>
          {getFieldDecorator("lastName", {
            rules: [
              {
                required: true,
                message: "Please input last name"
              }
            ],
            initialValue: patient.lastName
          })(<Input />)}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={<span>Diagnosis&nbsp;</span>}
          hasFeedback
        >
          {getFieldDecorator("diagnosis", {
            rules: [
              {
                required: true,
                message: "Please input diagnosis"
              }
            ],
            initialValue: patient.diagnosis
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Condition" hasFeedback>
          {getFieldDecorator("condition", {
            rules: [],
            initialValue: patient.condition
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="HPI" hasFeedback>
          {getFieldDecorator("hpi", {
            rules: [],
            initialValue: patient.hpi
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Medications" hasFeedback>
          {getFieldDecorator("medications", {
            rules: [],
            initialValue: patient.medications
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="PMH" hasFeedback>
          {getFieldDecorator("pmh", {
            rules: [],
            initialValue: patient.pmh
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="To Do" hasFeedback>
          {getFieldDecorator("todo", {
            rules: [],
            initialValue: patient.todo
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Coverage to do" hasFeedback>
          {getFieldDecorator("coverageTodo", {
            rules: [],
            initialValue: patient.coverageTodo
          })(<Input />)}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Update Patient
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(PatientModalForm)
