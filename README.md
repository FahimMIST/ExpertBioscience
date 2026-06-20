# Expert Bioscience 🐠🧪

> **Premium fish medicines, probiotics, disinfectants, oxygen tablets, and diagnostic engines for high-yield, sustainable aquaculture in Bangladesh.**

Expert Bioscience is a modern full-stack web application built using **Next.js 15 (App Router)** and **Tailwind CSS**. Designed for fish farmers, aquaculture coordinators, and supply chain partners, it showcases premium bio-remediation products and offers a **free interactive digital diagnostic tool (AquaDoctor)** for pond disease management in both **English and Bengali**.

---

## 🌟 Key Features

- **🌐 Dual-Language Support (English / Bengali)**: Switch seamlessly between languages. Fully localized product catalogs, descriptions, dosages, and interfaces.
- **🩺 Interactive "AquaDoctor" Diagnostic Triage**: An intelligent form that collects critical indicators (pond size, pH levels, species, active symptoms) and generates a structured clinical report to connect farmers directly with veterinary specialists.
- **📦 Premium Product Catalog**: Beautifully organized cards displaying specialized medicines (Oxygen tablets, Disinfectants, Soil & Water Probiotics, Liver Tonics) with specific categorizations and dosage guidelines.
- **⚡ Modern Visual Polish**: Built with stunning, high-contrast layouts, custom micro-interactions powered by `motion`, and typography optimized for both Roman (`Inter`) and Bengali (`Hind Siliguri`) text.
- **📱 Desktop & Mobile Responsive**: Tailored for high usability across standard resolutions, tablets, and smartphones used directly in farming fields.

---

## ⚙️ Built With

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Animate.css](https://animate.style/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **State Management**: React Context (Language Context with persistency support)

---

## 🚀 Quick Local Development Setup

To run this project on your local machine:

### 1. Clone & Navigate
```bash
git clone <your-github-repo-url>
cd expert-bioscience
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Local Environment Configurations
Create a `.env.local` file in the root folder and add any environment configurations if needed:
```env
GEMINI_API_KEY="your-gemini-key-if-using-ai-features"
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the live app.

---

## 📈 Prerendering and Production Builds

Before deploying or pushing, you can test a full optimized production build locally:

```bash
# Build the application
npm run build

# Start the optimization preview server
npm run start
```

*Note: The Next.js config contains native ESM transpilation pathways for `motion` and `framer-motion`, guaranteeing zero SSR hydration mismatch issues and fully-optimized bundle delivery.*

---

## ⚡ Deployment to Vercel

This repository is optimized to be **100% Vercel Ready** with a single click:

1. **Push to Your GitHub**: Put this repository up on your GitHub profile.
2. **Import to Vercel**: 
   - Log into your [Vercel Dashboard](https://vercel.com).
   - Click **Add New** ➔ **Project**.
   - Import your newly created repository.
3. **Configure Settings (Defaults work perfectly)**:
   - Framework Preset: **Next.js**
   - Root Directory: `./` (or directory of your project)
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Environment Variables (Optional)**:
   - If your deployment uses server-side AI or secondary integrations, declare the keys (e.g., `GEMINI_API_KEY`) in Vercel's Environment Variables manager.
5. **Click Deploy!** Vercel will automatically provision, optimize, build, and deploy your site on a secure edge network in under 60 seconds.

---

## 📄 License & Terms

Developed professionally for **Expert Bioscience Limited Bangladesh**. All rights reserved. Registered assets, catalogs, and branding are the intellectual property of their respective creators.
