import { useState }from 'react'

const simpleColors = [
  'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'
]
const Navbar = () => {
  const [changeColor, setChangeColor] = useState('#FFFFFF');
  const handleSimple = () => {
    const randomIndex= Math.floor(Math.random() * simpleColors.length);
    const randomSimpleColor = simpleColors[randomIndex];
    setChangeColor(randomSimpleColor);

  }
  return (
    <>
        <nav>
          <div className='wrapper'> 
              <h1>Color Flipper</h1>
              <div className="links">
                <a onClick={handleSimple}>Simple</a>
                <a>Hex</a>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar

