import React,{useState} from "react";
import Square from "./square";

import './square.css';



function TicTacToeBoard()
{
   // board state
    const [BoardSquares,setBoardSquares] = useState(Array(9).fill(null));
 
    // turn state
    const[xIsNext,setIsNext] = useState(true);

    // winning state
    const [IsWinner, setIsWinner] = useState(false);


    // handle click event for the button

    const handleClick = (e,index) =>
    {
      debugger;   
      const squares = [...BoardSquares];

      
         
         // if the square at the index is not null then return
         // because it has either an X value or a O value
         if(squares[index] && !IsWinner){
             return;
         }
      
         // set the square value at that index with either an X or O depending on 
         // whether its X's turn or O's turn

         squares[index] = xIsNext?"X":"O";
         

         checkWinningCondition(squares);

         if(IsWinner){
            //setIsNext(xIsNext);
            return;
         }
         else
         {
          
         // Now having changed the array , we will have to reflect these changes in the state
         
         setBoardSquares(squares);

      

         // also we will change the state of the turn

         setIsNext(!xIsNext);
         }
         
    }


    const checkWinningCondition =(squares)=>
    {

      debugger;
       if(squares[0] && squares[0] === squares[1] && squares[1] === squares[2])
       {
         setIsWinner(true);
       }

       if(squares[3] && squares[3] === squares[4] && squares[4] === squares[5])
       {
         setIsWinner(true);
       }

       if(squares[6] && squares[6] === squares[7] && squares[7] === squares[8])
       {
         setIsWinner(true);
       }
       if(squares[0] && squares[0] === squares[3] && squares[3] === squares[6])
       { 
         setIsWinner(true);
       }
       if(squares[1] && squares[1] === squares[4] && squares[4] === squares[7])
       {
         setIsWinner(true);
       }
       if(squares[2] && squares[2] === squares[5] && squares[5] === squares[8])
       {
         setIsWinner(true);
       }
       if(squares[0] && squares[0] === squares[4] && squares[4] === squares[8])
       {
         setIsWinner(true);
       }
       if(squares[0] && squares[0] === squares[4] && squares[4] === squares[6])
       {
         setIsWinner(true);
       }

    }

   let status;
   let next;
   let winner;

   next= xIsNext?"X":"O";
   winner = !xIsNext?"X":"O";
    
   debugger;
   status = IsWinner?'Winner is : '+ winner:'Next turn is : ' +next;

    // we will now create a 9x9 board using square component and will pass the index and handler to it


    return (

      
       <div align='center'>



               <div><h3>{status}</h3> </div>  
            
        

         <div className="row">
         <Square value={BoardSquares[0]} onClick={(e)=>handleClick(e,0)}/> 
         <Square value={BoardSquares[1]} onClick={(e)=>handleClick(e,1)}/> 
         <Square value={BoardSquares[2]} onClick={(e)=>handleClick(e,2)}/> 
         </div>

         <div className="row">
         <Square value={BoardSquares[3]} onClick={(e)=>handleClick(e,3)}/> 
         <Square value={BoardSquares[4]} onClick={(e)=>handleClick(e,4)}/> 
         <Square value={BoardSquares[5]} onClick={(e)=>handleClick(e,5)}/> 
         </div>

         <div className="row">
         <Square value={BoardSquares[6]} onClick={(e)=>handleClick(e,6)}/> 
         <Square value={BoardSquares[7]} onClick={(e)=>handleClick(e,7)}/> 
         <Square value={BoardSquares[8]} onClick={(e)=>handleClick(e,8)}/> 
         </div>
         



       </div>

    )

}

export default TicTacToeBoard;
