import { useParams } from "react-router-dom"
import { useState } from "react"
import data from "../data.json"

const ProjectDetails = () => {
    let { name } = useParams()

    let projectDetails = data.find(p => p.name === name)

    const { anotation, demo, details, documentation, images, marketing } = projectDetails

    return (
        <main>
            <section>
                <h2>{name}</h2>
                <p>{anotation}</p>
                <p>{details}</p>
                <div>
                    <a href={demo}>Demo</a>
                    <a href={documentation}>Dokumentace</a>
                    <a href={marketing}>Marketing</a>
                </div>
            </section>
            <section>
                <div>
                    {images && images.map((img, index) => {
                        return <div key={index}>
                            <img src={img.image} alt={img.title} />
                        </div>
                    })}
                </div>
            </section>

        </main>
    )
}

export default ProjectDetails