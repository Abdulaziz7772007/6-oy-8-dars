import Footer from '../home/Footer'
import Navbar from '../Navbar/navbar'
const data = [
	{
		id: 1,
		img: './section1-img1.svg',
		text: 'The quality of our talent network',
	},
	{
		id: 2,
		img: './section1-img2.svg',
		text: 'Usage & implementation of our software',
	},
	{
		id: 3,
		img: './section1-img3.svg',
		text: 'How we help drive innovation',
	},
]

export default function Contact() {
	return (
		<div
			style={{
				backgroundColor: '#014E56',
			}}
		>
			<Navbar />

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '1110px',
					margin: '0 auto',
					padding: '60px 0',
				}}
			>
				<div>
					<h2 style={{ fontWeight: '700', fontSize: '64px', color: 'white' }}>
						Contact
					</h2>
					<p style={{ color: '#F67E7E', fontWeight: '700', fontSize: '32px' }}>
						Ask us about
					</p>
					<div
						style={{
							width: '540px',
							height: '240px',
						}}
					>
						{data.map(item => (
							<div style={{ display: 'flex' }} key={item.id}>
								<img style={{ marginRight: '10px' }} src={item.img} />
								<p style={{ textAlign: 'center', color: 'white' }}>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
				<div
					style={{
						marginTop: '100px',
						width: '540px',
						height: '420px',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							gap: '20px', 
						}}
					>
						{['Name', 'Email Address', 'Company Name', 'Title'].map(
							(placeholder, index) => (
								<div key={index} style={{ width: '100%' }}>
									<input
										type='text'
										placeholder={placeholder}
										style={{
											width: '100%',
											border: 'none',
											outline: 'none',
											backgroundColor: 'transparent',
											color: 'white',
											fontSize: '16px',
											paddingBottom: '5px',
										}}
									/>
									<hr style={{ border: '1px solid #79C8C7', opacity: 0.5 }} />
								</div>
							)
						)}

						<div style={{ width: '100%' }}>
							<textarea
								placeholder='Message'
								style={{
									width: '100%',
									border: 'none',
									outline: 'none',
									backgroundColor: 'transparent',
									color: 'white',
									fontSize: '16px',
									paddingBottom: '5px',
								}}
							/>
							<hr style={{ border: '1px solid #79C8C7', opacity: 0.5 }} />
						</div>
					</div>

					<button
						style={{
							marginTop: '20px',
							color: '#004047',
							fontSize: '18px',
							width: '120px',
							height: '48px',
							border: 'none',
							borderRadius: '24px',
							backgroundColor: '#FFFFFF',
							cursor: 'pointer',
						}}
					>
						submit
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}
