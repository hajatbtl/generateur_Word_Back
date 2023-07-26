const { db } = require('../db.js');

// Get All Rows
const getAll = (req, res) => {
    try {
        const q = `select * from prestation `;
        db.query(q, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    } catch (error) {
        console.log(error);
    }
};

// Get Describe
const getDescribe = (req, res) => {
    try {
        const q = `describe prestation`;
        db.query(q, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    } catch (error) {
        console.log(error);
    }
};

// Get All Active
const getAllActive = (req, res) => {
    try {
        const q = `select * from prestation where prestation_status = ?`;
        db.query(q, [1], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    } catch (error) {
        console.log(error);
    }
};

// Get All Desactive
const getAllDesactive = (req, res) => {
    try {
        const q = `select * from prestation where prestation_status = ?`;
        db.query(q, [0], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    } catch (error) {
        console.log(error);
    }
};

// Get One Row
const getOne = (req, res) => {
    const id = req.params.id;
    try {
        const q = `select * from prestation where id_p = ? `;
        db.query(q, id, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        });
    } catch (error) {
        console.log(error);
    }
};

// Insert Row
const postRow = (req, res) => {
    const data = req.body;
    try {
        const q = `insert into prestation set ? `;
        db.query(q, data, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(201).json(`prestation has been created with success!`);
        });
    } catch (error) {
        console.log(error);
    }
};

// Update Row
const updateRow = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const q = `update prestation set ? where id_p = ? `;
        db.query(q, [data, id], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(201).json(`prestation has been updated with success!`);
        });
    } catch (error) {
        console.log(error);
    }
};

// Desactive Row
const deleteRow = (req, res) => {
    const id = req.params.id;
    try {
        const q = 'DELETE FROM prestation WHERE id_p = ?';
        db.query(q, id, (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(201).json('Prestation has been deleted successfully!');
        });
    } catch (error) {
        console.log(error);
    }
};

// Active Row
const recoverRow = (req, res) => {
    const id = req.params.id;
    try {
        const q = `update prestation set prestation_status = ? where id_p = ? `;
        db.query(q, ['1', id], (err, data) => {
            if (err) return res.status(500).send(err);
            return res.status(201).json(`prestation has been recovered with success!`);
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAll,
    getDescribe,
    getAllActive,
    getAllDesactive,
    getOne,
    postRow,
    updateRow,
    deleteRow,
    recoverRow,
};
