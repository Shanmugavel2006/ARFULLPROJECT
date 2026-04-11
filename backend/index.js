// // UPDATE PROJECT
// app.put("/projects/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		// Normalize update payload
// 		const payload = { ...req.body };
// 		if (!payload.image && payload.imageUrl) payload.image = payload.imageUrl;
// 		if (!payload.tech && payload.technologies) {
// 			payload.tech = Array.isArray(payload.technologies) ? payload.technologies.join(", ") : payload.technologies;
// 		}
// 		const updated = await Project.findByIdAndUpdate(id, payload, { new: true });
// 		if (!updated) return res.status(404).json({ error: "Project not found" });
// 		res.json(updated);
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ error: "Failed to update project" });
// 	}
// });

// // DELETE PROJECT
// app.delete("/projects/:id", async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const removed = await Project.findByIdAndDelete(id);
// 		if (!removed) return res.status(404).json({ error: "Project not found" });
// 		res.json({ message: "Deleted" });
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ error: "Failed to delete project" });
// 	}
// });
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Basic request logging
// app.use((req, res, next) => {
//   console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
//   next();
// });

// // Test route
// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });

// // MongoDB Connection
// const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio";
// mongoose.connect(mongoUri)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// // Schema
// const ProjectSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String,
//   tech: String
// }, { timestamps: true });

// const Project = mongoose.model("Project", ProjectSchema);

// // ➕ Add Project (Admin Panel)
// app.post("/projects", async (req, res) => {
//   try {
//     console.log("POST /projects payload:", req.body);
//     // Accept multiple field names from different frontends and normalize:
//     // - image or imageUrl -> image
//     // - tech or technologies -> tech (stored as comma-separated string)
//     const { title, description } = req.body;
//     if (!title || !description) {
//       return res.status(400).json({ error: "Title and description are required" });
//     }

//     const rawImage = req.body.image || req.body.imageUrl || "";
//     const rawTech = req.body.tech || req.body.technologies || req.body.technologies?.join?.(", ") || "";

//     const project = new Project({
//       title,
//       description,
//       image: rawImage,
//       tech: Array.isArray(req.body.technologies) ? req.body.technologies.join(", ") : rawTech,
//     });
//     const saved = await project.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to save project" });
//   }
// });

// // 📥 Get Projects (Portfolio)
// app.get("/projects", async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ _id: -1 });
//     console.log(`/projects returning ${projects.length} projects`);
//     res.json(projects);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch projects" });
//   }
// });

// // 🔎 Get single project
// app.get("/projects/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const project = await Project.findById(id);
//     if (!project) return res.status(404).json({ error: "Project not found" });
//     res.json(project);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch project" });
//   }
// });

// // ✏️ Update Project
// app.put("/projects/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     // normalize update payload like POST handler
//     const payload = { ...req.body };
//     if (!payload.image && payload.imageUrl) payload.image = payload.imageUrl;
//     if (!payload.tech && payload.technologies) {
//       payload.tech = Array.isArray(payload.technologies) ? payload.technologies.join(", ") : payload.technologies;
//     }

//     const updated = await Project.findByIdAndUpdate(id, payload, { new: true });
//     if (!updated) return res.status(404).json({ error: "Project not found" });
//     res.json(updated);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to update project" });
//   }
// });

// // 🗑️ Delete Project
// app.delete("/projects/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const removed = await Project.findByIdAndDelete(id);
//     if (!removed) return res.status(404).json({ error: "Project not found" });
//     res.json({ message: "Deleted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to delete project" });
//   }
// });

// // Start Server
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// // Schema
// const ProjectSchema = new mongoose.Schema({
// title: String,
// description: String,
// image: String,
// tech: String
// });

// const Project = mongoose.model("Project", ProjectSchema);

// // ADD PROJECT
// app.post("/projects", async (req, res) => {
// try {
// const project = new Project(req.body);
// await project.save();
// res.json({ message: "Saved" });
// } catch (err) {
// res.status(500).json({ error: "Error saving" });
// }
// });

// // GET PROJECTS
// app.get("/projects", async (req, res) => {
// const data = await Project.find();
// res.json(data);
// });

// // START
// app.listen(5000, () => {
// console.log("Server running on port 5000");
// });











// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// // --- CLOUDINARY IMAGE UPLOAD ENDPOINT ---
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const upload = multer({ storage: multer.memoryStorage() });

// cloudinary.config({
// 	cloud_name: process.env.CLOUD_NAME,
// 	api_key: process.env.API_KEY,
// 	api_secret: process.env.SECRET_KEY,
// });

// // POST /api/upload
// app.post("/api/upload", upload.single("file"), async (req, res) => {
// 	try {
// 		if (!req.file) return res.status(400).json({ error: "No file uploaded" });
// 		const stream = cloudinary.uploader.upload_stream(
// 			{ resource_type: "image" },
// 			(error, result) => {
// 				if (error) return res.status(500).json({ error: error.message });
// 				res.json({ url: result.secure_url });
// 			}
// 		);
// 		stream.end(req.file.buffer);
// 	} catch (err) {
// 		res.status(500).json({ error: "Upload failed" });
// 	}
// });

// // --- END CLOUDINARY IMAGE UPLOAD ENDPOINT ---

// // Schema
// const ProjectSchema = new mongoose.Schema({
// title: String,
// description: String,
// image: String,
// tech: String
// });

// const Project = mongoose.model("Project", ProjectSchema);

// // ➕ ADD PROJECT
// app.post("/projects", async (req, res) => {
// try {
// const project = new Project(req.body);
// const saved = await project.save();
// res.json(saved);
// } catch (err) {
// res.status(500).json({ error: "Error saving" });
// }
// });

// // 📥 GET PROJECTS
// app.get("/projects", async (req, res) => {
// const data = await Project.find();
// res.json(data);
// });

// // ✏️ UPDATE PROJECT
// app.put("/projects/:id", async (req, res) => {
// try {
// const updated = await Project.findByIdAndUpdate(
// req.params.id,
// req.body,
// { new: true }
// );
// res.json(updated);
// } catch (err) {
// res.status(500).json({ error: "Update failed" });
// }
// });

// // 🗑 DELETE PROJECT
// app.delete("/projects/:id", async (req, res) => {
// try {
// await Project.findByIdAndDelete(req.params.id);
// res.json({ message: "Deleted successfully" });
// } catch (err) {
// res.status(500).json({ error: "Delete failed" });
// }
// });

// // START
// app.listen(5000, () => {
// console.log("Server running on port 5000");
// });

// // --- END CLOUDINARY IMAGE UPLOAD ENDPOINT ---



require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const app = express();

/* ================== MIDDLEWARE ================== */
app.use(cors());
app.use(express.json());

/* ================== DATABASE ================== */
mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* ================== CLOUDINARY ================== */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

const upload = multer({ storage: multer.memoryStorage() });

/* ================== IMAGE UPLOAD ================== */
app.post("/api/upload", upload.single("file"), async (req, res) => {
  console.log("FILE RECEIVED:", req.file);

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error) {
          console.log("CLOUDINARY ERROR:", error);
          return res.status(500).json({ error: error.message });
        }

        res.json({ url: result.secure_url });
      }
    );

    stream.end(req.file.buffer);
  } catch (err) {
    console.log("SERVER ERROR:", err);
    res.status(500).json({ error: "Upload failed" });
  }
});

/* ================== SCHEMA ================== */
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  tech: String,
  liveUrl: String,
  githubUrl: String,
}, { timestamps: true });

const Project = mongoose.model("Project", ProjectSchema);

/* ================== CREATE PROJECT ================== */
app.post("/projects", async (req, res) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: "Error saving project" });
  }
});

/* ================== GET ALL PROJECTS ================== */
app.get("/projects", async (req, res) => {
  try {
    const data = await Project.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects" });
  }
});

/* ================== GET SINGLE PROJECT ================== */
app.get("/projects/:id", async (req, res) => {
  try {
    const data = await Project.findById(req.params.id);
    if (!data) return res.status(404).json({ error: "Project not found" });
    res.json(data);
  } catch {
    res.status(500).json({ error: "Error fetching project" });
  }
});

/* ================== UPDATE PROJECT ================== */
app.put("/projects/:id", async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

/* ================== DELETE PROJECT ================== */
app.delete("/projects/:id", async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

// console.log("CLOUD:", process.env.CLOUD_NAME);
// console.log("KEY:", process.env.API_KEY);
// console.log("SECRET:", process.env.SECRET_KEY);

/* ================== START SERVER ================== */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});