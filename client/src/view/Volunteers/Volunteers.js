import React, { Fragment } from "react";
import { Card } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import "./Volunteers.css";
import Footer from "../Footer/Footer";
const EventManagementTeam = [
  { name: "Monika Gwalani", mail: "mgwal097@uottawa.ca" },
  { name: "Nimish Aggarwal", mail: "nagga078@uottawa.ca" },
  { name: "Tarini Sood", mail: "tsood097@uottawa.ca" },
  { name: "Kajari Talukdar", mail: "ktalu006@uottawa.ca" },
  { name: "Sai Supraja Nemmani", mail: "snemm013@uottawa.ca" },
  { name: "Georges Abou Gebrayel", mail: "gabou045@uottawa.ca" },
  { name: "Jiafeng Li", mail: "jli740@uottawa.ca" },
  { name: "Rishi Kumar Pandey", mail: "rpand104@uottawa.ca" },
  { name: "Simranjeet Singh", mail: "ssing327@uottawa.ca" },
  { name: "Gurjot Singh", mail: "gsing163@uottawa.ca " },
  { name: "Binit Pati", mail: "bpati033@uottawa.ca  " },
];

const MarketingTeam = [
  {
    name: "Rhema Kirby",
    mail: "rkirb063@uottawa.ca",
  },
  {
    name: "Rishi Kumar Pandey",
    mail: "rpand104@uottawa.ca",
  },
  
 
];
const ProjectManagementTeam = [
  {
    name: "Chinmayee Mahagaonkar",
    mail: "cmaha026@uottawa.ca",
  },
  {
    name: "Chirag Virmani",
    mail: "cvirm042@uottawa.ca",
  },
  {
    name: "Shubhneet",
    mail: "sbaat080@uottawa.ca",
  },
  {
    name: "Roopleen",
    mail: "rkaur050@uottawa.ca",
  },
  {
    name: "Fahim",
    mail: "mfahi009@uottawa.ca",
  },
  {
    name: "Farzaneh",
    mail: "",
  },
    {
    name: "Akansha",
    mail: "",
  },
  {
    name: "Rahul",
    mail: "rgand061@uottawa.ca",
  },
  {
    name: "Roshni Prakash",
    mail: "rdesa045@uottawa.ca",
  },
  {
    name: "Alfa Budiman",
    mail: "abudi097@uottawa.ca",
  },
  {
    name: "Yueyang Liu",
    mail: "yliu661@uottawa.ca",
  },
   {
    name: "Zahra Lotfi",
    mail: "zlotf035@uottawa.ca",
  },
  {
    name: "Claudia Azigwe",
    mail: "cazig063@uottawa.ca",
  },
  
 
];
const SocialMediaTeam = [
  { name: "Abhishek Xavier", mail: "axavi032@uottawa.ca" },
  { name: "Sapana Kharod", mail: "skhar1010@uottawa.ca" },
  { name: "Krishna raviteja Maddali", mail: "kmadd080@uottawa..ca" },
  
];


const CareerDevelopmentTeam = [
  { name: "Twinkle Rane", mail: "trane011@uottwa.ca" },
  { name: "Melika Ataebi", mail: "matae007@uottwa.ca" },
  { name: "Raja Vignesh Srinivasan", mail: "rsrin014@uottawa.ca" },
  { name: "Sreeja Guttala", mail: "sgutt043@uottawa.ca" },
  { name: "Likhit Nagaraju", mail: "lnaga072@uottawa.ca" },
  { name: "Hamidreza Salaripoor", mail: "hsala098@uottawa.ca" },
  { name: "Heena Savaliya", mail: "hsava019@uottawa.ca" },
  { name: "Ajender Dhillon", mail: "adhil030@uottawa.ca" },
  { name: "Subash Kashyap", mail: "skash016@uottawa.ca" },
  { name: "Shraddha Tupe", mail: "stupe025@uottawa.ca " },
  { name: "Anahad Pandey", mail: "apand074@uottawa.ca " },
  { name: "Karthik Panyam", mail: "kpany032@uottawa.ca" },

];
const ProgramCoordinatorTeam = [
  { name: "Syed Zain Ul Abideen", mail: "szain018@uottawa.ca" },
  { name: "Akshay Agrawal", mail: "aagra069@uottawa.ca" },
  { name: "Yuting Cao", mail: "ycao053@uottawa.ca" },
  { name: "Shivani Deshmukh", mail: "sdesh024@uottawa.ca" },
  { name: "Shaniasadat Shojaee", mail: "sshoj065@uottawa.ca" },
  { name: "Samhita Kuili", mail: "skuil016@uottawa.ca" },
  { name: "Simranjeet Singh", mail: "ssing327@uottawa.ca" },
  { name: "Gursimrat Singh", mail: "gsing152@uottawa.ca" },
  { name: "Jiafeng Li", mail: "jli740@uottawa.ca" },
  { name: "Nimish Aggarwal", mail: "nagga078@uottawa.ca" },
  { name: "Avneet Kaur", mail: "akaur039@uottawa.ca" },
  { name: "Abhishek Singh Chauhan", mail: "achou085@uottawa.ca" },
  { name: "Golnoosh Babajamaaty", mail: "gbaba030@uottawa.ca " },
  { name: "Elnaz Majidian", mail: "elnaz.majidian@uottawa.ca" },

];


const VolunteerManagementTeam = [
  
  {
    name: "Mostafa Bigdeli",
    mail: "mbigd068@uottawa.ca",
  },
  {
    name: "Harshitha KV",
    mail: "fhars091@uottawa.ca",
  },
  {
    name: "Gurjot Singh",
    mail: "gsing163@uottawa.ca",
  },
  {
    name: "Sakshi",
    mail: "ssaks071@uottawa.ca",
  },
  {
    name: "Sahil Kapoor",
    mail: "skapo058@uottawa.ca",
  },
  
];
const WebsiteTeam = [
  { name: "Anahad Pandey", mail: "apand074@uottawa.ca" },
  { name: "Amneet Singh", mail: "asing288@uottawa.ca" },
  { name: "Khushpreet Kaur", mail: "kkaur025@uottawa.ca" },
  { name: "Ripple Deep Singh", mail: "rkale087@uottawa.ca" },
  { name: "Gursimrat Singh", mail: "gsing152@uottawa.ca" },
  { name: "Xueyao Wang", mail: "xwang531@uottawa.ca" },
];
const Volunteers = (props) => {
  return (
    <div>
      <Helmet>
        <title>Volunteers | Professional Development Club</title>
      </Helmet>
      <h1 class="ui center aligned huge header teams-section">
        Event Management Team
      </h1>
      <Card.Group centered="true">
        {EventManagementTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 class="ui center aligned huge header teams-section">
        Career Development Team
      </h1>
      <Card.Group centered="true">
        {CareerDevelopmentTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
        </Card.Group>
        <h1 class="ui center aligned huge header teams-section">
        Program Coordinator Team
      </h1>
      <Card.Group centered="true">
        {ProgramCoordinatorTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
        </Card.Group>
      <h1 class="ui center aligned huge header teams-section">
        Project Management Team
      </h1>
      <Card.Group centered="true">
        {ProjectManagementTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Marketing Team
      </h1>
      <Card.Group centered="true">
        {MarketingTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
        
        
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Social Media Team
      </h1>
      <Card.Group centered="true">
        {SocialMediaTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      
      <h1 className="ui center aligned huge header teams-section">
        Volunteer Management Team
      </h1>
      <Card.Group centered="true">
        {VolunteerManagementTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <h1 className="ui center aligned huge header teams-section">
        Website Team
      </h1>
      <Card.Group centered="true">
        {WebsiteTeam.map((programCoordinator) => (
          <Card color="blue">
            <Card.Content>
              <Card.Header>{programCoordinator.name}</Card.Header>
              <Card.Description>
                Email: {programCoordinator.mail}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
     
    </div>
  );
};

export default Volunteers;
