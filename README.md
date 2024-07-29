## 480Airlines - Flight Reservation Web Application

![image](https://github.com/justin-phxm/Fork-ENSF480-Final-Project/assets/113923596/bfd5dc9f-cdb9-4613-8f54-b35464f5e411)

Try it here: [480-airlines.vercel.app](https://480-airlines.vercel.app)

## Project Overview

Welcome to 480 Airlines, a Flight Reservation Web Application. This web application is designed for use by different type of users, tourism agents, airline agents, and system admins.

---
## Features

- Browse available flights
- Book flights online
- Manage bookings
- User authentication and authorization

---

## Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/) - A React framework for server-side rendering and generating static websites.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.

- **Backend:**
  - [PostgreSQL](https://www.postgresql.org/) - A powerful, open-source object-relational database system.
  - [Supabase](https://supabase.io/) - An open-source Firebase alternative that offers a seamless integration with PostgreSQL.
  - [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js applications.
  - [Prisma](https://www.prisma.io/) - A next-generation ORM that simplifies database access.

---

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/480Airlines.git
    cd 480Airlines
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root of your project and add the necessary environment variables:

    ```env
    DATABASE_URL=your-database-url
    NEXTAUTH_URL=your-nextauth-url
    SUPABASE_URL=your-supabase-url
    SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- To browse available flights, navigate to the flights section.
- To book a flight, select your desired flight and follow the booking process.
- To manage your bookings, log in to your account and navigate to the bookings section.

## Contributing

Contributions are always welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## Contact

- **Author:** Justin Pham
- **Project Link:** [480Airlines Repository](https://github.com/justin-phxm/480-airlines)

