const { InteractionResponseType } = require('discord-interactions');
const rinse = require('../urils/urlrinse')

module.exports = {
  name: 'clean',
  description: 'unshorten & rinse URL',
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
    const cleaned = await rinse.clean(rawURL).then((longUrl) => { rinse.removeQuery(longUrl)})
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: cleaned
      },
    });
  }
};