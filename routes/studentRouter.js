import express from "express";
import { studentModel } from "../modules/studentModel.js";

const app = express();

//CREATE
app.post("/student", async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET
app.get("/student", async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

//UPDATE
app.patch("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await studentModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
//DELETETE
app.delete("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await studentModel.findByIdAndDelete({ _id: id }, req.body);
    if (!data) {
      res.status(404).send("Documento não encontrado");
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


export { app as studentRouter };
