import { useState }from 'react'

const Hex = () => {
    const [changeColor, setChangeColor] = useState('#FF1F5F3');

    const handleChange = () => {
        const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).toLocaleUpperCase(0);
        setChangeColor(randomHexColor);
    }
  return (
    <>
        <main style={{backgroundColor:`${changeColor}`}}>
            <div className='wrapper'> 
                <h2>Background Color: {changeColor}</h2>
                <button onClick={handleChange}>Change Color</button>
            </div>
        </main>
    </>
  )
}

export default Hex