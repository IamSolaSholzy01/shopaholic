import React, { Fragment, Suspense, SyntheticEvent, useState } from 'react'
import { useImage } from 'react-image'
import logo from '../../Images/logo.webp'
import { Link } from 'react-router-dom'
import { Motion, spring, presets } from 'react-motion'

const MyLogoComponent = () => {
    const { src } = useImage({
        srcList: logo,
    })
    const classList = 'w-56'

    return <img src={src} alt="logo" className={classList} />
}

const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'black',
    border: '1px solid black',
    borderRadius: 4,
    height: 40,
    lineHeight: 2.5,
    paddingLeft: 16,
    paddingRight: 16,
    outline: 'none',
    cursor: 'pointer'
}

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
            classList: `border-r border-white py-2 ${login_active ? 'bg-white text-blue-600' : 'bg-blue-100'}`,
            route: '#',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(true)
                setPocketActive(false)
                setSocialActive(false)
            }
        },
        {
            text: 'pocket',
            classList: `border-white py-2 ${pocket_active ? 'bg-white text-blue-600' : 'bg-blue-100'}`,
            route: '#',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(false)
                setPocketActive(true)
                setSocialActive(false)
            }
        },
        {
            text: 'social',
            classList: `border-l border-white py-2 ${social_active ? 'bg-white text-blue-600' : 'bg-blue-100'}`,
            route: '#',
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
                           <a href={item.route} className={item.classList} onClick={item.click} key={index}>{item.text}</a>
                       ))}
                    </div> 
                    
                </div>
            )}
            </Motion>
        </>
    )
}

export const NavAuthList = () => {
    const [visibility, setVisibility] = useState(false)
    const list = [
        {
            text: 'login',
            styleList: 'px-4 py-2 bg-blue-100 border border-blue-300 rounded',
            route: '/login',
            click: (event: SyntheticEvent, visibility: boolean) => {
                event.preventDefault()
                visibility = !visibility ? true : false
                return visibility;
            }
        },
        {
            text: 'register',
            route: '/register',
            styleList: 'px-4 py-2 bg-blue-500 rounded text-white',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
            }
        }
    ]

    return (
        <>
            <ul className='flex flex-row items-center justify-end'>
                {list.map((item, index) => (
                    <li className={`capitalize mx-2 cursor-pointer ${item.styleList}`} key={index}>
                        <a href={item.route} onClick={(e) => {
                            setVisibility(item.click(e, visibility) ? true : false)
                        }}>
                            { item.text }
                        </a>
                    </li>
                ))}
            </ul>
            <div style={{width: 320}}>
                <div className={`opacity-40 bg-black w-screen h-screen fixed top-0 left-0 ${visibility ? 'block' : 'hidden'}`} onClick={() => setVisibility(!visibility ? true : false)}></div>
                <Panel visible={visibility}/>
                <button className={`absolute top-3 left-[180px] ${visibility ? 'block' : 'hidden'}`}
                    style={buttonStyle}
                    onClick={() => setVisibility(!visibility ? true : false)}
                >
                    Close Panel
                </button>
            </div>
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