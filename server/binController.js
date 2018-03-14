const dummyDb = [
    {
        shelf: "A",
        bins: [
            {
                bin: 1,
                name: '',
                price: 0
            },
            {
                bin: 2,
                name: '',
                price: 0
            }
        ]
    },
    {
        shelf: "B",
        bins: [
            {
                bin: 1,
                name: '',
                price: 0
            },
            {
                bin: 2,
                name: '',
                price: 0
            }
        ]
    }
]

module.exports = {
    getBins: function (req, res) {
        console.log("You've successfully hit getBins in binController.js")
        const db = req.app.get('db')
        const { shelfId } = req.params

        db.get_bins([shelfId])
            .then(bins => res.status(200).send(bins))
            .catch(() => res.status(500).send("Problem: getBins in binController.js"))
    },
    addEditBin: function (req, res) {
        console.log("You've successfully hit addEditBin in binController.js")
        const db = req.app.get('db')
        const { name, price } = req.body
        const { shelfId, binId } = req.params

        db.add_edit_bin([name, price, shelfId, binId])
            .then(() => db.get_bin())
            .then(() => res.status(200).send(bins))
            .catch(() => res.status(500).send("Problem: addEditBin in binController.js"))
    },
    getBin: function (req, res) {
        console.log("You've successfully hit getBin in binController.js")
        const db = req.app.get('db')
        const { shelfId, binId } = req.params

        db.get_bin([shelfId, binId])
            .then(bin => res.status(200).send(bin))
            .catch(() => res.status(500).send("Problem: getBin in binController.js"))
    },
    deleteBin: function (req, res) {
        console.log("You've successfully hit deleteBin in binController.js")
        const { shelfId, binId } = req.params

        req.app.get('db')
            .delete_bin([shelfId, binId])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send("Problem: deleteBin in binController.js"))
    }
}