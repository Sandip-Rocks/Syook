let run = function () {
  let matrix_A = [
    [7, 8, 7],
    [5, 4, 2],
    [8, 6, 7],
  ];

  console.log("The saddle point of Matrix A is :");
  let matrixResult = findSaddlePoint(matrix_A);
  console.log(matrixResult);
};

function findSaddlePoint(matrix)
    {
        for (let i = 0; i < matrix.length; i++) 
        {
            let rowMax = matrix[i][0];
             
            let colIndex = 0;
             
            let saddlePoint = true;
             
            //Finding the largest element in ith row
             
            for (let j = 1; j < matrix[i].length; j++)
            {
                if(matrix[i][j] > rowMax)
                {
                    rowMax = matrix[i][j];
                     
                    colIndex = j;
                }
            }
             
            //Checking rowMax is also the smallest element in its column
             
            for (let j = 0; j < matrix.length; j++)
            {
                if(matrix[j][colIndex] < rowMax)
                {
                    saddlePoint = false;
                     
                    break;
                }
            }
             
            if(saddlePoint)
            {
                return rowMax;
            }
            
        }
    }
run();
