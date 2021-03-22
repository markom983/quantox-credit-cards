import React from "react"
import { Link } from "react-router-dom"

// styles
import './styles.scss'

const AddCard = () => (
	<Link to="/cards/add" className='link'>
		<div className="Card add"></div>
	</Link>
)

export default AddCard
