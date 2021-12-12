const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 3010;

const multer = require("multer");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const User = require("./routes/user");
const File = require("./routes/file");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "json") {
    cb(null, true);
  } else {
    cb(new Error("Not a JSON File!!"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
//enter the mongo url 
    
const connectDatabase = () => {
  const MONGO_URI = ''
  mongoose
    .connect(MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.error("Not Connected"));
};

connectDatabase();

app.use(cors());

app.use("/api/user", User);
app.use("/api/file", File);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
