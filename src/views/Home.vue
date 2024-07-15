<script>
import SkillsPanelList from '../components/SkillsPanelList.vue';

export default {
  name: 'Home',
  components: {SkillsPanelList},
  data: () => ({
    skills: [
    {
      skillName: 'Core Web Development',
      skillStyle: 'webdev',
      iconImport: ['fas', 'globe'],
      skillDesc: `First touching on web development in the first year of my degree, I gained a basic understanding of HTML, CSS and Javascript then to create a website for renting a fictional house.
                  Since then I have returned to web development in the summer of 2020 to expand my knowledge of it and create websites as a passion project. In this time I delved deeper
                  into web development expanding my knowledge of HTML/CSS/JS, using the Bootstrap library and jQuery.
                  We have fancy frameworks and everything but if your core knowledge is weak the foundations will crumble. I have ensured this isn't the case.`,
      listDescription: 'Some websites I have created include:',
      listItems: ["Personal site", 'Virtual garage']
    },
    {
      skillName: 'Vue',
      skillStyle: 'vue',
      iconImport: ['fab', 'vuejs'],
      skillDesc: `There's a plethora of fancy frameworks to choose from now: React, Vue, Angular. It's the most pressing question for the modern Javascript dev; which do you choose?
                  I had the opportunity to learn Vue.js at Darktrace as I was tasked with migrating a page from vanilla JS into another application written in PHP/Vue. This meant essentially
                  learning Vue and PHP as I went. PHP I was definitely not as huge a fan of but Vue I took to like a duck to water. So streamlined! So handy! It's definitely my favourite way to code right now.
                  I even rewrote my site to be in Vue which is the version you are seeing now!`,
      listDescription: 'Some Vue projects I have worked on include:',
      listItems: ['Current personal site', 'Migrated page']
    },
    {
      skillName: 'Java',
      skillStyle: 'java',
      iconImport: ['fab', 'java'],
      skillDesc: 'As my primary language at university I have spent the most time with Java. Throughout my degree Java has been the language I use most often by far and I have created lots of different projects in it. The object oriented nature of the language resonates with me and I am capable of creating large projects in it with a hierarchy of classes.',
      listDescription: 'Some of projects I have made in Java include:',
      listItems: ['"Cheat" card game', 'Word auto-completion algorithm', 'Toll road system']
    },
    {
      skillName: 'C++',
      skillStyle: 'c++',
      skillDesc: `I only got to do a few projects in C++ but they were all certainly memorable ones. It is very similar to C# which I had experience
                  using early on during my A-levels. I enjoyed using some of the features in standard, low-level C++ that you don't see many other places, but on the other end of the spectrum I have also used the OpenGL API
                  which was insightful too. I am still a relatively new C++ programmer but my proficiency in it will only grow with time.`,
      listDescription: 'Some C++ projects I have worked on include:',
      listItems: ['Offline movie database', '2D arcade game']
    }]
  }),
  computed: {
        isMobile(){
            return ['xs', 'sm'].includes(this.$vuetify.display.name)? true: false;
        }
    },
  }
</script>

<template>
    <div class="title-container">
      <p id="nameTitle">I'm James.</p>
      <p class="title-subheading">web developer</p>
    </div>
  
    <div class="profile-container">
      <div class="me-container">
        <img id="imageOfMe" src="@/assets/images/me.jpg" alt="Photo of Me">
        <v-icon 
          icon="mdi-star-four-points-outline" 
          class="shimmer-icon"
          color="white"
          :size="isMobile? '7px': '9px'"
          ></v-icon>
      </div>
      <h2 class="section-heading">Hello!</h2>
      <div v-if="isMobile" class="text-container">
        <p>A fellow with an affinity for all things digital.</p>
        <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
        <p>From my humble origins as a young pioneer among the iPad kid movement to today where my love affair with a Japanese white box under my TV yet persists.</p>
        <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
        <p>Equipped with a pop culture reference for any occasion and a connoisseur of the office tea break. I am anything but your average software developer.</p>
      </div>
      <div v-else class="text-container">
        <p><v-icon class="star-icon" icon="mdi-star-circle"></v-icon>A chap with an affinity for all things digital.<v-icon class="star-icon" icon="mdi-star-circle"></v-icon></p>
        <p>From my humble origins as a young pioneer among the iPad kid movement to today where my love affair with a Japanese white box under my TV yet persists.</p>
        <p>Equipped with a pop culture reference for any occasion and a connoisseur of the office tea break. I am anything but your average software developer.</p>
      </div>

      <div class="home-text-section">
        <h2 class="subheading"> What am I up to?</h2>
        <div class="text-container">
          <p>This fine website you see before you was first born at the end of my degree. Seems like a long time ago! </p>
          <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
          <p>After graduating with my Bachelors degree in Computer Science at UEA I have enjoyed great opportunities in working as a full stack developer at Darktrace where I remain today.</p>
          <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
          <p>I've had the chance to greatly enhance my skills at software engineering by developing and maintaining bespoke CRM software all the way from tasking up the ticket to deploying it.</p>
          <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
          <p>I've been taking the opportunity to travel to as many places as I can. Krakow, Edinburgh and Cologne so far this year!</p>
          <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
          <p>On top of all this I have even been practicing hard to be able to make the perfect loaf of bread! Rest assured I have been busy.</p>
        </div>
      </div>
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
  </template>
  
  <style scoped>
  .title-container{
    background-image: url("@/assets/images/waterscape.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 450px;
  }

  .title-subheading {
    color: var(--off-main-hex);
    font-family: 'Montserrat', serif;
    font-size: 36px;
    font-weight: bolder;
  }

  .star-icon {
    margin: 0 20px;
    font-size: 18px;
    color: black;
    animation-name: starShimmer;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  @keyframes starShimmer {
    0%   {color: black;}
    60%  {color: black;}
    80% {color: var(--main-hex);}
    100% {color: black;}
  }
  
  #nameTitle {
    font-size: 70px;
    font-weight: bold;
    margin-top: 0px;
    color: var(--main-hex);
  }
  
  #imageOfMe {
    border-radius: 30%;
    height: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  .me-container{
    margin: auto;
    width: fit-content;
    position: relative;
  }

  @keyframes toothShimmer {
    0%   {opacity: 0;}
    50%  {opacity: 1;}
    100% {opacity: 0;}
  }

  .shimmer-icon{
    position: absolute;
    bottom: 169px;
    right: 136px;
    opacity: 0;
  }

  .me-container:hover > .shimmer-icon{
    animation-name: toothShimmer;
    animation-duration: 0.6s;
  }

  .text-container{
    border: 1px solid var(--main-hex);
    background-color: white;
    padding: 7px 10px;
  }

  .text-container p{
    margin: 7px 0;
  }

  @media (max-width: 1280px){
    .title-container{
      height: 200px;
    }

    #nameTitle {
      font-size: 53px;
    }

    .title-subheading {
      font-size: 24px;
    }

    #imageOfMe{
      height: 200px;
    }

    .shimmer-icon{
      bottom: 125px;
      right: 95px;
    }

    .star-icon{
      font-size: 20px;
    }
  }

  .homepage-section{
    margin: 5% 10% 0 10%;
  }

  .profile-container{
    background-color: var(--background-hex);
    border-top: 2px solid var(--main-hex);
    border-bottom: 2px solid var(--main-hex);
    padding: 20px 30px;
  }
  
  .section-heading {
    color: var(--main-hex);
    font-family: 'Montserrat', serif;
    font-size: 2rem;
    margin: 35px 0;
    font-weight: bold;
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
  
  @media (max-width: 1280px){
    .homepage-section {
      margin: 2% 3% 0 3%;
    }
  
    #professionTitle{
      bottom: 34%;
      font-size: 2.5rem;
    }

    .stats-child{
      width: 40%;
    }

    .stat-name{
      font-size: 0.9rem;
    }

    .stat-metric{
      font-size: 1.3rem;
    }
  }
  </style>