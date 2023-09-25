INSERT INTO departments (department_name)
VALUES 
('Executive Board'),
('Security'),
('Intelligence'),
('Finance'),
('Engineering'),
('Analytics'),
('Customer Relations'),
('Recruitment'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Hokage', 999999.00, 1),
('Head Security', 150000.00, 2),
('Intelligence Director', 250000.00, 3),
('Finance Head', 200000.00, 4),
('Senior Engineer', 185000.00, 5),
('Lead Analyst', 125000.00, 6),
('Customer Relations Manager', 85000.00, 7),
('Lead Recruiter', 98000.00, 8),
('Legal Manager', 125000.00, 9);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Naruto', 'Uzumaki', 1, 1),
('Sauske', 'Uchiha', 2, 2),
('Kakashi', 'Hatake', 3, 3),
('Sakura', 'Haruno', 4, 4),
('Hinata', 'Hyuga', 5, 5),
('Neji', 'Hyuga', 6, 6),
('Rock', 'Lee', 7, 7),
('Might', 'Guy', 8, 8),
('Shikamaru', 'Nara', 9, 9);
