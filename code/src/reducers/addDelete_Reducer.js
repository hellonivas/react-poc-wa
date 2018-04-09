
export default function (state = null, action) {
    switch (action.type) {
        case 'GET_DATA':
            return action.payload
        case 'ADD_DATA':
            return action.payload
            break;
        case 'DELETE_DATA':
            return action.payload
            break;
        default:
            return state
            break;
    }
}