import { Link } from 'react-router-dom'
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
						<Link
							style={{
								textDecoration: 'none',
								marginRight: '80px',
								color: 'white',
							}}
							to={'/'}
						>
							myteam
						</Link>
					</h1>
					<Link
						to={'/'}
						style={{
							textDecoration: 'none',
							color: 'white',
						}}
					>
						home{' '}
					</Link>
					<Link
						to={'/about'}
						style={{
							textDecoration: 'none',
							color: 'white',
						}}
					>
						about
					</Link>
				</div>
				<Link to={'/contact'}>
					<Button>contact us</Button>
				</Link>
			</header>
		</div>
	)
}
