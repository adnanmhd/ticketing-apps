# Ticketing Apps REST API 

#Langkah menjalankan aplikasi ticketing:

1. Jalankan service Apache dan MySQL menggunakan XAMPP
2. Create database baru dengan cara akses http://localhost/phpMyAdmin/ dan create new database dengan nama 'ticketing_apps'.
3. Lakukan import database dengan memilih file sql di directory "ticketing-apps/database/ticketing_apps.sql"


#Akses web service

Ticketing Apps memiliki 5 endpoint yang bisa dilakukan test request menggunakan Postman. 
Semua endpoint dapat diakses hanya menggunakan POST dan send body dengan JSON sebagai value request.
Berikut endpoint yang tersedia beserta dengan request yang dikirimkan:

1. http://localhost/ticketing-apps/TicketingWebService/getTicketing/
	request:
	{
		"limit_data":"10"
	}
	
	respon:
	{
    "ticket-data": [
			{
				"id": "61442bfe16c02",
				"ticket_number": "26698",
				"subject": "Komplain",
				"message": "Penanganan Komplain Jaringan 2",
				"status": "Open",
				"priority": "Low"
			},
			{
				"id": "614435c66751a",
				"ticket_number": "21360",
				"subject": "Bug fixing",
				"message": "Penanganan issue production",
				"status": "Closed",
				"priority": "High"
			},
			{
				"id": "614435f5195ea",
				"ticket_number": "49417",
				"subject": "Komplain",
				"message": "Hallo, ticket ini sedang diproses",
				"status": "Answered",
				"priority": "High"
			}
		]
	}


2. http://localhost/ticketing-apps/TicketingWebService/addNewTicket/
	request:
	{
		"subject":"Komplain",
		"message":"Penanganan issue pelanggan",
		"priority":"High"
	}
	
	respon:
	{
    "ticket-data": [
			{
				"id": "614435f5195ea",
				"ticket_number": "49417",
				"subject": "Komplain",
				"message": "Penanganan issue pelanggan",
				"status": "Open",
				"priority": "High"
			}
		],
		"message": "ticket baru sukses ditambahkan"
	}

3. http://localhost/ticketing-apps/TicketingWebService/replyTicket/
	request:
	{
		"ticket_number":"49417",
		"message":"Hallo, ticket ini sedang diproses"
	}
	
	respon:
	{
    "ticket-data": [
			{
				"id": "614435f5195ea",
				"ticket_number": "49417",
				"subject": "Komplain",
				"message": "Hallo, ticket ini sedang diproses",
				"status": "Answered",
				"priority": "High"
			}
		],
		"message": "ticket berhasil diupdate"
	}
	
4. http://localhost/ticketing-apps/TicketingWebService/closeTicket/
	request:
	{
		"ticket_number":"21360"
	}
	
	respon:
	{
    "ticket-data": [
			{
				"id": "614435c66751a",
				"ticket_number": "21360",
				"subject": "Bug fixing",
				"message": "Penanganan issue production",
				"status": "Closed",
				"priority": "High"
			}
		],
		"message": "ticket berhasil diclose"
	}
	
5. http://localhost/ticketing-apps/TicketingWebService/deleteTicket/
	request:
	{
		"id":"61442c5c0a12b"
	}
	
	respon:
	{
		"delete-ticket": true,
		"status": "success",
		"message": "delete ticket berhasil"
	}
	
	
	
	
	