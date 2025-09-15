const NewsLetter = () => {
    const inputBox = <input 
        id="email"
        autoComplete="off"
        className="bg-white border border-white focus:border-[0] focus:outline-0 p-3 rounded-lg m-4 min-w-[400px] h-[35px] text-gray-600"
        type="text"
        value="Enter your email address"/>
    const submitButton = <button className="h-[37px] text-white flex items-center"> Subscribe</button>

    return (
        <section className="flex flex-col items-center text-center mt-12 pb-5 bg-gray-200">
            <h1 className="mt-10 mb-1">Keep in Touch</h1>
            <p>Get the latest news about our products</p>
            <div className="flex items-center my-4">
                {inputBox}
                {submitButton}
            </div>
        </section>
    )
}

export default NewsLetter