var one 	    = 	document.getElementById("one");
var two 	    = 	document.getElementById("two");
var three 	    = 	document.getElementById("three");
var four 	    =	 document.getElementById("four");
var five        = 	document.getElementById("five");
var six         = 	document.getElementById("six");
var seven   = 	document.getElementById("seven");
var eight     = 	document.getElementById("eight");
var nine      = 	document.getElementById("nine");
var ten       = 	document.getElementById("ten");
var eleven  = 	document.getElementById("eleven");
var twelve  = 	document.getElementById("twelve");
var thirteen = 	document.getElementById("thirteen");
var fourteen = 	document.getElementById("fourteen");
var fifteen    = 	document.getElementById("fifteen");
var space    = 	document.getElementById("space");
	var i,j,n,k,l,set=1,row,col;
	var arr=[
		[one,two,three,four],
		[five,six,seven,eight],
		[nine,ten,eleven,twelve],
		[thirteen,fourteen,fifteen,space]
	            ];


var backForth=[-1,1];

function scrambler(){
	
	for(n=1;n<=100;n++){
		
	for(i=0;i<4;i++){
	for(j=0;j<4;j++){
		if(arr[i][j]==space){
		var k=backForth[Math.floor(Math.random() * (2 - 0)) + 0];
		var l=Math.floor(Math.random() * (2 - 0)) + 0;
		if(l==0 && (i+k)<4 && (i+k)>=0){
		
		
		swap(i+k,j,i,j);
		
		}else if( l==1 && (j+k)<4 && (j+k)>=0){
			
		
		swap(i,j+k,i,j);
			
		
		}
		
		
	}
}
}
}

}

 function swapp(id){
	
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){

		if(arr[i][j].id==id)
		{
		row=i;
		col=j;
		console.log(i+" "+j+" "+arr[i][j].innerHTML);
	}	
}
	

}
	
	if(row-1>=0&&row-1<4){
            if (arr[row-1][col] == space){
                swap(row,col,row-1,col);
            }
		console.log("h");
	}
        if(row+1>=0&&row+1<4){
            if (arr[row+1][col] == space) {
                swap(row, col, row+ 1, col);
                
            }console.log("e");
	}
       
	if(col-1>=0&&col-1<4){
            if (arr[row][col-1] ==space){
                swap(row,col,row,col-1);
            }console.log("l");
		}
	 if(col+1>=0&&col+1<4){
            if (arr[row][col+1] == space) {
                swap(row, col, row, col+1);
                
            }console.log("o");
	}
	
	
}
function swap (i,j,k,l){
	
		
		
		var temp=arr[i][j].id;
		arr[i][j].id=arr[k][l].id;
		arr[k][l].id=temp;
			
		
		var temp1=arr[i][j];
		arr[i][j]=arr[k][l];
		arr[k][l]=temp1;
	
}
function solve(){
	document.location.reload();

}