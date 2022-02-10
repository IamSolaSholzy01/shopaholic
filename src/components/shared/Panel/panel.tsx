import { SyntheticEvent, useState } from "react"
import { Motion, spring } from "../../ReactMotion"
import { LoginTab, PocketTab, SocialTab } from '../Nav/NavTabs'

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
            classList: `border-r border-white py-2 bg-white ${login_active ? 'text-rose-600 cursor-default' : 'text-black cursor-pointer'}`,
            route: '#login',
            click: (event: SyntheticEvent) => {
                event.preventDefault()
                setLoginActive(true)
                setPocketActive(false)
                setSocialActive(false)
            }
        },
        // {
        //     text: 'pocket',
        //     classList: `border-white py-2 bg-white ${pocket_active ? 'text-blue-600 cursor-default' : 'text-black cursor-pointer'}`,
        //     route: '#pocket',
        //     click: (event: SyntheticEvent) => {
        //         event.preventDefault()
        //         setLoginActive(false)
        //         setPocketActive(true)
        //         setSocialActive(false)
        //     }
        // },
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
                    <div className={`mt-16 pt-4 grid grid-cols-${list.length} items-center h-max text-sm font-semibold capitalize text-center`}>
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

export default Panel