import styled from 'styled-components'

const Button = styled.button`
	width: 110px;
	padding: 8px;
	border-radius: 20px;
	border: 2px solid #012f34;
	background-color: transparent;
	color: #012f34;
	&:hover {
		color: white;
		background-color: #012f34;
	}
`
export default function Section3() {
	return (
		<div style={{ backgroundColor: '#F67E7E' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '0 auto',
					width: '1110px',
					alignItems: 'center',
					// backgroundColor: '#F67E7E',
				}}
			>
				<h3
					style={{
						color: '#012F34',
						fontWeight: '700',
						fontSize: '48px',
					}}
				>
					Ready to get started?
				</h3>
				<Button style={{
					width:"153px",
					height:"48px"
				}}>contact us</Button>
			</div>
		</div>
	)
}
