import db from "./config/database.config";
import app from "./app";

db.sync().then(() => {
	console.log("Connected to database on SQLite3.");
});

const port = 4000;

app.listen(port, () => {
	console.log("Server is running on port: " + port);
});