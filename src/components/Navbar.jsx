
const Navbar = ({handleType}) => {
  
  return (
    <>
        <nav>
          <div className='wrapper'> 
              <h1>Color Flipper</h1>
              <div className="links">
                <a onClick={()=> handleType("simple-color")}>Simple</a>
                <a onClick={()=> handleType("hex-color")}>Hex</a>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar

