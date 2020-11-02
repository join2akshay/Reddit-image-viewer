import React, { useState, useContext} from 'react'
import './gallery.css'
import ModalView from '../Modal/Modal'
import { DataContext } from '../../ContextAPI/ContextAPI'
import { filterDataById } from '../../utils/filterData'

export default function Gallery() {
    const [state,dispatch]=useContext(DataContext)
    const [modal, setModal] = useState(false);
    const [selectedURL,setSelectedURL]=useState('')

    const handleModal=(id,url)=>{

        let newData=filterDataById(state.data,id)
        dispatch({
            type: "SELECTED_IMG",
            payload:newData
          })
      
          setSelectedURL(url)
        setModal(true)

        

    }
    // state.filterData.map((item)=>console.log(item.data.preview.images[0]))

    const unEscapeUrl=(url,id)=>{
        const div = document.createElement('div');
        div.innerHTML = url;
        return  <div className="photo photo-1 photo-first" key={id}><img onClick={()=>handleModal(id,div.firstChild.nodeValue)}  src={div.firstChild.nodeValue} alt="via picsum.photos"/></div>
    }
    return (
        
 
        <div className="gallery">
        {
            state.filterData.map((item)=>
            {
             if(item.data.preview!==undefined){return unEscapeUrl(item.data.preview.images[0].source.url,item.data.id)}
             
}
             )
        }
        {
            modal &&  <ModalView modal={modal} url={selectedURL} setModal={setModal}/>
        }
       

       
        </div>
        
    )
}


// unEscapeUrl(item.data.preview.images[0].source.url,item.data.id)