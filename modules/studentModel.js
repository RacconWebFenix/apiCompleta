import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    //valida se a nota é menor que 0
    validate(value) {
      if (value < 0)
        throw new Error("O valor da nota nao pode ser menor que 0");
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const studentModel = mongoose.model("student", studentSchema, "student");

export { studentModel };
