import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { cardContext } from '../contextApi/cardContext';
import DraggableFlatList from "react-native-draggable-flatlist";
import Swipeable from 'react-native-gesture-handler/Swipeable';


const CardContainer = () => {
    const {data , reState ,removeTodo } = useContext(cardContext);
    const leftAction = (id)=>{
        removeTodo(id);
}

    const renderItem = ({item , drag , isActive})=>{

        return (
            <TouchableOpacity 
            style = {{
            backgroundColor : isActive ? "black" : "white"}}
            onLongPress={drag}
            >
            <Swipeable 
            renderLeftActions = {()=>{leftAction(item.id)}}
            >
             <View   key = {item.id}>
            <Card >
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider/>
            <Text>{item.Description}</Text>
            </Card>
            </View>
            </Swipeable>
            </TouchableOpacity>

            )
    }
    return (
         
        <View style = {{flex : 1,padding : 5}}>
        <DraggableFlatList
            data = {data}
            renderItem = {renderItem}
            keyExtractor={item => item.id.toString()}
            scrollPercent={5}
            onDragEnd={({ data }) => reState(data)}
        />
        </View>
    
        
    )
}
export default CardContainer ;