const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require("../../models/User");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.body.id,
        email: req.body.email,
        fName: req.body.firstName
    });

});

router.post('/register', (req, res) => {
    // Check to make sure nobody has already registered with a duplicate email
<<<<<<< HEAD
   //  debugger;
   // console.log(req.body);
=======
    debugger;
>>>>>>> 958000ac6b4865332d6c38f64e0c68e6b70acc8b
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      //  console.log('invalid');
        return res.status(400).json(errors)
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

<<<<<<< HEAD

=======
>>>>>>> 958000ac6b4865332d6c38f64e0c68e6b70acc8b
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then( user => {
        if (!user) {
            return res.status(404).json({ email: 'This user does not exist'})
        }

        bcrypt.compare(password, user.password)
        .then( isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                )
            } else {
                return res.status(400).json({password: 'Incorrect Password!'});
            }
        })
    })
});

module.exports = router;
