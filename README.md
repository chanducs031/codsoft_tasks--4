# ProjectFlow – Project Management Tool

A full-stack project management tool built with **React, Node.js, Express and MongoDB**.

## Features
- Create, edit and delete projects
- Set project deadlines and status
- Create, edit and delete tasks
- Assign tasks to users/team members
- Set task deadlines and priority
- Track task status: To Do / In Progress / Completed
- Filter tasks by status
- Automatic project progress percentage
- REST API with MongoDB persistence
- Responsive UI

## Project structure
```
project-management-tool/
  client/   # React + Vite frontend
  server/   # Node.js + Express + MongoDB API
```

## Run locally
### 1. Backend
```bash
cd server
npm install
copy .env.example .env   # Windows
# or: cp .env.example .env
```
Set `MONGODB_URI` in `.env`, then:
```bash
npm run dev
```

### 2. Frontend
```bash
cd client
npm install
copy .env.example .env
npm run dev
```
Open the Vite URL shown in the terminal (normally http://localhost:5173).

## MongoDB
Create a free MongoDB Atlas database, create a database user, allow the required network access, and put the connection string in `server/.env`.

## GitLab
From the project root:
```bash
git init
git add .
git commit -m "Initial project management tool"
git branch -M main
git remote add origin <YOUR_GITLAB_REPOSITORY_URL>
git push -u origin main
```

Do **not** commit `.env` files containing database credentials.

## Deployment
### Frontend
Build with:
```bash
npm run build
```
Deploy the `client` project to a static host such as Netlify or another provider. Set `VITE_API_URL` to your deployed backend API URL.

### Backend
Deploy the `server` project to a Node.js-compatible host. Configure `MONGODB_URI`, `CLIENT_URL`, and `PORT` as environment variables.

> The application code is ready for deployment, but hosting and GitLab publication require your own accounts and credentials.
