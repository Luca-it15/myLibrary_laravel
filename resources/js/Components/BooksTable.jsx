import BookRow from "./BookRow";
export default function BooksTable(props) {

    let here = false;
    if(props.data) {
        here = true;
    }
    const BookList=props.data.map((element)=>
           <BookRow
           key={element.Isbn}
           Titolo={element.Titolo}
           Autore={element.Autore}
           Isbn={element.Isbn}
           DataCancellazione ={element.DataCancellazione}
           ></BookRow>,
        );
  return (

   <div className="divbook">
    <h2 className="title">I tuoi Libri</h2>
    {(!here && <h4 className="subtitle">Nessun Libro presente</h4>) || (here &&
    <table className="tablebook">
     <thead className="titletable">
        <tr>
            <th>ISBN</th>
            <th>TITOLO</th>
            <th>AUTORE</th>
            <th>DATA CANCELLAZIONE</th>
            <th>INFORMAZIONI</th>
        </tr>
    </thead>
    <tbody>{BookList}</tbody>
     </table>
    )}
     </div>
   );
}
