import { deleteComment } from '../../hooks/useComments';
import './styles.css';

export default function index({ comments }) {
  return (
    <>
      {comments.map(({ id, username, email, comment }) => {
        return (
          <tr className='table--row' id={id} key={id}>
            <td className='table--data'>{username}</td>
            <td className='table--data'>{email}</td>
            <td className='table--data'>{comment}</td>
            <td className='table--data'>
              <button className='btn-delete' onClick={() => deleteComment({ id })}>
                Eliminar
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
