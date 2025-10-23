import styled from 'styled-components'

const Img = styled.img`
	width: 165px;
	height: 28px;
`

export default function Clients() {
	return (
		<div style={{ backgroundColor: '#012F34' }}>
			<div
				style={{
					marginTop:"-40px",
					width: '1110px',
					margin: '0 auto',
					paddingTop:"30px ",
					paddingBottom:"50px "
				}}
			>
				<h2 style={{
					color:"white",
					fontWeight:"700",
					fontSize:"48px",
					textAlign:"center"
				}}>Some of our clients</h2>
				<div style={{
					display:"flex",
					justifyContent:"space-between"
				}}>
					<a href='#'>
						<Img src='./client1.png' alt='' />
					</a>
					<a href='#'>
						<Img src='./client2.png' alt='' />
					</a>
					<a href='#'>
						<Img src='./client3.png' alt='' />
					</a>
					<a href='#'>
						<Img src='./client4.png' />
					</a>
					<a href='#'>
						<Img src='./client5.png' />
					</a>
				</div>
			</div>
		</div>
	)
}
