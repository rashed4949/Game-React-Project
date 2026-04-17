# 🚀 Game Hub – Dockerized React App with Cloud Deployment

A modern React-based web application for discovering games, fully containerized using Docker and deployed on cloud infrastructure with automated deployment.

---

## 🌐 Live Demo
👉 https://game-react-project-eveu.onrender.com/

---

## 📌 Overview

Game Hub is a frontend application built with React and TypeScript that integrates with external APIs to provide an interactive gaming discovery experience.

This project has been enhanced with **DevOps best practices**, including containerization and cloud deployment, to ensure scalability, consistency, and reliable delivery.

---

## ⚙️ Features

- 🎮 Browse and explore games using external APIs  
- ⚡ Fast and responsive UI with modern React stack  
- 🔄 Automated deployment on every Git push  
- 🐳 Containerized application using Docker  
- 🌍 Cloud deployment on Render  

---

## 🧱 Tech Stack

### 👨‍💻 Frontend
- React 18  
- TypeScript  
- Zustand (state management)  
- React Query  
- Chakra UI  

### ⚙️ DevOps / Cloud
- Docker  
- Nginx (for serving production build)  
- Render (cloud deployment)  
- Git & GitHub  

---

## 🐳 Docker Setup

This project uses a **multi-stage Docker build**:

1. Build React app using Node.js  
2. Serve production build using Nginx  

### 📄 Dockerfile

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
