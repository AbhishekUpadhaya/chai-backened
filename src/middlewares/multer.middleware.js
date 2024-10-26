import multer from "multer";
import fs from "fs"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./public/temp";
    if (!fs.existsSync(dir)) { //check if file path is not exist then create a new directory
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    // You can also add validation for file extensions, size, etc.
    cb(null, file.originalname);
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'));
    }
    cb(null, true); // Accept the file
  }

});

export const upload = multer({ storage: storage });

//setting up a file upload system using Multer in a Node.js application.
