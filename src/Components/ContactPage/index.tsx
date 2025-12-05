import Header from "../Header"
import Footer from "../Footer"
import ContactCard from "./contactCard"


const ContactPage = () => {
    return (
        <div className="w-screen">
            <Header backLink="/" backText="Home"/>
            <div className="bg-[#FAF6E9] py-20">
                <div className="w-[60%] m-auto text-center mb-10">
                    <h1>Place an Order</h1>
                    <p>We are curently only taking orders through phone calls or visits</p>
                </div>
                <div className="flex justify-center items-center">
                    <ContactCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage