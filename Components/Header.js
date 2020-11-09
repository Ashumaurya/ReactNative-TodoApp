import React from 'react'
import {Header} from 'react-native-elements'

const Nav =()=>{
    return(
    <Header
    // leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'Todo App', style: { color: '#fff' } }}
    // rightComponent={{ icon: 'home', color: '#fff' }}
    />
    )
}
export default Nav;
