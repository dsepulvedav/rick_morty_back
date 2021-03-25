function getUniqueCharacters(episodeList) {
  let characterList = [];

  episodeList.forEach((episode) => {
    characterList.push(...episode.characters);
  });

  return [
    ...new Set(
      characterList.map((item) => parseInt(item.split("/").pop(), 10)).sort()
    ),
  ];
}

function getLocationsInEpisode(episode, allCharacters) {
	console.log('[getLocationsInEpisode] INI');
	console.log('[getLocationsInEpisode] Params: ', {episode, allCharacters});
  const charactersInEpisode = episode.characters.map((item) =>
    parseInt(item.split("/").pop(), 10)
  );
	console.log('[getLocationsInEpisode] Characters in episode', charactersInEpisode);
  const charactersData = allCharacters.filter((character) =>
    charactersInEpisode.includes(character.id)
  );
	console.log('[getLocationsInEpisode] Characters data', charactersData);
  const locations = charactersData.map((item) => item.origin);
	console.log('[getLocationsInEpisode] Locations', locations);

  let locationsSet = new Set();
  let uniqueLocations = [];

  locations.forEach((location) => {
    if (!locationsSet.has(location.name)) {
      locationsSet.add(location.name, true);
      uniqueLocations.push(location);
    }
  });

	console.log('[getLocationsInEpisode] Returning unique locations', uniqueLocations);

  return uniqueLocations;
}

exports.getUniqueCharacters = getUniqueCharacters;
exports.getLocationsInEpisode = getLocationsInEpisode;
