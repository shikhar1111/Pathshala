import { actionTypes } from "./constants"

const initialState = {
    isMobile: false
}

export default (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SCREEN_RESIZED: {
            return {
                isMobile: action.payload,
            }
        }
        default:
            return state
    }
}