import CustomMap from "./CustomMap"

const ContactCard = () => {
    return (
        <div>
            <div className="m-auto rounded-xl shadow-xl p-10 border border-slate-200">
                <h2 className="text-2xl font-semibold m-4 text-center mb-7">Contact Us</h2>
                <div className="grid grid-cols-2 gap-5 items-center">
                    <div>
                        <p>Address</p>
                        <div>
                            <img className="inline mr-2" src="phone.png" width="20"/>
                            <p className="inline">9865345483</p>
                        </div>
                        <div>
                            <img className="inline mr-2" src="phone.png" width="20"/>
                            <p className="inline">9800000000</p>
                        </div>
                    </div>
                    <CustomMap />
                </div>
            </div>
        </div>
    )
}

export default ContactCard