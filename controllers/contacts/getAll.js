const { Contact } = require("../../models/schemas/contacts");

const getAll = async (req, res) => {
  const contacts = await Contact.find();

  if (!contacts) {
    res.status(404).json({ message: "Not Found" });
  }
  res.status(200).json({ status: "success", data: { contacts } });
};

module.exports = getAll;
