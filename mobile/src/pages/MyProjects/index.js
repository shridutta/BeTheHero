import { CardStack, Card } from 'react-cardstack';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, FlatList, Image, Text, TextInput, TouchableOpacity, View, Alert  } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import bgImg from '../../assets/heroes.png';
import styles from './styles';

export default function MyProjects() {
 // example of the function being bound
    // handleCardClick(isCardSelected) {
    //     console.log(isCardSelected);
    // }

return (
            <CardStack
                height={500}
                width={400}
                background='#f8f8f8'
                hoverOffset={25}>

                <Card background='#4D70AB'>
                    <h1>Number 1</h1>
                </Card>

                <Card background='#27AE60'>
                    {/* cardClicked={this.handleCardClick.bind(this)}> */}
                    <h1>Number 2</h1>
                </Card>
                <Card background='#2980B9'>
                    {/* cardClicked={this.handleCardClick.bind(this)}> */}
                    <h1>Number 3</h1>
                </Card>
                <Card background='#27AE60'>
                    {/* cardClicked={this.handleCardClick.bind(this)}> */}
                    <h1>Number 4</h1>
                </Card>
            </CardStack>
            );


   
}