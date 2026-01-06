# Aqua Culture Management System

This is a web-based application designed to help aquaculture farm owners and managers streamline their daily operations. It provides a centralized platform for managing workers, tracking attendance, monitoring inventory, logging expenses, and generating financial reports.

The application is built with a modern tech stack and is designed to be easily extensible, starting with placeholder data and architected to integrate with a Firebase backend.

## Features

-   **Centralized Dashboard:** An at-a-glance overview of key farm metrics with interactive charts for visualizing revenue, expenses, and cost trends.
-   **Worker Management:** A complete module to add, edit, and delete worker information, including their roles and salaries.
-   **Attendance Tracking:** Record and view daily worker attendance, with options to add new entries and remove records.
-   **Inventory Management:** Keep track of essential supplies like feed and medicine, monitor stock levels, and calculate total inventory value.
-   **Expense Logging:** Log all operational expenses, categorize them, and view a complete history of expenditures.
-   **Bill & Report Generation:** Automatically generate professional salary slips for all workers and detailed monthly expense reports. Documents can be downloaded as PDFs or printed.
-   **Secure Authentication:** A secure user registration and login system to ensure that only authorized personnel can access the farm's data.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **UI Library:** [React](https://react.dev/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Charting Library:** [Recharts](https://recharts.org/)
-   **PDF Generation:** [jsPDF](https://github.com/parallax/jsPDF) & [html2canvas](https://html2canvas.hertzen.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get the development server running locally, follow these steps:

1.  **Install Dependencies:**
    Open your terminal and run the following command to install all the necessary packages defined in `package.json`.

    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    Once the dependencies are installed, start the Next.js development server.

    ```bash
    npm run dev
    ```

The application will now be running on [http://localhost:9002](http://localhost:9002).

## Project Structure

-   `src/app/`: Contains all the application pages and routes, following the Next.js App Router structure.
    -   `src/app/(app)/`: Contains the main authenticated pages of the application (Dashboard, Workers, etc.).
    -   `src/app/(auth)/`: Contains the authentication pages (Login, Register).
    -   `src/app/page.tsx`: The public-facing landing page.
-   `src/components/`: Shared React components used across the application.
    -   `src/components/ui/`: Components from ShadCN UI.
    -   `src/components/layout/`: Components that define the main structure of the app, like the Header and Sidebar.
-   `src/lib/`: Contains library code, utility functions, and type definitions.
    -   `src/lib/placeholder-data.ts`: Static data used for prototyping the application.
-   `public/`: Static assets like images and fonts.
-   `REPORT.md`: A detailed project report covering the system's objectives, architecture, and features.
-   `ARCHITECTURE.md`: A markdown file containing the system architecture diagram.
