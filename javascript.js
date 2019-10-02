arr=[0,1]
for(var i=2;i<20;i++){
    arr[i]=arr[i-1]+arr[i-2]
}alert(arr);