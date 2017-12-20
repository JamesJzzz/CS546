// Zhiyuan(James) Zhang
// Sep 11 2017
// I pledge my honor that I have abided by the Stevens Honor System. 

module.exports = {
	//this is for triangle
	triangle: (lines) =>{
		if(isNaN(lines) || lines <= 0){
			throw "Error, Invalid Input";
		}
		count = 1;
		for( var i = lines; i>0; i--){
			if(i == 1){
				string = '/';
				for(var w = (count -1)*2; w>0; w--){
					string = string + '-';
				}
				string += '\\';
			}
			else{
				string = '';
				for(var q = i-1; q>0; q--){
					string+= ' ';
				}
				string+='/';
				for(var n = (count -1)*2; n>0; n--){
					string+= ' ';
				}
				string+= '\\';
				count ++;
			}
			console.log(string);
		}
	},
	square: (lines) =>{
		// for square
		if(isNaN(lines) || lines <= 1){
			throw "Error, Invalid Input";
		}
		else{
			for(var r = 0; r < lines; r++){
				if(r == 0 || r == lines-1){
					var middle = '-';
				}
				else{
					var middle = ' ';
				}
				console.log("|%s|", Array(lines+1).join(middle));
			}
		}
	},
	rhombus: (lines) =>{
		// for rhombus
		if(isNaN(lines) || lines <= 1){
			throw "Error, Invalid Input";
		}
		for(var a = 0; a<lines/2; a++){
			if(a== 0){
				var middle = '-';
			}
			else{
				var middle = ' ';
			}
			console.log("%s/%s\\", Array(lines/2-a).join(" "),Array(a*2+2).join(middle));
		}
		for(var b = lines/2-1; b>=0; b--){
			if(b== 0){
				var middle = '-';
			}
			else{
				var middle = ' ';
			}
			console.log("%s\\%s/", Array(lines/2-b).join(" "),Array(b*2+2).join(middle));

		}
		/*else{
			for(var r = 0; r < lines; r++){
				if(r == 0 || r == lines-1){
					var middle = '-';
				}
				else{
					var middle = ' ';
				}
				console.log("|%s|", Array(lines+1).join(middle));
			}
		}
		*/
	}
}
