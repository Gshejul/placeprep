import Carousel from './carousel';
import amazone from '../assets/brand.webp';
import weKnowImg from '../assets/weKnowImg.png';
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import handshake from '../assets/handshake.gif';

import Footer from './Footer';
const NavBar = () =>{
    return(

        <>
        {/* navbar section */}
            <div className="container-fluid ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid home-bg">
                        <a className="navbar-brand" href="#">
                            <h1><span className='primary-color'>  Prep</span>Place</h1>
                        </a> 
                       
                            <div>
                            <div className="container-fluid">
                                <ul>
                                    <li><a href="/navbar">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><button>Login/register</button></li>
                                </ul>
                            </div>
                            </div>
                    </div>
                </nav>
            </div>

       
          <Carousel/>


         <div className="container pt-5">
                <div className="we-know-sec">
                    <div className="row">
                        <div className="col-6 "><img src={weKnowImg} alt=""/></div>
                        <div className="col-6">
                            <h3 className='weKnowSection'>we know how to build your knowledge</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta ratione id ducimus facere ipsam? Quibusdam, error. Quo, voluptate molestiae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta ratione id ducimus facere ipsam? Quibusdam, error. Quo, voluptate molestiae.</p>
                           
                        </div>
                    </div>
                </div>
         </div>

        {/* section registerd student */}
        <div className="container-fluid pt-5">
            <h3 className='text-center pt-5'>Students from 4000+ Institutes all over india.</h3>
            <div className="row pt-3">
                <div className="col-3">
                    <div>
                         
                        <p className='text-center'>250k+</p>
                        <p className='text-center'>Registered Student</p>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <p className='text-center'>400k+</p>
                        <p className='text-center'>Social Media Following</p>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <p className='text-center'>15000+</p>
                        <p className='text-center'>Placed Students</p>
                    </div>
                </div>
                <div className="col-3">
                     <div>
                        <p className='text-center'>4000+</p>
                        <p className='text-center'>Colleges Connected</p>
                     </div>
                </div>
            </div>
        </div>

        {/* section our student */}
        <div className="container pt-5">
            <h2 className='text-center our-sec text-uppercase'> Our students work at <br />
                <span className=' primary-color'>top companies </span> 
            </h2>
            <div className="brand pt-5">
                <img src={amazone} alt="brand image"  />
            </div>
        </div>

        {/* practice project section */}
        <div className="container pt-5">
            <div className="row">
                    <div className="col-4 pt-5">
                        <img src={boy}  width="100%"/>
                    </div>
                    <div className="col-8 pt-5">
                            <div className='practice-sec'>
                                <h5 className='primary-color'>LEARN</h5>
                                <h2 className='practice-head'>Get Live Training <br /> by industry expert <br /> mentors</h2>
                                <p>Our experts who have years of industry and teaching experience will teach you 1 on 1 in real time so you can gain the best out of this course.</p>
                            </div>
                    </div>
                    <div className="col-8 pt-5">
                    <div className='practice-sec'>
                                <h5 className='primary-color'>PRACTICE</h5>
                                <h2 className='practice-head'>Projects &  <br /> Assignments</h2>
                                <p>The online classes will commence on the weekends in the span of 12 weeks. During this period, you will be working on more than 40+ assignments & 2 Portfolio Projects</p>
                            </div>
                       
                    </div>
                    <div className="col-4 pt-5">
                        <img src={girl}  width="100%" />
                    </div>

                    <div className="col-4 pt-5">
                        <img src={handshake}  width="100%"   />
                    </div>
                    <div className="col-8 pt-5">
                            <div className='practice-sec'>
                                <h5 className='primary-color'>START EARNING</h5>
                                <h2 className='practice-head'>Dedicated Career  <br /> Coach to help  <br /> with Placements </h2>
                                <p>We will teach you how to build the perfect resume, portfolio and conduct mock interviews. You will have our back until you get the job you deserve and ever after</p>
                            </div>
                    </div>
            </div>
        </div>


        <Footer />
        </>
    );
};

export default NavBar;
