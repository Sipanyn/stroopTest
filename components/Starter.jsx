import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { guideOpener } from "../src/StateSlice";
import { fetchQuestion } from "../src/StateSlice";
import {startHandler} from "../src/StateSlice";
function Starter() {
const guide=useSelector((state)=>state.question.guide)
const start=useSelector((state)=>state.question.start)
const dispatch=useDispatch()
    return (<>
    {guide === "closed" && start === false ?  <div className="flex flex-col items-center justify-center gap-4 text-white">
    <button onClick={()=>{dispatch(fetchQuestion()); dispatch(startHandler())}} className="bg-blue-500 hover:bg-blue-400 cursor-pointer p-2 rounded-lg w-20">شروع</button>
    <button onClick={() => { dispatch(guideOpener()) }} className="bg-blue-500 hover:bg-blue-400 cursor-pointer p-2 rounded-lg w-20">راهنما</button>
   </div>:null}
    </>
      
    )
}

export default Starter
