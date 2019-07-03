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
        }}>Portfolio
        </span> |
        <span className={'nav-button'} onClick={function () {
            window.location='mailto:swarner0807@me.com? ';
        }}>Contact
        </span>
    </div>
)

export default connect()(Header)