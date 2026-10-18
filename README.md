# Dheeraj Khakre — Software Engineer Portfolio & System Architecture

A high-precision, production-grade developer portfolio and interactive architectural showcase for **Dheeraj Khakre** (Java Backend Developer & Full Stack Engineer).

---

## 🚀 Live Demo & Profiles

- **LinkedIn Profile**: [linkedin.com/in/dheeraj-khakre-9a1644262](https://www.linkedin.com/in/dheeraj-khakre-9a1644262/)
- **GitHub Account**: [github.com/Dheeraj-Khakre](https://github.com/Dheeraj-Khakre)
- **Email Inquiries**: [khakredheeraj@gmail.com](mailto:khakredheeraj@gmail.com)
- **Contact / Mobile**: `+91 7247063766`
- **Location**: Bangalore, India (Greater Bengaluru Area) — *Open to Remote & Relocation*

---

## 🌟 Key Application Features

1. **High-Precision Dark Mode Aesthetic ("Kinetic Obsidian")**
   - Engineered to the exact design system with Geist & JetBrains Mono typography.
   - Ambient luminescent glows, razor-thin borders, and responsive grid layouts.

2. **Featured GitHub Projects Showcase**
   - **Automated Receipt Processing & Extraction Pipeline** (`Automate-Accounts-Developer-Hiring-Assessment`): OCR, Tesseract, PDF parsing, REST APIs.
   - **Microservices Authentication & User Management Service** (`E-commerce-MicroServices-fork`): Spring Boot 3, Spring Security, JWT, OAuth 2.0, Eureka, Kafka.
   - **Real-Time File Integrity & Malware Detection Engine** (`Box-Guard-file-monitor-project-fork`): Java NIO WatchService, SHA-256 hashing, MalwareBazaar threat intelligence.
   - **Real-Time Asset & Portfolio Management System** (`Financial-portfolio-tracker-8Byte`): BigDecimal financial precision arithmetic, Spring WebFlux, MySQL, Angular dashboard.

3. **Prominent LinkedIn Profile & Network Section**
   - Direct connection CTA opening in a new tab (`target="_blank" rel="noopener noreferrer"`).
   - One-click copy for profile URL.
   - Verified credential markers and connection metrics.

4. **1-Click Downloadable PDF Resume Generation**
   - Client-side dynamic vector/text PDF generation (`Dheeraj_Khakre_Resume.pdf`) built with `jsPDF`.
   - Complete with professional summary, categorized technical skills, verified work history at ITC Infotech and Qualfon, and academic credentials.
   - Built-in full-screen modal preview and print dialog support.

5. **Validated Direct Contact Form**
   - Form fields: Name, Email, Subject, and Message.
   - Client-side validation ensuring valid email formatting and minimum length.
   - Direct dispatch fallback to default mail client with pre-filled message body.

6. **Frontend Architecture & Angular Standards Showcase**
   - Interactive code explorer displaying standalone components, reactive forms, dependency-injected services, and Signals/RxJS state management.

---

## 🛠 Tech Stack

- **Frontend Runtime**: React 19 + TypeScript 5
- **Styling**: Tailwind CSS v4 + Material Symbols Outlined
- **PDF Generation**: jsPDF
- **Test Runner**: Vitest (Automated Unit Testing)
- **Automation / CI/CD**: GitHub Actions (`.github/workflows/deploy.yml` & `ci.yml`)

---

## 🧪 Automated Unit Testing

Run the automated test suite locally:

```bash
npm run test
```

The test suite validates:
- Complete personal and contact info integrity.
- Verification of all 4 GitHub project repositories and schemas.
- Skills taxonomy across Backend, Database, DevOps, and AI.
- Professional experience timeline (ITC Infotech & Qualfon).
- Resume PDF generator service execution.

---

## 🔄 CI/CD Automated Pipelines

The codebase includes two production-ready GitHub Actions workflows:

1. **Continuous Integration (`.github/workflows/ci.yml`)**:
   - Triggers on push and pull requests to `main`, `master`, and `develop`.
   - Runs across Node.js matrix versions (18.x, 20.x, 22.x).
   - Validates TypeScript types (`npm run lint`), runs automated unit tests (`npm run test`), and verifies production compilation (`npm run build`).

2. **Automated Deployment (`.github/workflows/deploy.yml`)**:
   - Automatically builds, tests, packages, and deploys the production bundle upon merge to `main`.
