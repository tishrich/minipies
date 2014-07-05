

$(function(){

	var cart = {};

	//Home page button to link to cart
	$('.indulge').on('click', function(){
		 window.location.href='piePage.html';
	});

	//---------Creating overlay for individ add button piePage
	$('.product button').on('click', function(){
		var productName = $(this).parents('.product').data('product-name');
		var productDiv = $('#overlay1 .'+productName)[0];
	$('#overlay1').css('display','inline');

		productDiv.style.display = (productDiv.style.display == "block") ? "none" : "block";
		
	});
	//-------------for cart----------
	// $('.productO .basket a').on('click', function(){
	// 	$('<li>')
	// 	.append('.cart')
	// 	.append('img .oimg')
	// 	.append('<button>remove</button')
	// 	.appendTo('.cart');
	// 	console.log("appending");
	// });

});
	
