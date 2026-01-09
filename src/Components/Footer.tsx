const Footer : React.FC = () => {
    return (
        <section className="my-20 items-center">
            <div className="m-auto flex justify-between md:w-[60%] w-[80%]">
                <div className="text-left">
                    <h2 className="text-2xl lg:text-3xl mb-4 font-bold">Alpine Dairy</h2>
                    <img className="mr-3 inline" src="fbIcon.png" width="20"/>
                    <img className="inline" src="twitterIcon.png" width="20"/>
                </div>
                <div className="text-right">
                    <h2 className="text-lg font-semibold">Contact Us</h2>
                    <p>Address</p>
                    <img className="mr-2 hidden lg:inline" src="phone.png" width="20"/>
                    <p className="inline">98550-56567</p>
                </div>
            </div>
            <div className="border-t border-slate-200 text-gray-400 mt-10 pt-5 text-center w-[80%] m-auto">
                <p>
                © 2023 Alpine Dairy. All rights reserved. | Privacy Policy | Terms of Service
                </p>
            </div>
        </section>
    )
}

export default Footer