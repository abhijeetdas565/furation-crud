# furation-crud


### GET ALL item
GET http://localhost:4000/api/item HTTP/1.1

### GET SINGLE item
GET http://localhost:4000/api/item/60e0102521438724ac4638f4 HTTP/1.1

### ADD ITEM
POST http://localhost:4000/api/item HTTP/1.1
Content-Type: application/json

{
  "title": "GOOGLE PIXEL 4A (JUST BLACK, 6GB RAM, 128GB STORAGE)",
  "price": "RS. 15,000",
  "image": "https://vlebazaar.in/image/cache/catalog//B08CFSZLQ4/Google-Pixel-4a-Just-Black-6GB-RAM-128GB-Storage-B08CFSZLQ4-1000x1000.jpg",
  "details": "JUST BLACK, 6GB RAM, 128GB STORAGE"
}

### DELETE ITEM
DELETE http://localhost:4000/api/item/60e00f8e21438724ac4638ef HTTP/1.1

### UPDATE ITEM
PUT http://localhost:4000/api/item/60e00f8e21438724ac4638ef HTTP/1.1
Content-Type: application/json

{
  "title": "Updated item title"
}