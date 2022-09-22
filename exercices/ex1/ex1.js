function most_frequent( arr ) {

    let mf = arr [ 0 ] , maxCount = 0 , i , j ;
    let len = arr.length ; 
    for(i=0;i<len;i++) {
        let count = 0 ;
        for ( j = i + 1 ; j < len ; j ++ ) {
            if ( arr [ i ] == arr [ j ] ) {
                count ++ ;
       }
            }
        if ( maxCount < count ) {
            maxCount = count ;
            mf=arr[i];
       }
   }
    return mf ;
}
    console.log(most_frequent([1,2,3,4,5,4,5,5,5,5,3])) ;
