

export function updateScreenValue(value){
    return {
        type: 'UPDATE_SCREEN_VALUE',
        payload: {value}
    }
}

export function getResult(){
    return {
        type: 'GET_RESULT'
    }
}

export function resetScreenValue(){
    return {
        type: 'RESET_SCREEN_VALUE'
    }
}

