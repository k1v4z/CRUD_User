import express, { Express } from "express";

class App {
    private static instance: App;
    private _app: Express;

    constructor() {
        this._app = express();
        this.configReqBody();
    }

    private configReqBody(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }


    get app(): Express {
        return this._app;
    }


    //Singleton pattern
    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }

        return App.instance;
    }

}

export default App.getInstance().app; //getter