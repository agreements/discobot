'use strict'

import { LOG } from './../logger.js'

if (!process.env.GOOGLE_KEY || !process.env.GOOGLE_CSE_ID) {
  LOG.info('Missing GOOGLE api key, the image module will not be loaded.')
} else {
  module.exports = {
    names: ['img'],
    onMessage: function (bot, user, userID, channelID, message, rawEvent) {
      var term = message.split(' ').splice(1).join()
      var google = require('googleapis')
      var customsearch = google.customsearch('v1')

      // You can get a custom search engine id at
      // https://www.google.com/cse/create/new
      const CX = process.env.GOOGLE_CSE_ID
      const API_KEY = process.env.GOOGLE_KEY
      const SEARCH = term

      customsearch.cse.list({ cx: CX, q: SEARCH, auth: API_KEY, searchType: 'image', num: 10 }, function (err, resp) {
        if (err) {
          LOG.error('An error occured', err)
          return
        }
        // Got the response from custom search
        LOG.debug('Result: ' + resp.searchInformation.formattedTotalResults)
        if (resp.items && resp.items.length > 0) {
          var msg = resp.items[Math.floor(Math.random() * resp.items.length)].link
          bot.sendMessage({
            to: channelID,
            message: msg
          })
        }
      })
    }
  }
}
