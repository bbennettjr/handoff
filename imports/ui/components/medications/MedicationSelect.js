import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { withTracker } from "meteor/react-meteor-data"
import { Medications } from "../../../api/medications/medications.js"
import { Select } from "antd"
const Option = Select.Option

const children = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

class MedicationSelect extends React.Component {
  static propTypes = {
    medications: PropTypes.array.isRequired
  }
  handleChange(value) {
    console.log(`selected ${value}`)
  }
  renderOptions() {
    let meds = this.props.medications
    let key = 0
    return meds.map(m => {
      return <Option key={key++}>{`${m.name}`}</Option>
    })
  }
  render() {
    return (
      <Select
        mode="multiple"
        placeholder="Select medications"
        defaultValue={[""]}
        allowClear
        onChange={this.handleChange.bind(this)}
      >
        {this.renderOptions()}
      </Select>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe("medications")
  return { medications: Medications.find().fetch() }
})(MedicationSelect)
