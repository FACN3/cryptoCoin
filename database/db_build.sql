BEGIN ;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY ,
user_name VARCHAR(100) NOT NULL UNIQUE ,
password VARCHAR(100) NOT NULL ,
email TEXT NOT NULL UNIQUE,
country TEXT NOT NULL,
city TEXT NOT NULL,
added_date DATE DEFAULT now()
);

CREATE TABLE posts(
  post_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL ,
  prefferedPayment VARCHAR(100) NOT NULL,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  coin TEXT NOT NULL,
  qty INTEGER NOT NULL,
  price INTEGER NOT NULL,
  buyerSeller TEXT NOT NULL,
  added_date DATE DEFAULT now()
);

INSERT INTO users(user_name , password ,email, country,city) VALUES
('hawk Kayleb' , '123' , 'user@gmail.com' , 'Israel' ,'Haifa' );

INSERT INTO posts(user_id, prefferedPayment, country, city, coin, qty, price, buyerSeller)
 VALUES (1, 'Bank Transfer', 'Israel', 'Tel Aviv', 'Bitcoin', 1, 17000, 'Seller');

COMMIT;
