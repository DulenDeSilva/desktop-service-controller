# Desktop Service Controller

A reusable Electron desktop app to start and stop a local **frontend** and **backend** project from a simple GUI.

This project is useful for developers or teams who want a lightweight desktop launcher for their web application instead of opening terminals manually every time.

## Features

- Start frontend from the GUI
- Stop frontend from the GUI
- Start backend from the GUI
- Stop backend from the GUI
- Live terminal logs shown inside the desktop app
- Works well for projects where frontend and backend run separately
- Can be adapted to different websites/projects by changing folder paths and commands

---

## Example Use Case

This controller is designed for projects like:

- `frontend` running with `npm start`
- `backend` running with `npm run dev`

But it can be adjusted for other command styles too.

Examples:
- frontend: `npm start`
- frontend: `npm run dev`
- backend: `npm run dev`
- backend: `npm start`

---

## Tech Stack

- Electron
- Node.js
- npm
- tree-kill

---

## Project Structure

```text
desktop-service-controller/
  main.js
  preload.js
  package.json
  renderer/
    index.html
    renderer.js
    style.css