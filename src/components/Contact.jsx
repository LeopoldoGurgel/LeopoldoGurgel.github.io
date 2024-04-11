import '../styles/Contact.css'
import { SiLinkedin, SiGithub } from 'react-icons/si';
import {MdEmail} from 'react-icons/md'

const Contact = () => {
    return (
        <div className="contactContainer text-secondary">
            
            <div className="placeholder"></div>

            <h4 className="mt-4 text-center">Contact</h4>

            <table className="table table-hover table-borderless mt-3 mb-4">
                <tbody>
                    <tr>
                        
                        <td scope='col' className='d-flex'><MdEmail className={'icon me-4'} /> leopoldogbp@gmail.com</td>
                    </tr>
                    <tr>
                        
                        <td className={'d-flex'}><SiLinkedin className={'icon me-4'} /><a href="https://www.linkedin.com/in/leopoldo-gurgel-24a404284/">linkedin/leopoldo-gurgel</a></td>
                    </tr>
                    <tr>
                        
                        <td className='d-flex'><SiGithub className={'icon me-4'} /><a href="https://github.com/LeopoldoGurgel">github.com/LeopoldoGurgel</a></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Contact;