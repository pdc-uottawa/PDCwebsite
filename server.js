const express = require("express");
const database = require("./shared/config/Database");
const morgan = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passportSetup = require("./shared/config/Passport");
const passport = require("passport");
const homeRoutes = require("./shared/routes/HomeRoute");
const authRoutes = require("./shared/routes/Auth");
const projectRoutes = require("./shared/routes/ProjectRoute");
const studentRoutes = require("./shared/routes/StudentRoute");
const uploadRoutes = require("./shared/routes/Upload");
const eventRoutes = require("./shared/routes/EventRoute");
const userRoutes = require("./shared/routes/UserRoute");
const sendEmailRoutes = require("./shared/routes/SendEmailRoute");
const cdcRoutes = require("./shared/routes/cdcRoute");
const ProgramCoordinatorRoutes = require("./shared/routes/programCoordinatorRoute");
const volunteerRoutes = require("./shared/routes/volunteersRoute");
const alumniRoutes = require("./shared/routes/alumniRoute");
const ourTeamRoutes = require("./shared/routes/ourTeamRoute");
const joinOurTeamFormRoutes = require("./shared/routes/joinOurTeamFormRoute");
const ourVolunteerRoutes=require("./shared/routes/ourVolunteerRoute")
const studentAssociationRoutes=require("./shared/routes/studentAssociationRoute")
const fswepProgramRoutes=require("./shared/routes/fswepProgramRoute")
const FAQRoutes=require("./shared/routes/FAQRoute")
const http = require("https");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const { notFound } = require("./shared/routes/utils")
require('dotenv').config()




const app = express();

const PORT = process.env.PORT || 8080; //Step 1

if (process.env.NODE_ENV === "production") {
  console.log("dir name", __dirname);
  app.use("/", express.static(path.join(__dirname, "/client/build")));
}

app.all("*", function (req, res, next) {
  if (process.env.NODE_ENV !== "production") {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");

  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// use cookie-session to encrypt user.id
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.cookieKey],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

// use application/json to submit data
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

app.use(passport.initialize());
app.use(passport.session());

// log output
app.use(morgan("combined"));

// auth router
app.use("/home", homeRoutes);
app.use("/auth", authRoutes);
app.use("/", projectRoutes);
app.use("/student", studentRoutes);
app.use("/file", uploadRoutes);
app.use("/", eventRoutes);
app.use("/user", userRoutes);
app.use("/email", sendEmailRoutes);
app.use("/cdc", cdcRoutes);
app.use("/volunteers", volunteerRoutes);
app.use("/coordinators", ProgramCoordinatorRoutes);
app.use("/alumni", alumniRoutes);
app.use("/ourTeam", ourTeamRoutes);
app.use("/form", joinOurTeamFormRoutes);
app.use("/ourVolunteers", ourVolunteerRoutes);
app.use("/studentAssociations", studentAssociationRoutes);
app.use("/fswepPrograms",fswepProgramRoutes);
app.use("/FAQs", FAQRoutes)
app.use(function(req, res, next) {
    return res.status(404).send(notFound);
});

app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));
