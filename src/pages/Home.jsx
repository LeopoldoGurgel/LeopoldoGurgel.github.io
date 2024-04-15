import '../styles/Home.css'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Resume from '../components/Resume.jsx';
import Contact from '../components/Contact.jsx';



const Home = ({message, username}) => {


    return (
    <div id="home" >


        <div className="placeholderDiv">  </div>


        <div id="homeContainer" className='row pt-4 pb-4 pt-sm-5'>
            {message === 'access_denied' && <p>You don't have access to this page, you trouble maker!</p>}
            <div className="hero-left col-xl-7 mb-5 mb-xl-0">
                <div className="pe-xxl-4">
                    <h1 className="mt-3 lh-base text-secondary">
                        Hello{username && <span>, {username}</span>}. My name is <br /><span className="myName text-warning">Leo Gurgel</span>, and I am a <br /><span className="webDev">Web Developer</span>.<br/><span className="typing-animation"></span>
                    </h1>
                    <a className='btn btn-lg btn-outline-secondary work-button' href='#contact' >Lets work together!</a>
                </div>
                
            </div>

            <div className="col-md-10 col-xl-5 position-relative mx-auto mt-7 mt-xl-0">
                {/* <div className="imgPlaceholder"><span className="text-light">image placeholder</span></div> */}
                <img src="./images/desk.jpg" alt="Image of a working desk top." className='deskImage'/>
            </div>

        </div>

        <div className="hr"></div>

        <div id="features" >
            <Features  />
        </div>

        <div className="hr"></div>
            
        <div id="portfolio" >
            <Portfolio />
        </div>

        <div className="hr"></div>

        <div id="about">
            <AboutMe />
        </div>
        
        <div className="hr"></div>

        <div id="resume">
            <Resume />
        </div>

        <div className="hr"></div>

        <div id="contact">
            <Contact />
        </div>

        

    </div>
)
}

export default Home;