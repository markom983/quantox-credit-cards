import React, { useState, useEffect } from 'react'
import localStorage from 'local-storage'
import { format } from "date-fns"

// components
import AddCard from "../../components/addCard/AddCard"
import Card from "../../components/card/Card";
// @material-ui
import { Typography } from "@material-ui/core"

// styles
import './styles.scss'

const Cards = () => {
	const [ cardsData, setCardsData ] = useState(null)

	useEffect(() => {
		const cards = localStorage.get('cards')
		if (cards) {
			setCardsData(cards)
		}
	}, [])

	return (
		<div className='container'>
			<div>
				<Typography variant='h4' style={{textAlign: 'center'}}>My Cards</Typography>
				{cardsData && cardsData.map(({name, card, date}, index) => {
					return <Card key={index} name={name} card={card} date={date} show/>
				})}
			</div>
			<AddCard />
		</div>
	)
}

export default Cards
