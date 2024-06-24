import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { query } from '../database/db.js';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let users = await query("SELECT * FROM users WHERE google_id = ?", [profile.id]);
      if (users.length === 0) {
        const newUser = {
          username: profile.displayName,
          email: profile.emails[0].value,
          google_id: profile.id,
        };
        await query("INSERT INTO users (username, email, google_id) VALUES (?, ?, ?)", [newUser.username, newUser.email, newUser.google_id]);
        users = await query("SELECT * FROM users WHERE google_id = ?", [profile.id]);
      }
      return done(null, users[0]);
    } catch (err) {
      return done(err, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const users = await query("SELECT * FROM users WHERE id = ?", [id]);
    done(null, users[0]);
  } catch (err) {
    done(err, null);
  }
});

export default passport;
