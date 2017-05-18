import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button, FormControl } from 'react-bootstrap/lib';


var MainContainer = React.createClass({
	
	getInitialState: function() {
		return {
			showModal: false
		};	
	},
	
	toggleModal: function() {
		var newState = !this.state.showModal;
		this.setState({showModal: newState});
	},
	
	render: function() {
		
		return (
			<div>
				<RecipeContainer onModalToggle={this.toggleModal} />
				<MyModal show={this.state.showModal} onHide={this.toggleModal} />
			</div>
		);
		
		
	}
});

var MyModal = React.createClass({

	render: function() {
		return (
			<Modal show={this.props.show} onHide={this.props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Enter data</h4>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
});

var RecipeContainer = React.createClass({
	
	// getInitialState: function() {
	// 	return {
	// 		'recipesDictionary': {
	// 			'Pizza': ['Oregano', 'Cheese'], 
	// 			'Chocolate': ['Cocoa', 'Sugar'] 
	// 		}
	// 	}	
	// },
	
	// addRecipe: function(recipe) {
	// 	var newRecipesDict = this.state.recipesDictionary;
		
	// 	newRecipesDict.push(recipe);
		
	// 	this.setState({'recipesDictionary': newRecipesDict});
	// },
	
	render: function() {
		
		// var recipesDict = this.state.recipesDictionary;
		
		// var recipesArray = Object.keys(recipesDict).map(function(recipe) {
			
		// 	return (
		// 		<div>
		// 			<RecipeHeader recipeName={recipe} />
		// 			<RecipeWindow onModalToggle={this.props.onModalToggle} />
		// 		</div>
		// 	);
		// });
		
		return (
			<div className="mainContainer">
				<RecipeHeader />
				<RecipeWindow onModalToggle={this.props.onModalToggle} />
			</div>
		);
	}
});

var RecipeHeader = React.createClass({
	
	handleUserClick: function() {
		$("#window").slideToggle(1000);
	},

	render: function() {
		return (
			<div className="header" onClick={this.handleUserClick}>
				<p>{this.props.recipeName}</p>
			</div>
		);
	}
});

var RecipeWindow = React.createClass({
	
	render: function() {
		return (
			<div id="window">
				<div class="window-wrapper">
					<RecipeIngredientsList
						ingredients={["Pizza", "Chocolate Cake", "Salad"]}
					/>
					
					<RecipeButton btnStyle="primary" title="Add" />
					<RecipeButton btnStyle="info" title="Edit" onModalToggle={this.props.onModalToggle}/>
					<RecipeButton btnStyle="danger" title="Delete" />
					
				</div>
			</div>
		);
	}
});

var RecipeIngredientsList = React.createClass({
	
	render: function() {
		var ingredientsList = this.props.ingredients;

		var listItems = ingredientsList.map(function(ingredient) {
			return <span><p>{ingredient}</p></span>;
		});

		return <ul>{listItems}</ul>;
	}
});

var RecipeButton = React.createClass({
	
	render: function() {
		
		if (this.props.title === 'Edit') {
			return (
				<Button bsStyle={this.props.btnStyle} onClick={this.props.onModalToggle}> {this.props.title} </Button>
			);
		} else {
			return (
				<Button bsStyle={this.props.btnStyle} > {this.props.title} </Button>
			);
		}
	},
	
	componentDidMount: function() {
		alert('Ready');
	}
});

// export default App;

module.exports = MainContainer

