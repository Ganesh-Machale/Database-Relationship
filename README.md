Database Relationship Management

A practical project focused on understanding and implementing Database Relationships using relational database concepts and SQL.

This project explores how multiple database tables are connected, how data integrity is maintained, and how relationships help organize information efficiently.

📌 Project Overview

Database relationships are an essential part of relational database design. They define how records in different tables are associated with each other.

This project demonstrates the fundamentals of database relationships, table connections, keys, and SQL queries used to retrieve related information.

🎯 Project Objectives

- Understand relational database management systems (RDBMS).
- Learn different types of database relationships.
- Understand Primary Keys and Foreign Keys.
- Establish relationships between database tables.
- Practice SQL queries and JOIN operations.
- Understand database structure and data integrity.
- Improve database design and management skills.

🔗 Types of Database Relationships

1. One-to-One Relationship (1:1)

One record in the first table is associated with exactly one record in the second table.

Example: A person and their passport.

2. One-to-Many Relationship (1:N)

One record in the first table can be associated with multiple records in the second table.

Example: One department can have multiple employees.

3. Many-to-Many Relationship (M:N)

Multiple records in one table can be associated with multiple records in another table.

A junction table is generally used to implement this relationship.

Example: Students can enroll in multiple courses, and each course can have multiple students.

🛠️ Technologies & Concepts Used

- SQL
- Relational Database Management System (RDBMS)
- Database Design
- Primary Keys
- Foreign Keys
- SQL JOIN Operations
- Entity Relationship Diagrams (ERD)
- Database Normalization

📚 Important Database Concepts

Concept| Description
Primary Key| Uniquely identifies each record
Foreign Key| Connects records between tables
One-to-One| One record is associated with one record
One-to-Many| One record is associated with multiple records
Many-to-Many| Multiple records are associated with multiple records
INNER JOIN| Retrieves matching records from both tables
LEFT JOIN| Retrieves all records from the left table and matching records from the right
RIGHT JOIN| Retrieves all records from the right table and matching records from the left

💻 SQL Examples

1. Create Database Tables

CREATE DATABASE CollegeDB;

USE CollegeDB;

CREATE TABLE Department (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE Employee (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES Department(department_id)
);

2. Insert Records

INSERT INTO Department
VALUES
(1, 'Computer Science'),
(2, 'Information Technology');

INSERT INTO Employee
VALUES
(101, 'Ganesh', 1),
(102, 'Rahul', 1),
(103, 'Amit', 2);

3. Retrieve Related Records Using INNER JOIN

SELECT
    Employee.employee_id,
    Employee.employee_name,
    Department.department_name
FROM Employee
INNER JOIN Department
ON Employee.department_id = Department.department_id;

Expected Output

employee_id| employee_name| department_name
101| Ganesh| Computer Science
102| Rahul| Computer Science
103| Amit| Information Technology

🚀 Getting Started

Prerequisites

Install any compatible relational database management system, such as:

- MySQL
- PostgreSQL
- SQL Server
- SQLite

A database management tool such as MySQL Workbench is also recommended.

Step 1: Clone the Repository

git clone https://github.com/Ganesh-Machale/Database-Relationship.git

Step 2: Navigate to the Project

cd Database-Relationship

Step 3: Open the SQL Files

Open the SQL scripts in your preferred database management tool.

Step 4: Execute Queries

Run the SQL commands to create tables, insert records, establish relationships, and retrieve data.

🎓 Learning Outcomes

Through this project, I explored:

- Relational database fundamentals.
- Database table relationships.
- Primary Key and Foreign Key implementation.
- SQL JOIN operations.
- Database schema design.
- Data integrity and consistency.
- Practical SQL query execution.

🔮 Future Improvements

- Add more real-world database examples.
- Create detailed Entity Relationship Diagrams.
- Implement advanced SQL queries.
- Explore database normalization.
- Practice stored procedures and triggers.
- Add complex database relationships.
- Include database indexing and optimization examples.

👨‍💻 Author

Ganesh Machale

B.Tech – Computer Science & Engineering

MIT Art, Design and Technology University, Pune

GitHub: "Ganesh-Machale" (https://github.com/Ganesh-Machale)

🔗 Repository

"Database-Relationship – GitHub" (https://github.com/Ganesh-Machale/Database-Relationship)

⭐ Support

If you find this project useful for learning database concepts and SQL, consider giving the repository a star.

Suggestions and contributions are always welcome.

---

Developed by Ganesh Machale | Learning Database Design, SQL & Relational Database Management.
