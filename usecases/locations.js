function getLocationsInEpisode (episode, allCharacters) {
  console.log('[getLocationsInEpisode] INI')
  console.log('[getLocationsInEpisode] Params: ', { episode, allCharacters })
  const charactersInEpisode = episode.characters.map((item) =>
    parseInt(item.split('/').pop(), 10)
  )
  console.log('[getLocationsInEpisode] Characters in episode', charactersInEpisode)
  const charactersData = allCharacters.filter((character) =>
    charactersInEpisode.includes(character.id)
  )
  console.log('[getLocationsInEpisode] Characters data', charactersData)
  const locations = charactersData.map((item) => item.origin)
  console.log('[getLocationsInEpisode] Locations', locations)

  const locationsSet = new Set()
  const uniqueLocations = []

  locations.forEach((location) => {
    if (!locationsSet.has(location.name)) {
      locationsSet.add(location.name, true)
      uniqueLocations.push(location)
    }
  })

  console.log('[getLocationsInEpisode] Returning unique locations', uniqueLocations)

  return uniqueLocations
}

exports.getLocationsInEpisode = getLocationsInEpisode
