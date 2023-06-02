import data from "../data.json"
import { useState } from "react"
import { Link } from "react-router-dom"
import Description from "../components/Description"

const Portfolio = () => {
    const [show, setShow] = useState(false)
    const [projectID, setProjectID] = useState(0)

    const handleClick = (id) => {
        setShow(true)
        setProjectID(id)
    }

    const { demo, details, documentation, images, marketing, name } = data[projectID]


    return (
        <main>
            <section>
                {data.map((project, index) => {
                    const { name, anotation } = project
                    return <article onClick={() => handleClick(index)} key={name}>
                        <div>
                            <p>{name}</p>
                            <p>{anotation}</p>
                        </div>
                        <Link to={`/details/${name}`}>Detaily</Link>
                    </article>
                })}
            </section>
            <section>
                {show &&
                    <Description 
                        demo={demo}
                        details={details}
                        documentation={documentation}
                        images={images[0].image}
                        marketing={marketing}
                        name={name}
                    />
                }
            </section>
        </main>
    )
}

export default Portfolio