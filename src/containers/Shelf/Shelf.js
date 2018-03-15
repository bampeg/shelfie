import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

export default class Shelves extends Component {
    constructor() {
        super()
        this.state = {
            detailsView: false,
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
        let bins
        if (this.state.bins[0]) {
            bins = this.state.bins.map(elem => {
                if (elem.name || elem.price) {
                    return (
                        <Link to={`/shelf/${elem.shelf}/bin/${elem.bin}`}>
                            <div name={elem.name} price={elem.price} className="shelf" key={elem.bin}>Bin {elem.bin}</div>
                        </Link>
                    )
                }
                return (
                    <Link to={`/addto/shelf/${elem.shelf}/bin/${elem.bin}`}>
                        <div className="shelf" key={elem.bin}>+ Add Inventory</div>
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