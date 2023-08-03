import React from "react";
import Top from "../layout/Top";
import Body from "../layout/Body";
import Header from "../layout/Header";
import Control from "../layout/Control";
import RightChat from "../layout/RightChat";
const MainPage = () => {
    return(
        <>
            <div className="bg-[#141117] h-screen grid grid-cols-6">
                <div className="col-span-5">
                    <Header />
                    <Top />
                    <Body />
                    <Control />
                </div>
                <div>
                    <RightChat />
                </div>
            </div>
        </>
    )
}

export default MainPage