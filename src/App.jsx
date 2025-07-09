import './style.css'
import Title from '../components/Title';
import Starter from '../components/Starter';
import Guide from '../components/Guide';
import QuestionContainer from '../components/QuestionContainer';
import ContainerInfo from '../components/ContainerInfo';
import Choices from '../components/Choices';
import Question from '../components/Question';
import Finish from '../components/Finish';




/////////////////
function App() {

 

  return (
      //body
      
      <div className="body flex justify-center items-center h-screen bg-gray-100/50 pl-5 pr-5">
      <Title/>
      <Starter/>
      <Guide/>
      <QuestionContainer>
        <Question/>
        <Choices/>
        <ContainerInfo/>
      </QuestionContainer>
      <Finish/>
      
    </div>
    
  )
}

export default App
