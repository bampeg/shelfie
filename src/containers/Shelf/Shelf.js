import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import './Shelf.css'

export default class Shelves extends Component {
    constructor() {
        super()
        this.state = {
            bins: []
        }
    }
    componentDidMount() {
        axios.get(`/api/getBins/${this.props.match.params.shelfID}`).then(({ data }) => {
            data.sort((a, b) => a.bin - b.bin)
            this.setState({ bins: data })
        })
    }

    render() {
        let bins = null
        if (this.state.bins.length > 0) {
            bins = this.state.bins.map(elem => {
                if (elem.name || elem.price) {
                    return (
                        <div className="Shelf_shelf">
                            <Link key={elem.bin} to={`/bin/${elem.shelf}/${elem.bin}`}>
                                <div name={elem.name}
                                    price={elem.price}
                                    className="Shelf_shelf_title">
                                    Bin {elem.bin}
                                </div>
                            </Link>
                        </div>
                    )
                }
                return (
                    <div className="Shelf_shelf_add">
                        <Link key={elem.bin} to={`/addto/${elem.shelf}/${elem.bin}`}>
                            <div className="Shelf_shelf_add_title" >+ Add Inventory</div>
                        </Link>
                    </div>
                )
            })
        }
        return (
            <div>
                <Navbar shelfID={this.props.match.params.shelfID} />
                <div className="Shelf_container">
                    {bins}
                </div>
            </div>
        )
    }
}