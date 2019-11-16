# xss-guestbook

This is a basic NodeJS application for testing out XSS payloads.

## Setup

`cd server && npm install`

## Starting the server

`cd server; npm start`

## Model

Guestbook: 
```TypeScript
interface GuestbookEntry {
  id: number,
  text: string,
  author: string
}
```

## Routes
```text
- GET /             -> Frontend
- GET /api          -> Get all guestbook entries
- GET /api/:id      -> Get guestbook entry by index / id
- POST /api         -> Insert guestbook entry
- DELETE /api/:id   -> Delete guestbook entry by index / id
```
