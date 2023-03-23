function addDataToDropdown(nikNama) {
    var dropdown = document.getElementById("nama");
    var option = document.createElement("option");
    option.text = nikNama;
    dropdown.add(option);
  }
  addDataToDropdown("817184865 - Rompis");
  localStorage.setItem("nikNama1", "817184865 - Rompis");
  var nikNama1 = localStorage.getItem("nikNama1");
  addDataToDropdown(nikNama1);
  for (var i = 1; i < localStorage.length; i++) {
    var nikNama = localStorage.getItem(localStorage.key(i));
    addDataToDropdown(nikNama);
  }
      