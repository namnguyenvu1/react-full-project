import { db } from "../db.js"

export const addCities = (req, res) => {
    let cities_id = req.body.cities_id;
    let cities_name = req.body.cities_name;
    let cities_rate =req.body.cities_rate;
    let errors = false;

    if (!cities_id === 0 || !cities_name === 0 || !cities_rate === 0){
        errors = true;

        // Set flash message
        req.json({'error': "Please enter correct info"});
        return;
    }

    if (!errors){
        var form_data = {
            cities_name: cities_name,
            cities_rate: cities_rate
        }

        db.query('INSERT INTO react_project.Cities SET ?', form_data, function(err, result){
            if (err) {
                res.status500
                res.json({message:err});
            } else {
                res.json({'success': 'City successfully added'});
            }
        })
    }
}

export const getAllCity = (req, res)=>{
    db.query('SELECT * FROM react_project.Cities ORDER BY cities_rate desc', function (err, rows) {

        if (err) {
            req.flash('error', err);
            res.send('product', {data: ''});
        } else {
            res.send(rows);
        }
    });
}

export const searchACity = (req, res)=>{
    let cities_id = req.body.cities_id;
    let errors = false;

    // if no error
    if (!errors) {

        var form_data = {
            cities_id: cities_id
        }

        // insert query
        // dbConn have been changed to db
        db.query('SELECT * FROM react_project.Cities where cities_id = ' + cities_id + ' ORDER BY cities_id desc', function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
}

export const updateACity = (req, res)=>{
    let cities_id = req.body.cities_id;
    let cities_rate = req.body.cities_rate;
    let errors = false;

    // if no error
    if (!errors) {

        var form_data = {
            cities_id: cities_id
        }

        // insert query
        // dbConn have been changed to db
        db.query('UPDATE react_project.Cities SET cities_rate = ' + '"' + cities_rate + '"' + ' where cities_id = ' + cities_id, function (err, rows) {

            if (err) {
                // req.flash('error', err);
                // render to views/books/index.ejs
                res.json(err);
            } else {
                // render to views/books/index.ejs
                // res.render('books',{data:rows});
                res.json(rows);
            }
        });
    }
}


// DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
export const deleteACity = (req, res)=>{
    let cities_id = req.body.cities_id;
    let errors = false;

    // if no error
    if (!errors) {

        var form_data = {
            cities_id: cities_id
        }

        // insert query
        // dbConn have been changed to db
        db.query('DELETE FROM react_project.Cities where cities_id = ' + cities_id, function (err, rows) {

            if (err) {
                // req.flash('error', err);
                // render to views/books/index.ejs
                res.json(err);
            } else {
                // render to views/books/index.ejs
                // res.render('books',{data:rows});
                res.json(rows);
            }
        });
    }
}