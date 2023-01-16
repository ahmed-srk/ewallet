import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

function CustomDateRange(props) {
    const [dateRange, setDateRange] = React.useState([
        {
          startDate: addDays(new Date(), -7),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [showDateRange, setShowDateRange] = React.useState(false)
    const toggleDateRangePicker = () => setShowDateRange((prev) => !prev)

    const formatDate = (date) => date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    function changeRange(trigger){
        const noDays = dateRange[0].endDate.getDate() - dateRange[0].startDate.getDate() + 1

        setDateRange((prev) => {
            return prev.map((item) => {
                return (
                    trigger === 1 ? 
                    {...item, startDate: addDays(item.endDate, 1), endDate: addDays(item.endDate, noDays)} : 
                    {...item, startDate: addDays(item.startDate, noDays * -1), endDate: addDays(item.startDate, -1)})
            })
        })
    }

    return (
        <div className="custom-date-range flex flex-col md:items-end">
            <div className="w-full md:w-1/2 grid grid-cols-12 gap-3 my-1">
                <span onClick={() => changeRange(-1)} className="cursor-pointer col-span-2 lg:col-span-1 pb-1 flex justify-center items-center rounded-md shadow-sm bg-white text-2xl">
                    &#60;
                </span>
                <p onClick={toggleDateRangePicker} className="cursor-pointer col-span-8 lg:col-span-10 flex justify-center items-center rounded-md shadow-sm bg-white font-semibold">
                    {formatDate(dateRange[0].startDate)} - {formatDate(dateRange[0].endDate)}
                </p>
                <span onClick={() => changeRange(1)} className="cursor-pointer col-span-2 lg:col-span-1 pb-1 flex justify-center items-center rounded-md shadow-sm bg-white text-2xl">
                    &#62;
                </span>          
            </div>

            <div  onMouseLeave={() => setShowDateRange(false)} className={`${showDateRange ? `block` : `hidden`} lg:w-1/2`}>
                <DateRangePicker
                    className=" w-full flex justify-center items-center"
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

export default CustomDateRange;
