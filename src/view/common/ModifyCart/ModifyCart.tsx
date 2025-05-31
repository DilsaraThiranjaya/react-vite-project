import {useState} from "react";

export function ModifyCart() {

    const [itemCount, setItemCount] = useState(1);

    const increaseItemCount = () => {
        setItemCount(prevValue => prevValue + 1);
    };

    const decreaseItemCount = () => {
        setItemCount(prevValue => prevValue > 1 ? prevValue - 1 : (alert("Item count cannot be less than 1"), prevValue));
    };

    return (
        <div className="w-full flex justify-between items-center">
            <button className=" w-10 h-9 !px-3 !py-2 text-sm font-semibold !my-3 text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[0.5rem] hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 hover:transition-all cursor-pointer"
            onClick={decreaseItemCount}>-</button>
            <div className="w-35 h-9 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[0.5rem] flex justify-center items-center">
                <span className="w-34 h-8 !px-3 !py-1 flex justify-center items-center text-sm font-semibold !my-3 text-black bg-white rounded-[0.5rem]">{itemCount}</span>
            </div>
            <button className=" w-10 h-9 !px-3 !py-2 text-sm font-semibold !my-3 text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[0.5rem] hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 hover:transition-all cursor-pointer"
            onClick={increaseItemCount}>+</button>
        </div>
    );
}