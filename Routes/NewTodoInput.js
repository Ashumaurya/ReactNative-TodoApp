import { useNavigation } from '@react-navigation/native';
import React , {useContext, useState} from 'react';
import { View } from 'react-native';
import { Input , Button} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import {cardContext} from '../contextApi/cardContext';


const NewTodoInput = () =>{

    const { addTodo } = useContext(cardContext);
    const navigation = useNavigation();

   
    const [title , setTitle] = useState()
    const [description , setDescription] = useState()
    
    const handleOnSubmit = ()=>{
        
        addTodo(title,description)
        .then((data)=>{
            navigation.navigate('TodoApp');
            console.log('Added Succesfully : ' + data);
        })
        .catch((e)=>{console.log(e)});

    }
    return (
        <View>
        <Input 
        placeholder = 'Title'
        onChangeText= {(val)=>{setTitle(val)}}
        />
        <Input 
        placeholder = 'Your todo'
        multiline = {true}
        onChangeText = {(val) => {setDescription(val)}}
        />
        <Button 
            buttonStyle= {{backgroundColor : 'black'}}
            title = 'Submit'
            onPress = {handleOnSubmit}
            
            
        />
        </View>

    )

}

export default NewTodoInput ;