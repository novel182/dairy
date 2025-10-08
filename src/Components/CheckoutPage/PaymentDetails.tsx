

const PaymentDetails : React.FC = () => {
    return (
        <div className="m-7 p-3 col-span-2 bg-[#FFFDF6] rounded-md shadow-md">
            <p className="text-2xl">Payment details</p>
            <p className="text-sm">Enter yout payment information</p>
            <div>
                <form className="text-sm flex flex-col">
                    <label className="font-semibold mt-3">Card number</label>
                    <input placeholder="1234 5678 9012 3456" className="shadow-sm p-2 rounded-sm"/>
                    <label className="font-semibold mt-3">Expiry data</label>
                    <input placeholder="MM / YY" className="shadow-sm p-2 rounded-sm"/>
                    <label className="font-semibold mt-3">CVC</label>
                    <input placeholder="123" className="shadow-sm p-2 rounded-sm"/>
                    <label className="font-semibold mt-3">Cardholder name</label>
                    <input placeholder="Falano Dhiskano" className="shadow-sm p-2 rounded-sm"/>
                </form>
            </div>
        </div>
    )
}

export default PaymentDetails