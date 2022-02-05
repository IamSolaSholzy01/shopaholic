import { SyntheticEvent, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Backdrop, Link, SxProps, Theme } from '@mui/material';
import Panel from '../shared/Panel';
import { Close } from '@mui/icons-material';
import React from 'react';

// export default function ({ e, children }: ILoginTabProps) {
//     const [visible, setVisibility] = useState(false);
//     const [open, setOpen] = useState(false);

//     const handleClose = () => {
//         setVisibility(!visible ? true : false);
//         setOpen(false);
//     }

//     const handleOpen = () => {
//         setOpen(!open);
//     }

//     const click = (event: SyntheticEvent, visible: boolean) => {
//         event.preventDefault()
//         visible = !visible ? true : false
//         handleOpen()
//         return visible;
//     }

//     return (
//         <>
//             <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
//                 {/* Needed to close panel on click of the backdrop */}
//                 <div className={`opacity-0 w-screen h-screen fixed top-0 left-0`} onClick={handleClose}></div>
//                 <Panel visible={visible} />
//                 <Close className={`absolute top-5 left-[285px] cursor-pointer text-black`} style={visible? {display: 'block'} : {display: 'none'}} onClick={handleClose} />
//             </Backdrop>
//             {children}
//         </>
//     );
// };

// export interface ILoginTabProps {
//     e?: SyntheticEvent,
//     children?: React.ReactNode
// }

type LoginTabProps = {
    visible: boolean,
    onClose: any
}
type LoginTabState = {
    // visible: boolean,
    // open: boolean
}

export default class LoginTab extends React.Component<LoginTabProps, LoginTabState> {
    constructor(props: LoginTabProps) {
        super(props);
    }
    
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