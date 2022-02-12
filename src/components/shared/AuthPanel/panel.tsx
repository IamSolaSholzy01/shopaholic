import {SyntheticEvent, useEffect, useState} from "react";
import {Motion, spring} from "../../ReactMotion";
import {PocketTab, SocialTab} from "../Nav/NavTabs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {GetWithoutData} from "../../../api/fetch";
import {URLAPI} from "../../../api/ApiMethods";
import {CircularProgress} from "@mui/material";
import displayMsg from "../../../ui-component/Toast";

const panelStyle = {
  width: 320,
  background: "#fff",
};

const AuthPanel = (visible: any) => {
  const [login_active, setLoginActive] = useState(true);
  const [pocket_active, setPocketActive] = useState(false);

  let visibles = visible.visible;

  const list = [
    {
      text: "profile",
      classList: `border-r border-white py-2 bg-white ${
        login_active
          ? "text-rose-600 cursor-default"
          : "text-black cursor-pointer"
      }`,
      route: "#login",
      click: (event: SyntheticEvent) => {
        event.preventDefault();
        setLoginActive(true);
        setPocketActive(false);
      },
    },
    {
      text: "wallet",
      classList: `border-white py-2 bg-white ${
        pocket_active
          ? "text-blue-600 cursor-default"
          : "text-black cursor-pointer"
      }`,
      route: "#pocket",
      click: (event: SyntheticEvent) => {
        event.preventDefault();
        setLoginActive(false);
        setPocketActive(true);
      },
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
  ];
  const [userData, setUserData] = useState<{
    [key: string]: string | number;
  }>({});
  const [userWallet, setUserWallet] = useState<{
    [key: string]: string | number;
  }>({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const omAfterGetUser = (data: any) => {
      if (data.success) {
        setUserData({...data.data.user});
        setisLoading(false);
      } else {
        displayMsg("error", data.message);
      }
    };

    const omAfterGetWallet = (data: any) => {
      if (data.success) {
        setUserWallet({...data.data.wallet});
        setisLoading(false);
      }
    };

    GetWithoutData(
      URLAPI.UserDetails.userId + `/${localStorage.getItem("user_id")}`,
      omAfterGetUser
    );
    GetWithoutData(
      URLAPI.UserDetails.userId + `/${localStorage.getItem("user_id")}/wallet`,
      omAfterGetWallet
    );
  }, []);

  return (
    <>
      <Motion
        style={{
          x: spring(visibles ? 0 : 100),
          opacity: spring(visibles ? 1 : 0),
        }}
      >
        {currentStyles => (
          <div
            className="fixed top-0 bottom-0 right-0 h-screen p-4"
            style={{
              ...panelStyle,
              transform: `translate3d(${currentStyles.x}%, 0, 0)`,
              opacity: currentStyles.opacity,
            }}
          >
            {isLoading ? (
              <div className="flex h-full items-center w-full justify-center">
                <CircularProgress />
              </div>
            ) : (
              <>
                <div className="flex flex-row mt-16 text-base text-black w-full justify-center items-center pl-2">
                  <AccountCircleIcon fontSize="large" />
                  <div className="ml-3 flex flex-col">
                    <span>{localStorage.getItem("username")}</span>
                    <span>User ID: {localStorage.getItem("user_id")}</span>
                  </div>
                </div>
                <div className="flex flex-row mt-3 text-black justify-between items-center px-2">
                  <span>Trust Balance: {userWallet?.trust || "N/A"}</span>
                  <span>Balance: {userWallet?.balance || "N/A"}</span>
                </div>
                <div
                  className={`mt-3 pt-4 grid grid-cols-${list.length} items-center h-max text-sm font-semibold capitalize text-center`}
                >
                  {list.map((item, index) => (
                    <a
                      href={`#${item.route}`}
                      className={`uppercase ${item.classList}`}
                      onClick={item.click}
                      key={index}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
                <PocketTab visible={login_active} userDetails={userData} />
                <SocialTab visible={pocket_active} />
              </>
            )}
            {/* <PocketTab visible={pocket_active} />
                    <SocialTab visible={social_active} /> */}
          </div>
        )}
      </Motion>
    </>
  );
};

export default AuthPanel;
