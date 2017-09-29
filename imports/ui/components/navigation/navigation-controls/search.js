import React from "react"
import { Icon, Input, AutoComplete } from "antd"
const Option = AutoComplete.Option
const OptGroup = AutoComplete.OptGroup

const dataSource = [
  {
    title: "Patients",
    children: [
      {
        title: "Fred",
        count: 52
      },
      {
        title: "Judy",
        count: 24
      }
    ]
  },
  {
    title: "Doctors",
    children: [
      {
        title: "Meera",
        count: 26
      },
      {
        title: "Ryan",
        count: 26
      }
    ]
  }
]

function renderTitle(title) {
  return <span>{title}</span>
}

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={renderTitle(group.title)}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
          <span className="certain-search-item-count"> Age: {opt.count}</span>
        </Option>
      ))}
    </OptGroup>
  ))
  .concat([
    <Option disabled key="all" className="show-all">
      <a
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Expand
      </a>
    </Option>
  ])

function Search(props) {
  return (
    <div className="certain-category-search-wrapper" style={props.style}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: "100%" }}
        dataSource={options}
        placeholder="Search"
        optionLabelProp="value"
      >
        <Input
          suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </AutoComplete>
    </div>
  )
}

export default Search
