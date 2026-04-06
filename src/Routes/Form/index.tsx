import { useEffect, useState } from "react"
import './form.css'
import Container from "../../components/container"

function Form() {
   // const [questionCounter, setQuestionCounter] = useState<number>(0)
   // useEffect(() => {
        
   // }, [questionCounter])

    return (
       <Container>
  <div className="survey-box">

    <div className="progress">
      Pergunta 1 de 10
    </div>

    <h2 className="question">
      Como você está se sentindo hoje no trabalho?
    </h2>

    <div className="answers">
      <button className="answer">Muito bem</button>
      <button className="answer">Bem</button>
      <button className="answer">Neutro</button>
      <button className="answer">Mal</button>
      <button className="answer">Muito mal</button>
    </div>

    <button className="btn-next" disabled>Próximo</button>

  </div>
</Container>
    )
} export default Form