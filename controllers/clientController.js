import { db } from '../db.js';
// Get All Rows
export const getAll = (req, res) => {
    try {
        const q = `select * from client `;
db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
})
    } catch (error) {
        console.log(error);
    }
};

// Get Describe
export const getDescribe = (req, res) => {
    try {
        const q = `describe client`;
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    })
    } catch (error) {
        console.log(error);
    }
};

// Get All Active
export const getAllActive = (req, res) => {
    try {
        const q = `select * from client where client_status = ?`;
    db.query(q, [1], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    })
    } catch (error) {
        console.log(error);
    }
};

// Get All Desactive
export const getAllDesactive = (req, res) => {
    try {
        const q = `select * from client where client_status = ?`;
    db.query(q, [0], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    })
    } catch (error) {
        console.log(error);
    }
};

// Get One Row
export const getOne = (req, res) => {
    const id = req.params.id;
    try {
        const q = `select * from client where client_id = ? `;
    db.query(q, id, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    })
    } catch (error) {
        console.log(error);
    }
};

// Insert Row
export const postRow = (req, res) => {
    const data = req.body;
    try {
        const q = `insert into client set ? `;
    db.query(q, data, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(201).json(`client has been created with successfull!`);
    })
    } catch (error) {
        console.log(error);
    }
};

// Update Row
export const updateRow = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const q = `update client set ? where client_id = ? `;
    db.query(q, [data, id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(201).json(`client has been updated with successfull!`);
    })
    } catch (error) {
        console.log(error);
    }
};

// desactive Row
export const deleteRow = (req, res) => {
    const id = req.params.id;
    try {
        const q = `update client set client_status = ? where client_id = ? `;
    db.query(q, ['0', id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(201).json(`client has been deleted with successfull!`);
    })
    } catch (error) {
        console.log(error);
    }
};

// Active Row
export const recoverRow = (req, res) => {
    const id = req.params.id;
    try {
        const q = `update client set client_status = ? where client_id = ? `;
    db.query(q, ['1', id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(201).json(`client has been recovred with successfull!`);
    })
    } catch (error) {
        console.log(error);
    }
};
