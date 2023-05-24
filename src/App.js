

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './component/Filter';
import Card from './component/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  const [items, setItems] = useState([]);
  const [cat, setCat] = useState('flower')
  const [page, setPage] = useState(1);
  
  async function getingData() {
    toast.loading('loading');
    let url = `https://pixabay.com/api/?key=34755335-c7198e8965147bd5de2899c78&q=${cat}&image_type=photo&pretty=true&page=${page}`
    await axios.get(url)
      .then(res => {
        setItems(res.data.hits)
        console.log(res.data)
      })
    toast.dismiss()
  }
 
  useEffect(() => {
    getingData();
  }, [cat, page]);

  return (
    <div className="">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    <Navbar setSearch={setCat}></Navbar>
      <Filter setCat={setCat}></Filter>
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map(item => {
          return (<Card item={item}></Card>)
        })}

      </div>
      <Footer setPage={setPage} page={page}></Footer>




    </div>
  )
}


export default App;
