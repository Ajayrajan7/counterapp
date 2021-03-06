import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native';

const CustomButton = (props) =>{

		return(
           <Button title="Add Product" 
             onPress={() =>props.onPress()}
           />
		);
	
}

export default CustomButton;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	}
})