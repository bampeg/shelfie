import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

export default class TheBin extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0
        }
    }
    componentDidMount(){
        axios.get(`/api/getBin/${this.props.match.params.shelfID}/${this.props.match.params.binID}`).then(({ data }) => {
            console.log(data)
            this.setState({ name: data[0].name, price: data[0].price })
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Navbar binID={this.props.match.params.binID} shelfID={this.props.match.params.shelfID} />
                
                <img src="http://lorempixel.com/200/200/business/" alt=""/>
                <div style={{color:"black"}}>Name</div>
                <input value={this.state.name} type="text" disabled="disabled" />
                <div style={{color:"black"}}>Price</div>
                <input value={"$ " + this.state.price} type="text" disabled="disabled" />

            </div>
        )
    }
}