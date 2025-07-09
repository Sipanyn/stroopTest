import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { fetchQuestion, getAnswer } from "../src/StateSlice";
function Choices() {
   const dispatch=useDispatch()
    return (
        <div className="flex flex-row gap-5 justify-around flex-wrap  w-full *:cursor-pointer *:bg-gray-200 *:p-2 *:rounded-lg *:w-[60px] *:text-center">
            <p onClick={()=>{dispatch(getAnswer("yellow"));dispatch((fetchQuestion()))}}>زرد</p>
            <p onClick={()=>{dispatch(getAnswer("purple"));dispatch((fetchQuestion()))}}>بنفش</p>
            <p onClick={()=>{dispatch(getAnswer("green"));dispatch((fetchQuestion()))}}>سبز</p>
            <p onClick={()=>{dispatch(getAnswer("white"));dispatch((fetchQuestion()))}}>سفید</p>
            <p onClick={()=>{dispatch(getAnswer("red"));dispatch((fetchQuestion()))}}>قرمز</p>
            <p onClick={()=>{dispatch(getAnswer("blue"));dispatch((fetchQuestion()))}}>آبی</p>
            
        </div>
    )
}

export default Choices
