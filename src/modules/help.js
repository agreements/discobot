'use strict'

module.exports = {
  names: ['help', 'commands'],
  onMessage: function (bot, user, userID, channelID, message, rawEvent) {
    bot.sendMessage({
      to: channelID,
      message: [
        'Here are the things I can do for you master:',
        ' ',
        'ping            - say pong',
        'giphy <term>    - post a damn giph',
        'azire           - play random cody clip',
        '(╯°□°）╯︵ ┻━┻   - will flip all table back upright',
        'yomama          - tell a yo mama joke',
        'xkcd            - get todays xkcd comic',
        'cron            - list enable or disable cronjobs (wip)',
        'fortune         - get a random fortune message'
      ].join('\n')
    })
  }
}
