import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io"

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
        <div>
            <IoMdClose className='btnClose' onClick={handleCloseModal}  />
            <IoIosArrowBack  className='btnPrev' onClick={prevImg} />
            <IoIosArrowForward  className='btnNext' onClick={nextImg} />
            <div>
                <img src={image} alt={title} />
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Modal