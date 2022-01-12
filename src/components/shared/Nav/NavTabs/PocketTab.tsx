import React, { Component } from "react";

const PocketTab = (visible: any) => {

    let pocketVisible = visible.visible;

    return (
        <>
            <div className={pocketVisible ? 'block' : 'hidden'}>Pocket Tab</div>
        </>
    )
}

export default PocketTab;