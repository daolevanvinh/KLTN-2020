import HomePage_Guest from './HomePage_Guest/HomePage_Guest'
import About from './About/About'

export default [
    {
        path: '/',
        name: 'home-page-guest',
        component: HomePage_Guest
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