import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
	spacing: 1,
	overrides: {
		MuiButton: {
			containedPrimary: {
				width: '370px',
				marginTop: '10px',
				backgroundColor: '#255670',
				color: '#fff',
				"&:hover": {
					backgroundColor: "#90bcd4"
				}
			}
		},
		MuiFormControl: {
			MuiTextField: {
				outlined: {
					marginBottom: '20px'
				}
			}
		}
	}
});

export default theme
