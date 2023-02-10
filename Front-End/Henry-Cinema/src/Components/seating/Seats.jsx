import React from "react";
import Chair from "../../img/asiento.svg/"
import './seating.css'
// const Seats = ({ handleClick, seatsData, letra }) => {
//   return (
//     <div className="seats">
//       <div className="Filaizquierda">   
//         {seatsData
//           .filter(seat => seat.row === letra && seat.number <= 20)
//           .map(seat => (
//             <button
//               key={`${seat.row}${seat.number}`}
//               className="asiento"
//               data-value={`${seat.row}${seat.number}`}
//               onClick={handleClick}
//               disabled={seat.reserved}
//               style={{ backgroundColor: seat.reserved ? "red" : "#40ff00" }}
//             >
//               <img
//                 key={`${seat.row}${seat.number}`}
//                 data-value={`${seat.row}${seat.number}`}
//                 src={Chair}
//                 alt="Asiento"
//               />
//             </button>
//           ))}
//       </div>
//       <div className='Filaderecha'>  
//         {seatsData
//           .filter(seat => seat.row === letra && seat.number > 20 && seat.number <= 40)
//           .map(seat => (
//             <button
//               key={`${seat.row}${seat.number}`}
//               className="asiento"
//               data-value={`${seat.row}${seat.number}`}
//               onClick={handleClick}
//               disabled={seat.reserved}
//               style={{ backgroundColor: seat.reserved ? "red" : "#40ff00" }}
//             >
//               <img
//                 key={`${seat.row}${seat.number}`}
//                 data-value={`${seat.row}${seat.number}`}
//                 src={Chair}
//                 alt="Asiento"
//               />
//             </button>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Seats;
const Seats = ({ handleClick, seatsData, letra, asientosSeleccionados }) => {
  return (
    <div className="seats">
      <div className="Filaizquierda">   
        {seatsData
          .filter(seat => seat.row === letra && seat.number <= 20)
          .map(seat => (
            <button
              key={`${seat.row}${seat.number}`}
              className="asiento"
              data-value={`${seat.row}${seat.number}`}
              onClick={handleClick}
              disabled={seat.reserved}
              style={{ backgroundColor: asientosSeleccionados.includes(`${seat.row}${seat.number}`) ? "yellow" : seat.reserved ? "red" : "#40ff00" }}
            >
              <img
                key={`${seat.row}${seat.number}`}
                data-value={`${seat.row}${seat.number}`}
                src={Chair}
                alt="Asiento"
              />
            </button>
          ))}
      </div>
      <div className='Filaderecha'>  
        {seatsData
          .filter(seat => seat.row === letra && seat.number > 20 && seat.number <= 40)
          .map(seat => (
            <button
              key={`${seat.row}${seat.number}`}
              className="asiento"
              data-value={`${seat.row}${seat.number}`}
              onClick={handleClick}
              disabled={seat.reserved}
              style={{ backgroundColor: asientosSeleccionados.includes(`${seat.row}${seat.number}`) ? "yellow" : seat.reserved ? "red" : "#40ff00" }}
            >
              <img
                key={`${seat.row}${seat.number}`}
                data-value={`${seat.row}${seat.number}`}
                src={Chair}
                alt="Asiento"
              />
            </button>
          ))}
      </div>
    </div>
  );
};
 export default Seats;