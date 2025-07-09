import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
function Question() {
    const mainQuestion=useSelector((state)=>state.question.mainQuestion)
    const color=useSelector((state)=>state.question.color)
    return (
            <p style={{color:`${color}`,fontWeight:"bold",fontSize:"22px"}}>{mainQuestion.name}</p>
    )
}

export default Question
