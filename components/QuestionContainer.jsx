import { useSelector } from "react-redux"
function QuestionContainer({children}) {
    const start=useSelector((state)=>state.question.start)
    const finish=useSelector((state)=>state.question.finish)
    return (<>
    {start && !finish  &&<div className="flex flex-col items-center justify-between gap-4 p-4 bg-stone-400 rounded-lg shadow-lg">
            {children}
        </div>}
    </>
       
    )
}

export default QuestionContainer
