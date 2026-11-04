Database Relationships

A practical project demonstrating the fundamentals of Database Relationships and relational database management. This repository focuses on understanding how different database tables are connected and how relationships help organize and manage structured data efficiently.

📌 Project Overview

Database relationships are essential for designing well-structured relational databases. They define how data in one table is associated with data in another table.

This project is created to explore database relationship concepts, understand table connections, and practice relational database design.

🎯 Objectives

- Understand relational database concepts.
- Learn how multiple tables are connected.
- Implement different types of database relationships.
- Understand Primary Keys and Foreign Keys.
- Practice SQL queries for retrieving related data.
- Improve database design and normalization concepts.

🔗 Types of Database Relationships

1. One-to-One Relationship (1:1)

One record in Table A is associated with only one record in Table B, and vice versa.

Example: A person and their passport.

2. One-to-Many Relationship (1:N)

One record in Table A can be associated with multiple records in Table B, but each record in Table B belongs to only one record in Table A.

Example: One department can have multiple employees.

3. Many-to-Many Relationship (M:N)

Multiple records in Table A can be associated with multiple records in Table B.

This relationship is generally implemented using a junction table.

Example: Students can enroll in multiple courses, and each course can have multiple students.

🛠️ Technologies & Concepts

- SQL
- Relational Database Management System (RDBMS)
- Database Design
- Primary Keys
- Foreign Keys
- SQL Joins
- Entity Relationship Diagrams (ERD)
- Database Normalization

📚 Important Database Concepts

Concept| Description
Primary Key| Uniquely identifies each record in a table
Foreign Key| Connects records between related tables
One-to-One| One record relates to one record
One-to-Many| One record relates to multiple records
Many-to-Many| Multiple records relate to multiple records
INNER JOIN| Returns matching records from both tables
LEFT JOIN| Returns all records from the left table and matching records from the right
RIGHT JOIN| Returns all records from the right table and matching records from the left

💻 Example SQL Queries

Creating Tables

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

Inserting Data

INSERT INTO Department
VALUES
(1, 'Computer Science'),
(2, 'Information Technology');

INSERT INTO Employee
VALUES
(101, 'Ganesh', 1),
(102, 'Rahul', 1),
(103, 'Amit', 2);

Retrieving Related Data Using INNER JOIN

SELECT
    Employee.employee_name,
    Department.department_name
FROM Employee
INNER JOIN Department
ON Employee.department_id = Department.department_id;

Expected Output

employee_name| department_name
Ganesh| Computer Science
Rahul| Computer Science
Amit| Information Technology

🚀 How to Use This Repository

1. Clone the repository:

git clone https://github.com/Ganesh-Machale/Database-Relationship.git

2. Navigate to the project directory:

cd Database-Relationship

3. Open the SQL files using your preferred database management tool.

4. Execute the SQL scripts in your database environment.

5. Explore the database relationships and practice the queries.

🎓 Learning Outcomes

After working with this project, you can understand:

- How relational databases work.
- How to establish relationships between tables.
- How to use Primary Keys and Foreign Keys.
- How to retrieve related information using SQL JOIN operations.
- How to design structured and efficient databases.
- How database relationships support real-world applications.

👨‍💻 Author

Ganesh Machale

B.Tech – Computer Science & Engineering
MIT Art, Design and Technology University, Pune

GitHub: "Ganesh-Machale" (https://github.com/Ganesh-Machale)

🔗 Repository

"Database-Relationship" (https://github.com/Ganesh-Machale/Database-Relationship)

⭐ Support

If you find this repository useful for learning database concepts, consider giving it a star.

---

Built for learning and practicing relational database concepts and SQL.
