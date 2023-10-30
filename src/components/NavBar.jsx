import prep from '/prep-logo.png';
import { FaChevronRight} from 'react-icons/fa';


const NavBar = () =>{
    return(

        <>
        {/* navbar section */}
            <div className="container-fluid ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid home-bg">
                        <a className="navbar-brand" href="#">
                        <img src={prep} alt="prep-place-logo"   /> 
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

        {/* placement preparation section */}
            <div className="container-fluid pt-5">
                <div className="row">
                <div className="col-6">
                    <h1> <span className='primary-color'>Preparing for</span>  <br /> Placement ?   </h1>

                    <h3 className='pt-3'>We help students prepare for:</h3>
                    <div>
                        <p><FaChevronRight  /> General Aptitude from Basic to Advanced.</p>
                        <p><FaChevronRight  /> Programming using C, C++, Java, Python, DSA, DBMS, OS, CN.</p>
                        <p><FaChevronRight  />  Latest Technologies like Full-Stack, Data Science, Artificial Intelligence, Machine Learning, Data Analytics</p>
                        <p><FaChevronRight  />  Technical & Personal Interviews (With Mock Interviews).</p>
                        <p><FaChevronRight  />  Company Specific Training for All Major MNCs.</p>

                    </div>
                </div>
                <div className="col-6 main-bg"></div>
                </div>
            </div>

        {/* academic facilities section */}
            <div className="container pt-5">
                <div className='row'>
                    <div className="col-5">
                
                        <div className=' shadow-lg p-3'>
                            <h4 className='pt-3 m-3 '>Academic Facilities</h4>
                            <p>Academics at IIT Bombay has the flexibility to evolve with ever changing requirements. Various activities are carried out to promote reasearch, enhance creativity, learn new skills, implement innovative solutions and ...</p>
                            
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            see more..
                            </button>


                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Academic Facilities</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                            <div className="modal-body">
                                            <p>IIT Bombay provides the best learning facilities and the best possible learning environment. The programmes and courses on offer have the flexibility to evolve and change in response to new requirements. The programmes have a dual purpose of building a solid foundation of knowledge and, at the same time, enhancing confidence, creativity and innovation.

                                                    IIT Bombay continues to introduce new areas in its academic programmes and innovation in its academic activities. The ultimate goal of the institute is to extend learning to its precious student. It strives to provide them with the most novel and relevant education, always.

                                                    It is the  strong belief that students should get exposure to scientific developments in the world. Students are encouraged and supported to submit research papers and participate in international conferences. A business incubator established recently has also opened the gate to numerous opportunities for students to develop prototypes and generate venture capital.

                                                    IIT has MoUs with several universities in Europe, Japan and USA to facilitate the exchange of students. Students spend a semester at the partner institution and have credits transferred. MoUs exist with Kellogg, McCormick Schools of Northwestern University, INSA Lyon, Toulouse University Network, Tohuku, Budapest Univesity of Technology and Economics, amongst them.

                                                    Living in such an environment amongst people with similar goals and aspirations is an exciting learning experience for students...a learning experience that has an obvious destination - success.

                                                    Teaching Processes
                                                    There is a great emphasis on core fundamentals in the classroom, and examinations are designed to test the applicability of these fundamentals in real-life situations. Coursework is augmented by seminars, presentations and course projects to test the depth of understanding of subject.

                                                    Teaching Assistantship
                                                    Meritorious postgraduate students are offered a teaching assistantship, which involves assisting instructors in relation to conducting the course. Students assist instructors in preparing lectures, organizing laboratory sessions and tutorials, course planning, and even setting examination questions.

                                                    Interdisciplinary Programmes
                                                    The interdisciplinary programmes (IDDDPs) are designed to help students gain expertise in more than one technical field during the progress of the programme by exploring the connections among the disciplines. The institute provides degree courses in several interdisciplinary areas such as Centre for Machine Intelligence and Data Science (C-MInDS), Industrial Engineering and Operations Research, Systems and Control Engineering, Shailesh J. Mehta School of Management(SJSOM), Environmental Science and Engineering Department, Center for Digital Health and Climate Studies.

                                                    Departmental and Institute Electives
                                                    In order to boost interest in other faculties of engineering, the institute allows students to take electives and/or audit courses from departments other than their core area of specialization. Students can also take courses from Humanities and Management Sciences to broaden their perspective.

                                                    Industrial Exposure
                                                    Students are regularly exposed to the latest industrial practices through several industrial visits during their stay. The academic curriculum also requires a student to undergo industrial training for eight weeks at the end of the 6th semester of B.Tech and Dual Degree programmes. The training provides students with an understanding of the problems encountered in the working of an industry. The milieu of postgraduate students at IIT Bombay is created by a vibrant of fresh graduates and students with long years of industrial experience.

                                                    Institute Programmes
                                                    To facilitate the interaction of the faculty and students with acclaimed national and international personalities, IIT Bombay organizes seminars and lectures. Through these, students get an opportunity to interact with eminent personalities from academia and the corporate world. In addition to these, various departments also organize workshops and seminars involving professionals from the industry.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second modal */}
                        <div className=' shadow-lg p-3'>
                            <h4 className='pt-3 m-3'>Industrial Design Centre</h4>
                            <p>IDC School of Design is a unique mix of pedagogic experimentation with pragmatic design approach. IDC has academic programs in the areas of Industrial Design, Visual Communication, Interaction Design, Animation and Mobility & Vehicle Design.</p>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className='p-3 shadow-lg '>
                            <h4 className='pt-3 m-3'>Departments & Programs at IIT Bombay</h4>
                            <p>IIT Bombay is known as a premier engineering, science and technology institute in India. Currently, it offers an opportunity to learn in 20 varied departments and pursue 10 programs.
                               This university has strived and evolved over years to offer the students finest of its facilities for multi-dimensional growth. It is a home for design, management school and several emerging centres in technical, non-technical & entrepreneurial sector.</p>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                know more..
                            </button>   

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Departments & Programs at IIT Bombay</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                            <div className="modal-body">
                                            <p>The engineering and science departments at IIT Bombay offer undergraduate and postgraduate programmes leading to B.Tech., B.S., Dual Degree, M.Tech., IDDDP, M.S. by Research, M.Sc., B.Des, M.Des., M.A. by Research or Ph.D. degrees. With this diverse set of programmes offering different specializations, IIT Bombay has stayed at the forefront of emerging technologies.

                                                B.Tech.
                                                The four year Bachelor of Technology programme is offered in eight core branches of engineering. It is aimed at providing a basic foothold in various aspects of engineering. The salient feature of this programme is the yearlong B.Tech Project which exposes students to innovative technology and the latest industrial practices.

                                                Dual Degree (DD)
                                                The five year Dual Degree programme pioneered by the institute in 1996 offers on completion a B.Tech degree in a basic engineering discipline and a M.Tech degree in the field of specialization. A fourteen months long Dual Degree Project forms an integral part of the programme, in which students tackle live industrial problems and do cutting edge.

                                                5 yr. Integrated M.Sc.
                                                The five year Integrated Degree programme for Master of Science is currently offered in Chemistry at IIT Bombay. The programme is on par with the B.Tech and Dual Degree programmes and is one of its kind in India. It is designed to equip the undergraduate students with basic engineering knowledge, besides inculcating enthusiasm and expertise for research in basic sciences. The one yearlong M.Sc project enables students to apply their theoretical knowledge, helping them to excel in diversified environments.

                                                M.Tech.
                                                The Master of Technology programme admits graduate students in core as well as interdisciplinary courses (IDDPs), the duration of which is two years for a teaching assistantship and three years for a research assistantship. This programme takes a median between coursework and research: most M.Tech students undertake teaching or research assistantship along with regular coursework. The programme comprises of one or two years of coursework to train students in high theoretical knowledge and a 15 month long M.Tech project which enables them to tackle practical problems of design and development as well as pursue active research. Interdisciplinary programmes admit graduate students from varied disciplines and tackle problems of diverse nature by understanding the meaningful connections that exist among various disciplines.

                                                M.S. by Research
                                                The Master of Science by Research programme at IIT Bombay is intended as an alternative to M.Tech., designed for students with a research and development (R&D) bent of mind and striking a fine balance between research and applicability. It is designed to have a superior stature compared to the M. Tech. programme, and to prioritize R&D achievements, rather than the amount of time spent, or the number of courses taken. The programme facilitates the students to attain the mastery and skills required to excel in industry focused R&D. Along with undertaking a teaching or research assistantship, students carry out a successful programme and submit a thesis based on their research work. The programme has a flexible duration from 1.5 years to 3 years.

                                                Interdisciplinary Programme
                                                The interdisciplinary programmes (IDDPs) are designed to help students gain expertise in more than one technical field during the progress of the program by exploring the connections among the disciplines. The institute provides degree courses in several interdisciplinary areas such as Centre for Machine Intelligence and Data Science (C-MInDS), Industrial Engineering and Operations Research, Systems and Control Engineering, Shailesh J. Mehta School of Management(SJSOM), Environmental Science and Engineering Department, Center for Digital Health and Climate Studies.

                                                M.Sc.
                                                The two year Master of Science programme admits the very best of the science graduates of the country. Along with regular coursework which helps to develop a strong theoretical base and an expertise in research, students take up the yearlong project which exposes them to various problems encountered in the industry. This enables them to apply their theoretical knowledge efficiently to solve practical problems faced by the industry.

                                                M.Des.
                                                Industrial Design Centre (IDC) offers Master of Design degree (M.Des) programme in Industrial Design, Visual Communication, Animation and Film Design, Mobility and Vehicle Design, and Interaction Design. The programme develops skills, knowledge and aptitude among students to become the creative problem solvers who can bring innovation. The diverse backgrounds like Engineering, Architecture and Fine arts along with flexible choice for electives and projects strengthen the cross disciplinary learning among IDC students.

                                                Ph.D. Programme
                                                The PhD programme offered by the institute consists primarily of an original doctoral thesis. The aim of this programme is to keep pace with the expanding frontiers of knowledge and provide research training relevant to the present social and economic objectives of the country. Interdisciplinary and interdepartmental research is actively encouraged by the institute, sponsored and development projects from industrial organizations are also undertaken. All PhD students are required to publish their thesis results in international journals. The average duration of the programme is about 4 years..</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
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
        </>
    );
};

export default NavBar;
