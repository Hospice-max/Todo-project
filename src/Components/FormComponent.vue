<script setup>

</script>

<template>
  <div class="list">
    <div class="h1">
      <h1>Liste des Tâches</h1>
    </div>
    <div class="corpus">
      <div class="task">
        <form class="myForm">
          <label>Ajoutez une tâche</label><br />
          <input  class="form" type="text" placeholder="Entrez une Tâche" />
          <button  class="submit">Soumettre</button>
        </form>
      </div>
      <div>
        <table>
          <tr>
            <th>✔✔✔</th>
            <th>ID</th>
            <th>Tâches</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox">
            </td>
            <td>1</td>
            <td>A faire</td>
            <td><button>Add</button> <button>Modif</button></td>
          </tr>
        </table>
      </div>
  </div>
  </div>
</template>

<style scoped>
.list{
  position: relative;
  border: 2px solid;
  margin-top: 5%;
  padding-top: 15%;
  padding-bottom: 10%;
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
  padding-top: -1rem;
  position: relative;
}
.form{
  padding: 5px;
  background-color: rgb(249, 230, 199);;
  border: 1px solid rgb(45, 145, 238);
}
.task{
  margin-top: -1rem;
}
label{
  font-weight: bold;
}
.myForm{
  top: 0;
  left: 0;
}
.submit{
  padding:6.3px;
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
th, td {
  border: 1px solid black;
  padding: 5px;
  text-align: left;
}
td{
  padding: 15px;
}
th{
  background-color: rgb(249, 230, 199);
  text-align: center;
}

</style>