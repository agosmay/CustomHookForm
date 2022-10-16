import React , {useState} from 'react';
import { useForm } from './useForm' 



const Probando = ()=> {

	const  [  handleChange, handleSubmit , input  ] = useForm();
	
	return (
	
		<>
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" onChange={handleChange} value={input.email} />
				<input type="password" name="password" onChange={handleChange}  value={input.password} />
				<button type="submit" >Enviar</button>
			</form>
		</>
	
	);
	
	
}

export default Probando;