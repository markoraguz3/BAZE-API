const db = require("../config/database");


// kreiraj rezervaciju
exports.createRezervacija = async (req, res) => {
    const { id, datumod, datumdo, cijenaukupno, kupac_id, auto_id } = req.body;
    const { rows } = await db.query(
      "INSERT INTO rezervacija (id, datumod, datumdo, cijenaukupno, kupac_id, auto_id) VALUES ($1, $2, $3, $4, $5, $6id)",
      [id, datumod, datumdo, cijenaukupno, kupac_id, auto_id]
    );
  
    res.status(201).send({
      message: "Rezervacija uspješno dodana!",
      body: {
        Rezervacije : { id, datumod, datumdo, cijenaukupno, kupac_id, auto_id }
      },
    });
  };

//ispisi
  exports.listAllRezervacija = async (req, res) => {
    const response = await db.query('SELECT * FROM rezervacija');
    res.status(200).send(response.rows);
  };

  // metoda za ispis po odredenom id
exports.findRezervacijaById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM rezervacija WHERE id = $1', [Id]);
  res.status(200).send(response.rows);
}
// metoda za update
exports.updateRezervacijaById = async (req, res) => {
  const Id = parseInt(req.params.id);
  const { id, datumod, datumdo, cijenaukupno, kupac_id, auto_id } = req.body;

  const response = await db.query(
    "UPDATE rezervacija SET datumod = $1, datumdo = $2, cijenaukupno = $3, kupac_id = $4 , auto_id = $5 WHERE Id = $6",
    [id, datumod, datumdo, cijenaukupno, kupac_id, auto_id ]
  );

  res.status(200).send({ message: "Rezervacija ažurirana!" });
};

//metoda za delete 
exports.deleteRezervacijaById = async (req, res) => {
  const rezervacijaId = parseInt(req.params.id);
  await db.query('DELETE FROM rezervacija WHERE id = $1', [
    rezervacijaId
  ]);

  res.status(200).send({ message: 'Rezervacija obrisana!', rezervacijaId });
};