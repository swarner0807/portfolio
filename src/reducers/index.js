import { combineReducers } from 'redux'
import changePage from './changePage'
import toggleAccordion from './toggleAccordion'

export default combineReducers({
    changePage,
    toggleAccordion
})
