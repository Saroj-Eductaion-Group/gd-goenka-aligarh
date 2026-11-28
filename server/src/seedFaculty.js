require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const Faculty = require("./models/Faculty");

const facultyToUpsert = [
  // 10 Current / New Faculty
  {
    name: "Mrs. Sapna Chauhan",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850989/gd-goenka/faculty/SapnaChauhan.jpg",
  },
  {
    name: "Ms. Divya Chauhan",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850988/gd-goenka/faculty/DivyaChauhan.jpg",
  },
  {
    name: "Ms. Nandani Varshney",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795861114/gd-goenka/faculty/NandaniVarshney_v3.jpg",
  },
  {
    name: "Mrs. Jyoti Baghel",
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
    name: "Mrs. Bhuvnesh Pachauri",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795861112/gd-goenka/faculty/BhuvneshPachauri_v3.jpg",
  },
  {
    name: "Ms. Mahak Verma",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850992/gd-goenka/faculty/MahakVerma.jpg",
  },
  {
    name: "Mr. Paras Kaushik",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795850993/gd-goenka/faculty/ParasKaushik.jpg",
  },
  {
    name: "Mr. Shubham T Clancy",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795861113/gd-goenka/faculty/ShubhamTClancy_v3.jpg",
  },
  // Restored Faculty
  {
    name: "Mr. Komit Ujjwal",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795858257/gd-goenka/faculty/KomitUjjwal.jpg",
  },
  {
    name: "Ms. Dipti Verma",
    image: "https://res.cloudinary.com/dsudqlnml/image/upload/v1795858258/gd-goenka/faculty/DiptiVerma.jpg",
  },
  {
    name: "Mrs. Soniya Jain",
    image: "https://storage.googleapis.com/gd-goenka-school.appspot.com/faculty/1743241511924-WhatsApp Image 2025-03-29 at 3.08.03 PM.jpeg",
  },
  {
    name: "Ms. Nancy Maheshwari",
    image: "https://storage.googleapis.com/gd-goenka-school.appspot.com/faculty/1743241424876-WhatsApp Image 2025-03-29 at 3.08.01 PM.jpeg",
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

    const activeNames = [];
    for (const f of facultyToUpsert) {
      const cleanName = f.name.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/i, "").trim();
      activeNames.push(cleanName.toLowerCase());

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

    // Remove any faculty not in the active list
    console.log("Cleaning up old faculty not in the allowed list...");
    const allFaculty = await Faculty.find({});
    for (const doc of allFaculty) {
      const cleanDocName = doc.name.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/i, "").trim().toLowerCase();
      const isActive = activeNames.some(active => cleanDocName.includes(active) || active.includes(cleanDocName));
      if (!isActive) {
        await Faculty.findByIdAndDelete(doc._id);
        console.log(`Removed old faculty: ${doc.name} (${doc._id})`);
      }
    }

    const total = await Faculty.countDocuments();
    console.log(`Done! Total active faculty in database: ${total}`);
  } catch (err) {
    console.error("Error seeding faculty:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
