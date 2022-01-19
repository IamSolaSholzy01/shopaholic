import { number } from 'prop-types'
import React from 'react'
import { ReactPropTypes } from 'react'
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';

const HomeHeader = () => (
    <div>
        <div className="text-center text-3xl fonr-bold py-8 border-b-4 border-blue-400">FIXTURES</div>
        {/* <div>
            Gametype 
            <select name="" id="">
                <option value="">NAP</option>
            </select>
        </div> */}
    </div>
)

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

const GameContainer = () => {
    const games = [
        {num: 1, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.50},
        {num: 2, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 3.85},
        {num: 3, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 4, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 5, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 6, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 7, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 8, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 9, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 10, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 11, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
        {num: 12, league: 'Eng-Prem-League', home: 'Arsenal', away: 'Burnley', date: '23 Jan', time: '15:00', odd: 4.00},
    ]
    return (
        <ul>
            {games.map((item, index) => (
                <li key={index}>
                    <GameItem game={item}/>
                </li>
            ))}
        </ul>
    )
}
const Home = () => {
    return (
        <div>
            <HomeHeader />

            <GameContainer />
        </div>
    )
}

export default Home