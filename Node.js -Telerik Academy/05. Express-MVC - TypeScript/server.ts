import { connectionSting, port } from "./app/config";

import { DbConfig } from "./app/db";

import { BaseData } from "./app/data/base/base.data";

import { MongoDbData } from "./app/data/mongodb.data";


//import { Application } from "./app/application";

let db;
let data;
let app;

DbConfig.initDb(connectionSting) 
    .then(dbInstance => {
        db = dbInstance;
        data = new MongoDbData<>(db);
        //app = new ApplicationCache(data);
    })
    .then(app => {
        app.start(port);
    });