import Hex from "./Hex"
import Simple from "./Simple"


const Section = ({type}) => {

  return (
    <>
        <main>
        {
            type === 'simple-color' ?
            <Simple /> :
            <Hex /> 
        } 
        </main>
    </>
  )
}

export default Section