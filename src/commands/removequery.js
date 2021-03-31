const { InteractionResponseType } = require('discord-interactions');
const rinse = require('../utils/urlrinse.js')

module.exports = {
  name: 'removequery',
  description: 'Remove query in URL',
  options: [
    {
      name: 'URL',
      description: 'URL to clean',
      type: 3,
      required: true,
    }
  ],
  execute: async ({ interaction, response }) => {
    // Get the raw values from Discord
    const rawURL = ((interaction.data.options.find(opt => opt.name === 'URL') || {}).value || '').trim()
    const cleaned = rinse.removeQuery(rawURL)
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: cleaned
      },
    });
  }
};
