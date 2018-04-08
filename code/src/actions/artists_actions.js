export function artistsList(ArtistsData) {
    return {
        type: 'ARTISTS_LIST',
        payload: ArtistsData.artists
    }
}