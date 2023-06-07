import styled from "styled-components";

const ToDoItem =(props)=>{
    return (
        
             <Container>
                {props.items.map((elem)=>(
                    <ContLi key={elem.id}>{elem.value} {elem.input}
                      <ButtonSaske className="btn" onClick={()=> props.onDelete(elem.id)}>Удалить{props.onDelete}</ButtonSaske> </ContLi>
                ))}
           
              
              
            </Container>
        
    )
}
export default ToDoItem;

const Container = styled.ul`
    margin-left: 480px;
`
const ContLi =styled.li`
   list-style:none;
   border: 2px solid black;
   height: 50px;
   width: 250px;
   margin-top:5px;
   background-color: rgb(87, 85, 85);
   color: #fff;
   padding: 3px 5px 0px 9px;
   border-radius:5px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const ButtonSaske = styled.button`
    /* margin-left: 120px; */
    height:25px;
    width:60px;
    background-color:black;
    color:#fff;
    border: none;
    border-radius:5px;
    margin-top:10px;
`