require("../config/db");
const Admin = require("../models/admin");

const saveAdmin = async () => {
  const newAuthor = new Admin({
    firstname: "adcdefgh",
    lastname: "xyz",
    dob: new Date(2020, 8, 30),
    email: "asdfgh@gmail.com",
    password: "qwert123#"
  });

  try {
    const result = await newAuthor.save();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

saveAdmin();
