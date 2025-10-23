import styled from 'styled-components'

const Line = styled.div`
	width: 40px;
	height: 4px;
	background-color: #79c8c7;
	border-radius: 2px;
	margin-top: 40px;
`

export default function Header() {
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
					Find the best <span style={{ color: '#F67E7E' }}>talent</span>
				</h1>
				<div
					style={{
						width: '400px',
						fontWeight: '600',
						fontSize: '18px',
						color: 'white',
					}}
				>
					<Line />
					<br />
					<br />
					<br /> <br />
					<p>
						Finding the right people and building high performing teams can be
						hard. Most companies aren’t tapping into the abundance of global
						talent. We’re about to change that.
					</p>
				</div>
			</div>
		</div>
	)
}
