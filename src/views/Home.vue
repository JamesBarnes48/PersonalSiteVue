<script>
import SkillsPanelList from '../components/SkillsPanelList.vue';
import AboutMe from '../components/AboutMe.vue';

export default {
  name: 'Home',
  components: {SkillsPanelList, AboutMe},
  setup(props){
    //static data
    const skills = [
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
      skillStyle: 'c',
      iconImport: ['fas', 'c'],
      skillDesc: `I only got to do a few projects in C++ but they were all certainly memorable ones. It is very similar to C# which I had experience
                  using early on during my A-levels. I enjoyed using some of the features in standard, low-level C++ that you don't see many other places, but on the other end of the spectrum I have also used the OpenGL API
                  which was insightful too. I am still a relatively new C++ programmer but my proficiency in it will only grow with time.`,
      listDescription: 'Some C++ projects I have worked on include:',
      listItems: ['Offline movie database', '2D arcade game']
    }];

    return {
      skills,
    };
  }
}
</script>

<template>
  <div class="homepage-container">
    <div class="title-container">
      <p id="nameTitle">I'm James.</p>
      <p class="title-subheading">web developer</p>
    </div>

    <AboutMe />
    <SkillsPanelList :skillsList="skills" />

    <div class="stats-container">
      <h2 class="subheading">My Stats</h2>
      <p>circa Jan 2025</p>
      <div class="stats-grid">
        <div class="stats-child">
          <h3 class="stat-name">Years as professional dev:</h3>
          <h2 class="stat-metric">3</h2>
        </div>
        <div class="stats-child">
          <h3 class="stat-name">Merge requests successfully deployed:</h3>
          <h2 class="stat-metric">296</h2>
        </div>
        <div class="stats-child">
          <h3 class="stat-name">Other people's merge requests reviewed and successfully deployed:</h3>
          <h2 class="stat-metric">394</h2>
        </div>
        <div class="stats-child">
          <h3 class="stat-name">Major projects lead:</h3>
          <h2 class="stat-metric">4</h2>
        </div>
        <div class="stats-child">
          <h3 class="stat-name">Countries visited:</h3>
          <h2 class="stat-metric">10</h2>
        </div>
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
  
  #nameTitle {
    font-size: 70px;
    font-weight: bold;
    margin-top: 0px;
    color: var(--main-hex);
  }

  .stats-container{
    margin: 5% 10%;
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

    .homepage-container{
      margin-left: 35px;
    }

    .stats-container {
      margin: 2% 3% 0 3%;
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

    .title-container{
      height: 200px;
    }

    #nameTitle {
      font-size: 50px;
    }

    .title-subheading {
      font-size: 24px;
    }
  }

  @media (max-width: 960px){
    .homepage-container{
      margin-left: 0px;
    }
  }
</style>