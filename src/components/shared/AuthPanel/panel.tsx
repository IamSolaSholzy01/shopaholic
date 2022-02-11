import { SyntheticEvent, useState } from "react"
import { Motion, spring } from "../../ReactMotion"
import { PocketTab, SocialTab } from '../Nav/NavTabs'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const panelStyle = {
    width: 320,
    background: '#fff'
}

const AuthPanel = (visible: any) => {

    const [login_active, setLoginActive] = useState(true)
    const [pocket_active, setPocketActive] = useState(false)
    
    let visibles = visible.visible

    const list = [
        {
            text: 'profile',
            classList: `border-r border-white py-2 bg-white ${login_active ? 'text-rose-600 cursor-default' : 'text-black cursor-pointer'}`,
            route: '#login',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(true)
                setPocketActive(false)
                
            }
        },
        {
            text: 'wallet',
            classList: `border-white py-2 bg-white ${pocket_active ? 'text-blue-600 cursor-default' : 'text-black cursor-pointer'}`,
            route: '#pocket',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(false)
                setPocketActive(true)
                
            }
        },
        // {
        //     text: 'social',
        //     classList: `border-l border-white py-2 bg-white ${social_active ? 'text-blue-600 cursor-default' : 'text-black cursor-pointer'}`,
        //     route: '#social',
        //     click: (event: SyntheticEvent) => {
        //         event.preventDefault()
        //         setLoginActive(false)
        //         setPocketActive(false)
        //         setSocialActive(true)
        //     }
        // },
    ]

    return (
        <>
            <Motion
                style={{
                    x: spring(visibles ? 0 : 100),
                    opacity: spring(visibles ? 1 : 0),
                }}
            >{(currentStyles) => (
                <div className="fixed top-0 bottom-0 right-0 h-screen"
                    style={{
                        ...panelStyle,
                        transform: `translate3d(${currentStyles.x}%, 0, 0)`,
                        opacity: currentStyles.opacity
                    }}
                >
                    <div className="flex flex-row mt-16 text-base text-black w-full justify-center items-center pl-2">
                        <AccountCircleIcon fontSize="large"/>
                        <div className="ml-3 flex flex-col">
                            <span>{localStorage.getItem('username')}</span>
                            <span>User ID: {localStorage.getItem('user_id')}</span>
                        </div>
                    </div>
                    <div className="flex flex-row mt-3 text-black justify-between items-center px-2">
                        <span>Trust Balance: 0</span>
                        <span>Balance: 0</span>
                    </div>
                    <div className={`mt-3 pt-4 grid grid-cols-${list.length} items-center h-max text-sm font-semibold capitalize text-center`}>
                        {list.map((item, index) => (
                            <a href={`#${item.route}`} className={`uppercase ${item.classList}`} onClick={item.click} key={index}>{item.text}</a>
                        ))}
                    </div>
                    <PocketTab visible={login_active} />
                    <SocialTab visible={pocket_active}/>
                    {/* <PocketTab visible={pocket_active} />
                    <SocialTab visible={social_active} /> */}
                </div>
            )}
            </Motion>
        </>
    )
}

export default AuthPanel