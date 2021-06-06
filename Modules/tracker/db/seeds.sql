USE employee_tracker;

INSERT INTO department (name)
VALUES
    ('design'),
    ('development'),
    ('marketing');
    ('Management'),
    ('Customer Service'),
    ('Tech Support');

 INSERT INTO role (title, salary, department_id)
 VALUES
    ('Team Leader', 120000, 1),
    ('Lead CCP', 75000, 2),
    ('Engineer', 200000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Sunny','Jackson', 1, null),
    ('Denece', 'Martinez', 2, null),
    ('Kyle', 'Davis', 3, null);