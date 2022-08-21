import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root{
		--primary-color: white;
		--second-color: #00e5ff;
		--background-color: #222;
		--title-font: 'Ubuntu',sans-serif;
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto'
	}
	html{
		font-size: 62.5%;
	}
	body{
		background-color: #222;
		overflow-x: hidden;
	}
	strong{
		color: var(--second-color)
	}
	::-webkit-scrollbar{
		display: none;
	}
`

export default GlobalStyles