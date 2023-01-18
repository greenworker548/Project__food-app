import React from "react";

import './Main.scss'

const Main = ({children}: any) => {
    return (
        <main className="main">
            {children}
        </main>
    )
}

export default Main