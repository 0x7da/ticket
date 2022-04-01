const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'setup',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Dazu hast du leider keine Rechte.');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('GREEN');
        setupEmbed.setAuthor('Tickets system\nUm ein Ticket zu erstellen, klick auf die Reaktion unten 🎫');
        setupEmbed.setDescription('*Es wird ein neuer Kanal erstellt, über den Du mit den Teammitgliedern sprechen kannst !*\n\nTickets by 0x7da#0888');

        const ticketButton = new MessageButton();

        ticketButton.setEmoji('🎫');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('Erstell ein ticket');
        ticketButton.setCustomId('createTicket');

        const row = new MessageActionRow().addComponents(ticketButton);

        message.channel.send({ embeds: [setupEmbed], components: [row] });
    },
};