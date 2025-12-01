function Users({users}) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            {users.map((user) =>
                <div key={user.id} className="mb-2 w-3/4 xl:w-1/2 lg:w-1/2 h-1/2 bg-[#FFFFFF] border-t-8 border-b-1 border-r-1 border-l-1 border-[#009688] rounded-md mt-40 md:mt-30 lg:mt-30 xs:mt-70">
                    <div className="text-[#FFFFFF] font-bold flex flex-col justify-center items-center bg-[#1A237E] relative">
                        <p className="mt-5">{user.name}</p>
                        <p className="mt-1 mb-25">{user.phone}</p>
                        <img src="user.png" alt="user photo" className="w-30 h-30 absolute top-28"/>
                    </div>
                    <div className="flex mt-15 px-3">
                        <div className="w-1/2">
                            <p className="my-2"><span className="font-bold">User Name : </span>{user.username}</p>
                            <p className="my-2"><span className="font-bold">Email : </span>{user.email}</p>
                            <p className="my-2"><span className="font-bold">Geo-lat : </span>{user.address.geo.lat}</p>
                            <p className="my-2"><span className="font-bold">Geo-lng : </span>{user.address.geo.lng}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="my-2"><span className="font-bold">Street : </span>{user.address.street}</p>
                            <p className="my-2"><span className="font-bold">Suite : </span>{user.address.suite}</p>
                            <p className="my-2"><span className="font-bold">City : </span>{user.address.city}</p>
                            <p className="my-2"><span className="font-bold">Zip code : </span>{user.address.zipcode}</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center mt-5 mb-3">
                        <p className="my-1"><span className="font-bold my-1">Web site : </span>{user.website}</p>
                        <p className="my-1"><span className="font-bold my-1">Company Name : </span>{user.company.name}</p>
                        <p className="my-1"><span className="font-bold my-1">Company CatchPhrase : </span>{user.company.catchPhrase}</p>
                        <p className="my-1"><span className="font-bold my-1">Company bs : </span>{user.company.bs}</p>
                    </div>
                </div>
        )}
        </div>
    )
}

export default Users