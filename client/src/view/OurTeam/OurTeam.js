import React, { Fragment, useState, useEffect } from "react";
import {Image, Grid, Segment, Button} from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";
import { Spinner } from "react-activity";
import './OurTeam.css';
import {TeamMembers} from './TeamMembers'



const OurTeam = (props) => {

  const path = config();
  //const { userInfo, setUserInfo } = useContext(UserContext);

  
  const [loading, setLoading] = useState(true);
  const [users, setUsers ] = useState([])

  // when click create new project, jump to create-project page
  // const handleCreateNewProject = () => {
  //   props.history.push("/create-project");
  // };

  useEffect(() => {



Axios.get(path + "ourTeam/all", {})



.then((res) => {



console.log(res.data);



return res.data;





})



.then((data) => {



setUsers(data);



setLoading(false);



})



.catch((e) => {



console.log(e);



});



}, []);

  return (
     <>



      {



        loading ?



        <div className="loadingState">



          <Spinner color="#727981" size={35} speed={1} animating={true} />



        </div>



        :


      <div>
        <h1>Welcome to OUR TEAM Page of Professional Development Club, uOttawa</h1>
      
        <div className='wrapper'>

          

          {

              users.map((user) => {



            return (
              
                <div key={user._id} className="card">
                  <div className="body">
                    <img src={"/assets/pdcimage.png"} alt={user.name} className='photo' />
                    <h2 className="title">
                      {user.name}</h2>
                      <h2 className="description">
                        {user.position}
                      </h2>
                  </div> 
                  <button className="btn">
                    <a href={user.linkedIn } target="_blank"><Image src={"/assets/linkedin.png"}  id="socialMediaIcon"/></a>
              <a href={"mailto:"+ user.email} target="_blank"> <Image src={"/assets/outlook.png"}  id="socialMediaIcon"/></a>
                  </button>

                  
                </div>
                 
            //  <article key={user._id} className='menu-item'>
            //     <img src={user.image} alt={user.name} className='photo' /> 
              
            //   <div className='item-info'>
            //     <header>
            //       <h4>{user.name}</h4>
            //     </header>
                

            //     <h3>{user.position}</h3>

            //     <h4>{user.linkedIn}</h4>

            //    </div>  
            //   </article> 

            )



          })}



                



        </div>
       </div> 



      }


    </>
  );
  // const [loading, setLoading] = useState(true);
  // const [isError, setError] = useState(false);
  // const [user, setUser] = useState('default user');

  // useEffect(()=> {
  //   fetch(url)
  //       .then((resp) => resp.json())
  //       .then((user) => console.log(user))
  //       .catch((error) => console.log(error));
  // }, [])

  // if (loading) {
  //   return (
  //     <div>
  //        <h2>Loading...</h2>;
  //     </div>
  //   );  
  // }
  // if (isError) {
  //   return (
  //     <div>
  //        <h2>Error...</h2>;
  //     </div>
  //   );
  // }
  // return <div>
  //   <h1>{user}</h1>
  // </div> 

  //return <h2>multiple returns</h2>
  //const InitialArray = new Array([10]);
  // const getUsers = async () => {
  //   const response = await fetch(url);
  //   const users = await response.json();
  //   console.log(users);
  // }
  //   for (let i = 0; i < 10; i++) {
  //   InitialArray[i] = "Show bios";
  // }
  // const [bios, setbios] = useState(InitialArray);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [index, setIndex] = useState(-1);

  // const handleClick = (e, titleProps) => {
  //   // setIndex(titleProps.index);
  //   const { index } = titleProps;
  //   let newIndex;
  //   if (activeIndex === index) {
  //     newIndex = -1;
  //     bios[index] = "Show bios";
  //   } else {
  //     newIndex = index;
  //     bios[activeIndex] = "Show bios";
  //     bios[newIndex] = "Hide bios";
  //   }
  //   setActiveIndex(newIndex);
  // };
  

  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={4} stackable textAlign="center">
          <Grid.Row>
            {TeamMembers.map((teamMember,index)=><Grid.Column  id="column">
              <Image id={index} centered src={teamMember.imagePath} id="image"/>
              <h3>{teamMember.name}</h3>
              <h3>{teamMember.position}</h3>
              <div  id="socialMediaIconsContainer">
              <a href={teamMember.linkedinId } target="_blank"><Image src={"/assets/linkedin.png"}  id="socialMediaIcon"/></a>
              <a href={"mailto:"+ teamMember.mailId} target="_blank"> <Image src={"/assets/outlook.png"}  id="socialMediaIcon"/></a>
              </div>
            </Grid.Column>)}
          </Grid.Row>
            <Grid.Row id="contentContainer">
              <h1>PDC STUDENT REPRESENTATIVES</h1>
              <p>
                Student Reps primarily represent matters relating to the academic experience of their cohort and relating to the impact of the more comprehensive student experience on academic issues and make sure that the voice and feedback of the University and the Students Union are taken and utilized, thus creating a real difference at the course level, but also have many wins across their departments and beyond!
              </p>
              <div id="buttons-container">
              <Button primary color="blue" onClick={()=>window.location.href='#/program-coordinators'}>
                Meet Your PDC Student Representative
              </Button>
              </div>
            </Grid.Row>
            <Grid.Row id="contentContainer">
              <h1>PDC VOLUNTEERS</h1>
              <p>
                Whether you want to learn a new skill, meet new people, experience something meaningful, or help where help is needed, volunteer opportunities at PDC,uOttawa is as diverse as people who fill them. Donating your time, energy, and possibly resources can be just as rewarding for you as for those you are helping. Get to connect with the student community, make it a better place, expand your network, and boost your social skills.
                <b>There's no better time than now to join the team!</b>
              </p>
              <div id="buttons-container">
              <Button primary color="blue" onClick={()=>window.location.href='#/volunteers'} id="meetVolunteersButton">
                Meet Our Volunteers
              </Button>
              <Button primary color="blue" onClick={()=>window.open('https://forms.office.com/r/R7kBcQbnvX','_blank')} >
                Join the team
              </Button>
              </div>
            </Grid.Row>
            <Grid.Row>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default OurTeam;
