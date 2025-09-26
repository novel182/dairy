const InfoSection : React.FC = () => {
    const header = 'Placeholder header'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    return(
        <section className="flex w-[80%] m-auto items-center my-[32px]">
            <div className="m-6 w-[60%]">
                <h2 className="text-4xl text-balance">{header}</h2>
                <p className="mt-4 text-balance text-xl">{description}</p>
            </div>
            <div className="shadow-lg rounded-lg">
                <img className="w-full h-auto rounded-lg" src="placeholder.jpg"/>
            </div>
        </section>
    )
}

export default InfoSection