const controller = {}

controller.list = (req, res) => { 
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM candies', (err,candies) =>{
            if (err) {
                res.json(err)
            }
            res.render('candies',{
                data: candies
            })
        })
    })
}

controller.save = (req, res) =>{
    const data = req.body
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO candies set ?', [data],(err, candies) =>{
            res.redirect('/')
        })
    })
}

controller.edit = (req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM candies WHERE id = ?',[id], (err, candies) =>{
            res.render('candies_edit',{
                data: candies[0]
            })
        })
    })
}

controller.update = (req, res) =>{
    const {id} = req.params;
    const newCandies = req.body
    req.getConnection((err, conn) =>{
        conn.query('UPDATE candies SET ? WHERE id = ?',[newCandies, id], (err,rows) =>{
            res.redirect('/')
        })
    })
}
controller.delete = (req, res) =>{
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM candies WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/')
        })
    })
}

module.exports = controller