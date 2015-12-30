import _ from 'lodash'

export default function screenValue(state = 0, action){
    let result
    switch(action.type){
        case 'UPDATE_SCREEN_VALUE':
            let value = action.payload.value

            if(state == 0){
                return value.toString()
            }

            // tidak boleh ada lebih dari satu karakter berikut ini
            console.warn(typeof state)
             let onlyOne = ['.', '-', '*', '+', '/']
             if(onlyOne.indexOf(value) > -1 && state.toString().indexOf(value) > -1){
                return state
             }

            return state += value.toString()
            break



        case 'GET_RESULT':
            return eval(state)
            break

        case 'RESET_SCREEN_VALUE':
            return 0
        default:
            return state
    }

    return state
}