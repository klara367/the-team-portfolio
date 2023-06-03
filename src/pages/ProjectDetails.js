import { useParams } from "react-router-dom"
import { useState } from "react"
import data from "../data.json"
import Modal from "../components/Modal"
import "./ProjectDetails.css"

const ProjectDetails = () => {
    let { name } = useParams()

    const [imgNumber, setImgNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    let projectDetails = data.find(p => p.name === name)

    const { anotation, demo, details, documentation, images, marketing } = projectDetails

    const handleOpenModal = (index) => {
        setImgNumber(index)
        setOpenModal(true)
    }

    return (
        <main className="details-main">
            <section>
                <h2>{name}</h2>
                <p className="details-anotation">{anotation}</p>
                <p className="details-p">{details}</p>
                <div className="btns-wrapper">
                    <a href={demo} className="details-btn flex-center">Demo</a>
                    <a href={documentation} className="details-btn flex-center">Dokumentace</a>
                    <a href={marketing} className="details-btn flex-center">Marketing</a>
                </div>
            </section>
            <section>
                <div className="gallery flex-center">
                    {images && images.map((img, index) => {
                        return <div key={index} className="gallery__img">
                            <img src={img.image} alt={img.title} onClick={() => handleOpenModal(index)}/>
                        </div>
                    })}
                </div>
                {openModal &&
                    <Modal
                        imgNumber={imgNumber}
                        setImgNumber={setImgNumber}
                        setOpenModal={setOpenModal}
                        images={images}
                        image={images[imgNumber].image}
                        title={images[imgNumber].title}
                    />
                }
            </section>
        </main>
    )
}

export default ProjectDetails