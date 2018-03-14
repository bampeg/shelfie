CREATE TABLE IF NOT EXISTS shelfie(
    id SERIAL PRIMARY KEY,
    shelf TEXT,
    bin INT,
    name TEXT,
    price INT
);
INSERT INTO shelfie (shelf, bin)
VALUES 
    ('A', 1),
    ('A', 2),
    ('A', 3),
    ('A', 4),
    ('A', 5),

    ('B', 1),
    ('B', 2),
    ('B', 3),
    ('B', 4),
    ('B', 5),

    ('C', 1),
    ('C', 2),
    ('C', 3),
    ('C', 4),
    ('C', 5),

    ('D', 1),
    ('D', 2),
    ('D', 3),
    ('D', 4),
    ('D', 5);