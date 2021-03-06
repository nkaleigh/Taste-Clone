create table tastechocolates (
    id serial primary key,
    name varchar (255),
    price money,
    description text,
    front_large text,
    front_grande text,
    back_grande text
)

create table cart (
    id serial primary key,
    chocolate_id int REFERENCES tastechocolates(id),
    quantity int
)

insert into tastechocolates (name, price, description, front_large, front_grande, back_grande)
values ('TASTE ARTISAN CHOCOLATE - AMAZONAS', 10.00, 'Taste Artisan Chocolate utilizes traditional chocolate making methods and modern technologies to craft chocolate that showcases the extraordinary flavor range of the world''s best cacao.', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amazonas_a_Front_large.jpg?v=1489949892', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amazonas_a_Front_grande.jpg?v=1489949892', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amazonas_b_Back_grande.jpg?v=1489949892'), ('TASTE ARTISAN CHOCOLATE - DEL ORO', 10.00, 'Taste Artisan Chocolate utilizes traditional chocolate making methods and modern technologies to craft chocolate that showcases the extraordinary flavor range of the world''s best cacao.', 'https://cdn.shopify.com/s/files/1/0976/5364/products/LE_DelOro_Front_large.jpg?v=1491426553', 'https://cdn.shopify.com/s/files/1/0976/5364/products/LE_DelOro_Front_grande.jpg?v=1491426553', 'https://cdn.shopify.com/s/files/1/0976/5364/products/LE_Back_grande.jpg?v=1491426553'), ('TASTE ARTISAN CHOCOLATE - PALO SANTO', 10.00,'Taste Artisan Chocolate utilizes traditional chocolate making methods and modern technologies to craft chocolate that showcases the extraordinary flavor range of the world''s best cacao.', 'https://cdn.shopify.com/s/files/1/0976/5364/products/LE_PaloSanto_Front_large.jpg?v=1491426657', 'https://cdn.shopify.com/s/files/1/0976/5364/products/LE_PaloSanto_Front_grande.jpg?v=1491426657', 'https://cdn.shopify.com/s/files/1/0976/5364/products/LE_Back_d2fba446-d784-44a9-843d-f61029db4a40_grande.jpg?v=1491426657'), ('TASTE ARTISAN CHOCOLATE - PIURA', 10.00, 'Taste Artisan Chocolate utilizes traditional chocolate making methods and modern technologies to craft chocolate that showcases the extraordinary flavor range of the world''s best cacao.', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Piura_a_Front_large.jpg?v=1489950407', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Piura_a_Front_grande.jpg?v=1489950407', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Piura_b_Back_grande.jpg?v=1489950407'), ('TASTE ARTISAN CHOCOLATE - MADAGASCAR', 10.00, 'Taste Artisan Chocolate utilizes traditional chocolate making methods and modern technologies to craft chocolate that showcases the extraordinary flavor range of the world''s best cacao.', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Madagascar_Front_large.jpg?v=1500931394', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Madagascar_Front_grande.jpg?v=1500931394', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Madagascar_Rear_grande.jpg?v=1500931395'), ('TASTE ARTISAN CHOCOLATE - CHUAO', 10.00, 'Taste Artisan Chocolate utilizes traditional chocolate making methods and modern technologies to craft chocolate that showcases the extraordinary flavor range of the world''s best cacao.', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Chuao_Front_large.jpg?v=1500931366', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Chuao_Front_grande.jpg?v=1500931366', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Chuao_Rear_grande.jpg?v=1500931367');

