A RESTful API using Node.js (with Express) for a basic Book Review system. 


File Structure-
📂 book-review-api

├── 📁 config 

│   ├── db.js 

├── 📁 models

│   ├── User.js

│   ├── Book.js

│   ├── Review.js

├── 📁 routes

│   ├── authRoutes.js

│   ├── bookRoutes.js

│   ├── reviewRoutes.js

├── 📁 middleware

│   ├── authMiddleware.js

├── server.js

├── .env

├── package.json

Features
JWT-based authentication
User signup/login
Add/view books with pagination and filters (genre, author)
View detailed book info with average rating and reviews
Submit/update/delete a single review per user per book
Case-insensitive search by title or author

🛠️ Tech Stack
Node.js
Express.js
MongoDB with Mongoose
JWT for authentication
bcrypt for password hashing
