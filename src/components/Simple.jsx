import { useState }from 'react'

const simpleColors = [
  'Aqua', 'Bisque', 'Blue', 'Fuchsia', 'Gray', 'Green', 'Lime', 'Maroon', 'Navy', 'Olive', 'Purple', 'Red', 'Silver', 'Teal', 'White', 'Yellow'
]

const Simple = () => {
    const [changeColor, setChangeColor] = useState('White');

    const handleSimple = () => {
        const randomIndex= Math.floor(Math.random() * simpleColors.length);
        const randomSimpleColor = simpleColors[randomIndex];
        setChangeColor(randomSimpleColor);

    }
  return (
    <>
        <main style={{backgroundColor:`${changeColor}`}}>
            <div className='wrapper'> 
                <h2>Background Color: {changeColor}</h2>
                <button onClick={handleSimple}>Change Color</button>
            </div>
        </main>
    </>
  )
}

export default Simple