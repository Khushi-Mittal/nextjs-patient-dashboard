# Next.js Patient Dashboard

A single-page web application built with Next.js (App Router), TypeScript, and custom CSS to manage and display patient records.

## Features
- **Local API Integration**: Custom Route Handler (`/api/data`) to serve 1,000 patient records.
- **Dual View System**: Toggle between a professional Table View and an adaptive Card Layout.
- **Search & Filtering**: Real-time search by patient name or email with backup data fallbacks.
- **Server-side Pagination**: Efficiently handles 1,000 objects by serving data in chunks of 12.
- **Visual Accuracy**: Styled to match Figma specifications including medical cross patterns and brand-specific badges.

## Setup Instructions
1. Clone the repository: `git clone <https://github.com/Khushi-Mittal/nextjs-patient-dashboard.git>`
2. Install dependencies: `npm install`
3. Place `data.json` in the `public/` directory.
4. Run locally: `npm run dev`
5. Build for production: `npm run build`

## Architectural Decisions
- **Client-Side Data Fetching**: Used `useEffect` with a manual debounce logic (400ms) to minimize API calls during search.
- **Hybrid CSS Approach**: Utilized a combination of Tailwind base classes and custom CSS in `globals.css` to ensure exact design fidelity where Tailwind versioning conflicts occurred.
- **Robust Fallbacks**: Implemented dynamic initials generation and dummy contact data for incomplete records in `MOCK_DATA.json`.