import express from "express";
import cors from 'cors';
import generatorRoutes from "./routes/generator.js";
import multer from "multer";
import fse from "fs-extra";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/generator/', generatorRoutes);
//
app.listen(8800, () => {
    console.log("backend connected!");
});

import devisRoutes from "./routes/devis.js";
app.use(`/api/devis/`, devisRoutes);
import prestationRoutes from "./routes/prestation.js";
app.use(`/api/prestation/`, prestationRoutes);

import auth from "./routes/auth.js";
app.use("/api/auth/", auth);
import clientRoutes from "./routes/client.js";
app.use(`/api/client/`, clientRoutes);
    import userRoutes from "./routes/user.js";
    app.use(`/api/user/`, userRoutes);
    