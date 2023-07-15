import "dotenv/config.js";
import app from "./src/app.js";

const port = 3333;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});