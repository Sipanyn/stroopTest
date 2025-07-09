import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { finishOn} from "../src/StateSlice";
import { ToPersianNumber } from "topersiannumber";

function ContainerInfo() {
    const correct=useSelector((state)=>state.question.correct)
    const wrong=useSelector((state)=>state.question.wrong)
    const dispatch=useDispatch()
     const [remaining, setRemaining] = useState(60);
useEffect(() => {
  setRemaining(60); // reset when mount or restart
}, []);

useEffect(() => {
  if (remaining === 0) {
    dispatch(finishOn());
    return;
  }

  const timer = setInterval(() => {
    setRemaining(prev => (prev > 0 ? prev - 1 : 0));
  }, 1000);

  return () => clearInterval(timer);
}, [remaining, dispatch]);

   

    return (
      
       <div className="flex flex-row justify-between items-center w-full p-4 bg-rose-100 rounded-lg" >
            {/* <!-- timer --> */}
            <div className="flex flex-row items-center"><p>زمان باقیمانده:</p><p>{ToPersianNumber(remaining)}</p><p className="text-xs text-center">(ثانیه)</p></div>
            {/* <!-- result --> */}
             <div className="flex flex-col">
                {/* <!-- correct --> */}
                <div className="flex flex-row text-green-600"><p>{ToPersianNumber(correct) }</p><p >: صحیح</p></div>
                {/* <!-- wrong --> */}
                 <div className="flex flex-row text-red-600"><p>{ToPersianNumber(wrong) }</p><p >: غلط</p></div>
             </div>
        </div>
    )
}

export default ContainerInfo
