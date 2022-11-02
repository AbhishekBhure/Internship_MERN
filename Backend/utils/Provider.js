// const Strategy = require("passport-google-oauth20");
// const passport = require("passport");
// const User = require("../models/userModel");

// exports.connectPassport = () => {
//   passport.use(
//     new Strategy(
//       {
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: process.env.GOOGLE_CALLBACK_URL,
//       },
//       async function (accessToken, refreshToken, profile, done) {
//         //Database comes here

//         const user = await User.findOne({
//           googleId: profile.id,
//         });

//         if (!user) {
//           const newUser = await User.create({
//             googleId: profile.id,
//             name: profile.displayName,
//           });
//           return done(null, newUser);
//         } else {
//           return done(null, user);
//         }
//       }
//     )
//   );

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
//   passport.deserializeUser(async (id, done) => {
//     const user = await User.findById(id);
//     done(null, user);
//   });
// };
