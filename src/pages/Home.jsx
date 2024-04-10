import '../styles/Home.css'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio.jsx'

// {message === 'access_denied' && <p>You don't have access to this page, you trouble maker!</p>}

/* 
{username && (
    <h2 style={{ marginBottom: '2rem' }}>Hello, {username}</h2>
    )} 
*/

export default function Home({message, username}) {

// old version

    // return (
    //     <div id="welcome">
            
    //         <div id="welcomeCarousel" className='carousel carousel-fade slide p-3' data-bs-ride='carousel' >

    //             <div className="carousel-inner">

    //                 <div className="carousel-item active " data-bs-interval='4000'>
    //                     <div id='welcomeSlide1' className='welcomeSlide' >
    //                         <h2 className="line1">Hello!</h2>
    //                         <h2 className="line2">My name is <span className="myName">Leopoldo Gurgel</span></h2>
    //                         <h2 className="line3">and I am a <span className="webDeveloper">Web Developer</span> .</h2>
    //                     </div>
    //                 </div>

    //                 <div className="carousel-item" data-bs-interval='4000'>
    //                     <div id="welcomeSlide2" className="welcomeSlide" >
    //                         <h2 className="line1">I invite you to</h2>
    //                         <h2 className="line2">explore my <a href="#portfolio"><span className="portfolioLink">previous projects</span></a></h2>
    //                         <h2 className="line3">to see what I can do for your business.</h2>
    //                     </div>
    //                 </div>

    //                 <div className="carousel-item" data-bs-interval='10000'>
    //                     <div className="welcomeSlide" id="welcomeSlide3">
    //                         <h2 className="line1">See also my previous posts on <span className="pseudocodesLink">Pseudocodes</span> area.</h2>
    //                         <h2 className="line2">If you like what you see, this is my <span className="portfolioLink">contact</span>.</h2>
    //                         <h2 className="line3">I cannot wait to turn your ideas into code!</h2>
    //                     </div>
    //                 </div>

    //             </div>

    //         </div>
    //     </div>
    // )

// new version

return (
    <div id="home" >


        <div className="placeholderDiv">  </div>


        <div id="homeContainer" className='row pt-4 pb-4 pt-sm-5'>

            <div className="hero-left col-xl-7 mb-5 mb-xl-0">
                <div className="pe-xxl-4">
                    <h1 className="mt-3 lh-base text-secondary">
                        Hello. My name is <br /><span className="myName text-warning">Leo Gurgel</span>, and I am a <br /><span className="webDev">Web Developer</span>.<br/><span className="typing-animation"></span>
                    </h1>
                    <a className='btn btn-lg btn-outline-secondary work-button' >Lets work together!</a>
                </div>
                
            </div>

            <div className="col-md-10 col-xl-5 position-relative mx-auto mt-7 mt-xl-0">
                {/* <div className="imgPlaceholder"><span className="text-light">image placeholder</span></div> */}
                <img src="./images/desk.jpg" alt="Image of a working desk top." className='deskImage'/>
            </div>

        </div>

        <div className="hr"></div>

        <div id="features">
            <Features />
        </div>

        <div className="hr"></div>
            
        <div id="portfolio">
            <Portfolio />
        </div>

        <div className="hr"></div>

        <div id="contact">
            <div id="contactContainer"  className='container pt-4 pt-sm-5 bg-danger'>

            </div>
        </div>

        <div className="hr"></div>

        <div id="about">
            <div id="aboutContainer"  className='container pt-4 pt-sm-5 bg-danger'>

            </div>
        </div>

        <div className="hr"></div>

        <div id="resume">
            <div id="resumeContainer"  className='container pt-4 pt-sm-5 bg-danger'>

            </div>
        </div>
    </div>
)
}