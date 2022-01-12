import React, { Component } from "react";

const LoginTab = (visible: any) => {

    let loginVisible = visible.visible

    return (
        <>
            <div className={loginVisible ? 'block' : 'hidden'}>Login Tab</div>
        </>
    )
}

export default LoginTab