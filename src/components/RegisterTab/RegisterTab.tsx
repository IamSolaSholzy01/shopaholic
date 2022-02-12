import {Backdrop} from "@mui/material";
import AuthPanel from "../shared/AuthPanel";
import {Close} from "@mui/icons-material";
import React from "react";

type RegisterTabProps = {
  visible: boolean;
  onClose: () => void;
};
type RegisterTabState = {};

export default class RegisterTab extends React.Component<
  RegisterTabProps,
  RegisterTabState
> {
  render() {
    return (
      <>
        <Backdrop
          sx={{color: "#fff", zIndex: theme => theme.zIndex.drawer + 1}}
          open={this.props.visible}
        >
          {/* Needed to close panel on click of the backdrop */}
          <div
            className={`opacity-0 w-screen h-screen fixed top-0 left-0`}
            onClick={() => this.props.onClose}
          ></div>
          <AuthPanel visible={this.props.visible} />
          <Close
            className={`absolute top-5 right-[285px] cursor-pointer text-black`}
            style={this.props.visible ? {display: "block"} : {display: "none"}}
            onClick={this.props.onClose}
          />
        </Backdrop>
        {this.props.children}
      </>
    );
  }
}
