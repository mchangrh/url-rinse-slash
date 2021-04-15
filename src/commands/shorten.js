const { InteractionResponseType } = require('discord-interactions');
const { ApplicationCommandOptionType } = require('slash-commands');
const rinse = require('url-rinse');

module.exports = {
  name: 'shorten',
  description: 'Removes unnessesary jargon from URLs',
  options: [
    {
      name: 'site',
      description: 'Site pattern to use',
      help: 'Supported types: reddit, amazon',
      type: ApplicationCommandOptionType.STRING,
      required: true,
      choices: [
        {
          name: 'reddit',
          value: 'reddit'
        },
        {
          name: 'amazon',
          value: 'amazon'
        }
      ]
    },
    {
      name: 'url',
      description: 'URL to clean',
      type: ApplicationCommandOptionType.STRING,
      required: true,
    }
  ],
  execute: async ({ interaction, response }) => {
    const rawUrl = ((interaction.data.options.find(opt => opt.name === 'url') || {}).value || '').trim()
    const site = ((interaction.data.options.find(opt => opt.name === 'site') || {}).value || '').trim()
    let result = ""
    if(site === "reddit") {
      result = rinse.reddit(rawUrl)
    } else {
      result = rinse.amazon(rawUrl)        
    }
    return response({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: result
      },
    });
  }
};
