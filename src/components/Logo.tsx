import PropTypes from "prop-types";
// material
import {Box} from "@mui/material";
import logo from "../components/Images/logo-no-Bg.png";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({sx}: {sx: any}) {
  return (
    <Box component="img" src={logo} sx={{height: 70, width: 100, ...sx}} />
  );
}
