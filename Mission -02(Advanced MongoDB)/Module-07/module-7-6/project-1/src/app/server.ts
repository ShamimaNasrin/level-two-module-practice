import { Server } from "http";
import app from "./app";

const PORT = 5000;

let server: Server; // server er define kora type holo Server

// server ta kivabe run hobe setar function
async function bootstrap() {
    server = app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    });
}

bootstrap();