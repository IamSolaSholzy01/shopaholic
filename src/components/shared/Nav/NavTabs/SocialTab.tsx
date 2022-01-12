import React, { Component } from "react";

const SocialTab = (visible: any) => {

    let socialVisible = visible.visible;

    return (
        <>
            <div className={socialVisible ? 'block' : 'hidden'}>Social Tab</div>
        </>
    )
}

export default SocialTab