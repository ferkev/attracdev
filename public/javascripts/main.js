const btn = document.getElementById('btn-search');
const search = document.getElementById('search');


btn.addEventListener('click',
	function(e) {
		e.preventDefault()
		search.classList.remove('hide');
		search.classList.add('show');
	}
);

document.getElementById('login').addEventListener('click',
	function(e) {
		e.preventDefault()
		document.getElementById('tab_container').classList.remove('hide');
		document.getElementById('tab_container').classList.add('show');
	}
);

for(var i = 0; i<document.getElementsByClassName('close').length; i++){
	document.getElementsByClassName('close')[i].addEventListener("click",
	  function(e) {
	    e.preventDefault();
	    document.getElementById('tab_container').classList.remove('show');
	    document.getElementById('tab_container').classList.add('hide');
			document.getElementById('tab_container').style.opacity = "1";
	  }
	);
}
