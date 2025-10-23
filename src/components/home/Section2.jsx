const data = [
	{
		id: 1,
		title: 'Kady Baker',
		text: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
		page: 'Product Manager at Bookmark',
		img: './section2-img1.jpg',
	},
	{
		id: 2,
		title: 'Aiysha Reese',
		img: './section2-img2.jpg',
		text: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”.',
		page: 'Founder of Manage',
	},
	{
		id: 3,
		title: 'Arthur Clarke',
		img: './section2-img3.jpg',
		text: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
		page: 'Co-founder of MyPhysio',
	},
]
export default function Section2() {
	return (
		<div style={{ backgroundColor: '#004047' }}>
			<div
				style={{
					margin: '0 auto',
					width: '1110px',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding:"150px 0"
				}}
			>
				<h2
					style={{
						textAlign: 'center',
						color: 'white',
						fontWeight: '700',
						fontSize: '48px',
						width: '900px',
						lineHeight: '48px',
						marginTop: '-20px',
						paddingTop: '20px',
					}}
				>
					Delivering real results for top companies. Some of our success
					stories.
				</h2>

				<div
					style={{
						display: 'flex',
					}}
				>
					{data.map(item => (
						<div
							style={{
								textAlign: 'center',
								width:"530px"
							}}
							key={item.id}
						>
							<p
								style={{
									color: 'white',
								}}
							>
								{item.text}
							</p>
							<h4
								style={{
									color: '#79C8C7',
								}}
							>
								{item.title}
							</h4>
							<p style={{
								color:"white"
							}}>{item.page}</p>
							<img
								style={{
									borderRadius: '50%',
								}}
								src={item.img}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
