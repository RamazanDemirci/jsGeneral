const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

//small number's fibonacci result not take much
console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));

//but number is big,  this solution need very long time because exponantial time complexity
console.log(gridTraveler(18, 18));

/*
say that you are a traveller on a 2D grid. you begin in the top-left corner and your goal is to 
travel to the bottom-right corner. you may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m*n ?

writes a function 'grifTraveler(m, n)' that calculates this.
        grifTraveler(0, 1) -> 0
        grifTraveler(1, 0) -> 0
        grifTraveler(8, 0) -> 0
        grifTraveler(0, 0) -> 0


   in ->23  22  21
        13  12  11 -> out

                                    2,3
                1,3                                 2,2
        0,3             1,2                 1,2             2,1  
                    0,2     1,1         0,2     1,1     1,1     0,0


complexity 
time : O(2^n+m)
space : O(n+m) 


*/
