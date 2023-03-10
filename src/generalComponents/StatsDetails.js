import React from "react";

function StatsDetails(props){
    return(
        <div className=" min-w-[320px] md:min-w-[210px] basis-1/4 flex flex-col px-4 py-2 my-3 md:my-2 lg:my-0 bg-white rounded-xl shadow-sm">
            <p  className=" text-base font-semibold text-slate-700">{props.title}</p>
            <p  className={` text-2xl font-normal text-green-500 ${props.amount < 0 && `text-red-500`}`}>
                {`${Number(props.amount).toFixed(2)} ${props.currency.toUpperCase()}`}
            </p>
        </div>
    )
}

export default StatsDetails;