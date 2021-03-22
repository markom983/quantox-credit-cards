import React from 'react'
import {
	withStyles,
	makeStyles
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns'
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider
} from '@material-ui/pickers'

// styles
import './styles.scss'

const ValidationTextField = withStyles({
	root: {
		'& input:valid + fieldset': {
			borderColor: 'blue',
			borderWidth: 2,
		},
		'& input:invalid + fieldset': {
			borderColor: 'red',
			borderWidth: 2,
		},
		'& input:valid:focus + fieldset': {
			borderLeftWidth: 6,
			padding: '4px !important', // override inline-style
		},
	},
})(TextField);

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		marginBottom: '10px',
	},
}));

const Form = ({setName, setCard, setDate, date}) => {
	const classes = useStyles()

	return (
		<div className='form-container'>
			<ValidationTextField
				required
				id="name"
				label="Name"
				variant="outlined"
				className={classes.margin}
				onChange={(e) => setName(e)}
			/>
			<ValidationTextField
				required
				id="credit-card"
				label="Card Number"
				variant="outlined"
				className={classes.margin}
				onChange={(e) => setCard(e)}
			/>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>

				<KeyboardDatePicker
					variant="inline"
					inputVariant="outlined"
					label="With keyboard"
					format="MM/yy"
					value={date}
					InputAdornmentProps={{ position: "start" }}
					onChange={date => setDate(date)}
				/>
			</MuiPickersUtilsProvider>
		</div>
	)
}

export default Form
