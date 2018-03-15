UPDATE shelfie
SET name = NULL, price = NULL
WHERE shelf = $1 AND bin = $2;