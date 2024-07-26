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