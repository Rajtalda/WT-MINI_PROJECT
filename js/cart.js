var track;
//var cartcount = document.getElementById('cartcount').innerText;
//document.getElementById('cartcount').innerText = parseInt(cartcount) + product;

window.onload=function()
{
	track=document.getElementById('btn1').addEventListener("click",cart);
	//var product = 0;
	function cart()
	{
		var pcode=document.getElementById('pcode').innerText;
		alert(pcode);
		var product = 0;
		if(typeof(Storage)!== "undefined"){
			if(localStorage.getItem(pcode) === null || localStorage.getItem(pcode)=== NaN)
			{
				localStorage.setItem(pcode,1);
				product = 1;
			}
			else{
				product = localStorage.getItem(pcode);
				product = parseInt(product)+1;
				localStorage.setItem(pcode,product);
			}
		}
		var cartcount = document.getElementById('cartcount').innerText;
		document.getElementById('cartcount').innerText = product;
		
	}
	var carttract=document.getElementById('cart').addEventListener("click",clickcart);
	function clickcart()
	{
		var url = "";
		/*for(var i= 0 ,len=localStorage.length;i<len; i++){
			var key = localStorage.key[i];
			//alert(key);
			if(key.substring(1,4) == 'tee'){
				var values = localStorage[key];
			}
			url += key + '->' + values + '&';
		}*/
		for (var key in localStorage){
			console.log(key)
		}
		//window.location.href = "cartaction.php?data=htee2->3@htee1->3";
		// + url;
	}
}
