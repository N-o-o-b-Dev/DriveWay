# Project Presentation: DriveWay - Car Rental Management System

## 1. Project Title
**Project Name:** DriveWay
**Tagline:** Smart Management for Modern Rental Agencies

## 2. Team / Guide Details
**Team Members:**
*   [Member Name 1] - [Role, e.g., Full Stack Developer]
*   [Member Name 2] - [Role]
*   [Member Name 3] - [Role]

**Project Guide:**
*   [Guide Name]
*   [Designation/Department]

## 3. Objectives
*   **Centralized Management:** To provide a single platform for managing fleets, customers, dealers, and financial transactions.
*   **Automation:** To automate complex rental calculations, due amount tracking, and invoice generation.
*   **Operational Efficiency:** To reduce manual errors and paperwork associated with traditional "register" systems.
*   **Business Intelligence:** To offer real-time insights into revenue, fleet utilization, and expense tracking via visual dashboards.

## 4. Abstract
**DriveWay** is a comprehensive web-based application designed to digitize and streamline operations for car rental agencies. Traditional methods involves manual note-keeping which is prone to errors and lacks data security. DriveWay addresses these challenges by offering a robust dashboard that tracks vehicle availability, customer rental history, and financial performance in real-time. Key features include automated billing, maintenance tracking, and dealer management, ensuring that rental business owners have complete control over their operations from a single interface.

## 5. Existing System
*   **Manual Records:** Reliance on physical notebooks (katcha khata) for tracking rentals and payments.
*   **Spreadsheets:** Disconnected Excel sheets that lack real-time updates and relation management.
*   **Lack of Analytics:** innovative decision-making is difficult without visualized data on profits and car utilization.
*   **Human Error:** High probability of calculation mistakes in rental duration and final billing.

## 6. Proposed Work
The **DriveWay** system introduces:
*   **Interactive Dashboard:** A visual hub displaying total cars, active rentals, revenue, and maintenance alerts.
*   **Smart Fleet Management:** Detailed profiles for each vehicle including documents, maintenance history, and availability status.
*   **Dynamic Billing Engine:** Automated calculation of rental costs based on days (daily, weekly, monthly rates) with PDF invoice generation.
*   **Customer & Dealer CRM:** Dedicated modules to manage profiles, track transaction history, and manage pending dues.
*   **Financial Tracking:** Comprehensive revenue and expense logging with graphical reports.

## 7. Methodology / Work Plan (Roadmap)
The project follows an Agile development methodology:
1.  **Requirement Analysis:** Identifying the core needs of rental agencies (pricing logic, vehicle categories).
2.  **System Design:** Designing the database schema (Firebase) and UI wireframes (Figma/Sketch).
3.  **Frontend Development:**
    *   Setup React environment with Vite.
    *   Component development (Cards, Modals, Tables) using Tailwind CSS.
    *   State management implementation.
4.  **Backend Integration:**
    *   Firebase setup for Realtime Database and Authentication.
    *   API integration for data CRUD operations.
5.  **Testing:** Unit testing of calculation logic and usability testing of the interface.
6.  **Deployment:** Hosting the application on GitHub Pages/Vercel.

## 8. System Architecture
The application follows a standard Client-Server Architecture:

*   **Frontend (Client):**
    *   **React.js (Vite):** Core framework for the Single Page Application (SPA).
    *   **Context API:** For global state management (User session, Data sync).
    *   **React Router:** For client-side navigation.
*   **Backend (Serverless):**
    *   **Firebase Realtime Database:** Stores JSON-based data for Cars, Customers, Rentals, etc.
    *   **Firebase Auth:** Handles user authentication and security.
*   **External Services:**
    *   **jsPDF / React-PDF:** For generating downloadable checkout and invoice documents.

## 9. Tools / Software Used
*   **IDE:** Visual Studio Code
*   **Frontend Framework:** React.js (v18)
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS, Lucide React (Icons)
*   **Backend/Database:** Firebase (Google)
*   **Charts/Visuals:** Recharts
*   **Version Control:** Git & GitHub

## 10. Module Split Up Details
The application is divided into the following key modules:

1.  **Dashboard Module:**
    *   Key Stats (Total Cars, On Rent, Due Amount).
    *   Revenue Charts & Graphs.
    *   Upcoming Reminders (Maintenance, Returns).
2.  **Inventory (Fleet) Module:**
    *   Add/Edit Vehicle details.
    *   Filter by availability/type.
    *   Maintenance logging.
3.  **Customer Module:**
    *   Customer Registration (KYC details).
    *   Ledger/Transaction history specific to customer.
4.  **Rental/Booking Module:**
    *   New Rental creation logic.
    *   Return processing & Bill generation.
    *   PDF Export.
5.  **Financial Module:**
    *   Expense tracking (Repairs, Fuel).
    *   Profit/Loss analysis.
6.  **Authentication Module:**
    *   Secure Login/Signup for admin/staff.
