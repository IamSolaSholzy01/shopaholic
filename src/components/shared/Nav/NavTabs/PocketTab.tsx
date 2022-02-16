import React, {useContext} from "react";

import {UserContext} from "../../../../contexts/AuthContext";

const PocketTab = (props: any) => {
  const {userDetails} = props;
  // console.log(props)
  const {isLoggedIn} = useContext(UserContext);
  return (
    <>
      <div className={props.visible ? "block" : "hidden"}>
        {isLoggedIn && userDetails && (
          <div className="text-black mt-3">
            <p className="border-b py-2">Role: {userDetails.role || "N/A"}</p>
            <p className="border-b py-2">
              Name:{" "}
              {userDetails.firstName + " " + userDetails.lastName || "N/A"}
            </p>
            <p className="border-b py-2">
              Username: {userDetails.username || "N/A"}
            </p>
            <p className="border-b py-2">
              Gender: {userDetails.gender || "N/A"}
            </p>
            <p className="border-b py-2">Email: {userDetails.email || "N/A"}</p>
            <p className="border-b py-2">
              Address: {userDetails.address || "N/A"}
            </p>
            <p className="border-b py-2">
              Commission: {userDetails.commission || "N/A"}
            </p>
            <p className="border-b py-2">
              Phone Number: {userDetails.phoneNumber || "N/A"}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default PocketTab;
