import React from "react";
import noData from "../../images/no-data.svg"

export function NoTransaction(props){
    return(
        <div className=" flex flex-col justify-center items-center h-[560px]">
            <img className=" w-1/2 h-[240px]" src={noData} alt="no-data" />
            <span className=" text-sm font-semibold">You have no Transaction yet!</span>
        </div>
    )
}