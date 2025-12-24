import Header from "../Header"
import Footer from "../Footer"
import ContactCard from "./ContactCard"
import { light } from "utils/colors"

const ContactPage = () => {
    return (
        <div className="w-screen">
            <Header backLink="/" backText="Home"/>
            <div className="bg-[#FAF6E9] pt-10">
                <div className="w-[60%] m-auto text-center my-10">
                    <h1>Place an Order</h1>
                    <p>We are curently only taking orders through visits or phone calls</p>
                </div>
                <div className="flex justify-center items-center p-6 md:p-20" style={{backgroundColor: light}}>
                    <ContactCard />
                </div>
                <div/>
            </div>
            <Footer className="bg-[#FAF6E9]"/>
        </div>
    )
}

export default ContactPage