

const Comments = () => {

    return (
        <div>
            <h1 className="text-3xl mb-10">Comments:</h1>

            <div className="border-2 p-8 my-10">

                <div className="p-4 border-blue-700">
                    <form>
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <img src="" alt="" className="w-12 h-12 rounded-full bg-blue-600" />
                                    <h2>Author name</h2>
                                </div>
                                <p>Time</p>
                            </div>
                            <div className="mt-1">
                            
                                <textarea name="" id="" className=" w-full h-28 rounded-xl border"></textarea>
                            </div>
                            <div className="mt-4 mb-6 border-2">
                                <hr />
                            </div>
                            <div className="my-4 flex justify-end">
                                <button className="btn border-blue-700 text-blue-700 font-semibold px-8">Post Comment</button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>


        </div>
    );
};

export default Comments;