# testingInterview
backend-practical/
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   │
│   ├── middleware/
│   │   └── userAuth.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── postModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   │
│   └── app.js
│
├── .env.example
├── server.js
├── package.json
└── README.md

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

curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{
  "first_name": "Hi",
  "last_name": "User",
  "email": "hi@gmail.com",
  "password": "1234"
}'

curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <JWT_TOKEN>"
-d '{
  "email": "hi@gmail.com",
  "password": "1234"
}'

curl -X GET http://localhost:3000/auth/profile \
-H "Authorization: Bearer <JWT_TOKEN>"


Create POst
curl -X POST http://localhost:3000/posts \
-H "Authorization: Bearer <JWT_TOKEN>" \
-H "Content-Type: application/json" \
-d '{
  "caption": "My first post"
}'

curl -X GET "http://localhost:3000/posts?page=1&limit=5"

curl -X POST http://localhost:3000/posts/<POST_ID>/like \
-H "Authorization: Bearer <JWT_TOKEN>"

curl -X GET http://localhost:3000/posts/user/<USER_ID>
