//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Michael Kravtsiv
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction of <font color='yellow'>Michael Kravtsiv</font><br><b>App Version 1.4</b>";
  res.status(200).send(message);
};
