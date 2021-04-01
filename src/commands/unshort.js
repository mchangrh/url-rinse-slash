const { InteractionResponseType } = require('discord-interactions');
const { ApplicationCommandOptionType } = require('slash-commands');
const rinse = require('url-rinse');

module.exports = {
  name: 'unshort',
  description: 'unshorten URL',
  options: [
    {
      name: 'url',
      description: 'URL to unshort',
      type: ApplicationCommandOptionType.STRING,
      required: true,
    }
  ],
  execute: async ({ interaction, response }) => {
    const rawURL = ((interaction.data.options.find(opt => opt.name === 'url') || {}).value || '').trim()
    const cleaned = await rinse.swUnshorten(rawURL)
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: cleaned
      },
    });
  }
};
