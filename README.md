

Tech Stack

Node.js

Express.js

MongoDB

Mongoose ODM

JWT Authentication

bcryptjs

dotenv

Postman

npm install

.env
PORT=3000
MONGO_URI=mongodb://localhost:27017/backend_exam
JWT_SECRET=your_jwt_secret

npm start

<<<<<<< HEAD
curl -X POST http://localhost:3000/auth/register \
=======
curl -X POST (http://localhost:3000/v1/user/create-user)\
>>>>>>> b20caaf2150cfcffdda1f8a09719e896f3eb74b2
-H "Content-Type: application/json" \
-d '{
  "first_name": "Hi",
  "last_name": "User",
  "email": "hi@gmail.com",
  "password": "1234"
}'

<<<<<<< HEAD
curl -X POST http://localhost:3000/auth/login \
=======
curl -X POST http://localhost:3000/v1/user/login \
>>>>>>> b20caaf2150cfcffdda1f8a09719e896f3eb74b2
-H "Content-Type: application/json" \
-H "Authorization: Bearer <JWT_TOKEN>"
-d '{
  "email": "hi@gmail.com",
  "password": "1234"
}'

<<<<<<< HEAD
curl -X GET http://localhost:3000/auth/profile \
-H "Authorization: Bearer <JWT_TOKEN>"


Create POst
curl -X POST http://localhost:3000/posts \
=======
curl -X GET (http://localhost:3000/v1/user/profile) \
-H "Authorization: Bearer <JWT_TOKEN>"


Create POST
curl -X POST http://localhost:3000/v1/user/create-post \
>>>>>>> b20caaf2150cfcffdda1f8a09719e896f3eb74b2
-H "Authorization: Bearer <JWT_TOKEN>" \
-H "Content-Type: application/json" \
-d '{
  "caption": "My first post"
}'

<<<<<<< HEAD
curl -X GET "http://localhost:3000/posts?page=1&limit=5"

curl -X POST http://localhost:3000/posts/<POST_ID>/like \
-H "Authorization: Bearer <JWT_TOKEN>"

curl -X GET http://localhost:3000/posts/user/<USER_ID>
=======
curl -X GET "http://localhost:3000/v1/user/fetch-posts"

curl -X GET [http://localhost:3000/posts/<POST_ID>](http://localhost:3000/v1/user/user-posts/6945371445247c369e603a26)/like \
-H "Authorization: Bearer <JWT_TOKEN>"

curl -X POST (http://localhost:3000/v1/user/like-post/69453c52e032373b1a498cbc)

>>>>>>> b20caaf2150cfcffdda1f8a09719e896f3eb74b2
