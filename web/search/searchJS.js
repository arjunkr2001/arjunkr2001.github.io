function google(){
	var term = document.getElementById("trm").value;
	if(term!='' && document.querySelector('.box').style.width!=40){
		window.location="https://duckduckgo.com/?q="+escape(term);
	}
}
