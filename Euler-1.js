var ans = 0;
var num = 1000;
for( var i = 1; i * 3 < num; i++ ){
  ans += i * 3;
}
for( var i = 1; i * 5 < num; i++ ){
  if( i % 3 )
     ans += i * 5;
}

ans;
  
