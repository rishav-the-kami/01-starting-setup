import React from 'react'
import './Card.css'

const Cards = props => <div className={'classes ' + props.className}>{props.children}</div>

export default Cards