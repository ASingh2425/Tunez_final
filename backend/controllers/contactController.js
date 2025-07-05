import Contact from "../models/Contact.js";

export const postContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
};

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};
