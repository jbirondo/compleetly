const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require("../../models/User");
const Follow = require("../../models/Follow");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.body.id,
        email: req.body.email,
    });

});

router.post('/:userId/follow', (req, res) => {
    const userId = req.body.currentUserId
    User.findOne({_id: userId})
        .then(user => {
           const newFollow = new Follow({
               followName: req.body.followName,
               followURL: req.body.followURL,
               follower: req.params.userId
           })
           
           newFollow.save()
            .then(async follow => {
                // debugger;
                user.followedSources.push(follow);
                await user.save();
                res.json(follow);
            })
            .catch(err => console.log(err)); 
        })
})

router.post('/register', (req, res) => {
    // Check to make sure nobody has already registered with a duplicate email
    // debugger;
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
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
                        // debugger;
                        // if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(user => {
                            // debugger;
                            const payload = {
                                id: user.id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                followedSources: user.followedSources
                            }
                            jwt.sign(
                                payload,
                                keys.secretOrKey,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    // debugger;
                                    res.json({
                                        success: true,
                                        token: 'Bearer ' + token
                                    });
                                }
                            )
                        })
                        .catch(err => console.log(err));
                    })
                })
            }
        })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
    // console.log(email); 
    // console.log(password);
    // debugger;
    User.findOne({email})
    .then( user => {
        // debugger;
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
                    email: user.email,
                    followedSources: user.followedSources
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
