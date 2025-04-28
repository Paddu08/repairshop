-- Insert dummy tickets
INSERT INTO tickets (customer_id, title, description, status)
VALUES
  (1, 'iPhone screen repair', 'Cracked screen after drop. Needs replacement.', 'open'),
  (2, 'Battery issue', 'Battery drains too quickly.', 'open'),
  (2, 'Laptop keyboard replacement', 'Several keys not working properly.', 'in_progress'),
  (3, 'Water damage', 'Phone dropped in water. Doesn\'t turn on.', 'closed'),
  (4, 'Camera lens cracked', 'Rear camera lens has a crack.', 'open');
