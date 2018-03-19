import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './AddToBin.css'

export default class AddToBin extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
        }
        this.handleSave = this.handleSave.bind(this)
    }

    handleEdit(value, key) {
        this.setState({ [key]: value })
    }

    handleSave() {
        let { shelfID, binID } = this.props.match.params
        let binDeets = {
            name: this.state.name,
            price: this.state.price
        }
        if (binDeets.name !== '' || binDeets.price !== 0) {
            axios.post(`/api/addEditBin/${shelfID}/${binID}`, binDeets)
        }
    }

    render() {
        let { shelfID, binID } = this.props.match.params
        return (
            <div>
                <Navbar binID={binID} shelfID={shelfID} add="add" />
                <div className="AddToBin_container">
                    <div className="AddToBin_details_container">
                        <p>Name</p>
                        <input
                            value={this.state.name}
                            type="text"
                            onChange={e => this.handleEdit(e.target.value, 'name')} />
                        <p>Price</p>
                        <input
                            value={this.state.price}
                            type="text"
                            onChange={e => this.handleEdit(e.target.value, 'price')} />
                    </div>
                    <div>
                        <Link to={`/shelf/${shelfID}`}>
                            <button className="AddToBin_green_button" onClick={this.handleSave}>+ Add to Inventory</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}