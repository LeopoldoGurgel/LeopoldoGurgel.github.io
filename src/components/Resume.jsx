

const Resume = () => {
    return (
        <div className="resumeContainer text-secondary">
            <div className="placeholder"></div>
            <h2 className="text-center mt-5">Resume</h2>
            <h3 className="mt-4">Leopoldo Gurgel Barroso Pimentel</h3>
            <div>Fullstack Web Developer</div>
            <div className="row mt-3">
                <div className="col-10 col-md-4">(437) 299-6367</div>
                <div className="col-10 col-md-4">leopoldogbp@gmail.com</div>
                <div className="col-10 col-md-4"><a href="" className="linkedinLink text-secondary">My LinkedIn Profile</a></div>
            </div>

            <a href="resume/Leopoldo'sResume.pdf" className='btn btn-outline-secondary m-4' download>Download the PDF file.</a>

            <h4>Carreer Objective</h4>

            <p>As passionate as I am about coding, I want to find myself in an environment where I can be around people who have this same feeling about what we do so I can share my coding tricks in both fron and back ends of Web Development and also learn from them. I believe that good results and client satisfaction are consequences of a positive environment where everyone help each other to be proffesionals.</p>

            <h4>Education</h4>

            <ul>
                <li><span className="text-bold">UofT SCS Coding Boot Camp, University of Toronto</span>, Toronto, On (2023)</li>
                <li><span className="text-bold">Responsive Web Design, FreeCodeCamp</span> (2023)</li>
                <li><span className="text-bold">Javascript Coding Course, Mimo.org</span> (2023)</li>
                <li><span className="text-bold">HTML Coding Course, Mimo.org</span> (2023)</li>
            </ul>

            <div className="row p-4">
                <div className="col-12 col-md-6">
                    <h4>Front-End Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>

                <div className="col-12 col-md-6">
                    <h4>Back-End Proficiencies</h4>
                    <ul>
                        <li>API's</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL / Sequelize</li>
                        <li>MongoDB / Mongoose</li>
                        <li>Restful API</li>
                        <li>GraphQL</li>
                    </ul>
                </div>

                
                Fluent in Portuguese (Native) and English.
            </div>
        </div>
    )
}

export default Resume;