import * as ArtistsData from '../../database/artist.json'

export default function (state = null, action) {
    switch (action.type) {
        case 'ARTISTS_LIST':
            return ArtistsData.artists
            break;
        case 'ARTISTS_SEARCH':
            const list = ArtistsData.artists.filter((item) => {
                return item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
            });
            return list
            break;
        default:
            return state
            break;
    }
}