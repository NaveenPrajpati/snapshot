import { useState } from 'react';

import { BiSearchAlt } from "react-icons/bi";



function Navbar({ setSearch }) {
    function settext(event) {
        if (event.key == 'Enter') {
            setSearch(event.target.value)
        }
    }

    return (
        <nav className="text-slate-600 flex justify-between items-center px-10 py-1 bg-slate-100">
            <h1 className="text-black text-xl font-bold">Snapshot</h1>
            <div className="flex shadow-lg py-2 pl-2 pr-5 rounded-2xl items-center">     
              <BiSearchAlt className='text-xl' />
                <input type="text" placeholder='search here' className='rounded-xl px-2 w-[500px] outline-none font-semibold' onKeyDown={settext} />
            </div>
            <button className='bg-green-600 text-white font-bold rounded-md p-1'>Login</button>
        </nav>
    )
}
export default Navbar;