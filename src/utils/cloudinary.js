import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath || !fs.existsSync(localFilePath)) {
      throw new Error(`Invalid file path: ${localFilePath}`);
    }
    // upload the file on clodinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    if (!response || !response.url) {
      throw new Error(`Invalid response from Cloudinary: ${response}`);
    }

    //file has been uploaded successfully
    console.log("file is uploded on clodinary", response.url);
    await fs.promises.unlink(localFilePath)
    return response;
  } catch (err) {
    await fs.promises.unlink(localFilePath); //remove the locally saved temporary file as the upload operation got failed
    throw err;
  }
};

export { uploadOnCloudinary };


//The resource_type option is set to "auto" to automatically detect the file type.



