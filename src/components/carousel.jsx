import { FaChevronRight} from 'react-icons/fa';




let Carousel = () =>{
    return (

        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-6">
                        <h2 className='main-head'> <span className='primary-color'>Preparing for</span>   Placement ?   </h2>

                        <h3 className='pt-3'>We help students prepare for:</h3>
                        <div>
                            <p className='c-text'><FaChevronRight  /> General Aptitude from Basic to Advanced.</p>
                            <p className='c-text'><FaChevronRight  /> Programming using C, C++, Java, Python, DSA, DBMS, OS, CN.</p>
                            <p className='c-text'><FaChevronRight  />  Latest Technologies like Full-Stack, Data Science, Artificial Intelligence, Machine Learning, Data Analytics</p>
                            <p className='c-text'><FaChevronRight  />  Technical & Personal Interviews (With Mock Interviews).</p>
                            <p className='c-text'><FaChevronRight  />  Company Specific Training for All Major MNCs.</p>

                        </div>
                    </div>
                    <div className="col-6 prepare"></div>
                </div>
            </div>


            

        </>

    );
};

export default Carousel;