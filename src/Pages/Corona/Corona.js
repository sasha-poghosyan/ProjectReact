import { useEffect, useState } from 'react'
import './Corona.css'

function Data(){
    const [title,setTitle]=useState('')
    const [data,setData]=useState()
    useEffect(()=>{
        if(title.length===2){
            fetch(`https://corona-api.com/countries/${title}`)
            .then(req=>req.json())
            .then(res=>setData(res.data))
        }
    },[title])
    let confirmed = '';
    let name = '';
    let recovered = '';
    let deaths = '';
    if(data!==undefined){
        confirmed =  data.latest_data.confirmed;
        name = data.name;
        recovered = data.latest_data.recovered;
        deaths = data.latest_data.deaths;
    }
  
console.log(data);
    return(
        <div>
            <input type='text'
            className='inpCorona'
             value={title}
             onChange={((e)=>setTitle(e.target.value))}/>
             <p>Երկիր {name}</p>
             <p>Հաստատվել է {confirmed}</p>
             <p>Բուժվածներ {recovered}</p>
             <p>Մահացածներ {deaths}</p>
          
        </div>
    )

}
export default Data