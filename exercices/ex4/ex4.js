var students = [
    { name : ' Bill Gates ' , grade : 10 } ,
    { name : ' Steve Jobs ' , grade : 8 } ,
    { name : ' Suzanne Collins ' , grade : 9 }
    ] ;
    students . sort ( ( s1 , s2 ) => s2.grade - s1.grade);
    console.table ( students ) ;