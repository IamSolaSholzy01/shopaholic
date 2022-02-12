import React, {useContext} from "react";

import {UserContext} from "../../../../contexts/AuthContext";

const PocketTab = (props: any) => {
  const {userDetails} = props;
  const {isLoggedIn} = useContext(UserContext);
  return (
    <>
      <div className={props.visible ? "block" : "hidden"}>
        {isLoggedIn && userDetails && (
          <div className="text-black">
            <p>Role: {userDetails.role || "N/A"}</p>
            <p>
              Name:{" "}
              {userDetails.firstName + " " + userDetails.lastName || "N/A"}
            </p>
            <p>Username: {userDetails.username || "N/A"}</p>
            <p>Gender: {userDetails.gender || "N/A"}</p>
            <p>Email: {userDetails.email || "N/A"}</p>
            <p>Address: {userDetails.address || "N/A"}</p>
            <p>Commission: {userDetails.commission || "N/A"}</p>
            <p>Phone Number: {userDetails.phoneNumber || "N/A"}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PocketTab;
