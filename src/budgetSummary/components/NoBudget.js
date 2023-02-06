import React from "react";
import noData from "../../images/no-data.svg"

export function NoBudget(props){
    return(
        <div className=" flex flex-col justify-center items-center h-[420px]">
            <img className=" w-1/2 h-[240px]" src={noData} alt="no-data" />
            <span className=" text-sm font-semibold">Budget does not exist in this range!</span>
        </div>
    )
}