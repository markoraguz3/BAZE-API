const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');
const rezervacijaController = require('../controllers/rezervacija.controller');
const slikaController = require('../controllers/slika.controller');
const lokacijaController = require('../controllers/lokacija.controller');
const korisniciController = require('../controllers/korisnici.controller');


//kreiraj 
router.post('/products', productController.createProduct);
// ispisi
router.get('/products', productController.listAllProducts);
//ispisi auto za određeni id
router.get('/products/:id', productController.findProductById);
//update po id
router.put('/products/:id', productController.updateProductById);
//delete po id
router.delete('/products/:id', productController.deleteProductById);
  
//kreiraj rezervaciju
router.post('/rezervacija', rezervacijaController.createRezervacija);
//ispisi sve rezervacije
router.get('/rezervacija', rezervacijaController.listAllRezervacija);
//ispisi auto za određeni id
router.get('/rezervacija/:id', rezervacijaController.findRezervacijaById);
//update po id
router.put('/rezervacija/:id', rezervacijaController.updateRezervacijaById);
//delete po id
router.delete('/rezervacija/:id', rezervacijaController.deleteRezervacijaById);

//kreiraj sliku
router.post('/slika', slikaController.createSlika);
// ispisi slike
router.get('/slika', slikaController.listAllSlika);
//ispisi auto za određeni id
router.get('/slika/:id', slikaController.findSlikaById);
//update po id
router.put('/slika/:id', slikaController.updateSlikaById);
//delete po id
router.delete('/slika/:id', slikaController.deleteSlikaById);


//kreiraj lokaciju
router.post('/lokacija', lokacijaController.createLokacija);
// ispisi lokacije
router.get('/lokacija', lokacijaController.listAllLokacija);
//ispisi za određeni id
router.get('/lokacija/:id', lokacijaController.findLokacijaById);
//update po id
router.put('/lokacija/:id', lokacijaController.updateLokacijaById);
//delete po id
router.delete('/lokacija/:id', lokacijaController.deleteLokacijaById);

//kreiraj korisnika
router.post('/korisnici', korisniciController.createKorisnici);
// ispisi korisnike
router.get('/korisnici', korisniciController.listAllKorisnici);
//ispisi za određeni id
router.get('/korisnici/:id', korisniciController.findKorisniciById);
//update po id
router.put('/korisnici/:id', korisniciController.updateKorisniciById);
//delete po id
router.delete('/korisnici/:id', korisniciController.deleteKorisniciById);




module.exports = router;