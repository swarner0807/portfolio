import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions'

const Header = ({ dispatch }) => (
    <div className={'navbar'}>
        <span className={'nav-button'} onClick={function () {
            dispatch(changePage('MAIN'))
        }}>Home
        </span> |
        <span className={'nav-button'} onClick={function () {
            dispatch(changePage('WORK'))
        }}>Work
        </span> |
        <span className={'nav-button'} onClick={function () {
            dispatch(changePage('CONTACT'))
        }}>Contact
        </span>
    </div>
)

export default connect()(Header)