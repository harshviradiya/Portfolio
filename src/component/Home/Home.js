import React, { useState, useRef } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import '../../App.css'
import "./Home.scss"
import '../../../src/Media_Query.scss'
function Home() {

  const [div, setdiv] = useState(true);
  const handleeducation1 = () => {
    setdiv(true)
  }
  const handleeducation2 = () => {
    setdiv(false)
  }

  const [exp, setexp] = useState(true);
  const handlecompony1 = () => {
    setexp(true)
  }
  const handlecompony2 = () => {
    setexp(false)
  }

  const [projects, setprojects] = useState(true);
  const handleprojects = () => {
    setprojects(false)
    setActive(!isActive);
  }
  const handleclones = () => {
    setprojects(true)
    setActive(!isActive)
  }
  const [isActive, setActive] = useState(false);

  // const toggleClass = () => {
  //   setActive(!isActive);
  // };
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const myRef = useRef(null)

  const handlecontact = () => {
    scrollToRef(myRef)
  }

  return (
    <div>
      <Header />
      <section>
        <div className="container">
          <div className="leftright">
            <div className="left">

              <div className="content">
                <div className="text">
                  <span className="heading">PRODUCT DESIGNER</span>
                  <span className="name">Harsh Viradiya</span>
                  <span className="description">A Web Developer with the enhance intellectual growth, knowledge, and provide the best of my abilities and technical skills to deliver diverse projects in a complex environment and to enhance the capacities of the organization where I shall work, and contribute in growth and development.</span>
                </div>
                <div className="buttondiv">
                  <button className="contactme" onClick={handlecontact}>Contact Me</button>
                  <button className="downlodcv">Downlod Cv</button>
                </div>
              </div>


            </div>
            <div className="right">
              <img src="./Assest/bgshape/Capture.PNG" alt="" />
            </div>
          </div>

        </div>
      </section>

      <section >
        <div className="container">
          <div className="mainTitle align-left">
            <h3>Education</h3>
          </div>
          <div className="second_lfri">
            <div className="second_left">

              <div className="boxdiv">
                <div className="backbox">

                  <div onClick={handleeducation1} className="eduction1 whitebox">
                    <img className="lambtonimage" src="./Assest/collagelogo/lambton.png" alt="" />
                    <span>Lambton College</span>
                  </div>
                  <div onClick={handleeducation2} className="eduction2 whitebox">
                    <img className="guniversity" src="./Assest/collagelogo/GNU.png" alt="" />
                    <span>Ganpat University</span>
                  </div>

                </div>
              </div>

            </div>
            <div className="second_right" >
              <div className="collage" style={{ display: div ? "block" : "none", margin: "25px" }}>

                <div className="text">

                  <div className="collage_name" >
                    <img className="clogo" src="./Assest/collagelogo/lambton.png" alt="" />
                    <span className="name">

                      " Lambton College"
                      <sup>Pursuing</sup>
                      (Sept 2020 - April 2022)

                    </span>
                  </div>
                  <h4>Computer Software and Database development</h4>
                  <h5>topics</h5>
                  <ul>
                    <li>Web Technology</li>
                    <li>JAVA (EE)</li>
                    <li>JAVA (SE)</li>
                    <li>Database development</li>
                    <li>C#</li>
                    <li> ASP.NET</li>
                    <li>Python</li>

                  </ul>

                </div>



              </div>
              <div style={{ display: div ? "none" : "block", margin: "25px" }}> <div className="text">

                <div className="collage_name" >
                  <img className="clogo" src="./Assest/collagelogo/GNU.png" alt="" />
                  <span className="name">

                    " Ganpat University (July 2015 - May 2019)"

                  </span>
                </div>
                <h4>Bachelor of Technology in Computer Engineering</h4>
                <h5>topics</h5>
                <ul>
                  <li>Web Technology</li>
                  <li>Cloud Computing</li>
                  <li>Networking</li>
                  <li>Advcance JAVA</li>
                  <li> Database development</li>
                  <li>C#</li>
                  <li> ASP.NET</li>
                  <li>Android</li>
                  <li>IOS</li>

                </ul>

              </div></div>
            </div>

          </div>
        </div>
      </section>

      <section >
        <div className="container">
          <div className="skills">
            <span className="heading">My Skills</span>

            <div className="skillscircle">


              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>90<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Html</h2>
              </div>

              <div class="card">
                <div class="percent javascipt">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>90<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Css</h2>
              </div>


              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>90<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Database</h2>
              </div>


              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>90<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">C</h2>
              </div>



              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>85<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Java</h2>
              </div>



              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>85<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Asp.Net</h2>
              </div>


              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>80<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">JAVA(J2EE)</h2>
              </div>


              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>80<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">JavaScript</h2>
              </div>


              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>80<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Angular JS</h2>
              </div>


              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>80<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">Node Js</h2>
              </div>

              <div class="card">
                <div class="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div class="number">
                    <h2>80<span>%</span></h2>
                  </div>
                </div>
                <h2 class="text">React Js</h2>
              </div>



            </div>
          </div>
        </div>

      </section>

      <section >
        <div className="container">
          <div className="mainTitle align-left">
            <h3>Experiance</h3>
          </div>
          <div className="third">
            <div className="thirdl">
              <div className="left" style={{ display: exp ? 'block' : 'none', margin: "25px", padding: "0 1rem" }}>
                <div className="text">

                  <div className="collage_name" >
                    <img className="clogo" src="./Assest/componylogo/getway.jpg" alt="" />
                    <span className="name">
                      " Gateway Techno Labs (Ahmedabad, India)"
                    </span>
                  </div>
                  <h4>Software Developer (Jan 2019 - Jan 2020)</h4>
                  <span>		I wroked around one year as a software developer at Gateway Techno Labs. Technologies back in India,
                    working on critical projects for their clients.
                    I had the opportunity to develop website named AutoDap in agile methodology using different technologies like Angular JS, Node JS,
                    including CSS/CSS3 and HTML5. </span>
                </div>
              </div>
              <div style={{ display: exp ? 'none' : 'block', margin: "25px", padding: "0 1rem" }}>
                <div className="text">

                  <div className="collage_name" >
                    <img className="clogo" src="./Assest/componylogo/bbt.png" alt="" />
                    <span className="name">

                      "BrainyBeam Technologies (Ahmedabad, India) "

                    </span>
                  </div>
                  <h4>Salesforce Developer - Intern (May 2018 - Dec 2018)</h4>
                  <span>	I was a salesforce developer (Intern) at Brainy Beam Technology, where I have worked on salesforce applications. My responsibilities were to assist a data project team, develop customized solutions within a salesforce platform, and design, code, and implement salesforce applications. </span>
                </div>
              </div>
            </div>
            <div className="backbox">
              <div className="exp1 exps whitebox">
                <div className="title">
                  <img className="lambtonimage" src="./Assest/componylogo/getway.jpg" alt="" />
                  <span>Gateway Techno Labs</span>
                </div>
                <span>Software Developer <br />(Jan 2019 - Jan 2020)</span>
                <div className="buttondiv">
                  <button className="contactme" onClick={handlecompony1}>View Details</button>
                </div>
                <img className="bgshapedot" src="./Assest/bgshape/shape4.png" alt="" />
              </div>
              <div className="exp2 exps whitebox">
                <div className="title">
                  <img className="guniversity" src="./Assest/componylogo/bbt.png" alt="" />
                  <span>BrainyBeam Technologies </span>
                </div>
                <span>Salesforce Developer - <br /> Intern (May 2018 - Dec 2018)</span>
                <div className="buttondiv">
                  <button className="contactme" onClick={handlecompony2}>View Details</button>
                </div>
                <img className="bgshapedot" src="./Assest/bgshape/shape4.png" alt="" />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="container">
        <div className="container">
          <div className="forth">
            <div className="portfolio_header">
              <div className="mainTitle align-left">
                <h3>My Projects</h3>
              </div>
              <div className="option">
                <button className={isActive ? 'activeBtn' : null} onClick={handleprojects}>Projects</button>
                <button className={isActive ? 'null' : 'activeBtn'} onClick={handleclones}>Clones</button>
              </div>
            </div>
            <div className="portfolio_content">
              <div style={{ display: projects ? 'none' : 'block' }}>
                <div className="pbox">
                  <div className="bgbox">
                    <div className="project_1 animationbox">
                      <img src="./Assest/projects/p1.png" alt="Portfolio Item" />
                      <figcaption>
                        <h4>MyCoVTest Hub (2021)</h4>
                        <p>MyCoVTest Hub is to help collect the test results and to provide an accurate picture of the local cases, including more detailed demographics, as well as a regional breakdown by postcode.</p>
                        <span><b>Technologies :</b>  JAVA, JSP, SERVLET, MYSQL</span>
                        <div className="buttondiv">
                          <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                        </div>
                      </figcaption>
                    </div>
                    <div className="project_2 animationbox">
                      <img src="./Assest/projects/p2.png" alt="Portfolio Item" />
                      <figcaption>
                        <h4>Cars Here (2020)</h4>
                        <p>Basically, Cars here is a website which allow user to rent or excahnge a car with other users. Also, real time feedback
                          and car's information.
                        </p>
                        <span><b>Technologies :</b>  HTML, CSS, JavaScript</span>
                        <div className="buttondiv">
                          <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                        </div>
                      </figcaption>
                    </div>
                    <div className="project_3 animationbox">
                      <img src="./Assest/projects/p3.png" alt="Portfolio Item" />
                      <figcaption>
                        <h4>Shoppy (2020)</h4>
                        <p>Shoppy is a Android application where users can see different brands of shoes and they
                          can buy the shoes of their own choice.

                        </p>
                        <span><b>Technologies :</b>  Android, Java, Firebase</span>
                        <div className="buttondiv">
                          <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                        </div>
                      </figcaption>


                    </div>
                    <div className="project_4 animationbox">
                      <img src="./Assest/projects/p4.png" alt="Portfolio Item" />
                      <figcaption>
                        <h4>Cake Shop (2019)</h4>
                        <p>The cake shop is an online cake shopping site, and users can modify cakes according to their requirements;
                          an online payment and delivery tracking system is there for user flexibility.


                        </p>
                        <span><b>Technologies :</b> JAVA, JSP, MYSQL, Servlet</span>
                        <div className="buttondiv">
                          <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                        </div>
                      </figcaption>





                    </div>
                    <div className="project_5 animationbox">
                      <img src="./Assest/projects/p5.gif" alt="Portfolio Item" />
                      <figcaption>
                        <h4>Snapkart Portfolio (2017)</h4>
                        <p>A web application where users can join and share their portfolio with advertising agencies for photoshoot selection.



                        </p>
                        <span><b>Technologies :</b> JAVA, JSP, Servlet, MySQL</span>
                        <div className="buttondiv">
                          <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                        </div>
                      </figcaption>


                    </div>
                    <div className="project_6 animationbox">
                      <img src="./Assest/projects/p6.gif" alt="Portfolio Item" />
                      <figcaption>
                        <h4>BELL BOY (2021)</h4>
                        <p>Bell Boy is a Android Application where Users can view and book the Hotels of their own
                          choice.
                        </p>
                        <span><b>Technologies :</b> Android, Java, Firebase</span>
                        <div className="buttondiv">
                          <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                        </div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: projects ? 'block' : 'none' }}>
                <div className="cbox">
                  <div className="bgcbox">
                    <div className="clone_1">
                      <img src="./Assest/projects/tinder-clone.gif" alt="Portfolio Item" />
                      <figcaption>
                        <h4>Tinder Clone</h4>
                        <p> I have made tinder clone. I used React JS for client-side and used Node.JS for server side. MongoDB has been used for store the data and deployed side
                          through firebase.
                        </p>
                        <span><b>Technologies :</b>  React.JS, Node.JS, MongoDB, Firebase</span>
                        <div className="buttondiv">
                          <a href="https://github.com/JemishViradiya/MyCovTestHub" className="Learn_More">Learn More</a>
                        </div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={myRef} >
        <div className="container" >
          <div className="mainTitle align-center">
            <h3>Get in touch</h3>
          </div>
          <div className="get_in_touch">

            <div className="left">
              {/* <span className="heading">Get in touch</span> */}

              <div className="touch-details">
                <div className="touch-box">
                  <img src="./Assest/bioicon/phone.png" alt="" />
                  <span>(437) 772-7878</span>
                </div>
                <div className="touch-box">
                  <img src="./Assest/bioicon/address.png" alt="" />
                  <address>
                    35 Fountainhead Road
                    <br />
                    North York, ON, M3J 2V7
                    <br />
                    CANADA
                  </address>
                </div>
                <div className="touch-box">
                  <img src="./Assest/bioicon/mail.png" alt="" />
                  <span title="jemishviradiya9@gmail.com">jemishviradiya9@gmail.com</span>
                </div>
                <div className="touch-box">
                  <ul>
                    <li>
                      <a href="https://twitter.com/VJemish">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/jemish.viradiya.54/">
                        <i class="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/JemishViradiya">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/jemishviradiya9/">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jemish-viradiya-63aa2a146/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="Name">
                <input type="text" placeholder="Enter Name" />
              </div>


              <div className="Name">
                <input type="text" placeholder="Enter Email" />
              </div>

              <div className="Name">
                <textarea placeholder="Enter Messages"></textarea>
              </div>

              <div className="buttondiv">
                <button className="contactme">Send Message</button>
              </div>

            </div>
          </div>
        </div>



      </section>

      <Footer />
    </div>
  )
}

export default Home
