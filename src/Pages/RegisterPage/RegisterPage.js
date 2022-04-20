import './RegisterPage.css'
import {useForm} from 'react-hook-form'
import Input from '../../Components/Input/Input'


export default function RegisterPage(){
    const {handleSubmit,control} = useForm()
    const onSubmit = (data)=>console.log(data);
   
    
    return(
        <div className='globaldiv'>
       <form onSubmit={handleSubmit(onSubmit)}>
           <Input name='firstName' control={control} type='text' placeholder='firstName'/>
           <Input name='lastName' control={control }type='text' placeholder='lasttName'/>
           <Input name='email' control={control} type='email' placeholder='email'/>
           <Input name='password' control={control} type='password' placeholder='password'/>



        

           <input value={'Submit'} type='submit'/>
       </form>
        
        </div>
    )
}