Streamy.on("message", (data, fromSocket) => {
  console.log(data)
  Streamy.emit("echo", { id: 0, message: data.data }, fromSocket)
})

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
