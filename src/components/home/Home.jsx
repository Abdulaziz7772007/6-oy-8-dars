import Navbar from '../Navbar/navbar.jsx'
import Footer from './Footer.jsx'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default function Home() {
	return (
		<div>
			<Navbar/>
			<Header/>
			<Section1/>
			<Section2/>
			<Section3/>
			<Footer/>
		</div>
	)
}
