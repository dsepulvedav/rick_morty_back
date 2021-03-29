'use strict'

const RickMortyApi = require('rickmortyapi')
const { getUniqueCharacters, getLocationsInEpisode } = require('./utils/utils')
const { generateResponse, fixBody } = require('./utils/responses')

module.exports.getEpisodeLocations = async (event) => {
  try {
    console.log('[getEpisodeLocations] INI', event)
    event = fixBody(event)
    const page = event.pathParameters ? event.pathParameters.page : null

    console.log('[getEpisodeLocations] Getting episodes...')
    const episodesResponse = page ? await RickMortyApi.getEpisode({ page: page }) : await RickMortyApi.getEpisode()
    const episodes = episodesResponse.results
    console.log('[getEpisodeLocations] Episodes: ', episodes)

    const charactersInEpisodes = getUniqueCharacters(episodes)
    console.log('[getEpisodeLocations] Unique characters in episodes: ', charactersInEpisodes)

    console.log('[getEpisodeLocations] Unique characters data...')
    const charactersData = await RickMortyApi.getCharacter(charactersInEpisodes)
    console.log('[getEpisodeLocations] Characters data: ', charactersData)

    episodes.forEach(episode => {
      episode.origins = getLocationsInEpisode(episode, charactersData)
    })

    console.log('[getEpisodeLocations] Returning episodes: ', episodes)

    return generateResponse(200, {
      ok: true,
      episodes,
      next: episodesResponse.info.next ? episodesResponse.info.next.split('page=')[1] : null
    })
  } catch (error) {
    console.error(error)
    return generateResponse(500, {
      ok: false,
      error
    })
  }
}
