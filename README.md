🐳 ECS Docker CI/CD Pipeline

A simple CI/CD workflow to build, scan, and deploy Docker images to **AWS ECR** using **GitHub Actions**, with **Trivy** for automated vulnerability scanning.

---

🚀 What It Does

- Builds Docker image from application code  
- Scans for critical vulnerabilities with Trivy  
- Pushes image to AWS ECR  
- Tags image with short Git SHA for traceability    

---

⚙️ How It Works

1. Checkout code  
2. Build Docker image  
3. Scan image with Trivy  
4. Push image to ECR  

> Only images that pass Trivy scans are deployed.