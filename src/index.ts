import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import exampleRouter from "./routes/example.routes";

import { prisma } from "./db";

config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: "*" }));
app.use(morgan("common"));
app.use("/example", exampleRouter);

async function main() {
	await prisma.$connect();
	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});
}

main();
