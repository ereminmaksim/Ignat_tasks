import React from 'react'
import Header from './Header'
import Routes from './Routes'


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<BrowserRouter>*/}

            <Header/>
            <Routes/>

            {/*</BrowserRouter>*/}
        </div>
    )
}

export default HW5
