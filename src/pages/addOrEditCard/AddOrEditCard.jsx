import React, { useState, useEffect } from 'react'
import Card from "../../components/card/Card"
import Form from '../../components/form/Form'
import { format } from 'date-fns'

import './styles.scss'
import {Button, Typography} from "@material-ui/core";
import localStorage from "local-storage";
import {useCardsStore} from "../../store/cards/hooks";

const AddOrEditCard = () => {
	const [ name, setName ] = useState('')
	const [ card, setCard ] = useState(null)
	const [ date, setDate ] = useState(new Date())
	const { setCardData, cardsData } = useCardsStore()

	useEffect(() => {
		if (cardsData) {
			localStorage.set('cards', cardsData)
		}
	}, [cardsData])

	function handleChangeName (e) {
		setName(e.target.value)
	}

	function handleChangeCreditCard (e) {
		setCard(e.target.value)
	}

	function handleChangeDate (data) {
		setDate(data)
	}

	function handleSaveCard () {
		const data = {
			name: name,
			card: card,
			date: format(date, 'MM/yy')
		}
		setCardData(data)
	}

	return (
		<div className="add_or_edit_container">
			<Typography variant='h4'>Add Card</Typography>
			<Card
				name={name}
				card={card}
				date={date}
				edit={true}
			/>
			<Form setName={handleChangeName} setCard={handleChangeCreditCard} setDate={handleChangeDate} date={date}/>
			<Button variant='contained' color='primary' className='save-button' onClick={handleSaveCard}>Save</Button>
		</div>
	)
}

export default AddOrEditCard
