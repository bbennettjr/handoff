import { Form, Input, Button, Tag, Select, notification } from "antd"
import React from "react"
import { updatePatient } from "/imports/api/patients/patient-methods.js"
const FormItem = Form.Item
const { TextArea } = Input
const Option = Select.Option

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
      patient.updatedAt = new Date()
      patient = Object.assign(patient, values)
      updatePatient.call({ patient }, (error, result) => {
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
          label={<span>Room&nbsp;</span>}
          hasFeedback
        >
          {getFieldDecorator("room", {
            rules: [
              {
                required: true,
                message: "Please input room number"
              }
            ],
            initialValue: patient.room
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
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="HPI" hasFeedback>
          {getFieldDecorator("hpi", {
            rules: [],
            initialValue: patient.hpi
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="PMH" hasFeedback>
          {getFieldDecorator("pmh", {
            rules: [],
            initialValue: patient.pmh
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Medications" hasFeedback>
          {getFieldDecorator("medications", {
            rules: [],
            initialValue: patient.medications
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Allergies" hasFeedback>
          {getFieldDecorator("allergies", {
            rules: [],
            initialValue: patient.allergies
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Vitals" hasFeedback>
          {getFieldDecorator("vitals", {
            rules: [],
            initialValue: patient.vitals
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Labs" hasFeedback>
          {getFieldDecorator("labs", {
            rules: [],
            initialValue: patient.labs
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Radiology" hasFeedback>
          {getFieldDecorator("radiology", {
            rules: [],
            initialValue: patient.radiology
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Care Plan" hasFeedback>
          {getFieldDecorator("plan", {
            rules: [],
            initialValue: patient.plan
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="To Do" hasFeedback>
          {getFieldDecorator("todo", {
            rules: [],
            initialValue: patient.todo
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Coverage Instructions" hasFeedback>
          {getFieldDecorator("coverage", {
            rules: [],
            initialValue: patient.coverage
          })(<TextArea autosize />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Condition" hasFeedback>
          {getFieldDecorator("condition", {
            rules: [],
            initialValue: patient.condition
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
            Update Patient
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(PatientModalForm)
