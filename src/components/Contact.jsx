import contact from '../assets/contact-gif.gif'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
            <div className="col-6">
                  <div className="">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb ">
                          <li className="breadcrumb-item"><a href="/">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                      </nav> 
                  </div>
                  <div className='pt-5'>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter your name" />
                      </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mb-3 text-center">
                      <button className='btn'>submit</button>
                    </div>
                  </div>
            </div>
            <div className="col-6">
            <img src={contact} alt=""  />
            </div>
        </div>
      </div>


      
    
    
    
    <Footer/>
    </>
  )
}

export default Contact
