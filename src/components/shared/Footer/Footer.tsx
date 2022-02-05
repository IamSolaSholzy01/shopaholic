import { Close } from '@mui/icons-material';
import React, { useState } from 'react';
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const footerTabStyle = 'w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1';

const GameItem = (props: any) => {
    return (
        <div className="my-1">
            <div className="flex flex-row justify-between bg-blue-100 text-sm">
                <span className="mx-1"><SportsOutlinedIcon className="text-blue-600"/> {props.game.num}</span>
                <span className="mx-1">{props.game.league}</span>
            </div>
            <div className="flex flex-row justify-between mx-1 items-center">
                <div>
                    <div className="flex flex-col justify-between">
                        <span>{props.game.home} - {props.game.away}</span>
                        <div className="flex flex-row justify-between text-xs pt-5">
                            <span className="bg-blue-600 text-white px-1">{props.game.date}</span>
                            <span>{props.game.time}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600">{props.game.odd}</button>
                </div>
            </div>
        </div>
    )
}

const BetSlip = () => {
	return (
		<div>
			<div className="flex flex-row justify-between w-full">
				<span>{games.length} Selections</span>
				<span>Game type: NAP 3</span>
			</div>
			<ul>
				{games.map((item, index) => (
					<li key={index}>
						<GameItem game={item}/>
					</li>
				))}
			</ul>
		</div>
	)
}

const games = [
	{num: 1, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.50},
	{num: 2, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 3.85},
	{num: 3, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
]

interface IMiniMenuProps {
	visible: boolean,
	closeMenu: () => void
}

const MiniMenu = (props: IMiniMenuProps) => {
	return (
		<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white py-4 px-4 min-w-[600px] max-w-[80vw] rounded shadow-md" style={props.visible ? {display: 'block'} : {display: 'none'}}>
			<div className="flex flex-row justify-between pb-4 border-b border-black">
				<span className="font-bold">Coupon</span>
				<Close className="cursor-pointer" onClick={props.closeMenu} />
			</div>
			<BetSlip /> 
		</div>
	)
}

const Footer = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<>
			<footer className='block fixed inset-x-0 bottom-0 z-10 bg-white shadow-t'>
				<div id="tabs" className="flex justify-between">
						<Link underline="none" component={RouterLink} to='/' className={footerTabStyle}>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
							<span className="tab tab-menu block text-xs">Menu</span>
						</Link>
						<Link underline="none" component={RouterLink} to='/' className={footerTabStyle}>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M21,8c-1.45,0-2.26,1.44-1.93,2.51l-3.55,3.56c-0.3-0.09-0.74-0.09-1.04,0l-2.55-2.55C12.27,10.45,11.46,9,10,9 c-1.45,0-2.27,1.44-1.93,2.52l-4.56,4.55C2.44,15.74,1,16.55,1,18c0,1.1,0.9,2,2,2c1.45,0,2.26-1.44,1.93-2.51l4.55-4.56 c0.3,0.09,0.74,0.09,1.04,0l2.55,2.55C12.73,16.55,13.54,18,15,18c1.45,0,2.27-1.44,1.93-2.52l3.56-3.55 C21.56,12.26,23,11.45,23,10C23,8.9,22.1,8,21,8z"/><polygon points="15,9 15.94,6.93 18,6 15.94,5.07 15,3 14.08,5.07 12,6 14.08,6.93"/><polygon points="3.5,11 4,9 6,8.5 4,8 3.5,6 3,8 1,8.5 3,9"/></g></g></svg>
							<span className="tab tab-kategori block text-xs">STAT</span>
						</Link>
						<Link underline="none" component={RouterLink} to='/' onClick={() => {setMenuOpen(!menuOpen ? true : false)}} className={footerTabStyle}>
							<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
							<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<path d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z" fill="currentColor" opacity="0.1"></path>
								<path d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z" fill="currentColor" transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "></path>
								<circle stroke="currentColor" strokeWidth="2" cx="21" cy="21" r="20"></circle>
								</g>
								</svg>
							<span className="tab tab-explore block text-xs">0.00</span>
						</Link>
						<Link underline="none" component={RouterLink} to='/' className={footerTabStyle}>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24" x="0" y="0"/></g><g><g><path d="M19,13H5c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4C21,13.9,20.1,13,19,13z M19,19H5v-4h14V19z"/><path d="M19,3H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,9H5V5h14V9z"/></g></g></svg>
							<span className="tab tab-whishlist block text-xs">My Bets</span>
						</Link>
						<Link underline="none" component={RouterLink} to='/' className={footerTabStyle}>
							<svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="7" width="2" x="5" y="10"/><rect height="7" width="2" x="11" y="10"/><path d="M22,6L12,1L2,6v2h20V6z M6.47,6L12,3.24L17.53,6H6.47z"/><path d="M2,19v2h12.4c-0.21-0.64-0.32-1.31-0.36-2H2z"/><polygon points="19,12.26 19,10 17,10 17,13.26"/><path d="M20,14l-4,2v2.55c0,2.52,1.71,4.88,4,5.45c2.29-0.57,4-2.93,4-5.45V16L20,14z M19.28,21l-2.03-2.03l1.06-1.06l0.97,0.97 l2.41-2.38l1.06,1.06L19.28,21z"/></g></g></svg>
							<span className="tab tab-account block text-xs">Check</span>
						</Link>
					</div>
			</footer>
			<MiniMenu visible={menuOpen} closeMenu={() => setMenuOpen(false)} />
		</>
		)
	}

export default Footer;
