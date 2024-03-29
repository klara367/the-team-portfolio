import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Description from "../components/Description"
import "./Portfolio.css"

const Portfolio = () => {
    const [show, setShow] = useState(false)
    const [projectID, setProjectID] = useState(0)
    const [portfolioData, setPortfolioData] = useState([])

    useEffect(() => {
        fetch("../data/data.json")
        .then(res => res.json())
        .then(data => setPortfolioData(data))
        .catch(err => console.log(err.message))
    }, [])

    const handleHover = (id) => {
        setShow(true)
        setProjectID(id)
    }

    const { demo, details, documentation, images, marketing, name } = portfolioData[projectID] || {}

    return (
        <main className="portfolio-main">
            <section>
                {portfolioData.map((project, index) => {
                    const { name, anotation } = project
                    return <article onMouseOver={() => handleHover(index)} key={name} className="flex-center">
                        <a href="#description">
                            <p className="fw-600 p-mobile-width product-name">{name}</p>
                            <p className="anotation">{anotation}</p>
                        </a>
                        <Link to={`/details/${name}`} className="detail-link">Detaily</Link>
                    </article>
                })} 
            </section>
            {show ?
                <Description 
                    demo={demo}
                    details={details.description}
                    documentation={documentation}
                    images={images[0].image}
                    marketing={marketing}
                    name={name}
                /> : 
                <section id="description">
                    <div className="description-wrapper">
                        <img src="https://placehold.co/1300x700/silver/gray" alt="About company" />
                        <p className="fw-600 name">The Team</p>
                        <p className="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Maecenas libero. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.</p>
                    </div>
                </section>
            }
        </main>
    )
}

export default Portfolio