//start code
//tofa

const input = document.querySelector('#input');
const btn = document.querySelector('button.btn');

//Add function on Button Click
btn.onclick = function () {
  input.select();
  document.execCommand('copy');
  alert("Copied To Clipboard ! Paste Anywhere to See The Result.")
};

//end code