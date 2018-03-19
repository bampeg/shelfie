import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './TheBin.css'

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

                <div className="TheBin_container">

                    <div className="TheBin_image_container">
                        <img src="http://lorempixel.com/200/200/business/" alt="" />
                    </div>

                    <div className="TheBin_details_container">
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

                        <div className="TheBin_button_container">
                            {this.state.disabled ?
                                <button className="gray_button left_button" onClick={() => this.setState({ disabled: false })}>Edit</button> :
                                <button className="green_button left_button" onClick={this.handleSave}>Save</button>}
                            <Link to={`/shelf/${shelfID}`}>
                                <button className="gray_button right_button" onClick={this.handleDelete}>Delete</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}