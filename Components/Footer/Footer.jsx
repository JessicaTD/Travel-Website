import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineX } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

// animation
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className="overlay2"></div>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent2 container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter email adress..." />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon3'/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon-logo'/>
                Travel.
              </a>
            </div>
          
            <div data-aos="fade-up" className="footerParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita officia numquam corrupti, possimus dicta ipsam a delectus dolor accusamus minus cum explicabo officiis fuga sequi architecto quam ex illum?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineX className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>

          </div>

          <div className="footerLinks grid">

            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000"
            className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon-arrow'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon-arrow'/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon-arrow'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon-arrow'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon-arrow'/>
                Payment
              </li>

            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
            <span className='groupTitle'>
              PARTNERS
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon-arrow'/>
              Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon-arrow'/>
              Rentcars
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon-arrow'/>
              HostelWorld
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon-arrow'/>
              Trivago
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon-arrow'/>
              TripAdvisor
            </li>

            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
          <span className='groupTitle'>
            LAST MINUTE
          </span>

          <li className="footerList flex">
            <FiChevronRight className='icon-arrow'/>
            London
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon-arrow'/>
            Claifornia
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon-arrow'/>
            Indonesia
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon-arrow'/>
            Europe
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon-arrow'/>
            Oceania
          </li>

            </div>


          </div>

          <div className="footerDiv flex">
            <small>TRAVEL THEME</small>
            <small>COPYRIGHTS RESERVED - TRAVEL. 2024</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer