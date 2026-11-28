require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const Faculty = require("./models/Faculty");

const facultyToUpsert = [
  // Updated existing faculty
  {
    name: "Mrs. Sapna Chauhan",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850989/gd-goenka/faculty/SapnaChauhan.jpg",
  },
  {
    name: "Ms. Divya Chauhan",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850988/gd-goenka/faculty/DivyaChauhan.jpg",
  },
  // New faculty
  {
    name: "Ms. Nandani Varshney",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850985/gd-goenka/faculty/NandaniVarshney.jpg",
  },
  {
    name: "Ms. Jyoti Baghel",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850986/gd-goenka/faculty/JyotiBaghel.jpg",
  },
  {
    name: "Ms. Divya Sharma",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850987/gd-goenka/faculty/DivyaSharma.jpg",
  },
  {
    name: "Ms. Rashmi Kumari",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850990/gd-goenka/faculty/RashmiKumari.jpg",
  },
  {
    name: "Mr. Bhuvnesh Pachauri",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850991/gd-goenka/faculty/BhuvneshPachauri.jpg",
  },
  {
    name: "Ms. Mahak Verma",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850992/gd-goenka/faculty/MahakVerma.jpg",
  },
  {
    name: "Mr. Paras Kaushik",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850993/gd-goenka/faculty/ParasKaushik.jpg",
  },
];

async function seed() {
  try {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      console.error("DB_URL not defined in environment");
      process.exit(1);
    }
    console.log("Connecting to MongoDB...");
    await mongoose.connect(dbUrl);
    console.log("Connected successfully!");

    for (const f of facultyToUpsert) {
      // Find by exact name or regex
      const cleanName = f.name.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/i, "");
      const existing = await Faculty.findOne({
        name: { $regex: new RegExp(cleanName, "i") },
      });

      if (existing) {
        existing.name = f.name;
        existing.image = f.image;
        await existing.save();
        console.log(`Updated faculty: ${f.name}`);
      } else {
        await Faculty.create(f);
        console.log(`Created new faculty: ${f.name}`);
      }
    }

    const total = await Faculty.countDocuments();
    console.log(`Done! Total faculty in database: ${total}`);
  } catch (err) {
    console.error("Error seeding faculty:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
