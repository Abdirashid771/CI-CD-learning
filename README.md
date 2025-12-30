# 🐳 Node Multi-Stage App

A simple Node.js project to demonstrate multi-stage Docker builds with CI/CD and Trivy scanning.

## 🚀 Features

- Multi-stage Docker image for small footprint
- Simple HTTP server with `/` and `/count` routes
- Trivy vulnerability scanning in CI/CD
- Pushes image to AWS ECR

## ⚙️ Run Locally

```bash
docker build -t node-multi-stage-app .
docker run -p 3000:3000 node-multi-stage-app

Visit:  

- [http://localhost:3000](http://localhost:3000) → Welcome message  
- [http://localhost:3000/count](http://localhost:3000/count) → Increment counter  

## 🔐 CI/CD

- Builds Docker image on push to `main`  
- Scans with Trivy for critical vulnerabilities  
- Pushes image to AWS ECR if scan passes