import { Form, Input, Button, Tag, Select, notification } from "antd"
import React from "react"
import MedicationSelect from "/imports/ui/components/medications/MedicationSelect.js"
import { insertPatient } from "/imports/api/patients/patient-methods.js"
import HandoffTag from "/imports/ui/components/patients/patient/HandoffTag"
import { withRouter } from "react-router"
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
      insertPatient.call({ patient }, (err, result) => {
        if (err) {
          notification.error({
            message: "New patient error",
            description: err.reason
          })
        } else {
          this.props.history.push("/")
          notification.success({
            message: "Created",
            description: "Patient created and added to your covered list."
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
            rules: [
              {
                required: true,
                message: "Please select condition"
              }
            ]
          })(
            <Select>
              <Option value="Unstable">
                <HandoffTag color="red">Unstable</HandoffTag>
              </Option>
              <Option value="Watcher">
                <HandoffTag color="orange">Watcher</HandoffTag>
              </Option>
              <Option value="Stable">
                <HandoffTag color="blue">Stable</HandoffTag>
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

export default withRouter(Form.create()(NewPatientForm))
