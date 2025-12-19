# SkillSphere.edu

SkillSphere.edu is a full-stack web application designed to provide an interactive platform for students to manage their learning experiences. The application includes features such as a student dashboard, user authentication, test assessments with feedback, result analysis, and notifications.

## Features

- **Student Dashboard**: A personalized dashboard for students to view their progress and access various features.
- **Login and Registration**: Secure user authentication allowing students to register and log in to their accounts.
- **Test Assessment**: Students can take assessments and receive immediate feedback on their performance.
- **Result Analysis**: Visual representation of test results to help students understand their strengths and areas for improvement.
- **Notifications**: A notification system to keep students informed about important updates and reminders.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript, Prisma
- **Database**: PostgreSQL (or any other supported by Prisma)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL (or any other database)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd SkillSphere.edu
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

4. Set up the database:
   - Create a `.env` file in the server directory based on the `.env.example` file.
   - Configure your database connection.

5. Run the application:
   - Start the server:
     ```
     cd server
     npm run dev
     ```
   - Start the client:
     ```
     cd client
     npm run dev
     ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.