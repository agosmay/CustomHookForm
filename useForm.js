import React , { useState } from 'react';
import { loginForm } from './loginForm'

export const useForm = () => {


	const [input, setInput] = useState(loginForm)
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		
		setInput({
			...input,
			[name]: value
			
		})
		console.log(e.target.value)
		
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
	
		console.log('Enviado')
			setInput({
			email:"",
			password:""
		})
		
	}
	
	return  [ handleChange, handleSubmit , input  ]



}	
	
	
	