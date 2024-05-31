<script>
import SkillsPanelList from '../components/SkillsPanelList.vue';

export default {
  name: 'Home',
  components: {SkillsPanelList},
  data: () => ({
    skills: [
    {
      skillName: 'Java',
      skillDesc: 'As my primary language I have spent the most time with Java. Throughout my degree Java has been the language I use most often by far and I have created lots of different projects in it. The object oriented nature of the language resonates with me and I am capable of creating large projects in it with a hierarchy of classes.',
      listDescription: 'Some of projects I have made in Java include:',
      listItems: ['"Cheat" card game', 'Word auto-completion algorithm', 'Toll road system']
    },
    {
      skillName: 'C++',
      skillDesc: `I am relatively new to C++, only starting learning it in late 2019, but after a few projects using it I am seeing the merits of it already. It is very similar to C# which I had experience
                  using early on during my A-levels. I enjoyed using some of the features in standard, low-level C++ that you don't see many other places, but on the other end of the spectrum I have also used the OpenGL API
                  which was insightful too. I am still a relatively new C++ programmer but my proficiency in it will only grow with time.`,
      listDescription: 'Some C++ projects I have worked on include:',
      listItems: ['Offline movie database', '2D arcade game']
    },
    {
      skillName: 'Web Development',
      skillDesc: `First touching on web development in the first year of my degree, I gained a basic understanding of HTML, CSS and Javascript then to create a website for renting a fictional house.
                  Since then I have returned to web development in the summer of 2020 to expand my knowledge of it and create websites as a passion project. In this time I have delved deeper
                  into web development expanding my knowledge of HTML/CSS/JS, using the Bootstrap library, jQuery, DOM manipulation and more.`,
      listDescription: 'Some websites I have created include:',
      listItems: ["Personal site (you're looking at it now!)", 'Virtual garage']
    }]
  })
  }
</script>

<template>
    <div class="top-container">
      <p id="nameTitle">I'm James.</p>
      <p id="professionTitle" class="title-subheading">web developer</p>
      <img class="waterscape" src="@/assets/images/waterscape.jpg" alt="">
    </div>
  
    <div class="middle-container">
      <div id="profile">
        <img id="imageOfMe" src="@/assets/images/me.jpg" alt="Photo of Me">
        <h2 class="section-heading">Hello!</h2>
        <p>A chap with a particular affinity for all things digital. Hooked on Super Mario from a young age and a controller in my hand ever since.
           Equipped with a pop culture reference for any occasion and a connoisseur of the coffee break at the office. I am anything but your average software developer.</p>
  
        <h2 class="subheading"> What am I up to?</h2>
        <p>This fine website you see before you was first born at the end of my degree. Seems like a long time ago! </p>
        <p>After completing my BSc Computer Science and graduating with 2.1 honours at UEA I have enjoyed great opportunities in working as a Javascript developer at Darktrace where I remain today.
          I've had a chance to put my skills to practice as well as pick up a few new ones. I have finally learned how to use git properly for starters (about time I learned there are branches other than master!)
          as well as working with some more advanced tools you might encounter when working in industry and peer reviewing work done by others. With a bit of graft I've found myself reaping benefits!</p>
        <p>From Python to C, from SQL to ARM assembly code, I have had some experience working with plenty of different languages. While I may be a web developer, mainly I have most experience in:</p>
      </div>  

      <SkillsPanelList :skillsList="skills" />
  
      <div class="homepage-section">
        <h2 class="subheading">My Stats</h2>
        <p>circa May 2024</p>
        <div class="stats-grid">
          <div class="stats-child">
            <h3 class="stat-name">Years as professional dev:</h3>
            <h2 class="stat-metric">3</h2>
          </div>
          <div class="stats-child">
            <h3 class="stat-name">Merge requests successfully deployed:</h3>
            <h2 class="stat-metric">224</h2>
          </div>
          <div class="stats-child">
            <h3 class="stat-name">Other people's merge requests reviewed and successfully deployed:</h3>
            <h2 class="stat-metric">390</h2>
          </div>
          <div class="stats-child">
            <h3 class="stat-name">Major projects lead:</h3>
            <h2 class="stat-metric">3</h2>
          </div>
          <div class="stats-child">
            <h3 class="stat-name">Countries visited:</h3>
            <h2 class="stat-metric">8</h2>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .homepage-section{
    margin: 5% 10% 0 10%;
  }
  
  .basic-button {
    display: block;
    margin: 2% auto;
  }
  
  /* Overriding btn-primary to the teal colour scheme */
  .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
      background-color: var(--main-hex) !important;
      border-color: black !important;
  }
  
  
  /* Intro */
  
  .title-subheading {
    color: var(--off-main-hex);
    font-family: 'Montserrat', serif;
    font-size: 2rem;
    margin-top: 40px;
  }
  
  .waterscape {
    display: block;
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }
  
  
  #nameTitle {
    font-size: 60px;
    font-weight: bold;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 0px;
    z-index: 2;
  }
  
  #professionTitle{
    font-size: 38px;
    font-weight: bolder;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 41%;
    z-index: 2;
  }
  
  #imageOfMe {
    border-radius: 30%;
    height: 280px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /*Language List*/
  
  .lang-list {
    font-family: 'Montserrat';
    font-weight: bolder;
    list-style: none;
  }
  
  .languages-heading {
    font-family: 'Montserrat';
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--main-hex);
    text-decoration: none;
  }
  
  
  /* Stats */
  
  .stats-grid{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
  }
  
  .stats-child{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 30%;
    padding: 10px 8px;
    margin: 10px 10px;
    background-color: whitesmoke;
    border: 1px solid var(--off-main-hex);
  }
  
  .stat-name{
    font-size: 1.2rem;
    color: black;
  }
  
  .stat-metric{
    color: var(--main-hex);
    font-weight: bolder;
  }
  
  .stat-metric.small{
    font-size: 1.5rem;
  }
  
  @media (max-width: 1250px){
    .homepage-section {
        margin: 2% 3% 0 3%;
      }
      
      .title-subheading {
        font-size: 1.9rem;
      }
  
      .languages-heading {
        font-size: 2rem;
      }
  
      #nameTitle{
        top: 5%;
        font-size: 4.2rem;
      }
  
      #professionTitle{
        bottom: 34%;
        font-size: 2.5rem;
      }
  
      #imageOfMe{
        height: 320px;
      }
  }
  </style>