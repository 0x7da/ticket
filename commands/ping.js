module.exports = {
    name: 'ping',

    execute(client, message) {
        message.channel.send(`Woops **${client.ws.ping}ms** 👋`);
    },
};
