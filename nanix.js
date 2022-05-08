// ==UserScript==
// @name        Ping-SB
// @match       *://discord.com/*
// @grant       none
// @version     1.0
// @require https://raw.githubusercontent.com/13-05/discord.js-pure/main/src/main.js
// @author      1305
// @description A 'ping' selfbot written in the pure javascript version of discord.js!
// @run-at document-start
// ==/UserScript==s

(async function () {
    client = new Client();

    /* optional but highly recommended */
    const USERID = client.user.id;

    /* events */
    client.on("ready", () => {
        Utils.Logger.log(`Selfbot's up and running on ${client.user.username}`);
        window.alert(`Selfbot's up and running on ${client.user.username}`);
    });

    client.on("message_create", async (message) => {
        let message = message.message;
        if (message.author.id != USERID) {
            return;
        }

        if (message.content.trim() == "..info") {
            // `.trim()` is required due to the fact that discord straps whitespace to content ig
            await client.sendMessage(message.channel_id, "**Nanix selfbot v1.0.0** https://github.com/Dashbloxx/Nanix/tree/master"); // responds to the ping with pong in the message's channelid
        }
    });

    client.connect();
})();