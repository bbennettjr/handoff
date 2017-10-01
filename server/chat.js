// const WebSocket = require("ws")
// const wss = new WebSocket.Server({ port: 3000 })

// console.log(wss)

// wss.on("connection", function connection(ws) {
//   console.log(`server connection established. ws obj: ${ws}`)
//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message)
//   })

//   ws.send("something")
// })

// // -----------Subscription service-------------- \\
// const subscriptions = new Map()
// subscriptions.set("general", new Set())

// // Subscribe a client to 'general' channel.
// subscriptions.get("general").add(client.id)

// // Send message to a channel
// subscriptions.get("general").forEach(clientId => {
//   clients.get(clientId).connection.send(message)
// })

// // Unsubscribe
// subscriptions.get("general").delete(client.id)
