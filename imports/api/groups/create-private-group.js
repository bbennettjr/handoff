import { Groups } from "./groups.js"

export default (createPrivateGroup = name => {
  Groups.insertOne({
    name: `${name}'s Private Group`,
    owner: this.userId,
    members: [this.userId],
    activity: 1
  })
})
