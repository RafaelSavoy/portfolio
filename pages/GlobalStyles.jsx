import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root{
		--primary-text-color: white;
		--second-text-color: #00e5ff;
		--button-color: #1cabbe;
		--background-color: #222;
		--title-font: 'Ubuntu',sans-serif;
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html{
		font-size: 62.5%;
		scroll-behavior: smooth;
		min-height: 100%;
	}
	body{
		background-color: #222;
		color: white;
	}
	strong{
		color: var(--second-color)
	}
`

export default GlobalStyles