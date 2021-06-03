
const db = require("../config/database");


// kreiraj novog korisnika

exports.createKorisnici = async (req, res) => {
    const { id, first_name, last_name, email, password, birth_date, role_id } = req.body;
    const { rows } = await db.query(
      "INSERT INTO users (id, first_name, last_name, email, password, birth_date, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [id, first_name, last_name, email, password, birth_date, role_id]
    );
  
    res.status(201).send({
      message: "Korisnik dodan uspješno!",
      body: {
        Korisnci: { id, first_name, last_name, email, password, birth_date, role_id }
      },
    });
  };


  // ispisi sve korisnike
  exports.listAllKorisnici = async (req, res) => {
    const response = await db.query('SELECT * FROM users');
    res.status(200).send(response.rows);
  };

  // metoda za ispis po odredenom id
exports.findKorisniciById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM users WHERE id = $1', [Id]);
  res.status(200).send(response.rows);
}
// metoda za update
exports.updateKorisniciById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const { id, first_name, last_name, email, password, birth_date, role_id } = req.body;

  const response = await db.query(
    "UPDATE users SET id = $1, first_name = $2, last_name = $3, email = $4, password = $5, birth_date = $6, role_id = $7",
    [id, first_name, last_name, email, password, birth_date, role_id ]
  );

  res.status(200).send({ message: "Korisnik ažuriran!" });
};

//metoda za delete 
exports.deleteKorisniciById = async (req, res) => {
  const Id = parseInt(req.params.id);
  await db.query('DELETE FROM users WHERE Id = $1', [
    Id
  ]);

  res.status(200).send({ message: 'Korisnik obrisan!',Id });
};