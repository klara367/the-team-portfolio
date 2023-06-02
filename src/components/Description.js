const Description = ({ demo, details, documentation, images, marketing, name }) => {
    return (
        <>
            <img src={images} alt="project preview" />
            <p>{name}</p>
            <p>{details}</p>
            <div>
                <a href={demo}>Demo</a>
                <a href={documentation}>Dokumentace</a>
                <a href={marketing}>Marketing</a>
            </div>
        </>
    )
}

export default Description