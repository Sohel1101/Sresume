import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="fit">
            <h2>GET IN TOUCH</h2>
            <p><a href="mailto:sohelshaikhdiitkwd@gmail.com"></a></p>
            <p><a href="tel:+7030375475"></a></p>
        </div>
        <div className="fit" id='web'>
            <div className="fdit">Movie Website</div>
            <div className="fdit">Ecom Website</div>
            <div className="fdit">Pixabay Website</div>
            <div className="fdit">Videocalling Website</div>
            <div className="fdit">Contact Website</div>
            <div className="fdit">Weather Website</div>
            <div className="fdit">B'day Website</div>
            <div className="fdit">Piano Website</div>
        </div>
        <div className="fit">
            <div id='icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-whatsapp"></i>
            </div>
            <p>@COPYWRITE Sohel Shaikh</p>
        </div>
      
    </div>
  )
}

export default Footer
