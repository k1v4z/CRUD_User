import app from "./src/config/app.config";
import userRouter from "./src/route/user.route";

const PORT = 8080;

app.use(userRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})