var button = document.getElementById('but');
button.addEventListener('click', function(){
var txtInput = document.getElementById('inp');
var text = txtInput.value;
if (text == "")
{alert("Hmm.... That doesn't look quite right!\n\nOctoStats couldn't find the User's data on GitHub! :-/");
window.location.assign("index.html")}
})