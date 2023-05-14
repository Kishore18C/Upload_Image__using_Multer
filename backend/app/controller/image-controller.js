import requiredFields from "../utils/requiredFields.js";
import * as imageService from "../services/image.service.js";
import raiseError from "../utils/raiseError.js";

export const getAllImages = async (req, res, next) => {
  try {
    if (req.params.key === "false") {
      req.params.key = false;
    }
    const images = await imageService.getAllImg(req.params.key);

    return res.status(200).send({
      status: "Success",
      images,
    });
  } catch (error) {
    next(raiseError(error));
  }
};

export const uploadImage = async (req, res, next) => {
  try {
    req.body.image = req.file.path;

    const checkImg = await imageService.getImg(req.body.name);

    if (checkImg) return next(raiseError("Name already exist.", 400));

    const images = await imageService.uploadImg(req.body);

    return res.status(200).send({
      status: "Success",
      images,
    });
  } catch (error) {
    next(raiseError(error));
  }
};
