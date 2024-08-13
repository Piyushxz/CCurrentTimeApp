import './Navbar.css'

const Navbar = () =>{
   

    const handleImageClick = () =>{
        window.open('https://github.com/Piyushxz/GetYourWorkDoneApp', '_blank');
    }
    return(
        <div className="header">
            <div>
                <h1 className='heading-1'>GetYourWorkDoneApp</h1>
            </div>

            <div>
                <img onClick={handleImageClick}className="img"src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
            </div>
        </div>
    )
}

export default Navbar;