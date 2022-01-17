import { Suspense, SyntheticEvent, useState } from 'react'
import { useImage } from 'react-image'
import { useNavigate } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop'
import Close from '@mui/icons-material/Close'
import logo from '../../Images/logo.webp'
//import { Link } from 'react-router-dom'
// import { Motion, spring } from ''
import { Motion, spring } from '../../ReactMotion'
import { LoginTab, PocketTab, SocialTab } from './NavTabs'

const MyLogoComponent = () => {
    const { src } = useImage({
        srcList: logo,
    })
    const classList = 'w-1/3 md:w-32 lg:w-48'

    return <img src={src} alt="logo" className={classList} />
}

// const buttonStyle = {
//     backgroundColor: 'transparent',
//     color: 'black',
//     border: '1px solid black',
//     borderRadius: 4,
//     height: 40,
//     lineHeight: 2.5,
//     paddingLeft: 16,
//     paddingRight: 16,
//     outline: 'none',
//     cursor: 'pointer'
// }

const panelStyle = {
    width: 320,
    background: '#fff'
}

const Panel = (visible: any) => {

    const [login_active, setLoginActive] = useState(true)
    const [pocket_active, setPocketActive] = useState(false)
    const [social_active, setSocialActive] = useState(false)
    let visibles = visible.visible

    const list = [
        {
            text: 'log in',
            classList: `border-r border-white py-2 bg-white ${login_active ? 'text-blue-600 cursor-default' : 'text-black cursor-pointer'}`,
            route: '#login',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(true)
                setPocketActive(false)
                setSocialActive(false)
            }
        },
        {
            text: 'pocket',
            classList: `border-white py-2 bg-white ${pocket_active ? 'text-blue-600 cursor-default' : 'text-black cursor-pointer'}`,
            route: '#pocket',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(false)
                setPocketActive(true)
                setSocialActive(false)
            }
        },
        {
            text: 'social',
            classList: `border-l border-white py-2 bg-white ${social_active ? 'text-blue-600 cursor-default' : 'text-black cursor-pointer'}`,
            route: '#social',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(false)
                setPocketActive(false)
                setSocialActive(true)
            }
        },
    ]

    return (
        <>
            <Motion
                style={{
                    x: spring(visibles ? 0 : -100),
                    opacity: spring(visibles ? 1 : 0),
                }}
            >{(currentStyles) => (
                <div className="fixed top-0 bottom-0 left-0 h-screen"
                    style={{
                        ...panelStyle,
                        transform: `translate3d(${currentStyles.x}%, 0, 0)`,
                        opacity: currentStyles.opacity
                    }}
                >
                    <div className={`mt-16 pt-4 grid grid-cols-3 items-center h-max text-sm font-semibold capitalize text-center`}>
                        {list.map((item, index) => (
                            <a href={`#${item.route}`} className={`uppercase ${item.classList}`} onClick={item.click} key={index}>{item.text}</a>
                        ))}
                    </div>
                    <LoginTab visible={login_active} />
                    <PocketTab visible={pocket_active} />
                    <SocialTab visible={social_active} />
                </div>
            )}
            </Motion>
        </>
    )
}

export const NavAuthList = () => {
    const [visibility, setVisibility] = useState(false)
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setVisibility(!visibility ? true : false)
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(!open);
    }

    const navigate = useNavigate()

    const list = [
        {
            text: 'login',
            styleList: 'text-gray-500 hover:text-gray-900',
            route: '/login',
            click: (event: SyntheticEvent, visibility: boolean) => {
                event.preventDefault()
                visibility = !visibility ? true : false
                handleOpen()
                return visibility;
            }
        },
        {
            text: 'register',
            route: '/register',
            styleList: 'ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                navigate('/register')
            }
        }
    ]

    return (
        <>
            <div>                
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                    {/* Needed to close panel on click of the backdrop */}
                    <div className={`opacity-0 w-screen h-screen fixed top-0 left-0`} onClick={handleClose}></div>
                    <Panel visible={visibility} />
                    <Close className={`absolute top-5 left-[285px] cursor-pointer text-black`} style={visibility ? {display: 'block'} : {display: 'none'}} onClick={handleClose} />
                </Backdrop>
                {/* <Panel visible={visibility} /> */}
            </div>
            <ul className='flex flex-row items-center md:justify-end'>
                {list.map((item, index) => (
                    <li key={index}>
                        <button className={`uppercase whitespace-nowrap text-base font-medium ${item.styleList}`} onClick={(e) => {
                            setVisibility(item.click(e, visibility) ? true : false)
                        }}>
                            {item.text}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

const Nav = () => (
    <nav className='w-full flex justify-between items-center'>
        <Suspense fallback="Logo">
            <MyLogoComponent />
        </Suspense>
        <div>
            <NavAuthList />
        </div>
    </nav>
)

export default Nav