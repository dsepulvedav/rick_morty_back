function getUniqueCharacters (episodeList) {
  const characterList = []

  if (!episodeList || !episodeList.length) return characterList

  episodeList.forEach((episode) => {
    characterList.push(...episode.characters)
  })

  return [
    ...new Set(
      characterList.map((item) => parseInt(item.split('/').pop(), 10)).sort()
    )
  ]
}

exports.getUniqueCharacters = getUniqueCharacters
