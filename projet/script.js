fetch('objets.php')
.then(result => result.text())
.then(result => {
  console.log(result);
})