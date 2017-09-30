console.log('testtttttttttttttttttttttttttttt');

var userVal = form.submission.data.username;
var passVal = form.submission.data.password;

console.log('username= '+form.submission.data.username);
console.log('password = '+form.submission.data.password);

//----------------- debug zone --------------

/*var webAuth = new auth0.WebAuth({
		domain: 'together.at',
        clientID: '0a07a77d-ee2e-477e-93ca-fd7f59421237',
		clientSecret: 'Km3aaZ+MavtvfXagfIHQ6bzFWfkXCXZgM8SGJ6VptyI=',
        redirectUri: 'www.google.com',
		responseType: 'code'
});*/

//Initialize
// ----------------   Working   Zone  ---------------------------
var webAuth = new auth0.WebAuth({
  domain: 'kittipong-tst-webapp.azurewebsites.net',
  clientID: '0a07a77d-ee2e-477e-93ca-fd7f59421237',
  
  redirectUri: 'www.google.com',
  responseType: 'redirectUri'
});


/*auth0.parseHash(window.location.hash, function (err, result) {
        parent.postMessage(err || result, 'https://example.com/');
});*/


//----------------------------------------------------------------
//API
/*auth0.authorize({
  audience: 'https://mystore.com/api/v2',
  scope: 'read:order write:order',
  responseType: 'token',
  redirectUri: 'https://example.com/auth/callback'
});*/

//Authentication response
/*auth0.parseHash({ hash: window.location.hash }, function(err, authResult) {
  if (err) {
    return console.log(err);
  }*/
  
//For user information
/*auth0.client.userInfo(authResult.accessToken, function(err, user) {
    // Now you have the user's information
  });*/

var databaseConnection = 'Username-Password-Authentication';

var username = form.submission.data.username;
var password = form.submission.data.password;

webAuth.client.login({
  realm: 'Username-Password-Authentication', //connection name or HRD domain
  username: username,
  password: password,
  audience: 'https://mystore.com/api/v2',
  scope: 'read:order write:order',
  }, function(err, authResult) {
    // Auth tokens in the result or an error
});