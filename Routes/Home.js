import React, { useState } from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardContainer from '../Components/CardContainer';
import Footer from '../Components/Footer';
import Data, { cardContext } from '../contextApi/cardContext';
import { styles } from '../Style';



const Home = () =>{
    
    return (
        <View  style = {styles.container}>
            <ScrollView>
                <View>   
                    
                            
                         
                        <CardContainer/>
                          
                        <Footer />
                        
                        
                 </View>
            </ScrollView>
        </View>

    )
}

export default Home ;