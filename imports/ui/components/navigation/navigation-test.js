import React from "react"
import { Menu, Icon, Layout } from "antd"
import "antd/dist/antd.css"
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
let { Header } = Layout

const style = {
  menu: {
    display: "flex",
    justifyContent: "space-between"
  },
  left: {
    display: "flex",
    justifyContent: "space-around",
    flex: 1
  },
  right: {
    display: "flex",
    justifyContent: "space-around",
    flex: 2
  }
}

class Navigation extends React.Component {
  state = {
    current: "mail"
  }
  handleClick = e => {
    console.log("click ", e)
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <div style={style.menu}>
        <div style={style.left}>
          <div className="logo">Handoff</div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
          </Menu>
        </div>
        <div style={style.right}>
          <Menu mode="horizontal">
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />Navigation Three - Submenu
                </span>
              }
            >
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Navigation
