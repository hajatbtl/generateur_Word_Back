const express = require('express');
// const bodyParser = require('body-parser');

const router = express.Router();
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());
const { updateDevisWithClient, getDevisWithClient, getDevisById, getAll, getreff, getref, getOne, postRow, deleteRow, recoverRow, updateRow, getAllActive, getAllDesactive, getDescribe } = require('../controllers/devisController.js');

const { getClientById } = require('../controllers/clientController.js');
const { getUserById } = require('../controllers/userController.js');
const { getNotatsByIdDevis } = require('../controllers/devisWithNotatsController.js');
const { getPrestationByIdDevis } = require('../controllers/devisWithPrestationController.js');


const { deleteDevisById } = require('../controllers/devisController.js');
const { deleteClientById } = require('../controllers/clientController.js');
const { deleteUserById } = require('../controllers/userController.js');
const { deleteNotatsByIdDevis } = require('../controllers/devisWithNotatsController.js');
const { deletePrestationByIdDevis } = require('../controllers/devisWithPrestationController.js');


router.get("/", getAll);
router.get("/ref", getref);
router.get("/reff/:reference", getreff);
router.get("/describe", getDescribe);
router.get("/active", getAllActive);
router.get("/desactive", getAllDesactive);
router.get("/:id", getOne);
router.post("/add", postRow);
router.put("/delete/:id", deleteRow);
router.put("/recover/:id", recoverRow);
router.put("/update/:id", updateRow);

router.get("/all/:id", getDevisWithClient);
router.put("/update/all/:id", updateDevisWithClient);

// router.get("/test/:id", (req,res) => {

//     let devis = getDevisById(req,res);
//     console.log(devis);

//     return res.status(201).json({
//         devis: devis
//     })
// });


router.get("/devisall/:id", async (req, res) => {
    const id = req.params.id;

    let devis = await getDevisById(id);
    let user = await getUserById(id);
    let client = await getClientById(id);
    let prestation = await getPrestationByIdDevis(id);
    let notats = await getNotatsByIdDevis(id);

    return res.status(200).json({
        devis: devis[0],    
        user: user[0],
        client: client[0],
        prestation: prestation,
        notats: notats,

    });
});

// router.post("image/add", addImage);

router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    // Perform the delete operation using the specified ID
    try {
        // First, delete the related notats (if needed)
        await deleteDevisById(id);
        await deleteUserById(id);
        await deleteClientById(id);
        await deletePrestationByIdDevis(id);
        await deleteNotatsByIdDevis(id);

        // Then, delete the main "devis" entry
        const deletedDevis = await deleteDevisById(id);

        if (!deletedDevis) {
            return res.status(404).json({ message: "Devis not found" });
        }

        return res.status(200).json({ message: "Devis deleted successfully" });
    } catch (error) {
        console.error("Error deleting devis:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;
