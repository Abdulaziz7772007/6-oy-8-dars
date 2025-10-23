import styled from 'styled-components'

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
export default function Footer() {
	return (
		<div style={{ backgroundColor: '#002529', marginTop: '-20px' }}>
			<div
				style={{
					margin: '0 auto',
					width: '1110px',
					padding: '20px 0',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div>
					<h2>
						<a
							style={{
								textDecoration: 'none',
								color: 'white',
							}}
							href='#'
						>
							myteam
						</a>
					</h2>
					<div >
						<Home style={{marginRight:"20px"}} href='#'>home</Home>
						<About href='#'>about</About>
					</div>
				</div>
				<div
					style={{
						marginLeft: '-200px',
						color: 'white',
						opacity: '0.6',
					}}
				>
					<p>987 Hillcrest Lane</p>
					<p>Irvine, CA</p>
					<p>California 92714</p>
					<p>Call Us : 949-833-7432</p>
				</div>
				<div>
					<img src='./social.png' alt='' />
					<p
						style={{
							color: 'white',
							opacity: '0.6',
							
						}}
					>
						Copyright 2020. All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	)
}
