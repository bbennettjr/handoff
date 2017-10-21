import React from "react"
import PropTypes from "prop-types"
class HandoffTag extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired
  }
  render() {
    let colorObj = {}
    if (this.props.color === "blue") {
      colorObj = {
        color: "#108ee9",
        background: "#d2eafb",
        borderColor: "#d2eafb"
      }
    }
    if (this.props.color === "red") {
      colorObj = {
        color: "#f04134",
        background: "#fcdbd9",
        borderColor: "#fcdbd9"
      }
    }
    if (this.props.color === "orange") {
      colorObj = {
        color: "#f56a00",
        background: "#fde3cf",
        borderColor: "#fde3cf"
      }
    }
    return (
      <div
        style={Object.assign(
          {
            display: "inline-block",
            lineHeight: "20px",
            height: "22px",
            padding: "0 8px",
            borderRadius: "4px",
            border: "1px solid #e9e9e9",
            background: "#f3f3f3",
            fontSize: "12px",
            WebkitTransition: "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)",
            transition: "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)",
            opacity: 1,
            marginRight: "8px",
            cursor: "pointer",
            whiteSpace: "nowrap"
          },
          colorObj
        )}
      >
        {this.props.children}
      </div>
    )
  }
}

export default HandoffTag
