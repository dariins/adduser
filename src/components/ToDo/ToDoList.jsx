import {useState} from 'react'
import styled from 'styled-components'

const ToDoList =(props)=>{
    const [value, setValue]=useState('')
    const [input, setInput]=useState(0)
    const valueHandler =(event)=>{
    setValue(event.target.value)
    }
    const inputHandler =(e)=>{
        setInput(e.target.value)
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        const list={
            value:value,
            input:input,
            id: Math.random().toString(),
        } 
        if(value.trim() !=='' && input.trim()!==''){
            props.onAddToDo(list)

        }
        setInput(0)
        setValue('')

        
    }
    return (
      
            
          <Container onSubmit={submitHandler}>
            <div>
            <ContaiInput type="text" value={value} onChange={valueHandler} placeholder='write...' />
            </div>
            <div>
            <ContaiInput  type="number" value={input}  onChange={inputHandler} />
            </div>
            <div>
            <ButtonContai>Add User</ButtonContai>
            </div>
          </Container>
          
         
    )       
}
export default ToDoList;

const Container = styled.form`
     display:flex;
     flex-direction:column;
     width: 190px;
     margin-top: 190px;
     margin-left: 550px;
`
const ButtonContai = styled.button`
    height: 35px;
    width: 110px;
    background-color: #96ffff;
    border: none;
    border: 3px solid aqua;
    margin-left: 35px;
    border-radius: 6px;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    margin-bottom:15px;
    box-shadow:0.5px 1.5px 3.5px 0px;
    margin-top:5px;
     
`
const ContaiInput =styled.input`
     height: 25px;
     /* margin-top: 10px; */
     margin-bottom: 10px;
    border-radius: 10px;
    border:1px solid aqua;
    box-shadow:0.5px 1.5px 3.5px 0px;
    outline: none ;
`