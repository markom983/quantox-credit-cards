import { useSelector } from 'react-redux'
import { useActions } from '../../lib/use-actions'

import {
	getCardsData
} from './selectors'
import { setCards } from './actions'

export function useCardsStore () {
	const cardsData = useSelector(getCardsData)
	const setCardData = useActions(setCards)

	return {
		cardsData,
		setCardData
	}
}
