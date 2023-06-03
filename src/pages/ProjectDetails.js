import { useParams } from "react-router-dom"
import { useState } from "react"
import data from "../data.json"
import Modal from "../components/Modal"

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
                            <img src={img.image} alt={img.title} onClick={() => handleOpenModal(index)}/>
                        </div>
                    })}
                </div>
                <div>
                    {openModal &&
                        <Modal
                            imgNumber={imgNumber}
                            setImgNumber={setImgNumber}
                            images={images}
                            image={images[imgNumber].image}
                            title={images[imgNumber].title}
                            setOpenModal={setOpenModal}
                        />}
                </div>
            </section>

        </main>
    )
}

export default ProjectDetails