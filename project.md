# Project: Job Application Tracker

## About me
- Computer Science student, entering third year at university
- Has built many working things, but mostly "vibe-coded" (AI-generated, working but not fully understood)
- Comfortable with the terminal / command line; installed and daily-drives Linux (Fedora)
- Has theory and CS vocabulary, but wants the muscle of building end-to-end *and* explaining every part
- Core goal: become genuinely employable in tech — able to explain every decision in the project

## The idea
A personal web app to track job applications end to end. Log each application with its company, role, date applied, status, and deadline; view them all in a list; and update them as they move through the hiring process. It lives on the real internet and saves your data permanently.

## MVP
### In
- Add a new application (fields: company name, role, date applied, status, deadline)
- See all applications in a list
- Edit an application (e.g. status "Applied" → "Interviewing")
- Delete an application
- Deployed live on the internet, with data that persists across sessions

### Parking lot (v2)
- Documents already submitted / still to submit
- Incoming interview dates
- Interview-prep resources / helpful links
- Reminders, filtering, sorting, search, charts/dashboards

## The trunk — core components
### Source control (git)
The professional save-and-undo system — records snapshots of code so nothing is ever lost and history is visible. On from day one.

### Local environment
The learner's own Fedora machine, where the app is written and first run during building — fast and private, before anything goes public.

### Frontend (the UI)
What the user sees and interacts with in the browser: the applications list, the add form, edit/delete controls. Handles displaying info and collecting input.

### Backend (the server)
The behind-the-scenes brain. Receives requests from the frontend, applies logic, and talks to the database. Users never see it, but everything depends on it. *The backend thinks.*

### Database
Where applications are stored permanently, surviving server restarts/crashes. Solves persistence, which the backend's temporary memory cannot. *The database remembers.*

### API (how the pieces talk)
The agreed messaging contract between frontend and backend ("save this application", "give me all applications") that lets two separate programs cooperate.

### Deployment / hosting
How the app gets off the laptop and onto the real internet at a visitable URL — what turns it into something real and employer-showable.
