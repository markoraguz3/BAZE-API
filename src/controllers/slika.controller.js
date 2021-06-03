const db = require("../config/database");


// kreiraj novu sliku 

exports.createSlika = async (req, res) => {
    const { id, putanja, auto_id } = req.body;
    const { rows } = await db.query(
      "INSERT INTO slika (id, putanja, auto_id) VALUES ($1, $2, $3)",
      [id, putanja, auto_id]
    );
  
    res.status(201).send({
      message: "Slika dodana uspješno!",
      body: {
        Slike: { id, putanja, auto_id }
      },
    });
  };


  // ispisi sve slike
  exports.listAllSlika = async (req, res) => {
    const response = await db.query('SELECT * FROM slika');
    res.status(200).send(response.rows);
  };

  // metoda za ispis po odredenom id
exports.findSlikaById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM slika WHERE id = $1', [Id]);
  res.status(200).send(response.rows);
}
// metoda za update
exports.updateSlikaById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const { id, putanja, auto_id } = req.body;

  const response = await db.query(
    "UPDATE slika SET putanja = $1, auto_id = $2 WHERE id = $3",
    [id, putanja, auto_id, Id]
  );

  res.status(200).send({ message: "Slika ažurirano!" });
};

//metoda za delete 
exports.deleteSlikaById = async (req, res) => {
  const Id = parseInt(req.params.id);
  await db.query('DELETE FROM slika WHERE Id = $1', [
    Id
  ]);

  res.status(200).send({ message: 'Slika obrisana!', Id });
};