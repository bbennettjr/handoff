import { Meteor } from "meteor/meteor"
import React from "react"
import { Icon, Input, AutoComplete } from "antd"
import { Patients } from "../../../../api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"

const Option = AutoComplete.Option
const OptGroup = AutoComplete.OptGroup

class Search extends React.Component {
  // dataSource = [
  //   {
  //     title: "Patients",
  //     children: this.props.patients
  //   },
  //   {
  //     title: "Doctors",
  //     children: [
  //       {
  //         title: "Meera",
  //         count: 26
  //       },
  //       {
  //         title: "Ryan",
  //         count: 26
  //       }
  //     ]
  //   }
  // ]

  // renderTitle = title => {
  //   return <span>{title}</span>
  // }

  // options = this.dataSource
  //   .map(group => {
  //     console.log(group)
  //     debugger
  //     return (
  //       <OptGroup key={group.title} label={this.renderTitle(group.title)}>
  //         {group.children.map(opt => (
  //           <Option key={opt._id} value={opt.name}>
  //             {opt.name}
  //             <span className="certain-search-item-count">
  //               {" "}
  //               Diagnosis: {opt.diagnosis}
  //             </span>
  //           </Option>
  //         ))}
  //       </OptGroup>
  //     )
  //   })
  //   .concat([
  //     <Option key="all" className="show-all">
  //       <a
  //         href="https://www.google.com/search?q=antd"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Expand
  //       </a>
  //     </Option>
  //   ])

  handleSearch = (value, label) => {
    //maybe use
    console.log("searching...")
  }

  filterOption = (inputValue, option) => {
    return (
      option.props.children[0]
        .toUpperCase()
        .indexOf(inputValue.toUpperCase()) !== -1
    )
  }

  render() {
    let patients = this.props.patients
    console.log(patients)
    patients.map(pt => {
      pt.title = pt.name
      pt.value = pt.diagnosis
      pt.key = pt._id
      console.log(pt._id)
      return (
        <Option key={pt._id} value={pt.name}>
          {pt.name}
          <span className="certain-search-item-count">
            {" "}
            Diagnosis: {pt.diagnosis}
          </span>
        </Option>
      )
    })

    return (
      <div className="certain-category-search-wrapper" style={this.props.style}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: "100%" }}
          dataSource={patients}
          placeholder="Search"
          optionLabelProp="value"
          onChange={this.handleSearch.bind(this)}
          filterOption={this.filterOption.bind(this)}
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
