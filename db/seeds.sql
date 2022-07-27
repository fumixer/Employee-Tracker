INSERT INTO department (name)

VALUES
  ('Marketing' ),
  ('Sales'),
  ('Production'),
  ('Logistics'),
  ('Accounting'),
  ('Human Resources');

INSERT INTO roles (title,salary, department_id)
VALUES
  ('Marketing manager', 100000.00, 1 ),
  ('Sales lead',  120000.00, 2 ),
  ('Production member',80000.00,3),
  ('Driver', 70000.00, 4),
  ('Controller', 11000.00, 5 ),
  ('HR assistant', 9000.00, 6 );

INSERT INTO employee (first_name,last_name, roles_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, NULL ),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 3, 2),
  ('Charles', 'LeRoi', 4, 2),
  ('Katherine', 'Mansfield', 5, 3),
  ('Dora', 'Carrington', 6, 3),
  ('Edward', 'Bellamy', 3, 4),
  ('Montague', 'Summers', 4, 4),
  ('Octavia', 'Butler', 3, 5),
  ('Unica', 'Zurn', 4, 6);