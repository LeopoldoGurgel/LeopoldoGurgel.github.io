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

export default ProjectCard;