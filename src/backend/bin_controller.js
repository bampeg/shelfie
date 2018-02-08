module.exports = {
    getBins: (req, res, next) => {
        const db = req.app.get('db')

        db.read_bins()
            .then( bins => res.status(200).send(bins) )
            .catch( () => res.status(500).send('Could not retrieve bins.') )
    }
}