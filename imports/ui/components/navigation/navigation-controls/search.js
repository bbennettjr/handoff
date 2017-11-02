import { Meteor } from "meteor/meteor"
import React from "react"
import { Icon, Input, AutoComplete, notification } from "antd"
import { Patients } from "/imports/api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"
import { addPatientToSelf } from "/imports/api/patients/patient-methods.js"

const Option = AutoComplete.Option
const OptGroup = AutoComplete.OptGroup

class Search extends React.Component {
  handleSelect = value => {
    addPatientToSelf.call({ patientId: value }, err => {
      if (err) {
        notification.error({
          message: "Error adding patient",
          description: err.reason
        })
      } else {
        notification.success({
          message: "Covering",
          description: "Patient added to your covered list."
        })
      }
    })
  }

  filterOption = (inputValue, option) => {
    return option.props.name
      ? option.props.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      : option.props.diagnosis
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
  }

  render() {
    let patients = this.props.patients
    let data = [
      <OptGroup key={"patients"} label={"Patients"}>
        {patients.map(pt => {
          return (
            <Option
              key={pt._id}
              value={pt._id}
              name={pt.name}
              diagnosis={pt.diagnosis}
            >
              {pt.name}
            </Option>
          )
        })}
      </OptGroup>
    ]

    return (
      <div className="certain-category-search-wrapper" style={this.props.style}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: "100%" }}
          dataSource={data}
          allowClear={true}
          placeholder="Search"
          optionLabelProp="name"
          onSelect={this.handleSelect}
          filterOption={this.filterOption}
        >
          <Input
            suffix={<Icon type="search" className="certain-category-icon" />}
          />
        </AutoComplete>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe("patients")
  const patients = Patients.find().fetch()
  return { patients }
}, Search)
