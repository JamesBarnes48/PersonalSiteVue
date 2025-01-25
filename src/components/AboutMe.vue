<script>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

export default {
    name: 'AboutMe',
    setup(props){
      const aboutMe = [
        'Hello! I\'m James and I am a software engineer from Norfolk, England. I studied Computer Science at UEA and in my free time you can find me up to all sorts: from baking bread to lifting weights. I\'ve a soft spot for history and heritage and I am a fiend for a city break, be it in the UK or abroad. Really though I\'m a simple guy who loves the pub and loves his PS5.',
        'I am a full-stack engineer although recently I have found myself more on the frontend in my role as Product UI Software Engineer at Darktrace. At uni I got my hands on all kinds of technologies; I learned about data structures and algorithms in Java, got my head around Python machine learning libraries and even getting neck-deep in logic and state machines to make a digital traffic light controller. After this I knew I wanted to pursue engineering web applications. My ideal stack is a total Javascript-fest: Node on the back and Vue/React on the front. Sounds good to me!',
      ];

      const display = useDisplay();

      // Computed property for isMobile
      const isMobile = computed(() => {
          return ['xs', 'sm'].includes(display.name.value);
      });

      return {
        aboutMe,
        isMobile
      };
    }
}
</script>

<template>
  <div class="about-me-container">
    <h2 class="about-title">About</h2>
    <div class="divider"></div>
    <v-row class="about-me-row">
      <v-col lg="4" md="4" sm="12" xs="12">{{ aboutMe[0] }}</v-col>
      <v-col class="me-column" lg="4" md="4" sm="12" xs="12">
        <div class="me-container">
          <img id="imageOfMe" src="@/assets/images/me.jpg" alt="Photo of Me">
          <v-icon 
            icon="mdi-star-four-points-outline" 
            class="shimmer-icon"
            color="white"
            :size="isMobile? '7px': '9px'"
            ></v-icon>
        </div>
      </v-col>
      <v-col lg="4" md="4" sm="12" xs="12">{{ aboutMe[1] }}</v-col>
    </v-row>
  </div>
</template>

<style scoped>

  .about-me-container{
    background-image: url("@/assets/images/AboutMeBanner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    border-top: 2px solid var(--off-main-hex);
    border-bottom: 2px solid var(--off-main-hex);
    padding: 20px 35px;
  }

  .about-title{
    font-family: 'Montserrat', serif;
    font-size: 2.2rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px black;
  }

  .divider{
    height: 6px;
    width: 90%;
    margin: auto;
    background-color: white;
  }

  .about-me-row{
    margin: 6px 15px;
    text-align: left;
    font-size: 1rem;
  }

  .about-me-row .v-col{
    color: white;
    font-size: 18px;
    line-height: 1.7;
    text-shadow: 1px 1px 2px black;
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
  
  #imageOfMe {
    border-radius: 30%;
    height: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  .me-container{
    margin: auto;
    position: relative;
  }

  .me-column{
    display: flex;
    align-items: center;
    justify-items: center;
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
  
  @media (max-width: 1280px){
    #imageOfMe{
      height: 255px;
    }

    .shimmer-icon{
      bottom: 155px;
      right: 122px;
    }

    .star-icon{
      font-size: 20px;
    }

    .about-me-row{
      margin-right: 7px;
    }

    .about-me-row .v-col{
      font-size: 16px;
    }

    @media (max-width: 960px){
      #imageOfMe{
        height: 215px;
      }

      .shimmer-icon{
        bottom: 128px;
        right: 103px;
      }
    }
  }
</style>