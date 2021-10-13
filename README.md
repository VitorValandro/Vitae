<h1 align="center">
  <img width="100px" src="https://user-images.githubusercontent.com/50156875/136950346-ccc11023-f8be-4f21-9d52-4dbf997d990c.png" />
  <br />
</h1>

A web platform for resumes and curriculums inspired by [Plataforma Lattes](https://lattes.cnpq.br). Login in the platform, register your profile with your data and share your
informaton with other professionals.

![all-devices-black](https://user-images.githubusercontent.com/50156875/136950083-c89afb36-645c-40f3-94ff-92c62f87a17a.png)

## About the project
This is a web app with one frontend (web) and a backend writed using python. The backend is a RESTFul API and was made to be consumed by multiple clients.

The purpose of the app was to make a functional clone of Curriculum Lattes, with all its features and a prettier and simpler interface. Currently, Vitae supports 50% of Lattes's
profile information, but server code architecture built on [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) principles allows 
to add new profile information in a scalable and simple way.

### Features
- User authentication (JWT);
- Profile photo (file upload);
- Resume information:
  - Personal and contact information;
  - Academic and complementary education;
  - Professional experience;
  - Projects participation;
  - Productions published;
  
### This project improved my knowledge of:
- [CORS](https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing#:~:text=Cross-Origin%20Resource%20Sharing%20ou,o%20recurso%20que%20será%20recuperado.);
- [RESTFul patterns](https://pt.wikipedia.org/wiki/REST);
- Flask;
- SQLAlchemy ORM and database configuration;
- Python virtual environments;
- React, JSX and javascript;
- JSON Web Token authentication;
- Responsive CSS;
  
I learned a lot with this project and the knowledge acquired here was used and improved on all the other upcoming projects that use these technologies and base concepts.

## Built with
- **Flask** - RESTFul API
- **SQLite** - Database
- **SQLAlchemy** - ORM
- **React** - Frontend web

## Project Setup

This app is not longer available in production. If you want to run it, follow the next instructions:

### Requirements
- [Git](https://git-scm.com)
- [Python3](https://www.python.org/downloads/)
- [NodeJS](https://nodejs.org/en/)
- Packet manager for python and node, like [pip](https://pypi.org/project/pip/) and [yarn](https://yarnpkg.com)

### Server Setup

Clone the repository

```bash

# Clone the repo
git clone https://github.com/VitorValandro/Vitae
```

Go to project's root diretory and run the commands below:

```bash

cd server

# Install packages - you can create a virtual env in this step if you want
pip install -r requirements.txt

# ATTENTION - Remember to rename the config.example.py to config.py and insert your environment info into the variables

# Starts development server - if you want a WSGI production server, use gunicorn (you must be in a UNIX environment)
python api.py

# Access http://localhost:5000 to see the server running

```

### Web setup

First clone the repository if you haven't done it yet:

```bash

# Clone the repo
git clone https://github.com/VitorValandro/Vitae

```

Go to project's root diretory and run the commands below:

```bash

cd web

# Install dependencies - I'm using npm, you can use yarn if you want
npm install

```

After install all packages run the commands below:

```bash

# Starts web app
npm start

# Access http://localhost:3000 to use the app

```

###### Vitor Matheus Valandro da Rosa. October 2021.
