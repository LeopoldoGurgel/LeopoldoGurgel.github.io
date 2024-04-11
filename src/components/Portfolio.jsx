import '../styles/Portfolio.css'
import {SiJavascript , SiBulma, SiJquery, SiGithub, SiExpress, SiJson, SiHeroku} from 'react-icons/si'

const TechCard = ({name}) => {
    let icon;
    switch(name){
        case 'Javascript':
            icon = <SiJavascript className={'icon'}/>;
            break;

        case 'Bulma':
            icon = <SiBulma className={'icon'} />;
            break;

        case 'JQuery':
            icon = <SiJquery className={'icon'} />;
            break;
            
        case 'Express':
            icon = <SiExpress className={'icon'} />;
            break;

        case 'Json':
            icon = <SiJson className={'icon'} />;
            break;

        case 'Heroku':
            icon = <SiHeroku className={'icon'} />
    }

    return (

        <div className="card techCard">
            <div className="card-body centered icon">
                {icon &&  icon}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item rounded15 text-center text-secondary">{name}</li>
            </ul>
        </div>
    )
}

const ProjectCard = ({id, title, description, pageURL, repoURL, techs, src, alt}) => {

    return (
        <div className='projectCard'>
            <h4 className='p-1 pt-2 text-center text-secondary cardHeader'>{title}</h4>
            <img className='projectCardImg' src={src} alt={alt} />
            <div className="accordion" id={id}>

                <div className="accordion-item text-secondary">
                    <h3 className="accordion-header">
                        <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target={'#one'+ id} aria-expanded='true' aria-controls={'one'+ id}>Description</button>
                    </h3>
                    <div id={'one'+ id} className="accordion-collapse collapse" data-bs-parent={'#'+ id}>
                        <div className="accordion-body">
                            {description}
                        </div>
                    </div>
                </div>

                <div className="accordion-item text-secondary">
                    <h3 className="accordion-header">
                        <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target={'#two'+ id} aria-expanded='true' aria-controls={'two'+ id}>Technologies</button>
                    </h3>
                    <div id={'two'+ id} className="accordion-collapse collapse" data-bs-parent={'#' + id}>
                        <div className='d-flex techContainer'>
                        {techs.map((tech, index) => {
                            return <TechCard 
                            name= {tech}
                            key= {index}
                            />
                        }
                        )}
                        </div>                        
                    </div>
                </div>

                <div className="accordion-item text-secondary">
                    <h3 className="accordion-header">
                        <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target={'#three'+ id} aria-expanded='true' aria-controls={'three'+ id}>Links</button>
                    </h3>
                    <div id={'three'+ id} className="accordion-collapse collapse ">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a href={pageURL} className='text-secondary'>Live Demonstration</a>
                            </li>
                            <li className="list-group-item">
                                <a href={repoURL} className='d-flex text-secondary'>
                                    <SiGithub className={'icon me-2'}/> Github Repo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

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