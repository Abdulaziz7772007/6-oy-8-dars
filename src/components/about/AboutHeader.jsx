import styled from 'styled-components'

const Line = styled.div`
	width: 40px;
	height: 4px;
	background-color: #F67E7E;
	border-radius: 2px;
	margin-top: 40px;
`

export default function AboutHeader() {
	return (
		<div style={{ backgroundColor: '#014E56' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '0 auto',
					width: '1110px',
					alignItems: 'center',
				}}
			>
				<h1
					style={{
						fontWeight: '700',
						fontSize: '100px',
						width: '500px',
						color: 'white',
					}}
				>
					About
				</h1>
				<div
					style={{
						width: '400px',
						fontWeight: '600',
						fontSize: '18px',
						color: 'white',
						marginBottom:"100px"
					}}
				>
					<Line />
					
					<br /> <br />
					<p>
						We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
					</p>
				</div>
			</div>
		</div>
	)
}
