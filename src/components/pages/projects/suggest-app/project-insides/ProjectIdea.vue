<script lang="ts" setup>
</script>

<template>
  <div id="project-idea">
    <h2 class="heading">The <span>Power</span> of <span>Music Connection</span>:<br> The Idea behind <span>comparing track histories</span></h2>

    <img
        class="wireframes-bc"
        src="@/assets/images/Suggest_App_Wireframes.png"
        alt="Portfolio Rebalancing Tool Wireframes"
    />

    <p>
      Our app is all about bringing people together through the power of music. With the increasing popularity of streaming services like Spotify, it's easier than ever to access a wide range of music from all over the world. But with so much choice, it can be difficult to find new Songs that really matches your taste in musik. That's where our app comes in. Our app tracks and compares the Spotify song history of all users in order to match people who have the most similar taste in music. Our app than can suggest tunes that one user loves but the other user may not have heard of. This not only helps expand each user's musical horizons, but also creates a platform for people to connect based on their shared love of music.
    </p>

    <a
        class="button"
        href="#"
        title="#"
    >Explore more</a>

  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/pages/projects/rebalancing-tool/project-insides/project-idea.scss";

@media only screen and (min-width: 768px) {
  #project-idea .wireframes-bc {
    shape-outside: url('@/assets/images/Suggest_Idea_Text_Shape.png');
    margin-right: -270px;
    margin-top: -40px;
    margin-bottom: -130px;
    shape-margin: 60px;
  }
}

@media only screen and (min-width: 840px) {
  #project-idea .wireframes-bc {
    margin-top: -55px;
    margin-bottom: -188px;
  }
}

@media only screen and (min-width: 900px) {
  #project-idea .wireframes-bc {
    margin-top: -55px;
    margin-bottom: -290px;
    margin-right: -220px;
  }
}

@media only screen and (min-width: 991px) {
  #project-idea {
    padding: 40px;

    .wireframes-bc {
      margin-right: -250px;
    }
  }
}

@media only screen and (min-width: 1100px) {
  #project-idea .wireframes-bc {
    shape-margin: 80px;
    margin-top: -100px;
  }
}

@media only screen and (min-width: 1280px) {
  #project-idea {
    background-color: unset;
    border: unset;
    max-width: unset;
    padding: 0 50px 50px;
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-bottom: -45px;

    .wireframes-bc {
      margin-bottom: -410px;
      margin-top: -165px;
    }
  }
}
</style>
