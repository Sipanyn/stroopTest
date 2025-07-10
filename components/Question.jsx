import { useSelector } from "react-redux"
import { Spinner } from "../svg/Spinner"
function Question() {
    const mainQuestion=useSelector((state)=>state.question.mainQuestion)
    const color=useSelector((state)=>state.question.color)
    const isLaoding=useSelector((state)=>state.question.isLaoding)
 return (
  <>
    {isLaoding ? (
      <div style={{width:"60px",height:"60px"}}><Spinner/></div>
    ) : (
      <p style={{textAlign:"center", color, fontWeight: "bold", fontSize: "22px",width:"60px",height:"60px" }}>
        {mainQuestion.name}
      </p>
    )}
  </>
);
}

export default Question