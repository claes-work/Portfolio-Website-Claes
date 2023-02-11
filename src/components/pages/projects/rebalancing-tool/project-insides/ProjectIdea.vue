<script lang="ts" setup>
const emit = defineEmits(['change-tab'])
</script>

<template>
  <div id="project-idea">
    <h2 class="heading">From <span>Excel Sheets</span> to a Custom <span>Portfolio Rebalancing</span> App</h2>

    <img
        class="wireframes-bc"
        src="@/assets/images/Portfolio_Rebalancing_Tool_Wireframes.png"
        alt="Portfolio Rebalancing Tool Wireframes"
    />

    <p>
      In 2019, I started investing and quickly realized that tracking my investments through excel sheets was not enough to fulfill my needs. I wanted access to more detailed stock data and the ability to group all my asset classes in one place. This is when I had the idea of creating a portfolio rebalancing app. I spent over a year developing the concept and design and initially started writing the backend in PHP, as it was the only backend language I knew. I used Vuejs for the frontend. As I continued working on the project, I decided to bring it to the next level and teamed up with a business partner. He improve the backend, which was re-written in Java. This allowed me to focus more on my strengths in design and frontend development.
    </p>

    <div class="button" @click="$emit('change-tab', 'Features')">Explore more</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/pages/projects/rebalancing-tool/project-insides/project-idea.scss";

@media only screen and (min-width: 768px) {
  #project-idea .wireframes-bc {
    shape-outside: url('@/assets/images/Rebalancing_Tool_Text_Shape.png');
    margin-right: -240px;
    margin-top: 80px;
    margin-bottom: -160px;
    shape-margin: 60px;
  }
}

@media only screen and (min-width: 840px) {
  #project-idea .wireframes-bc {
    margin-right: -280px;
    margin-top: 0;
    margin-bottom: -190px;
  }
}

@media only screen and (min-width: 900px) {
  #project-idea .wireframes-bc {
    margin-right: -232px;
  }
}


@media only screen and (min-width: 991px) {
  #project-idea {
    padding: 40px;

    .wireframes-bc {
      margin-top: -20px;
      margin-right: -280px;
      margin-bottom: -220px;
    }
  }
}

@media only screen and (min-width: 1100px) {
  #project-idea .wireframes-bc {
    shape-margin: 80px;
    margin-top: -60px;
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
      margin-bottom: -320px;
      margin-top: -110px;
    }
  }
}
</style>
