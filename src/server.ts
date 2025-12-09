import express, { type Request, type Response, type Express } from "express";

const app: Express = express();

app.get('/health', (req: Request, res: Response) => {
  res.json({ message: 'hello', course: 'poop' }).status(200);
});

export { app }

export default app;