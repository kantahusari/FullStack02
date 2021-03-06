const express = require(`express`)
const router = express.Router();
const Restaurant = require(`../models/Restaurant`)
/*
router.get('/', (req, res) => {
    res.send(`we are in restaurants`)
})
//save entries

router.post(`/`,
    (req, res) => {
        //console.log(req.body)
        const restaurant = new Restaurant(
            {
                "address": {
                    "building": req.body.address.building,
                    "street": req.body.address.street,
                    "zipcode": req.body.address.zipcode
                },
                "city": req.body.city,
                "cuisine": req.body.cuisine,
                "name": req.body.name
            }
        );
        restaurant.save()
            .then(
                data => {
                    res.json(data)
                })
            .catch(error => {
                res.json({ message: error })
            })
    })
*/


//Save Post
router.post(`/`,
    async (req, res) => {
        const restaurant = new Restaurant(
            {
                "address": {
                    "building": req.body.address.building,
                    "street": req.body.address.street,
                    "zipcode": req.body.address.zipcode
                },
                "city": req.body.city,
                "cuisine": req.body.cuisine,
                "name": req.body.name
            }
        )
        try {
            const saveRestaurant = await restaurant.save()
            res.json(saveRestaurant)
        } catch (err) {
            res.json({ message: err })
        }
    }

)

//04 return all restaurants
router.get('/',
    async (req, res) => {
        try {
            const restaurants = await Restaurant.find()
            res.json(restaurants)
        } catch (error) {
            res.json({ message: error })
        }

    })
    //.where('lastname').equals('patel')
//05 /cuisine/Japanese , /cuisine/Bakery , /cuisine/Italian
router.get('/cuisine/Japanese',
    async (req, res) => {
        try {
            const restaurants = await Restaurant.find().where('cuisine').equals('Japanese')
            res.json(restaurants)
        } catch (error) {
            res.json({ message: error })
        }

    })
router.get('/cuisine/Bakery',
    async (req, res) => {
        try {
            const restaurants = await Restaurant.find().where('cuisine').equals('Bakery')
            res.json(restaurants)
        } catch (error) {
            res.json({ message: error })
        }

    })
router.get('/cuisine/Italian',
    async (req, res) => {
        try {
            const restaurants = await Restaurant.find().where('cuisine').equals('Italian')
            res.json(restaurants)
        } catch (error) {
            res.json({ message: error })
        }

    })
//06
//ASC
router.get('/',
    async (req, res) => {
        try {
            const restaurants = await Restaurant.find()
            .select("_id city name")
            .sort({'_id' : 'asc'});  
            res.json(restaurants)
        } catch (error) {
            res.json({ message: error })
        }
    })
//Desc
router.get('/',
    async (req, res) => {
        try {
            const restaurants = await Restaurant.find()
            .select("_id city name")
            .sort({'_id' : 'desc'});  
            res.json(restaurants)
        } catch (error) {
            res.json({ message: error })
        }
    })
//7
router.get('/Delicatessen',
    async (req, res) => {
        try {
            const restaurants = await Restaurant.find()
            .select("cuisine city name")
            .where('cuisine').equals('Delicatessen')
            .where('city').ne('Brooklyn')
            .sort({'name' : 'asc'});  
            res.json(restaurants)
        } catch (error) {
            res.json({ message: error })
        }
    })


//-------------------------------------    
module.exports = router;


/*
requirements:

01
return all restaurants
http://localhost:8080/restaurants


02
return all restaurant details by cuisine:
http://localhost:8080/restaurants/cuisine/Japanese
http://localhost:8080/restaurants/cuisine/Bakery
http://localhost:8080/restaurants/cuisine/Italian


03
A_ return id name city restaurant_id
B_ sort by restaurant_id Asc or Desc passed on parameter

http://localhost:8080/restaurants?sortBy=ASC
http://localhost:8080/restaurants?sortBy=DESC


04
return all restaurants where cuisine= Delicatessen city !=Brooklyn

must include cuisine, name, city NOT id in Ascending order by name

http://localhost:8080/restaurants/Delicatessen

*/