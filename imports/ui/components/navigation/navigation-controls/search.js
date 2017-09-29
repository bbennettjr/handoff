import React from "react"
import { AutoComplete } from "antd"

const dataSource = ["Burns Bay Road", "Downing Street", "Wall Street"]

const Search = props => {
  return (
    <AutoComplete
      style={props.style}
      dataSource={dataSource}
      placeholder="Search patients"
      filterOption={(inputValue, option) =>
        option.props.children
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1}
    />
  )
}

export default Search
