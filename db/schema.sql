create table chocolates (
    id serial primary key,
    name varchar (255),
    price int,
    img_url_lg text,
    img_url_gr_front text,
    img_url_gr_back text
);

insert into chocolates (name, price, img_url_lg, img_url_gr_front, img_url_gr_back)
values ('AMEDEI - CHUAO', 14.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Chuao_large.jpg?v=1444518994', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Chuao_grande.jpg?v=1444518994', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Chuao2_grande.jpg?v=1444518995'), ('AMEDEI - GIANDUJA NUT BROWN', 7.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_ToscanoNutBrown_large.jpg?v=1444525522', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_ToscanoNutBrown_grande.jpg?v=1444525522', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_ToscanoNutBrown2_grande.jpg?v=1444525523'), ('AMEDEI - PISTACCHI', 7.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Pistacchi_large.jpg?v=1444676251', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Pistacchi_grande.jpg?v=1444676251', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Pistacchi2_grande.jpg?v=1444676267'),
('AMEDEI - PORCELANA', 18.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Porcelana_large.jpg?v=1444676768', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Porcelana_grande.jpg?v=1444676768', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Amedei_Porcelana2_grande.jpg?v=1444676785'), 
('CACAO SAMPAKA - GIN & TONIC', 7.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/CacaoSampake_GinTonic_large.jpg?v=1444487814', 'https://cdn.shopify.com/s/files/1/0976/5364/products/CacaoSampake_GinTonic_grande.jpg?v=1444487814', 'https://cdn.shopify.com/s/files/1/0976/5364/products/CacaoSampaka_GinTonic2_grande.jpg?v=1444487815'), ('DOMORI - BIANCOMENTA', 4.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Biancomenta_large.jpg?v=1444515944', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Biancomenta_grande.jpg?v=1444515944', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Biancomenta2_grande.jpg?v=1444515946'), (
'DOMORI - CHUAO', 5.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Chuao_large.jpg?v=1444518596', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Chuao_grande.jpg?v=1444518596', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Chuao2_grande.jpg?v=1444518597'), ('DOMORI - IL BLEND 100%', 5.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_IL100_large.jpg?v=1444527559', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_IL100_grande.jpg?v=1444527559', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_IL100-2_grande.jpg?v=1444527559'),
('DOMORI - LATTESAL', 7.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Lattesal_large.jpg?v=1444528218', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Lattesal_grande.jpg?v=1444528218', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Lattesal2_grande.jpg?v=1444528219'), ('DOMORI - PUERTOFINO', 5.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Puertofino_large.jpg?v=1444677625', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Puertofino_grande.jpg?v=1444677625', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_Puertofino2_grande.jpg?v=1444677642'), ('DOMORI - PUERTOMAR', 5.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_PuertoMar_large.jpg?v=1444678012', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_PuertoMar_grande.jpg?v=1444678012', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Domori_PuertoMar2_grande.jpg?v=1444678028'), ('FRIIS HOLM - CHUNO', 18.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Chuno_Double_large.jpg?v=1444523600', 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Chuno_Double_grande.jpg?v=1444523600', 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Chuno_Double2_grande.jpg?v=1444523602'), ('FRIIS HOLM - MEDAGLA', 21.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Medagla_large.jpg?v=1444524758', 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Medagla_grande.jpg?v=1444524758', 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Medagla2_grande.jpg?v=1444524759'), ('FRIIS HOLM - NICALISO', 18.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Nicaliso_large.jpg?v=1444524933', 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Nicaliso_grande.jpg?v=1444524933', 'https://cdn.shopify.com/s/files/1/0976/5364/products/FriisHolm_Nicaliso2_grande.jpg?v=1444524934'), ('NAÏVE - CARAMEL', 7.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Naive_Caramel_large.jpg?v=1444488459', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Naive_Caramel_grande.jpg?v=1444488459', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Naive_Caramel2_grande.jpg?v=1444488460'), ('NAÏVE - PORCINI', 7.99, 'https://cdn.shopify.com/s/files/1/0976/5364/products/Naive_Porcini_large.jpg?v=1444489318', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Naive_Porcini_grande.jpg?v=1444489318', 'https://cdn.shopify.com/s/files/1/0976/5364/products/Naive_Porcini2_grande.jpg?v=1444489323');