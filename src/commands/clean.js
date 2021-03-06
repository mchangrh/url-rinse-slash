const { InteractionResponseType } = require('discord-interactions');
const { ApplicationCommandOptionType } = require('slash-commands');
const rinse = require('url-rinse');

module.exports = {
  name: 'clean',
  description: 'unshorten & rinse URL',
  options: [
    {
      name: 'url',
      description: 'URL to clean',
      type: ApplicationCommandOptionType.STRING,
      required: true,
    }
  ],
  execute: async ({ interaction, response }) => {
    const raw = ((interaction.data.options.find(opt => opt.name === 'url') || {}).value || '').trim()
    const longURL = await rinse.swUnshorten(raw)
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: rinse.removeParam(longURL)
      },
    });
  }
};
