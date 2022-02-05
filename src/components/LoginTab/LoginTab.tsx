import { Backdrop } from '@mui/material';
import Panel from '../shared/Panel';
import { Close } from '@mui/icons-material';
import React from 'react';

type LoginTabProps = {
    visible: boolean,
    onClose: () => void
}
type LoginTabState = {}

export default class LoginTab extends React.Component<LoginTabProps, LoginTabState> {
    render() {
        return (
            <>
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={this.props.visible}>
                    {/* Needed to close panel on click of the backdrop */}
                    <div className={`opacity-0 w-screen h-screen fixed top-0 left-0`} onClick={() => this.props.onClose}></div>
                    <Panel visible={this.props.visible} />
                    <Close className={`absolute top-5 left-[285px] cursor-pointer text-black`} style={this.props.visible? {display: 'block'} : {display: 'none'}} onClick={this.props.onClose} />
                </Backdrop>
                {this.props.children}
            </>
        )
    }
}