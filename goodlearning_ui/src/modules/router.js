import HomePage from './HomePage/HomePage'
import About from './About/About'

export default [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/About',
        name: 'about-page',
        component: About
    }, {
        path: '/test',
        name: 'test-page',
        component: About
    }
]