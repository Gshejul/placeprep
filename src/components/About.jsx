import whySection from '../assets/whySection.gif';
import ourMission from '../assets/ourImg.png';
import Footer from './Footer';
const About = () => {
  return (
    
    <>

      <div className="container pt-5">
        <div className="row">
            <div className="">
                  <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb ">
                          <li className="breadcrumb-item"><a href="/NavBar">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                      </nav>
                        <div className='pt-5 '>
                            <h3 className='about-head text-center'> <span className='primary-color'>WELCOME</span>  <br /> to  PrepPlace</h3>
                        </div>
                  </div>
            </div>
        </div>
      </div>


      <div className="container pt-5">
        <div className="row">
          <div className="col-6 pt-5">
            <div className=" pt-5">
                <h4 className='text-center'>Our Mission</h4>
                <p>At PrepPlace, we are dedicated to providing college students with the resources and guidance they need to excel in the fields of Data Structures and Algorithms (DSA) and web development. We understand that these subjects can be challenging, and were here to help you not only understand them but also master them.</p>
             </div>
          </div>
          <div className="col-6 pt-5 text-center">
              <img src={ourMission} alt="our mission" />
          </div>
          <div className="col-6 pt-5 text-center">
              <img src={whySection} alt="our mission" />
          </div>
          <div className="col-6 pt-5 ">
              <div className=" pt-5">
                <h4 className='text-center'>Why Choose Us</h4>
                <div>
                  <ul>
                    <li> <span className='why-section'>Quality Content:</span> We are committed to providing high-quality content that is accurate, up-to-date, and easy to understand.</li> <br />
                    <li><span className='why-section'>Community Engagement:</span> Join a vibrant community of learners, where you can connect with peers, ask questions, and collaborate on projects.</li><br />
                    <li><span className='why-section'>Accessibility:</span> Our content is accessible 24/7, allowing you to learn at your own pace and convenience.</li> <br />
                    <li><span className='why-section'>Support:</span> We are here to support you throughout your learning journey. If you have any questions or need assistance, feel free to reach out to us.</li>
                  </ul>
                </div>
             </div>
          </div>    
        </div>
      </div>



      <div className="container pt-5 pb-5">
          <h2 className='text-center'>What We Offer</h2>

          <div className="row">
            <div className="col-4 pt-5">
                <div className='offer-bg p-3'>
                  <h5 className='offer-head'>1. DSA Learning Resources</h5>
                  <p>Our comprehensive DSA section offers a wide range of resources, including tutorials, practice problems, coding challenges, and articles that will help you build a strong foundation in DSA. Whether youre a beginner looking to grasp the basics or an advanced learner aiming to fine-tune your skills, we have something for everyone.</p>
                </div>  
            </div>
            <div className="col-4 pt-5">
              <div className='p-3'>
                <h5 className='offer-head'>2. Web Development Tutorials</h5>
                <p>For those interested in web development, our web development section covers everything from HTML and CSS to JavaScript, front-end and back-end development, and popular web development frameworks. Our tutorials are designed to take you from a novice to a proficient web developer.</p>
              </div>
            </div>
            <div className="col-4 pt-5">
              <div className='offer-bg p-3'>
                <h5 className='offer-head'>3. Coding Challenges</h5>
                <p>To put your newfound knowledge to the test, we provide a variety of coding challenges that will help you hone your problem-solving and coding skills. These challenges are designed to simulate real-world scenarios, giving you a taste of what youll encounter as a professional developer.</p>
              </div>
            </div>
          </div>
      </div>


      <Footer />
    </>
  )
}

export default About
