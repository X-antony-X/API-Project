import { useState } from "react"
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs"

function Photos({photos}) {
    if (!photos || photos.length === 0) {
        return <p className="text-center mt-40">Loading photos...</p>
    }


    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === photos.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">
                <main className="mb-2 w-3/4 xl:w-1/2 lg:w-1/2 bg-[#FFFFFF] border-t-8 border-b-1 border-r-1 border-l-1 border-[#009688] rounded-md p-3 mt-40 md:mt-30 lg:mt-30 xs:mt-70">
                    <p className="text-[grey] text-center break-words mb-10">{photos[currentIndex].author}</p>
                    <div className="max-w-[1100px] h-[450px] w-full m-auto py-13 px-4 relative group">
                        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={{backgroundImage: `url(${photos[currentIndex].download_url})`}}></div>
                        <div className="block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                            <BsChevronCompactRight size={30} onClick={prevSlide}/>
                        </div>
                        <div className="block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                            <BsChevronCompactLeft size={30} onClick={nextSlide}/>
                        </div>
                    </div>
                </main>
        </div>
    )
}

export default Photos

// npm install react-icons