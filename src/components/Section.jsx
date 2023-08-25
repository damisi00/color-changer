import Hex from "./Hex"
import Simple from "./Simple"


const Section = ({type}) => {

  return (
    <>
        <section>
        {
            type === 'simple-color' ?
            <Simple /> :
            <Hex /> 
        } 
        </section>
    </>
  )
}

export default Section