import "./Description.css"

const Description = ({ demo, details, documentation, images, marketing, name }) => {
    return (
        <section>
            <div className="desription-wrapper">
                <img src={images} alt="project preview" />
                <p className="fw-600 name">{name}</p>
                <p className="details">{details}</p>
                <div className="btn-wrapper">
                    <a href={demo} className="description-btn">Demo</a>
                    <a href={documentation} className="description-btn">Dokumentace</a>
                    <a href={marketing} className="description-btn">Marketing</a>
                </div>
            </div>
        </section>
    )
}

export default Description