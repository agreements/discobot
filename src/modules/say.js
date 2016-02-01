'use strict'

module.exports = {
  names: ['say'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent, {random}) {
    const ttsPhrase = (message.split('say').slice(1))
    bot.sendMessage({
      tts: true,
      to: channelID,
      message: `${ttsPhrase}`
    })
  }
}
