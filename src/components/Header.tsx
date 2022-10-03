/* eslint-disable jsx-a11y/control-has-associated-label */

import { RefObject } from 'react';

type Props = {
  newTodoField: RefObject<HTMLInputElement>,
};

export const Header: React.FC<Props> = ({ newTodoField }) => {
  return (
    <header className="todoapp__header">
      <button
        data-cy="ToggleAllButton"
        type="button"
        className="todoapp__toggle-all active"
      />

      <form>
        <input
          data-cy="NewTodoField"
          type="text"
          ref={newTodoField}
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
};
