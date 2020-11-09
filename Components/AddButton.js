import React , {useEffect} from 'react'
import { View  ,Keyboard} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



const AddButton = () =>{
    const navigation = useNavigation();

    
    return (
      <Button
      title = ''
      type = 'clear'
      onPress = {()=>{navigation.navigate('New Todo')}}
      icon = {
          <Icon 
        raised
        size = {70}
        name = "library-add"
        color = "black"
        
          />
      }
      
        
/>
        
    )
       
}
export default AddButton ;