import { Link } from '@inertiajs/react';
export default function BookRow(props) {
    return(
       <tr >
        <td>{props.Isbn}</td>
        <td>{props.Titolo}</td>
        <td>{props.Autore}</td>
        <td>{props.DataCancellazione || "Non Cancellato"}</td>
        <td><Link
              className="pulsante colorePulsante"
              href={ route('showbook',props) }
             >DETTAGLI</Link></td>
     </tr>
   );
}


