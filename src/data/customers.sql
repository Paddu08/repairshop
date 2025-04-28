-- Insert dummy customers
INSERT INTO customers (fname, lname, phone, address1, address2, city, state, zip, active)
VALUES 
  ('John', 'Doe', '555-1234', '123 Elm St', '', 'Springfield', 'IL', '62704', true),
  ('Jane', 'Smith', '555-5678', '456 Oak Ave', 'Apt 2B', 'Madison', 'WI', '53703', true),
  ('Alice', 'Johnson', '555-9012', '789 Pine Rd', '', 'Denver', 'CO', '80203', true),
  ('Bob', 'Brown', '555-3456', '321 Maple Blvd', '', 'Austin', 'TX', '73301', false);
