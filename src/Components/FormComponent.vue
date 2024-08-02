<script setup>
import { ref } from 'vue';

const taches = ref([
  { text: 'A faire', complete: false },
]);

const nouvelleTache = ref('');

const ajouterTache = () => {
  if (nouvelleTache.value.trim()) {
    taches.value.push({ text: nouvelleTache.value, complete: false });
    nouvelleTache.value = '';
  }
};

const modifierTache = (index) => {
  const tacheAModifier = taches.value[index];
  const nouvelleDescription = prompt('Entrez la nouvelle description de la tâche :');
  if (nouvelleDescription) {
    tacheAModifier.text = nouvelleDescription;
  }
};


const supprimerTache = (index) => {
  taches.value.splice(index, 1);
};
</script>

<template>
  <div class="list">
    <div class="corpus">
      <h1 class="title">Liste des Tâches</h1>
      <form @submit.prevent="ajouterTache">
        <input class="form" v-model="nouvelleTache" required placeholder="Entrez une Tâche" />
        <button class="submit" type="submit">Ajouter</button>
      </form>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>✔✔</th>
            <th>ID</th>
            <th>Tâches</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tache, index) in taches" :key="index">
            <td><input type="checkbox" v-model="tache.complete" /></td>
            <td>{{ index + 1 }}</td>
            <td>{{ tache.text }}</td>
            <td class="button">
              <button @click="modifierTache(index)">🔍</button>
              <button @click="supprimerTache(index)">❌</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.list {
  padding-bottom: 20%;
  margin-top: 1rem;
  max-width: 100%;
  margin-left: 25%;
  margin-right: 25%;
  background-color: rgba(188, 184, 184, 0.188);
  border-radius: 5%;
}
.title {
  margin-top: -0rem;
  padding: 15px;
  max-width: 100%;
  left: 0;
  right: 0;
  text-align: center;
  background-color: rgb(83, 236, 223);
}
.button{
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  justify-content: center;
}
.corpus {
  text-align: center;
  padding-top: -1rem;
  position: relative;
}

.form {
  padding: 5px;
  background-color: rgb(252, 248, 241);
  ;
  border: 1px solid rgb(45, 145, 238);
}

.submit {
  padding: 6px;
  background-color: rgb(45, 145, 238);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4%;
  margin-left: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  max-width: 100%;
  width: 70%;
  margin-left: 15%;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
  text-align: left;
}

td {
  padding: 15px;
}

th {
  background-color: rgb(252, 248, 241);
  text-align: center;
}
</style>