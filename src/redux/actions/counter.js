

export function increment(number){
    return {
        type: 'INCREMENT',
        payload: {number}
    }
}

export function decrement(number){
    return {
        type: 'DECREMENT',
        payload: {number}
    }
}

