import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

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
        console.log(this.state.bins, "this.state.bins")
        let bins = null
        if (this.state.bins[0]) {
            bins = this.state.bins.map(elem => {

                console.log(elem)
                if (elem.name || elem.price) {
                    return (
                        <Link key={elem.bin} to={`/bin/${elem.shelf}/${elem.bin}`}>
                            <div name={elem.name}
                                price={elem.price}
                                className="shelf">
                                Bin {elem.bin}
                            </div>
                        </Link>
                    )
                }
                return (
                    <Link key={elem.bin} to={`/addto/${elem.shelf}/${elem.bin}`}>
                        <div className="shelf" >+ Add Inventory</div>
                    </Link>
                )
            })
        }
        return (
            <div>
                <Navbar shelfID={this.props.match.params.shelfID} />

                {bins}
            </div>
        )
    }
}