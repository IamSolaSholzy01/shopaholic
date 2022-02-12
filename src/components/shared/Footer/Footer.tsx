import {Close} from "@mui/icons-material";
import React, {ChangeEvent, useContext, useState} from "react";
import SportsOutlinedIcon from "@mui/icons-material/SportsOutlined";
import {Link as RouterLink} from "react-router-dom";
import {Button, Link, Stack, TextField} from "@mui/material";
import {SwapTableContext} from "../../../contexts/SwapTableContext";
import {GetWithoutData, Post} from "../../../api/fetch";
import {URLAPI} from "../../../api/ApiMethods";
import DeleteIcon from "@mui/icons-material/Delete";
import displayMsg from "../../../ui-component/Toast";
import {useEffect} from "react";

// var axios = require('axios');

const footerTabStyle =
  "w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1";

const GameItem = (props: any) => {
  return (
    <div className="my-1">
      <div className="flex flex-row justify-between bg-rose-100 text-sm">
        <span className="mx-1">
          <SportsOutlinedIcon className="text-rose-600" /> {props.game.num}
        </span>
        <span className="mx-1">{props.game.league}</span>
      </div>
      <div className="flex flex-row justify-between mx-1 items-center">
        <div>
          <div className="flex flex-col justify-between">
            <span>
              {props.game.home} - {props.game.away}
            </span>
            <div className="flex flex-row justify-between text-xs pt-5">
              <span className="bg-rose-600 text-white px-1">
                {props.game.date}
              </span>
              <span>{props.game.time}</span>
            </div>
          </div>
        </div>
        <div>
          <button className="py-1 px-2 mx-2 bg-rose-500 text-white rounded hover:bg-rose-600">
            {props.game.odd}
          </button>
          <button
            onClick={props.handleRemove}
            className="py-1 px-2 mx-2 bg-rose-500 text-white rounded hover:bg-rose-600"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const BetSlip = ({
  betData,
  stakeInput,
  setStakeInput,
}: {
  betData: (arg0: any) => void;
  stakeInput: string;
  setStakeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const {gameType, tempHomeArray, setTempHomeArray} =
    useContext<any>(SwapTableContext);
  const [games, setgames] = useState<any[]>([]);
  // let games = Array.isArray(tempHomeArray)
  //   ? tempHomeArray?.map((item: any) => item._id)
  //   : console.log("homeArray is not an array");

  useEffect(() => {
    if (Array.isArray(tempHomeArray)) {
      setgames([...tempHomeArray.map((item: any) => item._id)]);
    }
  }, [tempHomeArray]);

  let gameSplit = gameType.split(" ");
  const [isLoading, setisLoading] = useState(false);

  const data = {
    gameType: gameSplit[0].toLowerCase(),
    gameTypeNumber: parseInt(gameSplit[1]),
    totalStake: stakeInput,
    games: games,
  };

  const submitStake = () => {
    setisLoading(true);
    Post(data, URLAPI.BetSlip.Stake, onAfterStake);
  };

  const onAfterStake = (data: any) => {
    setisLoading(false);
    if (data?.success === true) {
      betData(data);
      displayMsg("success", data.message);
    } else displayMsg("error", data.message);
  };

  return (
    <div>
      <div className="flex flex-row justify-between w-full">
        <span>{tempHomeArray.length} Selections</span>
        <span>Game type: {gameType}</span>
      </div>
      <ul className="mb-5">
        {tempHomeArray.map((item: any, index: React.Key | null | undefined) => (
          <li key={index}>
            <GameItem
              game={item}
              handleRemove={() =>
                setTempHomeArray(
                  tempHomeArray.filter((el: any) => el._id !== item._id)
                )
              }
            />
          </li>
        ))}
      </ul>

      <Stack
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        direction={{xs: "column", sm: "row"}}
        spacing={2}
      >
        Lines:
        <TextField
          label="Stake"
          type={"number"}
          onChange={setStakeInput}
          value={stakeInput}
          style={{marginTop: "18px"}}
        />
        <Button
          variant="outlined"
          size="small"
          disableElevation={true}
          disabled={isLoading}
          onClick={submitStake}
        >
          {isLoading ? "..." : "Stake"}
        </Button>
      </Stack>
    </div>
  );
};

interface IMiniMenuProps {
  visible: boolean;
  closeMenu: () => void;
}

const MiniMenu = (props: IMiniMenuProps) => {
  const [checkBetSlipVisible, setBetSlipVisible] = useState<boolean>(true);
  const [checkFastBetVisible, setFastBetVisible] = useState<boolean>(true);
  const stakeValues = ["100", "200", "250", "500", "1000"];

  const [betId, setBetId] = useState("");
  const [betSlipId, setBetSlipId] = useState("");
  const [fastBetId, setFastBetId] = useState("1");
  const [stake, setStake] = useState(0);
  const [stakeInput, setStakeInput] = useState("");
  const [totalstake, setTotalStake] = useState(0);
  const [minOdd, setMinOdd] = useState(0);
  const [maxOdd, setMaxOdd] = useState(0);
  const [minWin, setMinWin] = useState(0);
  const [maxWin, setMaxWin] = useState(0);
  const [minBonus, setMinBonus] = useState(0);
  const [maxBonus, setMaxBonus] = useState(0);
  const [totalPot, setTotalPot] = useState(0);

  const {homeArray, setTempHomeArray, tempHomeArray} =
    useContext<any>(SwapTableContext);

  const betData = (data: any) => {
    console.log(data);
    setStake(data.data.betslip.stake);
    setBetId(data.data.betslip.betslipId);
    setTotalStake(data.data.betslip.totalStake);
    setMaxBonus(data.data.betslip.maxBonus);
    setMinBonus(data.data.betslip.minBonus);
    setMinOdd(data.data.betslip.minOdd);
    setMaxOdd(data.data.betslip.maxOdd);
    setMinBonus(data.data.betslip.minBonus);
    setMaxBonus(data.data.betslip.maxBonus);
    setTotalPot(data.data.betslip.totalPotWin);
    setMaxWin(data.data.betslip.maxWin);
    setMinWin(data.data.betslip.minWin);
  };
  const [isCheckBetLoading, setisCheckBetLoading] = useState(false);
  const submitBetSlip = () => {
    if (betSlipId !== "") {
      setisCheckBetLoading(true);
      GetWithoutData(
        URLAPI.BetSlip.GetBetslip + `/${betSlipId}`,
        onAfterGetBetSlip
      );
    }
  };

  const submitFastBet = () => {
    if (parseInt(fastBetId) < homeArray.length && fastBetId !== "") {
      let i = parseInt(fastBetId) - 1;
      if (!tempHomeArray.includes(homeArray[i])) {
        setTempHomeArray([...tempHomeArray, homeArray[i]]);
      }
    }
    setFastBetId("");
  };

  const [showBetSlip, setshowBetSlip] = useState(false);
  const [betSlipData, setbetSlipData] = useState<{
    [key: string]: string | number;
  }>({});

  const onAfterGetBetSlip = (data: any) => {
    setbetSlipData({...data.data.betslip});
    setshowBetSlip(true);
    setisCheckBetLoading(false);
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white py-4 px-4 min-w-[600px] max-w-[80vw] rounded shadow-md max-h-[60vh] overflow-y-scroll"
      style={props.visible ? {display: "block"} : {display: "none"}}
    >
      <div className="flex flex-row justify-between pb-4 border-b border-black">
        <span className="font-bold">Coupon</span>
        <Close className="cursor-pointer" onClick={props.closeMenu} />
      </div>
      <div className="border-y py-2 w-full">{">"} Load Booking Code</div>
      <div className="flex flex-col border-y py-2 w-full">
        <span
          onClick={() => {
            setshowBetSlip(!showBetSlip);
            setBetSlipVisible(!checkBetSlipVisible);
          }}
        >
          {">"} Check Betslip
        </span>
        <input
          onChange={e => {
            setBetSlipId(e.target.value);
          }}
          value={betSlipId}
          className="ring ring-rose-300 rounded"
          type="text"
          hidden={checkBetSlipVisible}
        />
        <Button
          disabled={isCheckBetLoading}
          onClick={submitBetSlip}
          hidden={checkBetSlipVisible}
        >
          {isCheckBetLoading ? "Loading..." : "Check"}
        </Button>
        {showBetSlip && (
          <div className="py-3">
            <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
              <span>Betslip Id : {betSlipData.betslipId}</span>
            </div>
            <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
              <span>Stake : {stake}</span>
              <span>Total Stake : {betSlipData.totalstake}</span>
            </div>
            <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
              <span>Min Odd : {betSlipData.minOdd}</span>
              <span>Max Odd : {betSlipData.maxOdd}</span>
            </div>
            <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
              <span>Min Win : {betSlipData.minWin}</span>
              <span>Max Win : {betSlipData.maxWin}</span>
            </div>
            <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
              <span>Min Bonus (up to 20%) : {betSlipData.minBonus}</span>
              <span>Max Bonus (up to 20%) : {betSlipData.maxBonus}</span>
            </div>
            <div className="font-medium my-2 py-3 px-3 bg-gray-100 text-center w-full">
              Total Pot Winnings
            </div>
            <div className="font-medium my-2 py-3 px-3 bg-gray-100 text-center w-full">
              {betSlipData.totalPotWin}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col border-y py-2 w-full">
        <span onClick={() => setFastBetVisible(!checkFastBetVisible)}>
          {">"} Fast Bet
        </span>
        <input
          value={fastBetId}
          onChange={e => {
            setFastBetId(e.target.value);
          }}
          className="ring ring-rose-300 rounded"
          type="text"
          hidden={checkFastBetVisible}
        />
        <Button onClick={submitFastBet} hidden={checkFastBetVisible}>
          Add
        </Button>
      </div>
      <div className="flex flex-row justify-center w-full my-3">
        <ul className="flex flex-row list-none font-semibold">
          <li className="text-rose-600 mx-3">BetSlip</li>
          <li>My Bets</li>
        </ul>
      </div>
      <BetSlip
        betData={betData}
        stakeInput={stakeInput}
        setStakeInput={e => setStakeInput(e.target.value)}
      />

      <div>
        <div className="mt-2">
          <ul className="flex flex-row list-none justify-between w-full px-2">
            {stakeValues.map((item, index) => (
              <li className="border px-3 py-1 rounded" key={index}>
                <button onClick={() => setStakeInput(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-3">
        <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
          <span>Betslip Id : {betId}</span>
        </div>
        <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
          <span>Stake : {stake}</span>
          <span>Total Stake : {totalstake}</span>
        </div>
        <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
          <span>Min Odd : {minOdd}</span>
          <span>Max Odd : {maxOdd}</span>
        </div>
        <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
          <span>Min Win : {minWin}</span>
          <span>Max Win : {maxWin}</span>
        </div>
        <div className="flex flex-row justify-between my-2 py-3 px-3 bg-gray-100">
          <span>Min Bonus (up to 20%) : {minBonus}</span>
          <span>Max Bonus (up to 20%) : {maxBonus}</span>
        </div>
        <div className="font-medium my-2 py-3 px-3 bg-gray-100 text-center w-full">
          Total Pot Winnings
        </div>
        <div className="font-medium my-2 py-3 px-3 bg-gray-100 text-center w-full">
          {totalPot}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {tempHomeArray, homeArray} = useContext<any>(SwapTableContext);
  return (
    <>
      <footer className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow-t">
        <div id="tabs" className="flex justify-between">
          <Link
            underline="none"
            component={RouterLink}
            to="/"
            className={footerTabStyle}
            sx={{color: "#000"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mb-1"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <span className="tab tab-menu block text-xs">Menu</span>
          </Link>
          <Link
            underline="none"
            component={RouterLink}
            to="/"
            className={footerTabStyle}
            sx={{color: "#000"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mb-1"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M21,8c-1.45,0-2.26,1.44-1.93,2.51l-3.55,3.56c-0.3-0.09-0.74-0.09-1.04,0l-2.55-2.55C12.27,10.45,11.46,9,10,9 c-1.45,0-2.27,1.44-1.93,2.52l-4.56,4.55C2.44,15.74,1,16.55,1,18c0,1.1,0.9,2,2,2c1.45,0,2.26-1.44,1.93-2.51l4.55-4.56 c0.3,0.09,0.74,0.09,1.04,0l2.55,2.55C12.73,16.55,13.54,18,15,18c1.45,0,2.27-1.44,1.93-2.52l3.56-3.55 C21.56,12.26,23,11.45,23,10C23,8.9,22.1,8,21,8z" />
                  <polygon points="15,9 15.94,6.93 18,6 15.94,5.07 15,3 14.08,5.07 12,6 14.08,6.93" />
                  <polygon points="3.5,11 4,9 6,8.5 4,8 3.5,6 3,8 1,8.5 3,9" />
                </g>
              </g>
            </svg>
            <span className="tab tab-kategori block text-xs">STAT</span>
          </Link>
          <Link
            underline="none"
            component={RouterLink}
            to="/"
            onClick={() => {
              setMenuOpen(!menuOpen ? true : false);
            }}
            className={footerTabStyle}
            sx={{color: "#000"}}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 42 42"
              className="inline-block mb-1"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z"
                  fill="currentColor"
                  opacity="0.1"
                ></path>
                <path
                  d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z"
                  fill="currentColor"
                  transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "
                ></path>
                <circle
                  stroke="currentColor"
                  strokeWidth="2"
                  cx="21"
                  cy="21"
                  r="20"
                ></circle>
              </g>
            </svg>
            <span className="tab tab-explore block text-xs">
              {tempHomeArray.length}
            </span>
          </Link>
          <Link
            underline="none"
            component={RouterLink}
            to="/"
            className={footerTabStyle}
            sx={{color: "#000"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mb-1"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height="24" width="24" x="0" y="0" />
              </g>
              <g>
                <g>
                  <path d="M19,13H5c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-4C21,13.9,20.1,13,19,13z M19,19H5v-4h14V19z" />
                  <path d="M19,3H5C3.9,3,3,3.9,3,5v4c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,9H5V5h14V9z" />
                </g>
              </g>
            </svg>
            <span className="tab tab-whishlist block text-xs">My Bets</span>
          </Link>
          <Link
            underline="none"
            component={RouterLink}
            to="/"
            className={footerTabStyle}
            sx={{color: "#000"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block mb-1"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <rect height="7" width="2" x="5" y="10" />
                  <rect height="7" width="2" x="11" y="10" />
                  <path d="M22,6L12,1L2,6v2h20V6z M6.47,6L12,3.24L17.53,6H6.47z" />
                  <path d="M2,19v2h12.4c-0.21-0.64-0.32-1.31-0.36-2H2z" />
                  <polygon points="19,12.26 19,10 17,10 17,13.26" />
                  <path d="M20,14l-4,2v2.55c0,2.52,1.71,4.88,4,5.45c2.29-0.57,4-2.93,4-5.45V16L20,14z M19.28,21l-2.03-2.03l1.06-1.06l0.97,0.97 l2.41-2.38l1.06,1.06L19.28,21z" />
                </g>
              </g>
            </svg>
            <span className="tab tab-account block text-xs">Check</span>
          </Link>
        </div>
      </footer>
      <MiniMenu
        visible={homeArray.length > 0 && menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Footer;
