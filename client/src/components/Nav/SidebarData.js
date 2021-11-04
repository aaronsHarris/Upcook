import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reicpes',
        path: '/recipes',
        icon: <GiIcons.GiKnifeFork />,
        cName: 'nav-text'
    },
    {
        title: 'Learn',
        path: '/blog',
        icon: <FaIcons.FaBookReader />,
        cName: 'nav-text'
    },
    {
        title: 'Sign In',
        path: '/signin',
        icon: <GiIcons.GiCook />,
        cName: 'nav-text'
    },
    {
        title: 'Sign Up',
        path: '/signup',
        icon: <RiIcons.RiUserAddFill />,
        cName: 'nav-text'
    }
]