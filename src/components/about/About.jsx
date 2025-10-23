import Footer from '../home/Footer'
import Section3 from '../home/Section3'
import Navbar from '../Navbar/navbar'
import AboutHeader from './AboutHeader'
import Clients from './Clients'
import Persons from './Persons'

export default function About() {
	return (
		<div>
			<Navbar/>
			<AboutHeader/>
			<Persons/>
			<Clients/>
			<Section3/>
			<Footer/>
		</div>
	)
}
