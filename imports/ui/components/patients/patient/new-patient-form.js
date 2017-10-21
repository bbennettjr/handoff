import { Form, Input, Button, Tag, Select, notification } from "antd"
import React from "react"
import MedicationSelect from "../../medications/MedicationSelect.js"
import { insertPatient } from "/imports/api/patients/patient-methods.js"
const FormItem = Form.Item
const { TextArea } = Input
const Option = Select.Option

class NewPatientForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        throw new Meteor.Error(
          "Cannot validate new patient",
          "All input fields must meet the validation requirement"
        )
      }

      // destructure out the names to combine them
      let { firstName, lastName } = values
      values.name = `${firstName} ${lastName}`

      let patient = Object.assign(
        {
          doctors: [Meteor.userId()],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        values
      )
      insertPatient.call({ patient }, (error, result) => {
        if (error) {
          notification.error({
            message: "Can't add patient",
            description: "Something went wrong"
          })
        } else {
          this.props.history.push("/")
          notification.success({
            message: "Success",
            description: "Patient added to your covered list."
          })
        }
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
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="First Name" hasFeedback>
          {getFieldDecorator("firstName", {
            rules: [
              {
                required: true,
                message: "Please input first name"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Last Name" hasFeedback>
          {getFieldDecorator("lastName", {
            rules: [
              {
                required: true,
                message: "Please input last name"
              }
            ]
          })(<Input />)}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={<span>Room&nbsp;</span>}
          hasFeedback
        >
          {getFieldDecorator("room", {
            rules: [
              {
                required: true,
                message: "Please input room number"
              }
            ]
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
            ]
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="HPI" hasFeedback>
          {getFieldDecorator("hpi", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="PMH" hasFeedback>
          {getFieldDecorator("pmh", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Applicable Medications">
          {getFieldDecorator("medications", {
            rules: []
          })(<MedicationSelect autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Allergies" hasFeedback>
          {getFieldDecorator("allergies", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Vitals" hasFeedback>
          {getFieldDecorator("vitals", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Labs" hasFeedback>
          {getFieldDecorator("labs", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Radiology" hasFeedback>
          {getFieldDecorator("radiology", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Care Plan" hasFeedback>
          {getFieldDecorator("plan", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="To Do" hasFeedback>
          {getFieldDecorator("todo", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Coverage Instructions" hasFeedback>
          {getFieldDecorator("coverage", {
            rules: []
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Condition" hasFeedback>
          {getFieldDecorator("condition", {
            rules: []
          })(
            <Select>
              <Option value="Unstable">
                <Tag color="red">Unstable</Tag>
              </Option>
              <Option value="Watcher">
                <Tag color="orange">Watcher</Tag>
              </Option>
              <Option value="Stable">
                <Tag color="blue">Stable</Tag>
              </Option>
            </Select>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Add Patient
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(NewPatientForm)
