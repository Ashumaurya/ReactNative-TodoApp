import React , {createContext, useState} from 'react'
import uuid from 'react-native-uuid'
export const cardContext = createContext();

const Data = (props) =>{
    const [data , setData] = useState(        
        [
            {title : 'This is title 1' , Description : 'this is description 1' , id : 1},
            {title : 'This is title 2' , Description : 'this is description 2' , id : 2},

            
        ]        
    ) 
    
    const addTodo = (title , description) =>{            
            setData( [...data , {title : title, Description : description , id : uuid.v4()}] )
            return new Promise((resolve , reject) =>{
                resolve('data')
            })
            }
    
    const removeTodo = (id) => {
        setData(data.filter(data => data.id != id))

    }
    const reState = (data) =>{
        setData(data);
    }
    return (
        <cardContext.Provider value= {{data , addTodo , reState ,removeTodo }} >
        {props.children}
        </cardContext.Provider>
    )
}
export default Data;