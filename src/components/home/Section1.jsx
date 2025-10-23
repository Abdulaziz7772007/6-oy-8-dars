import styled from 'styled-components'
const data = [
	{
		id: 1,
		img: './section1-img1.svg',
		title: 'Experienced Individuals',
		text: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
	},
	{
		id: 2,
		title: 'Easy to Implement',
		img: './section1-img2.svg',
		text: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
	},
	{
		id: 3,
		title: 'Enhanced Productivity',
		img: './section1-img3.svg',
		text: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
	},
]

const Line = styled.div`
	width: 40px;
	height: 4px;
	background-color: #f67e7e;
	border-radius: 2px;
	margin-top: 40px;
`
export default function Section1() {
	return (
		<div style={{ backgroundColor: '#012F34' }}>
			<div
				style={{
					margin: '0 auto',
					width: '1110px',
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0 60px',
				}}
			>
				<div style={{
					alignItems:"flex-start"
				}}>
					<Line />
					<h2
						style={{
							fontWeight: '700',
							fontSize: '50px',
							width: '450px',
							color: 'white',
						}}
					>
						Build & manage distributed teams like no one else.
					</h2>
				</div>
				<div
					style={{
						padding: '120px 0',
					}}
				>
					{data.map(item => (
						<div style={{ display: 'flex', gap: "20px", marginLeft:"150px",alignItems:"center"}} key={item.id}>
							<img
								style={{
									width: '72px',
									height: '72px',
								}}
								src={item.img}
							/>
							<div>
								<h5
									style={{
										color: '#f67e7e',
									}}
								>
									{item.title}
								</h5>
								<p 
								style={{
								color: "white",
							}}>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
