
<h1>React-Flask CRUD</h1>

<p>This project is a simple CRUD (Create, Read, Update, Delete) application made with React and Flask. Users can add, edit, update, and delete people in a list. As part of the project, the backend and frontend applications are run in separate containers using Docker Compose.</p>

<h2>Requirements</h2>

<p>Running this project requires the following Softwares:</p>

<ul>
	<li>1)Docker</li>
	<li>2)Docker Compose</li>
</ul>

<p>You can download Docker and Docker Compose from the Docker website.</p>

<h2>Installation</h2>

<p>Here are the steps to install and run the project:</p>

<ol>
	<li>Clone the project repository to your local machine using the command <code>git clone https://github.com/MuffinWithBananaJam/Cloud_assignment.git</code>.</li>
	<li>Navigate to the project directory using the command <code>cd Cloud_assignment</code>.</li>
	<li>Use the command <code>docker-compose build</code> to create Docker images for the backend and frontend applications.</li>
	<li>Execute the command <code>docker-compose up</code> to launch the Docker containers.</li>
	<li>Finally, access the frontend application by opening a web browser and navigating to "http://localhost:3000".</li>
</ol>

<h2>Usage</h2>

<p>One of the features of the frontend application is the ability to manage a list of persons by creating, viewing, updating, and deleting their records. To create a new person, click the "Add Person" button and complete the form. To modify an existing person's information, click the "Edit" button next to their name and update the details as needed. If you want to remove a person from the list, click the "Delete" button next to their name.</p>

<h2>Customization</h2>

<p>Modifications to the application can be made by altering the source code found in the backend and frontend directories. The backend is constructed using Flask and saves person records in a SQLite database. Meanwhile, the frontend is created using React and utilizes the Axios library to send HTTP requests to the backend API.</p>

<h2>Conclusion</h2>

<p>The project illustrates the process of creating a basic CRUD application using React and Flask. Additionally, it showcases the usage of Docker Compose to execute the backend and frontend applications in distinct containers. By utilizing this project as a foundation, you can extend its capabilities and develop more intricate applications with advanced features.</p>
