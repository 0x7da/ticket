module.exports = (client, type, guild, user) => {
    switch (type) {
        case 'newTicket': {
            return console.log(`${user.username} gerade ein Ticket auf dem Server erstellt ${guild.name}`);
        }

        case 'closeTicket': {
            return console.log(`${user.username} gerade ein Ticket auf dem Server geschlossen haben ${guild.name}`);
        }

        case 'reopenTicket': {
            return console.log(`${user.username} Ich habe gerade ein Ticket auf dem Server erneut geöffnet ${guild.name}`);
        }

        case 'deleteTicket': {
            return console.log(`${user.username} Gerade ein Ticket auf dem Server gelöscht ${guild.name}`);
        }

        case 'saveTicket': {
            return console.log(`${user.username} Gerade ein Ticket auf dem Server gespeichert ${guild.name}`);
        }
    }
};