function Header({setReqType}) {
    return (
        <header className="flex flex-wrap md:flex-row lg:flex-row xl:flex-row justify-evenly items-center p-4 bg-[#009688] w-screen fixed top-0 left-0 gap-2 z-30">
            <button onClick={() => setReqType("posts")} className="bg-[#FFFFFF] text-[#009688] p-3 rounded-md hover:cursor-pointer hover:opacity-90 text-xs md:text-xs lg:text-lg"><i class="fa-regular fa-comments"></i> POSTS</button>
            <button onClick={() => setReqType("photos")} className="bg-[#FFFFFF] text-[#009688] p-3 rounded-md hover:cursor-pointer hover:opacity-90 text-xs md:text-xs lg:text-lg"><i class="fa-regular fa-image"></i> PHOTOS</button>
            <button onClick={() => setReqType("todos")} className="bg-[#FFFFFF] text-[#009688] p-3 rounded-md hover:cursor-pointer hover:opacity-90 text-xs md:text-xs lg:text-lg"><i class="fa-solid fa-check-double"></i> TODOS</button>
            <button onClick={() => setReqType("users")} className="bg-[#FFFFFF] text-[#009688] p-3 rounded-md hover:cursor-pointer hover:opacity-90 text-xs md:text-xs lg:text-lg"><i class="fa-regular fa-address-card"></i> USERS</button>
        </header>
    )
}

export default Header