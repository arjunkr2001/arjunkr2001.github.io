function google(){
	var term = document.getElementById("trm").value;
	if(term!=''){
		window.location="https://duckduckgo.com/?q="+escape(term);
	}
}
