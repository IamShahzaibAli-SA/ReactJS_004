function Navbar({opt1, opt2, opt3, opt4, opt5, opt6}){
    return(
        <div className="bg-[red] flex justify-center w-full p-5">
            <nav className="flex justify-between w-[1720px]">
                <ul className="flex">
                    <li className="mx-3 text-[22px] hover:text-white"><a href="#">{opt1}</a></li>
                    <li className="mx-3 text-[22px] hover:text-white"><a href="#">{opt2}</a></li>
                    <li className="mx-3 text-[22px] hover:text-white"><a href="#">{opt3}</a></li>
                    <li className="mx-3 text-[22px] hover:text-white"><a href="#">{opt4}</a></li>
                </ul>
                <ul className="flex">
                    <li className="mx-3 text-[22px] hover:text-white"><a href="#">{opt5}</a></li>
                    <li className="mx-3 text-[22px] hover:text-white"><a href="#">{opt6}</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;