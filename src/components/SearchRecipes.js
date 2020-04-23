import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchRecipes extends Component {
    constructor(){
        super ();

        this.state={
            ingredients: '',
            dish:''
        }
    }
    search() {
        let { ingredients, dish } = this.state;

        const url =`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
        
        fetch(url,{
            method : 'GET'
       })
       .then(response => response.json())
       .then(json => {
           this.props.setRecipes(json.results)
       });
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingredients</FormLabel>
                    {' '}
                    <FormControl 
                    type="text" 
                    placeholder="garlic, chicken"
                    onChange={event =>this.setState({ingredients: event.target.value})} />
                </FormGroup>
                {'  '}
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {'  '}
                    <FormControl 
                    type="text" 
                    placeholder="adobe" 
                    onChange={event =>this.setState({dish: event.target.value})} />
                </FormGroup>
                {'  '}
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>

        )
    }


}

export default connect (null, {setRecipes}) (SearchRecipes);