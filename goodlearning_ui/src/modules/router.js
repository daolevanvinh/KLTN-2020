import HomePage_Guest from './HomePage_Guest/HomePage_Guest'
import About from './About/About'
import CoursePage from './CoursePage/CoursePage'
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
    }, 
    {
        path: '/test',
        name: 'test-page',
        component: About
    },
    {
        path: '/course/:id',
        name: 'course-page',
        component: CoursePage
    }
]