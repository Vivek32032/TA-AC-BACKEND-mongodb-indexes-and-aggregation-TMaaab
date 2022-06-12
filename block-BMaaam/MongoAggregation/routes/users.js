var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/active', function(req, res, next) {

  // 1.active users 
  User.aggregate([
    {
      $match: {
        isActive: true,
      }
    }
  ], (err, users) => {
    if (err) return next(err);
    console.log(users.length);     
    res.render('shortedUsers', { users });
  })
  
  // 2.Users with 'Blake' in their name

  // User.aggregate([
  //   {
  //     $match: {
  //       $text: {
  //         $search: 'blake'
  //       }
  //     }
  //   }
  // ], (err, users) => {
  //   if (err) return next(err);
  //   console.log(users);     
  //   res.render('shortedUsers', { users });
  // })

   // 3.all active males 
  //  User.aggregate([
  //   {
  //     $match: {
  //       isActive: true,
  //       gender: "male",

  //     }
  //   }
  // ], (err, users) => {
  //   if (err) return next(err);
  //   console.log(users.length);     
  //   res.render('shortedUsers', { users });
  // })

  // 6. Find all 40+ males with green eyecolor
 
  // User.aggregate([
  //   { 
  //     $match: 
  //     { 
  //       eyeColor: 'green',
  //       gender: 'male',
  //       age: {
  //         $gt: 35
  //       }
  //        }
  //     }
    
  // ], (err, users) => {
  //   if (err) return next(err);
  //   console.log(users.length);     
  //   res.render('shortedUsers', { users });
  // })

  
  // Men with blue eyes working in USA 
  
  // User.aggregate([
  //   { 
  //     $match: 
  //     { 
  //       eyeColor: 'blue',
  //       gender: 'male',
  //       'company.location.country': 'USA' 
  //        }
  //     }
    
  // ], (err, users) => {
  //   if (err) return next(err);
  //   console.log(users);     
  //   res.render('shortedUsers', { users });
  // })

});



module.exports = router;