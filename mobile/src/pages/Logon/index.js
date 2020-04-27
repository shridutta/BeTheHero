import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, FlatList, Image, Text, TextInput, TouchableOpacity, View  } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import bgImg from '../../assets/heroes.png';
import styles from './styles';

export default function Logon() {
  const [id,setId] = useState('')
  const [pwd,setPwd] = useState('');
  const navigation = useNavigation();

  var state={
    id:"",
    password:""
  };
  
  async function handleLogin(e) {
    //e.preventDefault();
    try {
      // let loginPromise = api.post('/sessions',  { id });
      //     loginPromise.then(function(temp) {
      //       // Assume `changeClothes` also returns a Promise
      //       if(response.name !=  null) {
      //         navigation.navigate('Incidents', { incident });
      //         history.push('/logon');
      //       } else {
      //         alert('Invalid Id.')            }
      //     });
      //     await Promise.all(loginPromise);

           const response = await api.post('/sessions',  { id });
          //localStorage.setItem('ongId', id);
          //localStorage.setItem('ongName', response.data.name);
          //alert(response);
          console.log(response);
          if(response != null ){
              navigation.navigate('Incidents', { incident });
              history.push('/logon');
          }
          else 
              alert('Invalid Id, try again.')
           } catch (err) {
           alert('Login failed, please try again.')
    }
  }

  return (
      <View style={styles.container}>
        <View style={styles.logoTop}>
          <Image source={logoImg} />
        </View>
        <View style={styles.header}>
         <Text style={styles.headerTextBold}>Log In Now</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Your ID" 
            placeholderTextColor="#757575"
            onChangeText={id => setId(id)}
            //value={id}
            maxLength={10}
            //onChange={e => setId(e.target.value)}
            />
        </View>
        {/* <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="PWD" 
            placeholderTextColor="white"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
           />
        </View> */}
        
        <TouchableOpacity style={styles.loginBtn}>
          <Text 
          //onClick={handleLogin} 
          style={styles.loginText}
          onPress={handleLogin}
          >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.forgot}>Forgot PWD?</Text>
        </TouchableOpacity> */}
        <View style={styles.imageBG}>
          <Image source={bgImg} />
        </View>
      </View>
  );
}