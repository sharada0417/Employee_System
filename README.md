# Employee

A web application for managing employee records, built with React, Tailwind CSS, Redux, Spring Boot, and MySQL. The app enables users to perform CRUD (Create, Read, Update, Delete) operations on employee data, including name, address, and contact number.

## Features

- **View All Employees:** Display a list of all employees on the homepage.
- **Add Employee:** Add a new employee with a form capturing name, address, and contact number.
- **View Employee Details:** Retrieve and view details of a specific employee by their ID.
- **Update Employee:** Edit and update an existing employee's information.
- **Delete Employee:** Remove an employee from the system.

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS
  - Redux (with RTK Query for state management and API calls)
- **Backend:**
  - Spring Boot
  - MySQL

## Installation

### Prerequisites

- Node.js and npm (or yarn)
- Java JDK
- MySQL server


## Usage

Once both the backend and frontend servers are running, open your browser and go to `http://localhost:5173` (or the port displayed in your terminal). The homepage will display a list of employees. Use the interface to add, view, update, or delete employee records.

## API Endpoints

The backend provides the following RESTful API endpoints for CRUD operations:

- **GET /api/v1/employee/getAllEmployees**: Retrieve a list of all employees.
- **POST /api/v1/employee/saveEmployee**: Add a new employee (requires `EmpName`, `EmpAddress`, `EmpNumber` in the request body).
- **GET /api/v1/employee/searchEmployee/{empID}**: Retrieve an employee by their ID.
- **PUT /api/v1/employee/UPDATEEmployee**: Update an existing employee's details (send updated data in the request body).
- **DELETE /api/v1/employee/deleteEmployee/{empID}**: Delete an employee by their ID.

The frontend uses Redux with RTK Query to interact with these endpoints seamlessly.

## Screenshots

### Homepage
![Homepage](https://github.com/user-attachments/assets/f93e81cd-b48a-4cb5-96f0-bcaadd7ebf64)
*Displays the list of all employees.*

### Add Employee
![Add Employee](https://github.com/user-attachments/assets/5fe19c2c-628a-4a85-b89d-9c4b6d66cd30)
*Form to add a new employee.*

### View Employee
![View Employee](https://github.com/user-attachments/assets/d77b6ab3-f5c4-435f-8cda-f6490d111cfa)
*Details of a specific employee.*

### Update Employee
![Update Employee](https://github.com/user-attachments/assets/bf3e5656-2dbe-4881-9951-6bb70e1417a3)
*Form to edit an employee's information.*

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License.

