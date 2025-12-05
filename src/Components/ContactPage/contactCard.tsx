const ContactCard = () => {
    return (
        <div>
            <div className="m-auto rounded-xl shadow-xl p-10 border border-slate-200">
                <h2 className="text-2xl font-semibold m-4">Contact Us</h2>
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
        </div>
    )
}

export default ContactCard