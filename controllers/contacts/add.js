const { Contact } = require("../../models/schemas/contacts");

const add = async (req, res, next) => {
  const newContact = await Contact.create({ ...req.body });
  res.status(201).json({ data: { newContact } });
};

module.exports = add;
