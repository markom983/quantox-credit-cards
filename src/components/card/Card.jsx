import React from "react"
import { format, isValid } from 'date-fns'
import chip from "../../assets/images/chip.png"

// styles
import '../addCard/styles.scss'

const Card = ({name, card, date, edit, show}) => {

	let formateDate = ''
	if (isValid(date) && !show) {
		formateDate = format(date, 'MM/yy')
	}

	return (
		<div className={"Card" + (edit ? " edit" : " view")}>
			<div className="logo-holder"/>
			<div className="chip-holder">
				<img src={chip} alt="Chip" loading="lazy"/>
			</div>
			<div className="numbers-flex">{card}</div>
			<div className="name-year-flex">
				<p>{name}</p>
				<p>{show ? date : formateDate}</p>
			</div>
		</div>
	)
}

export default Card
