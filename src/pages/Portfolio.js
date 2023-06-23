import data from "../data.json"
import { useState } from "react"
import { Link } from "react-router-dom"
import Description from "../components/Description"
import "./Portfolio.css"

const Portfolio = () => {
    const [show, setShow] = useState(false)
    const [projectID, setProjectID] = useState(0)

    const handleClick = (id) => {
        setShow(true)
        setProjectID(id)
    }

    const { demo, details, documentation, images, marketing, name } = data[projectID]

    return (
        <main className="portfolio-main">
            <section>
                {data.map((project, index) => {
                    const { name, anotation } = project
                    return <article onMouseOver={() => handleClick(index)} key={name} className="flex-center">
                        <a href="#description">
                            <p className="fw-600 p-mobile-width product-name">{name}</p>
                            <p className="anotation">{anotation}</p>
                        </a>
                        <Link to={`/details/${name}`} className="detail-link">Detaily</Link>
                    </article>
                })} 
            </section>
            {show &&
                <Description 
                    demo={demo}
                    details={details.description}
                    documentation={documentation}
                    images={images[0].image}
                    marketing={marketing}
                    name={name}
                />
            }
        </main>
    )
}

export default Portfolio