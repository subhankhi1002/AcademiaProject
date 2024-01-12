CREATE TABLE Department (
    dno INT PRIMARY KEY AUTO_INCREMENT,
    deptName VARCHAR(255) NOT NULL,
    capacity INT NOT NULL
);


CREATE TABLE Employee (
    empId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255),
    dno INT,
    password VARCHAR(255),
    FOREIGN KEY (dno) REFERENCES Department(dno)
);


CREATE TABLE Organization (
    orgId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255)
);


CREATE TABLE HR (
    hrId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone INT,
    orgId INT,
    FOREIGN KEY (orgId) REFERENCES Organization(orgId)
);
