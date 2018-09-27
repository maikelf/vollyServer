# vollyServer

This project is REST API form project VollyCLient (https://github.com/maikelf/vollyClient).

## Requirements

1- Nodejs 10.x  
2- mysql 5.x

## Install

1- Clone this project: `git clone https://github.com/maikelf/vollyServer`  
2- Move to vollyServer directory: `cd vollyServer`    
3- `npm install`    

## Run

1- Create database in mysql server: Use `db/volly.sql`  
2- `npm start` to run in port 3000 (api is available in http://localhost:300/) or `npm start -- --PORT=<port>` to run in other port. This involves changing the `proxy.config.json` in the project vollyClient 
