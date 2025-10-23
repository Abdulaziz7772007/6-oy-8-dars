import styled from 'styled-components'
const Button = styled.button`
	width: 110px;
	padding: 8px;
	border-radius: 20px;
	border: 2px solid white;
	background-color: transparent;
	color: white;
	&:hover {
		color: #f67e7e;
		background-color: white;
	}
`
const A = styled.a`
	
	text-decoration: 'none';
	&:hover {
		color: #f67e7e;
	}
`
const Home = styled.a`
	text-decoration: none;
	color: white;
	&:hover {
		color: #f67e7e;
	}
`
const About = styled.a`
	text-decoration: none;
	color: white;
	&:hover {
		color: #f67e7e;
	}
`

export default function Navbar() {
	return (
		<div
			style={{
				backgroundColor: '#014E56',
			}}
		>
			<header
				style={{
					margin: '0 auto',
					width: '1110px',
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0 60px',
				}}
			>
				<div
					style={{
						display: 'flex',
						gap: '20px',
						alignItems: 'center',
					}}
				>
					<h1>
						<a
							style={{
								textDecoration: 'none',
								marginRight: '80px',
								color: 'white',
							}}
							href='#'
						>
							myteam
						</a>
					</h1>
					<Home href='../../App.jsx'>home</Home>
					<About href='../about/About.jsx'>about</About>
				</div>
				<A href='../contact/Contact.jsx'>
					<Button>contact us</Button>
				</A>
			</header>
		</div>
	)
}
