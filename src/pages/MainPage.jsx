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
                <div className="col-span-5 max-h-screen space-y-1">
                    <div className="h-[5vh]"><Header /></div>
                    <div className="h-[10vh] pt-12"><Top /></div>
                    <div className="h-[73vh] overflow-hidden"><Body /></div>
                    <div className="h-[10vh] overflow-hidden"><Control /></div>
                </div>
                <div>
                    <RightChat />
                </div>
            </div>
        </>
    )
}

export default MainPage