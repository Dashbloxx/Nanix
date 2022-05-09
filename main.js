client = new Client();

client.on("ready", function(d) {
  console.log("Logged in as" + client.user.username + "#" + client.user.discriminator)
});

client.on("message_create", async function(d) {
  let message = d.message;
  if (message.content == "ping") {
    await client.sendMessage(message.channel_id, "Pong");
  }
});

client.connect();
