const mongoose = require("mongoose");
const Project = require("../models/ProjectModel");

var auth = function (req, res, next) {
  if (req.user.admin) {
    return next();
  } else {
    return res.status(400);
  }
};

var authUser = function (req, res, next) {
  if (!req.linkedin) {
    return next();
  } else {
    return res.status(400);
  }
};

const getAllProjects = async (req, res, next) => {
  const allProjects = await Project.find().exec();
  res.json(allProjects);
};

const getProjectsByUser = async (req, res, next) => {
  let userId = req.body.id;
  Project.find({ "user._id": userId }, (error, data) => {
    if (error) {
      console.log(error);
    }
    res.send(data);
  });
};

const getOneProject = async (req, res, next) => {
  const oneProject = await Project.findOne({ _id: req.body._id });
  res.json(oneProject);
  //   Project.findById(req.body._id, (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //     res.send(data);
  //   });
};

const addProject = async (req, res, next) => {
  const newProject = new Project({
    title: req.body.title,
    hostedBy: req.body.hostedBy,
    logoUrl: req.body.logoUrl,
    postedOn: req.body.postedOn,
    validUntil: req.body.validUntil,
    description: req.body.description,
    skills: req.body.skills,
    category: req.body.category,
    user: req.body.user,
    contactPhone: req.body.contactPhone,
    contactEmail: req.body.contactEmail,
    linkedinProfile: req.body.linkedinProfile,
    isDeleted: req.body.isDeleted,
  });
  try {
    const result = await newProject.save();
    res.json(result);
  } catch (err) {
    res.json("Error while adding!");
  }
};

const updateProject = async (req, res, next) => {
  let newProject = req.body;
  let _id = req.body._id;
  Project.findOneAndUpdate(
    { _id },
    newProject,
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      }
      res.send("Updated successfully");
    }
  );
};

const deleteProject = async (req, res, next) => {
  try {
    const doc = await Project.findOneAndDelete({ _id: req.body._id });
    doc === null ? res.json("Error while deleting.") : res.json("Success!");
  } catch (err) {
    res.json("Error while deleting.");
  }
};

exports.getAllProjects = getAllProjects;
exports.getProjectsByUser = getProjectsByUser;
exports.getOneProject = getOneProject;
exports.addProject = addProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
