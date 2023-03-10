import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays, differenceInCalendarDays, format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

export default function CustomDateRange(props) {
    const [dateRange, setDateRange] = React.useState(
        props.dateRange || 
        [{ key: 'selection', startDate: addDays(new Date(), -7), endDate: new Date() }]
    )
    const [showDateRange, setShowDateRange] = React.useState(false)
    const toggleDateRangePicker = () => setShowDateRange((prev) => !prev)

    function changeRange(state){
        const noDays = differenceInCalendarDays(dateRange[0].endDate, dateRange[0].startDate) + 1
        setDateRange((prev) => {
            return prev.map((item) => {
                return (
                    state === 1 ? 
                    {...item, startDate: addDays(item.endDate, 1), endDate: addDays(item.endDate, noDays)} : 
                    {...item, startDate: addDays(item.startDate, noDays * -1), endDate: addDays(item.startDate, -1)}
                )
            })
        })
    }

    React.useEffect(() => {
        props.changeDateRange(dateRange)
        // eslint-disable-next-line
    }, [dateRange]);

    return (
        <div className="custom-date-range flex flex-col">
            <div className="grid grid-cols-12 w-full gap-2">
                <span onClick={() => changeRange(-1)} className=" col-span-2 lg:col-span-1 flex justify-center items-center pb-1 bg-white text-2xl cursor-pointer rounded-md shadow-sm">&#60;</span>
                <p onClick={toggleDateRangePicker} className=" col-span-8 lg:col-span-10 flex justify-center items-center bg-white font-semibold text-slate-700 cursor-pointer rounded-md shadow-sm">
                    {format(dateRange[0].startDate, 'dd/MM/yyyy')} - {format(dateRange[0].endDate, 'dd/MM/yyyy')}
                </p>
                <span onClick={() => changeRange(1)} className=" col-span-2 lg:col-span-1 flex justify-center items-center pb-1 bg-white text-2xl cursor-pointer rounded-md shadow-sm">&#62;</span>          
            </div>

            <div className={` relative ${showDateRange ? `block` : `hidden`}`} onMouseLeave={() => setShowDateRange(false)}>
                <DateRangePicker
                    className={`absolute flex justify-center items-center w-full bg-slate-100 shadow-lg`}
                    onChange={item => setDateRange([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={dateRange}
                    direction="vertical"
                />
            </div>
        </div>
    );
}

export function setDateFormat(localStorageKey){
    const range = JSON.parse(localStorage.getItem(localStorageKey))
    return range && range.map((item) => {
        return {...item, startDate: new Date(item.startDate), endDate: new Date(item.endDate)}
    })
}