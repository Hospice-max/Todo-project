<script setup>
</script>

<template>
  <div class="list">
    <div class="h1">
      <h1>Liste des courses</h1>
    </div>
    <div class="corpus">
      <form>
        <label>Ajouter une course</label><br />
        <input type="text" placeholder="Entrer une course" />
        <button>Soumettre</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.list{
  position: relative;
  border: 2px solid;
  margin-top: 5%;
  padding-top: 15%;
  padding-bottom: 40%;
  max-width: 100%;
  width: 50%;
  margin-left: 25%;
}
.h1{
  position: absolute;
  top: 0;
  padding: 15px;
  max-width: 100%;
  left: 0;
  right: 0;
  text-align: center;
  background-color: rgb(83, 236, 223);
  
}
.corpus {
  text-align: center;
  padding-top: 1rem;
}

</style>