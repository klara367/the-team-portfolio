import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Modal from "../components/Modal"
import "./ProjectDetails.css"

const ProjectDetails = () => {
    const [imgNumber, setImgNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [portfolioData, setPortfolioData] = useState([])

    useEffect(() => {
        fetch("../data/data.json")
        .then(res => res.json())
        .then(data => setPortfolioData(data))
        .catch(err => console.log(err.message))
    }, [])

    let { name } = useParams()

    let projectDetails = portfolioData.find(p => p.name === name)

    const { anotation, demo, details, documentation, images, marketing } = projectDetails || {}

    const handleOpenModal = (index) => {
        setImgNumber(index)
        setOpenModal(true)
    }

    return (
        <main className="details-main">
            {projectDetails && <section>
                <div className="flex-center header-btns-flex">
                    <h2>{name}</h2>
                    <div className="btns-wrapper">
                        <a href={demo} className="details-btn">Demo</a>
                        <a href={documentation} className="details-btn">Dokumentace</a>
                        <a href={marketing} className="details-btn">Marketing</a>
                    </div>
                </div>
                <p className="details-anotation">{anotation}</p>
                <p className="details-description">{details.description}</p>
                <div>
                    <p className="details-heading">Cílová skupina</p>
                    <p className="target-group-p">{details.target_group}</p>
                </div>
                <div className="two-cards-flex">
                    <div>
                        <p className="details-heading">Vlastnosti</p>
                        <ul>{details.properties.map(p => <li className="details-list">{p}</li>)}</ul>
                    </div>
                    <div>
                        <p className="details-heading">Moduly</p>
                        <ul>{details.modules.map(p => <li className="details-list">{p}</li>)}</ul>
                    </div>
                </div>
                <p className="details-heading">Role</p>
                <p className="role-heading">{details.roles[0]?.title}</p>
                <ul>{details.roles[0]?.benefits.map(benefit => <li className="role-list">{benefit}</li>)}</ul>
                <p className="role-heading">{details.roles[1]?.title}</p>
                <ul>{details.roles[1]?.benefits.map(benefit => <li className="role-list">{benefit}</li>)}</ul>
                <p className="role-heading">{details.roles[2]?.title}</p>
                <ul>{details.roles[2]?.benefits.map(benefit => <li className="role-list">{benefit}</li>)}</ul>
            </section>}
            <section>
                <div className="gallery-flex">
                    <div className="gallery flex-center">
                        {images && images.map((img, index) => {
                            return <div key={index}>
                                <div className="gallery__img">
                                <img src={img.image} alt={img.title} onClick={() => handleOpenModal(index)}/>
                                </div>
                                <p className="gallery__img-title">{img.title}</p>
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