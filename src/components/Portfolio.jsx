import '../styles/Portfolio.css'
import ProjectCard from './ProjectCard';

const Portfolio = () => {
    return (
        <div id="portfolioContainer"  className='container pt-sm-5'>

                {/* <div className="placeholderDiv">  </div> */}

                <div className="fadeUp">
                    <h2 className="text-center text-secondary mt-3 mb-5">Some of my previous works</h2>
                </div>

                <div className="projectsContainer mb-5">

                    <ProjectCard 
                    id='ProteinGeneFinder'
                    className={'mb-3'}
                    title='Protein Gene Finder'
                    description='Protein Gene Finder is a powerful tool that uses server side APIs information to simplify the process of searching for protein genes and related genetic information.'
                    src='images/DNA.jpeg'
                    alt='image of a DNA structure'
                    pageURL='https://leopoldogurgel.github.io/proteingenefinder/'
                    repoURL='https://github.com/LeopoldoGurgel/proteingenefinder'
                    techs={[
                        'Javascript',
                        'Bulma',
                        'JQuery',
                    ]}
                    />

                    <ProjectCard 
                    id='MyEasyNotes'
                    title='My Easy Notes'
                    description="This is an application developed to work directly on browsers. Hosted on Heroku, it saves user's notes in a built in database (formatted as JSON) without having to download or install anything."
                    src='images/myEasyNotes.png'
                    alt='Landing page of myEasyNotes app.'
                    pageURL='https://myeasynotes-f5c4a6c5cb17.herokuapp.com/note'
                    repoURL='https://github.com/LeopoldoGurgel/myeasynotes'
                    techs={[
                        'Javascript',
                        'Express',
                        'Json',
                        'Heroku'
                    ]}
                    />

                </div>

        </div>
    )
}

export default Portfolio;