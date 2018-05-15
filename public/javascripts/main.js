const btn = document.getElementById('btn-search');
const search = document.getElementById('search');


btn.addEventListener('click',
	function(e) {
		e.preventDefault();
		search.classList.remove('hide');
		search.classList.add('show');
	}
);

document.getElementById('fun_login').addEventListener('click',
	function(e) {
		e.preventDefault();
		document.getElementById('tab_container_fun').classList.remove('hide');
		document.getElementById('tab_container_fun').classList.add('show');

		if(document.getElementById('tab_container_dev').className ==='tab_container show'){
			document.getElementById('tab_container_dev').classList.remove('show');
			document.getElementById('tab_container_dev').classList.add('hide');
		}
	}
);

document.getElementById('dev_login').addEventListener('click',
	function(e) {
		e.preventDefault()
		document.getElementById('tab_container_dev').classList.remove('hide');
		document.getElementById('tab_container_dev').classList.add('show');

		if(document.getElementById('tab_container_fun').className ==='tab_container show'){
			document.getElementById('tab_container_fun').classList.remove('show');
			document.getElementById('tab_container_fun').classList.add('hide');
		}
	}
);

for(var i = 0; i<document.getElementsByClassName('close').length; i++){
	document.getElementsByClassName('close')[i].addEventListener("click",
	  function(e) {
	    e.preventDefault();
	    document.getElementById('tab_container_fun').classList.remove('show');
	    document.getElementById('tab_container_fun').classList.add('hide');
			document.getElementById('tab_container_dev').classList.remove('show');
	    document.getElementById('tab_container_dev').classList.add('hide');
	  }
	);
}
