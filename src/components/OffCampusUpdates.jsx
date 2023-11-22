import mobile from '../assets/mobile.png'
import client from '../assets/client.jpg'
import Footer from './Footer'





function OffCampusUpdates(){
    return(
        <>
           <div className="container pt-5">
                <div className="">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb ">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">OffCampus Updates</li>
                        </ol>
                    </nav> 
                </div>
           </div>



           <div className="container pt-5 ">
            
            <div className="row">
                <div className="col-6">
                    <h5>OffCampus Updates</h5>
                    <img src={mobile} alt="mobile"  width='100%' />
                </div>
                <div className="col-6 ">
                    <div className=''>
                        <h3 className='text-center off-head'>Never Miss <br /> OffCampus Updates</h3>
                        <p className='text-center pt-3'>Get OffCampus updates from PrepInsta</p>
                        <p className='text-center'>Follow us on our Social media handles and never miss any drive update</p>
                        <p className='text-center'>Note - Make sure to follow on all social media platforms as some drives are platform exclusive</p>
                    </div>
                    <div className='text-center'>
                        <p><button type="button" className="btn btn-outline-warning px-5">Whatsapp</button> </p><br />
                        <p><button type="button" className="btn btn-outline-warning px-5">Instagram</button></p> <br />
                        <p><button type="button" className="btn btn-outline-warning px-5">Discord</button></p> <br />
                        <p><button type="button" className="btn btn-outline-warning px-5">Telegram</button></p> <br />
                        <p><button type="button" className="btn btn-outline-warning px-5">LinkdIn</button></p>
                    </div>
                    
                </div>
               
            </div>
           </div>


           <div className='container pt-5 pb-5'>
                <div className="row">
                    <div className="col-6">
                        <p className='off-text-head'>Get over 200+ <br /> course One <br /> Subscription</p>
                        <p className='off-text-sub'>Courses like AI/ML, Cloud Computing, Ethical Hacking, C, C++, Java, Python,</p>
                        <p>DSA (All Languages), Competitive Coding (All Languages), TCS, Infosys,</p>
                        <p>Wipro, Amazon, DBMS, SQL and others</p>
                    </div>
                    <div className="col-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_MCBu1NdQOA?si=G4zzHaWSf0xir9uC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
                    </div>
                </div>
           </div>

            <div className='container pt-5'>
                    <h4 className='text-center'>How to Prepare for Placements</h4>
                <div className="row">
                    <div className="col-6">
                    
                    <p className='pt-5'>As and when our college life which is filled with sparkle and loaded with enjoyment comes to an end, 
                        the pressures of placement season start to kick in. We can totally relate to the fictional character of Raju from 3 Idiots. 
                        Just like him, we may also get cold feet and lose our calm and composure when the pressure is high. In the words of Max Brooks,
                        “If you believe you can accomplish everything by “cramming” at the eleventh hour, by all means, don’t lift a finger now. 
                        But you may think twice about beginning to build your ark once it has already started raining”. 
                        Thus, in this blog, we will discuss some valuable tips and advice on how to prepare for placements.
                    </p>
                    <p>
                        <h3>Create an Impressive Resume</h3>
                        <p>The very first step on how to prepare for placements is building an impressive resume. 
                            A resume is a document that summaries the job seeker’s academic qualifications, achievements, extracurricular activities, internships, and volunteer work. 
                            Thus, it should be clear, concise, and well put. It is our best shot for creating a favourable impression on the employer to get short-listed for an interview. 
                            Given below are some of the Dos and Don’ts on preparing a resume:
                        </p>
                        
                        <p>Make your own customized resume. Go through some templates, try to brainstorm and find words that describe you best</p>
                        <p>Highlight your skills and accomplishments</p> 
                        <p>Proof-read the document</p> 
                    </p>

                    </div>
                    <div className="col-6">
                        <img src={client} alt="" />
                    </div>
                </div>
               
            </div>

            <Footer/>

        </>
    )
}


export default OffCampusUpdates