export const CATEGORY_OPEN = 'CategoryOpen'
export const CATEGORY_CLOSE = 'CategoryClose'
export const LOGINMODAL_OPEN = 'LOGINMODAL_OPEN'
export const LOGINMODAL_CLOSE = 'LOGINMODAL_CLOSE'

const initialState = {
    categoryModal: false,
    loginModal: false,
}

function ModalReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORY_OPEN:
            return { ...state, categoryModal: true }

        case CATEGORY_CLOSE:
            return { ...state, categoryModal: false }

        case LOGINMODAL_OPEN:
            return { ...state, loginModal: true }

        case LOGINMODAL_CLOSE:
            return { ...state, loginModal: false }

        default:
            return state
    }
}

export default ModalReducer

export const CategoryOpenAC = () => ({ type: CATEGORY_OPEN })
export const CategoryCloseAC = () => ({ type: CATEGORY_CLOSE })
export const LoginModalCloseAC = () => ({ type: LOGINMODAL_CLOSE })
export const LoginModalOpenAC = () => ({ type: LOGINMODAL_OPEN })
