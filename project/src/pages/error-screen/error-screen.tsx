import {useAppDispatch} from '../../hooks';
import { fetchOffersAction } from '../../store/api-action';
//import {fetchQuestionAction} from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось загрузить вопросы</p>
      <button
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;
