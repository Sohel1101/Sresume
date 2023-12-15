import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
        <nav>
            <div className="navitems" id='ss'>SS</div>
            <div className="navitems">Home</div>
            <div className="navitems">About</div>
            <div className="navitems">Project</div>
            <div className="navitems">Contact</div>
            <div className="navitems">
                    <div id="iconsn">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
        </nav>
      
    </div>
  )
}

export default Navbar
