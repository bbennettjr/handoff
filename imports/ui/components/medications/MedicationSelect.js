import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { withTracker } from "meteor/react-meteor-data"
import { Medications } from "/imports/api/medications/medications.js"
import filter from "/imports/api/medications/select-regexp.js"
import { Select } from "antd"
const Option = Select.Option

class MedicationSelect extends React.Component {
  static propTypes = {
    medications: PropTypes.array.isRequired
  }

  filterOption(inputValue, option) {
    // consider using Fuse.js -> npm install fuse.js as a fuzzy search js library
    // make module import for regexp creation function based on user string input
    // -> /(ta)+\w*\s?\w*(3)+\d*/ig where ta are digits, 3 is number
    return filter(inputValue, option.props.children)
  }
  renderOptions() {
    let meds = this.props.medications
    return meds.map((m, i) => {
      return (
        <Option key={m._id}>
          {m.prescription}
        </Option>
      )
    })
  }
  render() {
    return (
      <Select
        mode="multiple"
        placeholder="Select medications"
        value={this.props.value}
        labelInValue={true}
        filterOption={this.filterOption.bind(this)}
        onChange={this.props.handleChange}
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
