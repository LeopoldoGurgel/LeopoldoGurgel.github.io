import '../styles/AboutMe.css'

const AboutMe = () => {
    return (
        
        <div className="aboutMeContainer text-secondary">

            <div className="placeholder mt-4"></div>

            <h2 className="mb-5 mt-4 text-center">Who am I</h2>
            <div className='mb-5'>
                <img src="images/picofme1.jpg" alt="The portrait of a very handome man who happens to be the develper of this webpage. He is taken." id="picOfMe" />

                <p>My name is Leopoldo Gurgel and I came from Brazil to in Toronto, Canada, in the end of 2022. Formerly a healthcare professional for over 10 years. It was a very stressful and oftenly sad job and I learned to code as a hobby to clear my mind. After some time, I realized I was much more passionate about coding than doing what I did and decided to swap carrers. In 2023, I enroled in the Full Stack coding course at University of Toronto to expand my coding skills.
                </p>
                <p>Now I wish to make people lives better with my new set of skills and I hope to find happiness in the path I have chosen.</p>
            </div>
        </div>
    )
}

export default AboutMe;