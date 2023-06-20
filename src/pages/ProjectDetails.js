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
                <p className="details-p details-description">{details.description}</p>
                <div className="btns-wrapper">
                    <a href={demo} className="details-btn flex-center">Demo</a>
                    <a href={documentation} className="details-btn flex-center">Dokumentace</a>
                    <a href={marketing} className="details-btn flex-center">Marketing</a>
                </div>
                <p className="details-p details-heading">Vlastnosti</p>
                {details.properties.map(p => <li className="details-p details-list">{p}</li>)}
                <p className="details-p details-heading">Moduly</p>
                {details.modules.map(p => <li className="details-p details-list">{p}</li>)}
                <p className="details-p details-heading">Cílová skupina</p>
                <p className="details-p target-group-p">{details.target_group}</p>
                <p className="details-p details-heading">Role</p>
                <p className="details-p role-heading">{details.roles[0]?.title}</p>
                {details.roles[0]?.benefits.map(p => <li className="details-p role-list">{p}</li>)}
                <p className="details-p role-heading">{details.roles[1]?.title}</p>
                {details.roles[1]?.benefits.map(p => <li className="details-p role-list">{p}</li>)}
                <p className="details-p role-heading">{details.roles[2]?.title}</p>
                {details.roles[2]?.benefits.map(p => <li className="details-p role-list">{p}</li>)}
            </section>
            <section>
                <div className="gallery-flex">
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
                </div>

            </section>
        </main>
    )
}

export default ProjectDetails