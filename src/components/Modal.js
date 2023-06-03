import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io"
import "./Modal.css"

const Modal = ({ imgNumber, setImgNumber, image, title, images, setOpenModal }) => {

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const prevImg = () => {
        imgNumber === 0 ? setImgNumber(images.length -1) : setImgNumber(imgNumber -1)
    }

    const nextImg = () => {
        imgNumber + 1 === images.length ? setImgNumber(0) : setImgNumber(imgNumber + 1)
    }

    return (
        <div className="modal flex-center">
            <IoMdClose className='close-btn' onClick={handleCloseModal}  />
            <IoIosArrowBack  className='prev-btn' onClick={prevImg} />
            <IoIosArrowForward  className='next-btn' onClick={nextImg} />
            <div className="fullscreen-img-wrapper flex-center">
                <img src={image} alt={title} className="fullscreen-img-wrapper__img"/>
                <p className="fullscreen-img-wrapper__p">{title}</p>
            </div>
        </div>
    )
}

export default Modal