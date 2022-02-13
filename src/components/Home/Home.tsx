import {CircularProgress} from "@mui/material";
import React, {useEffect, useState, useContext} from "react";
import {URLAPI} from "../../api/ApiMethods";
import {Get} from "../../api/fetch";
import {SwapTableContext} from "../../contexts/SwapTableContext";
import Carousel from "../Carousel/index";

type GameObjectType = {[key: string]: string | number; _id: number};

const range = (min: number, max: number) =>
  [...Array(max - min + 1).keys()].map(i => i + min);

const TopSlider = () => {
  return (
    <div>
      <Carousel>
        <img src="/images/ft-3.jpg" alt="slider" />
        <img src="/images/ft-2.jpg" alt="slider" />
        <img src="/images/ft-1.jpg" alt="slider" />
      </Carousel>
    </div>
  );
};

const GameType = () => {
  const types: string[] = [];
  const {gameType, handleGameType} = useContext(SwapTableContext);
  range(3, 10).map(number => types.push(`NAP ${number}`));
  range(3, 10).map(number => types.push(`PERM ${number}`));

  const handleSelect = (e: any) => {
    console.log(e.target.value);
    handleGameType(e.target.value);
    console.log(gameType);
  };

  return (
    <>
      <div>
        <select
          className="focus:ring-0 ring-0 border-0 outline-none"
          name=""
          id=""
          onChange={e => {
            handleSelect(e);
          }}
        >
          {types.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

const HomeHeader = () => (
  <div className="sticky top-0 bg-white">
    <div className="text-center text-3xl font-bold py-8 border-b-4 border-blue-400">
      FIXTURES
    </div>
    <div className="text-center">
      {" "}
      Game Type <GameType />
    </div>
  </div>
);

const GameItem = (props: any) => {
  return (
    <>
      <div className="rounded-lg my-2 mx-2 border grid grid-rows-2 items-center justify-items-center text-lg cursor-pointer">
        <div className="font-medium">{parseInt(props.index) + 1}</div>
        <div className="border-b w-full">
          <div className="grid grid-cols-2 items-center justify-items-center font-medium">
            <div className="border-r w-full px-12 py-3 flex flex-row justify-between items-center">
              <div className="flex flex-row items-center justify-start w-1/4 capitalize grow">
                <span className="order-last mx-5">{props.game.home}</span>
                <div className="h-max mx-5">
                  <img src="favicon.ico" alt="" className="h-12" />
                </div>
              </div>
            </div>
            <div className="border-l w-full px-12 py-3 flex flex-row-reverse justify-between items-center">
              <div className="flex flex-row items-center justify-end w-1/4 capitalize grow">
                <span className="order-first mx-5">{props.game.away}</span>
                <div className="h-max mx-5">
                  <img src="favicon.ico" alt="" className="h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full items-center">
          <div className="px-12 w-1/3 font-regular text-base grow">
            <div className="grid grid-cols-3">
              <span className="text-gray-400">Date:</span>
              <span className="col-span-2">{props.game.date}</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-400">Time:</span>
              <span className="col-span-2">{props.game.time}</span>
            </div>
          </div>
          <div className={`flex flex-row justify-center w-1/3`}>
            <div
              className={`flex flex-col w-[fit-content] items-center px-5 py-3 rounded border ${
                props.selected ? "bg-rose-500" : "bg-gray-200"
              }`}
            >
              <span className={`text-sm ${props.selected ? "text-white" : "text-gray-400"}`}>Odds</span>
              <span className={`${props.selected ? "text-white" : "text-gray-600"} text-xl`}>{props.game.odd}</span>
            </div>
          </div>
          <div className="flex flex-row px-12 w-1/3 font-regular text-base justify-self-end justify-end grow">
            <div className="w-fit grid grid-cols-3">
              <span className="text-gray-400">League:</span>
              <span className="col-span-2 capitalize">{props.game.league}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const GameContainer = () => {
  const [gameLists, setGameLists] = useState<any>([]);
  const [list, setLists] = useState<GameObjectType[]>([]);
  const [listIds, setListIds] = useState<Number[]>([]);
  const {setTempHomeArray, setHomeArray} = useContext(SwapTableContext);

  const addToList = (item: GameObjectType) => {
    setListIds(prev => [...prev, item._id]);

    if (!listIds.includes(item._id)) {
      setLists((prev: GameObjectType[]) => [...prev, item]);
    } else {
      const filteredList = list.filter(
        (el: GameObjectType) => el._id !== item._id
      );
      setListIds(prev => prev.filter(el => el !== item._id));
      setLists([...filteredList]);
    }
  };
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const onAfterGetCurrent = (data: any) => {
      setGameLists(data.data.gamelist.games);
      setisLoading(false);
    };
    Get(URLAPI.GameList.GetCurrent, onAfterGetCurrent);
  }, []);

  useEffect(() => {
    setTempHomeArray(list);
  }, [list, setTempHomeArray]);

  useEffect(() => {
    setHomeArray(gameLists);
  }, [gameLists, setHomeArray]);

  return (
    <ul>
      {isLoading && (
        <div className="flex w-full h-[300px] items-center justify-center">
          <CircularProgress />
        </div>
      )}
      {gameLists!.map((item: any, index: React.Key | null | undefined) => (
        <li
          key={item._id}
          onClick={() => {
            addToList(item);
          }}
        >
          <GameItem
            game={item}
            index={index}
            selected={listIds.includes(item._id)}
          />
        </li>
      ))}
    </ul>
  );
};

const Home = () => {
  return (
    <div className="mb-[57px]">
      <TopSlider />
      <HomeHeader />
      <GameContainer />
    </div>
  );
};

export default Home;
