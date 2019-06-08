const toggleAccordion = (state = {'full': false, 'open': false, 'free': false}, action) => {
    switch (action.type) {
        case 'TOGGLE_ACCORDION':
            let newState = Object.assign({}, state);
            newState[action.toggle] = !newState[action.toggle];
            return newState;

        default:
            return state
    }
}

export default toggleAccordion