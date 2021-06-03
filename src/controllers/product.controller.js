const db = require("../config/database");

//metoda za kreiranje novih
exports.createProduct = async (req, res) => {
  const { id, brojsjedala, cijenadan, tipgoriva, prodavac_id } = req.body;
  const { rows } = await db.query(
    "INSERT INTO auto (id, brojsjedala, cijenadan, tipgoriva, prodavac_id) VALUES ($1, $2, $3, $4, $5, $6)",
    [id, brojsjedala, cijenadan, tipgoriva, prodavac_id]
  );

  res.status(201).send({
    message: "Auto dodano uspješno!",
    body: {
      Auti: { id, brojsjedala, cijenadan, tipgoriva, prodavac_id }
    },
  });
};

//metoda za ispis svih auta
exports.listAllProducts = async (req, res) => {
  const response = await db.query('SELECT * FROM auto');
  res.status(200).send(response.rows);
};
// metoda za ispis auta po odredenom id
exports.findProductById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM auto WHERE id = $1', [Id]);
  res.status(200).send(response.rows);
}
// metoda za update
exports.updateProductById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const { id, brojsjedala, cijenadan, tipgoriva, prodavac_id } = req.body;

  const response = await db.query(
    "UPDATE auto SET brojsjedala = $1, cijenadan = $2, tipgoriva = $3, prodavac_id = $4 WHERE Id = $5",
    [id, brojsjedala, cijenadan, tipgoriva, prodavac_id]
  );

  res.status(200).send({ message: "Auto ažurirano!" });
};

//metoda za delete 
exports.deleteProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM auto WHERE id = $1', [
    id
  ]);

  res.status(200).send({ message: 'Auto obrisano!', id });
};