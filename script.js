const fs = require("fs");
const path = "User.json";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let id = 1;

function saveTask() {
  rl.question("Quelle tâche voulez-vous ajouter ? ", (answer) => {
      fs.readFile(path, { encoding: "utf8" }, (err, data) => {
        if (data === "") {
          const User = [];
          User.push({ ID: id++, task: answer });
          fileData = JSON.stringify(User);
          fs.writeFile(path, fileData, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }

        if (data !== "") {
          fileData = JSON.parse(data);
          fileData.push({ ID: id++, task: answer });
          fileData = JSON.stringify(fileData);
          fs.writeFile(path, fileData, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
        console.log("Tâche ajoutée avec succès");
      });
    });
  rl.close;
}

function updateUser() {
  let deleteTask;
  let deleteId;
  rl.question("Quel est l'ID de la tâche:", (answer) => {
    deleteId = answer;
    rl.question("Quel est la nouvelle tâche ?", (answer) => {
      deleteTask = answer;
        fs.readFile(path, { encoding: "utf8" }, (err, data) => {
          const UserContain = JSON.parse(data);
          for (let index = 0; index < UserContain.length; index++) {
            if (UserContain[index].ID == deleteId) {
              UserContain[index].task = deleteTask;
            }
            fs.writeFile(path, JSON.stringify(UserContain), (err) => {
                if(err){
                    throw err
                }
            });
          }
        });
      });
    });
  rl.close;
}

function deletingTask() {
  let deleteTask;
  let deleteId;
  rl.question("Quel est l'ID de la tâche:", (answer) => {
    deleteId = answer;
    rl.question("La tâche va être supprimé...", (answer) => {
      deleteTask = answer;
        fs.readFile(path, { encoding: "utf8" }, (err, data) => {
          const UserContain = JSON.parse(data);
          for (let index = 0; index < UserContain.length; index++) {
            if (UserContain[index].ID == deleteId) {
              UserContain[index].task = deleteTask;
            }
            fs.writeFile(path, JSON.stringify(UserContain), (err) => {
                if(err){
                    throw err
                }
            });
          }
        });
      });
    });
  rl.close;
}
function mainUtilisateurs() {
  console.log("1.  Ajouter une tâche");
  console.log("2.  Modifier une tâche");
  console.log("3.  Supprimer une tâche");
  rl.question("Choisir une option: ", (choice) => {
    switch (choice) {
      case "1":
        saveTask();
        break;
      case "2":
        updateUser();
        break;
      case "3":
        deletingTask();
        return;
      default:
        console.log("Choix Erronné");
        mainUtilisateurs();
    }
  });
}

mainUtilisateurs();