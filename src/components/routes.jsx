import { createBrowserRouter } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'

export const routes = createBrowserRouter([
	{
		path:"/",
		element:<Home/>
	},
	{
		path:"/about",
		element:<About/>
	},
	{
		path:"/contact",
		element:<Contact/>
	}
])
