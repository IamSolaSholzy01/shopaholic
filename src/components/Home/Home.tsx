import { number } from 'prop-types';
import React from 'react';
import axios from 'axios';

const baseURL = "https://shopaholic-api.herokuapp.com/gamelists/current"

const range = (min: number, max: number) => [...Array(max - min + 1).keys()].map(i => i + min);

const TopSlider = () => {
    return (
        <div>
            <h6 className="text-xl text-center w-full my-8 py-8 bg-slate-50">Top Slider will go here</h6>
        </div>
    )
}

const GameType = () => {
    const types: string[] = []
    range(3, 10).map(number => types.push(`NAP ${number}`))
    range(3, 10).map(number => types.push(`PERM ${number}`))
    return (
        <>
            <div>
                <select className="focus:ring-0 ring-0 border-0 outline-none" name="" id="">
                    {types.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

const HomeHeader = () => (
    <div>
        <div className="text-center text-3xl fonr-bold py-8 border-b-4 border-blue-400">FIXTURES</div>
        <div className="text-center"> Game Type <GameType /></div>
    </div>
)

const GameItem = (props: any) => {
    return (
        <>
        <div className="rounded-lg my-2 mx-2 border grid grid-rows-2 items-center justify-items-center text-lg">
            <div className="border-b w-full">
                <div className="grid grid-cols-2 items-center justify-items-center font-medium">
                    <div className="border-r w-full px-12 py-3 flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center justify-between w-1/4">
                            <span className="order-last">{props.game.home}</span>
                            <div className="h-max">
                                <img src="favicon.ico" alt="" className="h-12"/>
                            </div>    
                        </div>
                    </div>
                    <div className="border-l w-full px-12 py-3 flex flex-row-reverse justify-between items-center">
                        <div className="flex flex-row items-center justify-between w-1/4">
                            <span className="order-first">{props.game.away}</span>
                            <div className="h-max">
                                <img src="favicon.ico" alt="" className="h-12"/>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 justify-between w-full items-center">
                <div className="px-12 grid grid-rows-2 font-regular text-base">
                    <div className="grid grid-cols-3"><span className="text-gray-400">Date:</span><span className="col-span-2">{props.game.date}</span></div>
                    <div className="grid grid-cols-3"><span className="text-gray-400">Time:</span><span className="col-span-2">{props.game.time}</span></div>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-400">Odds</span>
                    <span className="text-gray-600 text-xl">{props.game.odd}</span>
                </div>
                <div className="px-12 grid grid-rows-1 font-regular text-base justify-self-end">
                    <div className="grid grid-cols-3"><span className="text-gray-400">League:</span><span className="col-span-2">{props.game.league}</span></div>
                    {/* <div className="grid grid-cols-3"><span className="text-gray-400">Time:</span><span className="col-span-2"></span></div> */}
                </div>
            </div>
        </div>
        </>
    )
}

const GameContainer = () => {
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          console.log(response.data)
        });
      }, []);
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
            {games!.map((item, index) => (
                <li key={index}>
                    <GameItem game={item}/>
                </li>
            ))}
        </ul>
    )
}
const Home = () => {
    return (
        <div className="mb-[57px]">
            <TopSlider />
            <HomeHeader />
            <GameContainer />
        </div>
    )
}

export default Home