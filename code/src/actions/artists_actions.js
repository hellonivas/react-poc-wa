export function artistsList() {
    return {
        type: 'ARTISTS_LIST'
    }
}

export function search(value) {
    return {
        type: 'ARTISTS_SEARCH',
        payload:value

    }
}