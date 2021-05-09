function google(){
	var term = document.getElementById("trm").value;
	if(term!='' || document.querySelector('div.box').style.width!=40){
		window.location="https://duckduckgo.com/?q="+escape(term);
	}
}
