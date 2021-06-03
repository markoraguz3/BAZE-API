const db = require("../config/database");


//dodaj lokaciju
exports.createLokacija = async (req, res) => {
    const {  id, name} = req.body;
    const { rows } = await db.query(
      "INSERT INTO locations (id, name) VALUES ($1, $2)",
      [id, name ]
    );
  
    res.status(201).send({
      message: "Lokacija uspješno dodana!",
      body: {
        Lokacije : { id, name }
      },
    });
  };


  //ispisi sve lokacije
  exports.listAllLokacija = async (req, res) => {
    const response = await db.query('SELECT * FROM locations');
    res.status(200).send(response.rows);
  };

  // metoda za ispis po odredenom id
exports.findLokacijaById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM locations WHERE id = $1', [Id]);
  res.status(200).send(response.rows);
}
// metoda za update
exports.updateLokacijaById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const { id, name } = req.body;

  const response = await db.query(
    "UPDATE locations SET name = $1 WHERE Id = $2",
    [id, name ]
  );

  res.status(200).send({ message: "Lokacija ažurirana!" });
};
//metoda za delete 
exports.deleteLokacijaById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM locations WHERE id = $1', [
    id
  ]);

  res.status(200).send({ message: 'Lokacija obrisana!', id });
};