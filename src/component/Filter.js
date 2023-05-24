
function Filter(props){

    function setCat(event){
        props.setCat(event.target.value)
    }

    return(
        <div className=" p-3 mx-auto w-fit">
        <button className='hover:bg-slate-200 rounded-3xl mx-2 text-lg font-semibold px-2' onClick={setCat} value="">All</button>
        <button className='hover:bg-slate-200 rounded-3xl mx-2 text-lg font-semibold px-2' onClick={setCat} value="bird">Birds</button>
        <button className='hover:bg-slate-200 rounded-3xl mx-2 text-lg font-semibold px-2' onClick={setCat} value="nature">Nature</button>
        <button className='hover:bg-slate-200 rounded-3xl mx-2 text-lg font-semibold px-2' onClick={setCat} value="plant">Plants</button>
        <button className='hover:bg-slate-200 rounded-3xl mx-2 text-lg font-semibold px-2' onClick={setCat} value="life">Life</button>
        <button className='hover:bg-slate-200 rounded-3xl mx-2 text-lg font-semibold px-2' onClick={setCat} value="flower">Flowers</button>
        <select className='hover:bg-slate-200 rounded-3xl mx-2 text-lg font-semibold px-2' name="Color" id="color" onChange={setCat}>
            <option className='text-lg font-semibold text-green-600' value="">Color Effect</option>
            <option className='text-lg font-semibold text-green-600' value="red">Red</option>
            <option className='text-lg font-semibold text-green-600' value="yellow">Yellow</option>
            <option className='text-lg font-semibold text-green-600' value="black">Black</option>
            <option className='text-lg font-semibold text-green-600' value="white">White</option>
        </select>
       
        </div> 
    )
}

export default Filter;