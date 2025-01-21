<script>
import {ref} from 'vue';
import { useDisplay } from 'vuetify';

export default {
    name: 'AboutMe',
    setup(props){
      const aboutMe = [
        'A fellow with an affinity for all things digital.',
        'From my humble origins as a young pioneer among the iPad kid movement to today where my love affair with a white Japanese box (aka PS5) under my TV yet persists.',
        'Equipped with a pop culture reference for any occasion and a connoisseur of the office tea break. I am anything but your average software developer.'
      ];

      return {
        aboutMe
      };
    }
}
</script>

<template>
    <div class="about-me-container">
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
        <p>{{ aboutMe[0] }}</p>
        <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
        <p>{{ aboutMe[1] }}</p>
        <v-icon class="star-icon" icon="mdi-star-circle"></v-icon>
        <p>{{ aboutMe[2] }}</p>
      </div>
      <div v-else class="text-container">
        <p><v-icon class="star-icon" icon="mdi-star-circle"></v-icon>{{ aboutMe[0] }}<v-icon class="star-icon" icon="mdi-star-circle"></v-icon></p>
        <p>{{ aboutMe[1] }}</p>
        <p>{{ aboutMe[2] }}</p>
      </div>
      
      <div>
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
</template>

<style scoped>
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

  .about-me-container{
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
  
  @media (max-width: 1280px){
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
</style>