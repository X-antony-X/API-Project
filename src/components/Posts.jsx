function posts({posts,comments}) {
    const postsWithComments = posts.map((post) => {
     const relatedComments = comments.filter((comment) => comment.postId === post.id)
    return {...post,relatedComments}
})

    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">
            {postsWithComments.map((post) => 
                <main key={post.id} className="mb-2 w-3/4 xl:w-1/2 lg:w-1/2 h-1/2 bg-[#FFFFFF] border-t-8 border-b-1 border-r-1 border-l-1 border-[#009688] rounded-md p-3 mt-40 md:mt-30 lg:mt-30 xs:mt-70">
                    <p className="text-[#555555] font-bold flex justify-center items-center mb-10 text-center break-words">{post.title}</p>
                    <p className="text-[grey] text-center break-words mb-10">{post.body}</p>
                    <div className="flex items-center justify-center gap-5 text-[#009688] font-bold mb-4">
                        <p><i class="fa-solid fa-minus"></i></p>
                        <p>Comments</p>
                        <p><i class="fa-solid fa-minus"></i></p>
                    </div>
                    {post.relatedComments.map((comment) =>
                    <div key={comment.postId}>
                        <p className="text-[#555555] font-bold flex justify-start items-center mb-1">{comment.name}</p>
                        <p className="text-[grey] flex justify-start items-center mb-3 text-[10px] ml-1">{comment.email}</p>
                        <p className="text-[grey] text-start break-words mb-10">{comment.body}</p>
                        <hr className="mb-4 w-3/4 mx-auto"/>
                    </div>
                    )}
                </main>
            )}
        </div>
    )
}

export default posts