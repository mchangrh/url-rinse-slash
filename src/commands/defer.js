const { InteractionResponseType } = require('discord-interactions');
const rinse = require('../urils/urlrinse')

module.exports = {
  name: 'defer',
  description: 'de-referrer',
  options: [
    {
      name: 'URL',
      description: 'URL to derefer',
      type: 3,
      required: true,
    }
  ],
  execute: async ({ interaction, response }) => {
    // Get the raw values from Discord
    const rawURL = ((interaction.data.options.find(opt => opt.name === 'URL') || {}).value || '').trim()
    const cleaned = rinse.defer(rawURL)
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: cleaned
      },
    });
  }
};
