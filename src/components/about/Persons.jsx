import { useState } from 'react'

const data = [
	{
		id: 1,
		img: './person1.jpg',
		title: 'Nikita Marks',
		text: 'Founder & CEO.',
	},
	{
		id: 2,
		img: './person2.jpg',
		title: 'Cristian Duncan',
		text: 'Co-founder & COO',
	},
	{
		id: 3,
		img: './person3.jpg',
		title: 'Cruz Hamer',
		text: 'Co-founder & CTO',
	},
	{
		id: 4,
		img: './person4.jpg',
		title: 'Drake Heaton',
		text: 'Business Development Lead',
	},
	{
		id: 5,
		img: './person5.jpg',
		title: 'Griffin Wise',
		text: 'Lead Marketing',
	},
	{ id: 6, img: './person6.jpg', title: 'Aden Allan', text: 'Account Manager' },
]

export default function Persons() {
	const [flipped, setFlipped] = useState(null)

	return (
		<div style={{ backgroundColor: '#004047' }}>
			<div
				style={{
					margin: '0 auto',
					width: '1110px',
					marginTop: '-60px',
					paddingTop: '40px',
				}}
			>
				<h3
					style={{
						color: 'white',
						textAlign: 'center',
						fontSize: '48px',
						fontWeight: '700',
					}}
				>
					Meet the directors
				</h3>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '20px',
						justifyItems: 'center',
					}}
				>
					{data.map(item => (
						<div
							key={item.id}
							style={{
								width: '350px',
								height: '253px',
								perspective: '1000px',
								marginBottom:"40px",
							}}
						>
							<div
								style={{
									position: 'relative',
									width: '100%',
									height: '100%',
									transformStyle: 'preserve-3d',
									transition: 'transform 0.6s',
									transform:
										flipped === item.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
								}}
							>
								<div
									style={{
										position: 'absolute',
										inset: 0,
										backgroundColor: '#012F34',
										color: 'white',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										backfaceVisibility: 'hidden',
										borderRadius: '10px',
									}}
								>
									<img
										style={{
											borderRadius: '50%',
											width: '100px',
											height: '100px',
										}}
										src={item.img}
									/>
									<h4 style={{color:"#79C8C7"}}>{item.title}</h4>
									<p style={{color:"white"}}>{item.text}</p>
									<button
										style={{
											width: '56px',
											height: '56px',
											borderRadius: '50%',
											backgroundColor: '#F67E7E',
											border: 'none',
											color: 'white',
											fontSize: '24px',
											cursor: 'pointer',
											marginBottom:"-10%"
										}}
										onClick={() => setFlipped(item.id)}
									>
										+
									</button>
								</div>

								<div
									style={{
										position: 'absolute',
										inset: 0,
										backgroundColor: '#002529',
										color: '#79C8C7',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										transform: 'rotateY(180deg)',
										backfaceVisibility: 'hidden',
										borderRadius: '10px',
									}}
								>
									<h3>${item.title}</h3>
									<p style={{color:"white"}}>
										“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sed do eiusmod tempor incididunt ut labore.”
									</p>
									<button
										style={{
											width: '56px',
											height: '56px',
											borderRadius: '50%',
											backgroundColor: '#79C8C7',
											border: 'none',
											color: 'white',
											fontSize: '24px',
											cursor: 'pointer',
											marginBottom:"-33%"
											}}
										onClick={() => setFlipped(null)}
									>
										×
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
