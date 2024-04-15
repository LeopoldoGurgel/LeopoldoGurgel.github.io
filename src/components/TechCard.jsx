import {SiJavascript , SiBulma, SiJquery, SiExpress, SiJson, SiHeroku} from 'react-icons/si'

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

export default TechCard;