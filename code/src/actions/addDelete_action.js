export function addData() {
    return {
        type: 'ADD_DATA'
    }
}

export function deleteData(value) {
    return {
        type: 'DELETE_DATA',
        payload: value
    }
}

export function getData() {
    return {
        type: 'GET_DATA',
        payload: resData
    }
}