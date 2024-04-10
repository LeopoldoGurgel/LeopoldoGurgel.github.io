import '../styles/Features.css'

const Features = () => {
    return (
        <div id="featuresContainer" className='pt-3 pb-4 pt-sm-5' >
                
                <div className="fadeUp"><h2 className='mb-5 text-center text-secondary'>Develop anything</h2></div>

                <div className="cardsContainer fadeUp">
                    <div id="f1" className='featureCard p-4'>
                        <h4 className='mt-3 mb-2 text-light'>Beautiful designs</h4>
                        <div className='text-light pt-2'>Enjoy the power to create any design <br/>you can imagine with the power of React.js and powerful frameworks such as Bootstrap, Bulma and Tailwind.</div>
                    </div>

                    <div id="f2" className='featureCard p-4'>
                        <h4 className="mt-3 mb-2 text-light">Do not miss anything</h4>
                        <div className="text-light pt-2">Store your data at a database that is most suitable with your needs. Either relational or not. You choose (or we can talk about it if you are not sure).</div>
                    </div>

                    <div id="f3" className='featureCard p-4'>
                        <h4 className="mt-3 mb-2 text-light">Data security</h4>
                        <div className="text-light pt-2">Feel the comfort of not having to worry about the security of your data combining the reliability of the best service hosts and local security methods such as Webtokens, password hashing, multi-level auth processes and more.</div>
                    </div>
                </div>


            </div>
    )
}

export default Features;