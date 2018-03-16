import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

export default class TheBin extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            disabled: 'disabled'
        }
        this.handleSave = this.handleSave.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/getBin/${this.props.match.params.shelfID}/${this.props.match.params.binID}`)
            .then(({ data }) => {
                this.setState({ name: data[0].name, price: data[0].price })
            })
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
        axios.post(`/api/addEditBin/${shelfID}/${binID}`, binDeets)
            .then(() => {
                this.setState({ disabled: "disabled" })
            })
    }

    handleDelete() {
        let { shelfID, binID } = this.props.match.params
        axios.delete(`/api/deleteBin/${shelfID}/${binID}`)
    }

    render() {
        let { shelfID, binID } = this.props.match.params
        return (
            <div>
                <Navbar binID={binID} shelfID={shelfID} />
                <img src="http://lorempixel.com/200/200/business/" alt="" />
                <p>Name</p>
                <input
                    value={this.state.name}
                    type="text"
                    disabled={this.state.disabled}
                    onChange={e => this.handleEdit(e.target.value, 'name')} />
                <p>Price</p>
                <input
                    value={this.state.price}
                    type="text"
                    disabled={this.state.disabled}
                    onChange={e => this.handleEdit(e.target.value, 'price')} />
                {this.state.disabled ?
                    <button onClick={() => this.setState({ disabled: false })}>Edit</button> :
                    <button onClick={this.handleSave}>Save</button>}
                <Link to={`/shelf/${shelfID}`}>
                    <button onClick={this.handleDelete}>Delete</button>
                </Link>
            </div>
        )
    }
}