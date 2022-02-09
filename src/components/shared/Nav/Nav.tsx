import { Suspense, SyntheticEvent, useState } from 'react';
import { useImage } from 'react-image';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Close from '@mui/icons-material/Close';
import logo from '../../Images/logo.webp';
import Panel from '../Panel';
import { LoginTab } from '../../LoginTab';
import { buttonStyle } from '../../styles';


export const MyLogoComponent = () => {
    const { src } = useImage({
        srcList: logo,
    })
    const classList = 'w-1/3 md:w-32 lg:w-48'

    return <img src={src} alt="logo" className={classList} />
}

export const NavAuthList = () => {
    const [visibility, setVisibility] = useState(false);
    const [open, setOpen] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
    
    const handleClose = () => {
        setVisibility(!visibility ? true : false)
        setOpen(false)
    }

    const navigate = useNavigate()

    const list: [
        {
            text: string,
            styleList: string,
            route: string,
            click: (event: SyntheticEvent) => void,
            variant: 'text' | 'contained' | 'outlined'
        },
        {
            text: string,
            styleList: string,
            route: string,
            click: (event: SyntheticEvent) => void,
            variant: 'text' | 'contained' | 'outlined'
        }
    ] = [
        {
            text: 'login',
            styleList: 'text-gray-500 hover:text-gray-900',
            route: '/login',
            click: (event: SyntheticEvent) => {
                event.preventDefault();
                setLoginVisible(true);
            },
            variant: 'text'
        },
        {
            text: 'register',
            route: '/register',
            styleList: 'ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                navigate('/register')
            },
            variant: 'contained'
        }
    ]

    return (
        <LoginTab onClose={() => setLoginVisible(false)} visible={loginVisible}>
            <div>                
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                    {/* Needed to close panel on click of the backdrop */}
                    <div className={`opacity-0 w-screen h-screen fixed top-0 left-0`} onClick={handleClose}></div>
                    <Panel visible={visibility} />
                    <Close className={`absolute top-5 left-[285px] cursor-pointer text-black`} style={visibility ? {display: 'block'} : {display: 'none'}} onClick={handleClose} />
                </Backdrop>
            </div>
            <ul className='flex flex-row items-center md:justify-end'>
                {list.map((item, index) => (
                    <li key={index}>
                        {/* <button className={`uppercase whitespace-nowrap text-base font-medium ${item.styleList}`} onClick={(e) => {
                            item.click(e);
                        }}>
                            {item.text}
                        </button> */}
                        <Stack direction="row" spacing="1">
                            <Button color='primary' variant={item.variant} onClick={(e) => {item.click(e)}} sx={buttonStyle}>
                                {item.text}
                            </Button>
                        </Stack>
                    </li>
                ))}
            </ul>
        </LoginTab>
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