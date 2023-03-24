### Authentication and Authorization Using JWT in Node JS with Express
```
1. Write a JWT based authentication and authorization system. 
2. Write an auth middleware that authenticates the user. If the user has a valid JWT token the middleware will pass on the request to the next middleware else should through a 401 error.
3. JWT must have a finite expiry date.
4. All the routes except the login route must be protected by the Auth Token.
On the frontend all the request that are going to the server must have the auth token
5. If any api call returns a 401 error. A refresh-token mechanism must try renewal of a token. 
6. If the refresh token fails then the user must be directed to login.
You are free to choose your mechanism for login (email-pwd/phone-otp)
7. Use NodeJS for the backend and Angular/React for the frontend. Pick a DB of your own choice.
```

## Project setup
```
npm install
```
## Run Tests
```
npm start
```