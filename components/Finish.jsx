import { useDispatch, useSelector } from "react-redux"
import { fetchQuestion,startHandler,finishOff,reset,closeHandler} from "../src/StateSlice"
import { ToPersianNumber } from 'topersiannumber';
function Finish() {
    const finish=useSelector((state)=>state.question.finish)
    const correct=useSelector((state)=>state.question.correct)
    const wrong=useSelector((state)=>state.question.wrong)
    const dispatch=useDispatch()
    let result=Math.floor((correct/(correct+wrong))*100)
return (
    <>
        {finish === true ? (
            <div className="p-4 bg-white flex flex-col rounded-md gap-2 w-[400px]">
                {!isNaN(result) ? (
                    <p className="text-right">
                        شما با {ToPersianNumber(result) } درصد دقت این تست را به پایان رساندید
                    </p>
                ) : (
                    <p className="text-center">واقعا خسته نباشد</p>
                )}
                <div className="w-full flex flex-row justify-between">
                    <button
                        onClick={() => {
                            dispatch(fetchQuestion());
                            dispatch(startHandler());
                            dispatch(reset());
                            dispatch(finishOff());
                        }}
                        className="bg-green-500 hover:bg-green-300 p-2 rounded-md cursor-pointer"
                    >
                        شروع مجدد
                    </button>
                    <button
                        onClick={() => {
                            dispatch(reset());
                            dispatch(closeHandler());
                            dispatch(finishOff());
                        }}
                        className="bg-rose-500 hover:bg-rose-300 p-2 rounded-md cursor-pointer"
                    >
                        خروج
                    </button>
                </div>
            </div>
        ) : null}
    </>
)
}

export default Finish
