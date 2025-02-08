CRUD-ANGULAR-19
This project was generated using Angular CLI version 19.0.0.

Development server
To start a local development server, run:

bash
Copy
ng serve
Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload whenever you modify any of the source files.

Running the JSON Server
To simulate a REST API for CRUD operations, this project uses json-server. To start the JSON server, run the following command:

bash
Copy
npm run json-server db.json
This will start the JSON server on http://localhost:3000 and use the db.json file as the database. Make sure you have json-server installed globally or as a dependency in your project.

Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

bash
Copy
ng generate component component-name
For a complete list of available schematics (such as components, directives, or pipes), run:

bash
Copy
ng generate --help
Building
To build the project run:

bash
Copy
ng build
This will compile your project and store the build artifacts in the dist/ directory. By default, the production build optimizes your application for performance and speed.

Running unit tests
To execute unit tests with the Karma test runner, use the following command:

bash
Copy
ng test
Running end-to-end tests
For end-to-end (e2e) testing, run:

bash
Copy
ng e2e
Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

Additional Resources
For more information on using the Angular CLI, including detailed command references, visit the Angular CLI Overview and Command Reference page.

Notes:
Ensure that json-server is installed in your project. If not, you can install it using:

bash
Copy
npm install -g json-server
The db.json file should be located in the root directory of your project. If it's located elsewhere, adjust the path in the command accordingly.
