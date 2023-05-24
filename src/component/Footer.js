

function Footer({setPage,page}) {



    return (
        <div className="text-slate-600 flex justify-between items-center px-10 py-1 bg-slate-100 shadow-md">
        <div className='text-md font-semibold'>
        {page>1 &&
        <button className=' shadow-xl mx-4 bg-red-200 p-1 rounded-md' onClick={()=>{setPage(page-1)}}>Previous</button>
        }Page
        <button className=' shadow-xl mx-4 bg-red-200 p-1 rounded-md' onClick={()=>{setPage(page+1)}}>Next </button>
        </div>

        <p className='text-lg font-semibold'>Page {page} </p>
        </div>
    )
}
export default Footer;