import { useComments } from '../../hooks/useComments';
import './table.css';
import ListOfComments from '../ListOfComments/index.jsx';

export default function index() {
  const [comments] = useComments();

  return (
    <section class='table-container'>
      <table className='table'>
        <thead className='table--head'>
          <tr className='table--row'>
            <th className='table--header'>Nombre</th>
            <th className='table--header'>Email</th>
            <th className='table--header'>Comentario</th>
            <th className='table--header'>Action</th>
          </tr>
        </thead>
        <tbody className='table--body'>
          <ListOfComments comments={comments} />
        </tbody>
      </table>
    </section>
  );
}
