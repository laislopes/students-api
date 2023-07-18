# Students API

## Requirements

- NVM or asdf (recommended)
- Node.js v18.15.0 and NPM v9.5.0
- WSL (recommended)
- Visual Studio Code (recommended)

## Setup

- Clone the repository
- Access the project root folder 

### WSL Using

**This step is only for Windows users**

- Clone the repository directly in Linux environment (WSL)
- Access the project root folder 

> If you need to install WSL, follow this [documentation](https://github.com/codeedu/wsl2-docker-quickstart#dica-para-windows-11)

After installing WSL, follow the steps below:

1. Access the Ubuntu/WSL terminal
2. Type the command, `cd ~` to access the `home` folder
3. From `home` directory, use `mkdir` or `cd` to create or select subfolders and organize your projects
4. Use the command `git clone <repository address>` to clone the repository inside WSL

### Database Configuration

- Create a `.env` file in the project root folder and insert the content below replacing the example value for the real information
```
PORT=portNumber 
DB_CONNECTION_STRING="databaseConnectionString"
```

### Running the project

In the project root folder, run the commands below:

- `npm install`
- `nodemon server.js`

The API will be available at http://localhost:3000 (Development Environment)

## Endpoints

### Health Check
- GET `/`

### Students
- GET `/students`
- GET `/students/:id`
- POST `/students`
- PUT `/students/:id`
- DELETE `/students/:id`

## Additional Documentation

- [WSL](https://github.com/codeedu/wsl2-docker-quickstart#dica-para-windows-11)
- [asdf](https://asdf-vm.com/guide/getting-started.html)
- [Deploy NodeJS Application in AWS EC2](https://www.youtube.com/watch?v=u-o7cqzK6u8)

