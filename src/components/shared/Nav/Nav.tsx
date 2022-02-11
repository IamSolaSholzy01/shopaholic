import { Suspense, SyntheticEvent, useState } from 'react'
import { useImage } from 'react-image'
import { useNavigate } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop'
import Close from '@mui/icons-material/Close'
import logo from '../../Images/logo.webp'
import Panel from '../Panel'
import { LoginTab } from '../../LoginTab'
import RegisterTab from '../../RegisterTab/RegisterTab'
import AuthPanel from '../AuthPanel'


export const MyLogoComponent = () => {
    const { src } = useImage({
        srcList: logo,
    })
    const classList = 'w-1/3 md:w-32 lg:w-48'

    return <img src={src} alt="logo" className={classList} />
}

export const NavAuthList = () => {
    const [loginPanelVisibility, setLoginPanelVisibility] = useState(false);
    const [open, setOpen] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
    const [authVisible, setAuthVisible] = useState(false)
    
    const handleClose = () => {
        setLoginPanelVisibility(!loginPanelVisibility ? true : false)
        setOpen(false)
    }

    const navigate = useNavigate()

    

    const list = [
        {
            text: localStorage.getItem("loggedIn") === "true" ? "logout" : 'login',
            styleList: 'text-gray-500 hover:text-gray-900',
            route: '/login',
            click: (event: SyntheticEvent) => {
                event.preventDefault();
                if (localStorage.getItem("loggedIn") === "true") {                    
                   localStorage.setItem("loggedIn", "false")
                }
                else {
                    setLoginVisible(true);
                }
                
            }
        },
        {
            text: localStorage.getItem("loggedIn") === "true" ? "auth" : 'register',
            route: '/register',
            styleList: 'ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                if (localStorage.getItem("loggedIn") === "true") {                    
                    setAuthVisible(true)
                 }
                 else {
                    navigate('/register')
                 }
                
            }
        }
    ]

    return (
        <>
            <LoginTab onClose={() => setLoginVisible(false)} visible={loginVisible}>
                {/* <div>                
                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                        
                        <div className={`opacity-0 w-screen h-screen fixed top-0 left-0`} onClick={handleClose}></div>
                        <Panel visible={loginPanelVisibility} />
                        
                        <Close className={`absolute top-5 left-[285px] cursor-pointer text-black`} style={loginPanelVisibility ? {display: 'block'} : {display: 'none'}} onClick={handleClose} />
                    </Backdrop>
                </div> */}
                <ul className='flex flex-row items-center md:justify-end'>
                    {list.map((item, index) => (
                        <li key={index}>
                            <button className={`uppercase whitespace-nowrap text-base font-medium ${item.styleList}`} onClick={(e) => {
                                item.click(e);
                            }}>
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </LoginTab>
            <RegisterTab onClose={() => setAuthVisible(false)} visible={authVisible}>

            </RegisterTab>
            {/* <AuthPanel visible={loginPanelVisibility}/> */}
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