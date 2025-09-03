const Footer = () => {
    return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-900">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    {/* <img alt="" class="h-11" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiLogoSquareShape.svg" /> */}
                    <h1 className="text-5xl font-semibold cursor-pointer font-primary text-gray-900">Travellers</h1>
                    <p className="mt-6 text-sm font-primary">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        {/* <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" /> */}
                        {/* <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" /> */}
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5 font-primary">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="/" className="font-primary">Home</a></li>
                            <li><a href="/about" className="font-primary">About us</a></li>
                            <li><a href="/contact" className="font-primary">Contact us</a></li>
                            <li><a href="#" className="font-primary">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 font-primary">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p className="font-primary">0331233322</p>
                            <p className="font-primary">contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5 font-primary">
                Copyright {new Date().getFullYear()} © <a >Travellers</a>. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer