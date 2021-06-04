USE employee_tracker;

INSERT INTO Department (department_name)
VALUES
    ('Management'),
    ('Customer Service'),
    ('Tech Support');

INSERT INTO Roles (title, salary, department_id)
VALUES
    ('Team Leader', 120000, 1),
    ('Lead CCP', 75000, 2),
    ('Engineer', 200000, 3);

INSERT INTO (first_name, last_name, role_id, manager_id)
VALUES
    ('Sunny','Jackson', 1, null),
    ('Denece', 'Martinez', 2, null),
    ('Kyle', 'Davis', 3, null);