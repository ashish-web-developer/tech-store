# Tech Store – Modern E‑Commerce for Tech Products

A sleek and responsive online store for tech-related products like laptops, smartphones, accessories, and gadgets. Built with React, TypeScript, Styled‑Components, and Tailwind CSS, it offers multiple themes, a clean browsing experience, and a modern UI for seamless shopping.

## Tech Stack

**Client:** React, React Router, Styled-Components, TailwindCSS, TanStack Query, clsx, Lucide React Icons

**Build Tool:** Vite, TypeScript

**Server:** (N/A - Currently client-side only)

## Features

- **Multiple Themes** – Supports Light, Dark, and Colorful modes with smooth theme transitions.
- **Responsive Layout** – Optimized for mobile, tablet, and desktop with adaptive navigation (top menu, sidebar for dark mode).
- **Dynamic Product Categories** – Elegant grid-based category display with interactive hover effects.
- **Featured Products Section** – Showcases premium tech products with a clean, modern UI.
- **Interactive UI Elements** – Dropdown menus, mobile-friendly navigation, and animated cards for better engagement.
- **Theming with Styled-Components & TailwindCSS** – Hybrid styling approach for flexibility and rapid design changes.
- **Fast Navigation** – Built with React Router for seamless client-side routing.
- **Iconography** – Uses Lucide React icons for crisp, lightweight icons.
- **Performance Optimized** – Vite-powered development for lightning-fast builds and hot reloads.

## Lessons Learned

- **Theme Management** – Learned how to implement multiple themes (Light, Dark, Colorful) and handle smooth transitions between them using Styled-Components and React Context.
- **Responsive Design Patterns** – Gained experience in designing navigation layouts that adapt for different themes and screen sizes, including switching between a top navigation bar and a sidebar.
- **Hybrid Styling Approach** – Improved skills in combining TailwindCSS for rapid UI development with Styled-Components for theme-based customizations.
- **Interactive UI Enhancements** – Learned to integrate animations and hover effects to make components more engaging and intuitive.
- **Component Layout Variations** – Explored different component layouts based on active theme to deliver unique experiences without rewriting core functionality.
- **Dropdown & Click Outside Handling** – Implemented robust dropdown menus that open on click and close when clicking outside, improving overall usability.
- **Vite & Modern React** – Enhanced understanding of Vite’s build performance benefits and how to structure a modern React + TypeScript project effectively.

## Run Locally

### Prerequisites

- **Node.js** v22.16.0
- **pnpm** package manager

### Steps

Clone the project

```bash
git clone https://github.com/ashish-web-developer/tech-store

```

Go to the project directory

```bash
cd tech-store
```

Install dependencies

```bash
pnpm install
```

Start the development server

```bash
pnpm dev
```

The app will be available at http://localhost:5174/

## API Reference

#### Get all products

```http
  GET https://fakestoreapi.in/api/products?page=1&limit=8
```

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| `page`    | `number` | **Optional**. Page number (default: `1`)                  |
| `limit`   | `number` | **Optional**. Number of products to return (default: `8`) |

## Acknowledgements

I would like to thank:

- **React.js** and **TailwindCSS** communities for their excellent documentation and resources.
- **Styled-Components** for making it easier to manage dynamic themes and component styling.
- **Lucide Icons** for providing beautiful and customizable SVG icons.
- **TanStack Query** for simplifying server state management.
- Everyone who provided feedback and suggestions during the development process.## Authors

Ashish Prajapati

Frontend Developer | JavaScript & React.js Enthusiast

- 🛠️ 1.8+ years of experience building scalable and interactive web applications

- 🎮 Creator of Fortune Realm, a multiplayer gaming platform

- 💼 LinkedIn: [Linkedin](https://www.linkedin.com/in/ashish-classic/)

- 🐙 GitHub: [Github](https://github.com/ashish-web-developer)

- 📧 Email: ashish_classic@proton.me

## License

Copyright © 2025 Ashish Prajapati

All Rights Reserved.

This source code and all associated files are the intellectual property of Ashish Prajapati.  
The code is provided solely for personal viewing, evaluation, and educational purposes.

You may not:

- Copy, reproduce, modify, or distribute this code
- Use this code or any part of it in any software or product
- Host or deploy this project publicly or commercially
- Claim ownership or authorship of any part of this code

Use of this code for any other purpose is strictly prohibited without the express written permission of the author.

For inquiries or permission requests, contact: ashish_classic@proton.me
