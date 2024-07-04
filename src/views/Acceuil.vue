<script setup>
import FormComponent from "/src/Components/FormComponent.vue";
</script>

<template>
  <div class="body">
    <nav>
      <img src="/src/assets/Logo.avif" alt="Logo">
      <h1>DailyTask's EMPIRE</h1>
    </nav>
  </div>
  
  <div class="formulaire">
    <div>
      <form>
        <label>Nom:</label>
        <input type="text" placeholder=".................">
      </form>
      <form>
        <label>Email:</label>
        <input type="email" placeholder=".................">
      </form>
      <form>
        <label>Contact:</label>
        <input type="tel" placeholder=".................">
      </form>
    </div>
  
    <div class="date">
      <form>
        <label>Date:</label>
        <input type="date" placeholder=".................">
      </form>
    </div>
  </div>
  <div><FormComponent/></div>
</template>

<style scoped>
.body {
  position: relative;
  box-sizing: border-box;
  padding: 15px;
  max-width: 100%;
  text-align: center;
  background-color: rgb(83, 236, 223);
  margin-left: 15%;
  margin-right: 15%;
}
nav{
  display: flex;
  gap: 30%;
}
h1{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
}
img{
  max-width: 100%;
  width: 80px;
  height: 80px;
  border-radius: 30%;
}
.formulaire{
  
  background-color: rgb(245, 243, 241);
  padding: 2%;
  max-width: 100%;
  margin-left: 20%;
  margin-right: 20%;
  
}
input{
  border: none;
}
form{
  padding: 5px;
}

.date{
  display: flex;
  justify-content: end;
  margin-top: -3rem;
}
label{
  color: rgb(12, 4, 250);
  font-weight: bold;
}






</style>
