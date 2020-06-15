var admin = require("firebase-admin");

var serviceAccount = require("gelp-7012a-firebase-adminsdk-33ug4-a4ab6e2dd8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gelp-7012a.firebaseio.com"
});
admin.auth().getUserByEmail("edar.team@gmail.com")
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON().uid);
    admin.auth().updateUser(userRecord.toJSON().uid, {
  
  premium:true,
  
  
  photoURL: 'http://www.example.com/12345678/photo.png',
  disabled: true
})
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully updated user', userRecord.toJSON());
  })
  .catch(function(error) {
    console.log('Error updating user:', error);
  });
  })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
  });