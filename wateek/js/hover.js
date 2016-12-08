window.onload = function(){recalcMap();}
	window.onresize = function(){recalcMap();}
	
	$(".percentages").hover(function(){
			$(".hideme").attr("style","display:none");
			$("#"+this.id+"ID").attr("style","display:block");
		}, 
		function(){
				$(".hideme").attr("style","display:none");
				$("#team").attr("style","display:block");
		});
	
	function recalcMap() {
		var width = $("#holder").width();
		var height = $("#holder").height();

		
		$("#kevin").attr("coords",""+(width/3.3)+","+(height/3.3)+","+(width/2.4)+","+(height/1.98));
		$("#uros").attr("coords",""+(width/56.79)+","+(height/3.07)+","+(width/6.65)+","+(height/1.9));
		$("#wateek").attr("coords",""+(width/1.78)+","+(height/3.6)+","+(width/1.48)+","+(height/2.05));
		$("#cathy").attr("coords",""+(width/1.2)+","+(height/2.48)+","+(width/1.02)+","+(height/1.59));
	}
