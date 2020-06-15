import styled, { createGlobalStyle } from 'styled-components'
import { motion } from "framer-motion"

export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
 u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
    
`

export const Container = styled.div`
	/* width: 60%; margin:0 auto; */

	/* @media (max-width:1200px ) {
      width:95%;padding:20px;
    } */
`

export const Car = styled.div`
	font-size:20px; cursor:pointer;
	display:inline-block; position:relative;
	span{
		position:absolute; left:-30px;bottom:2px;
		background:#d3001c; border-radius: 50%;
		display: flex; justify-content: center;
		align-items:center; color:#fff;
		width:26px; height:26px; font-size:14px;
		font-weight:700;
	}
`
export const Nav = styled.nav`
	padding:20px 40px; position: fixed; width:100%; background:#f1f1f1;
	z-index:100; box-sizing: border-box;
	display:flex; justify-content: space-between; align-items:center;
	a{color:#333}
	 #home{font-size:28px;}
`

export const Factura = styled(motion.ul)`
	display: grid; grid-template-columns: 1fr; overflow:hidden;
	position:fixed; width:60%;background:#333; z-index:100;
	left:0; right:0; margin:auto; top:70px;

	li{display: grid; grid-template-columns: repeat(5,1fr); 
		align-items: center; height:34px; padding: 0 16px; 
		border-bottom: solid #222 1px;  color:#CCC;
		:first-child{    background-color: #444;
        color: white; font-weight: 700;}
		:last-child{background-color: #222; color:#FFF;}
		span svg{cursor:pointer; color:#FFF; font-size:21px}
	}
	
	@media (max-width:768px ) {
		width:100%;		
    }
`


export const Pro = styled(motion.div)`
	height:100vh; 	display:grid; grid-template-columns:50% 50%; overflow: hidden;
	
	> div{
		display: flex; align-items:center; justify-content:center; 
		.details > *{ margin-bottom:20px;
		
		}
		.details p{display:inline-block;}
		.precio{display:flex; 
			justify-content:center;
			span{ width:50%; padding:12px 0; margin-right:1px;
			background:#333; text-align:center;
			}
		}
		.details, img{ width:50%}
		:last-child{
			color:#FFF; 
			background-color: #4CAF50;
			h3{font-size:32px; }
		}
		button {
			background-color: #FFF;
			border: none;
			color: #4caf50;
			padding: 10px 22px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px; cursor: pointer;
    	}
		
	}

	 @media (max-width:768px ) {
		grid-template-columns:1fr;
		grid-template-rows: 40%;
		
    	grid-auto-rows: auto;
			> div{
				.details{ width:90%;}
			}		
    }
	
`