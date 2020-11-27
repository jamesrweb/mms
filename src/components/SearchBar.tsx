import React, { FormEvent, SyntheticEvent, useEffect, useReducer } from "react";
import { Form } from "react-bootstrap";
import { TStatus } from "../routes/Home";

interface IProps {
  handleChanges: Function,
  search: string;
  status: TStatus;
}

interface IState {
  search: string;
  status: TStatus;
}

type TAction =
  | { type: "SET_SEARCH", search: string }
  | { type: "SET_STATUS", status: TStatus };

function reducer(state: IState, action: TAction) {
  switch (action.type) {
    case "SET_STATUS":
      return { ...state, status: action.status };
    case "SET_SEARCH":
      return { ...state, search: action.search };
    default:
      return state;
  }
}

export function SearchBar({ search, status, handleChanges }: IProps) {
  const [state, dispatch] = useReducer(reducer, { search, status });

  useEffect(() => {
    handleChanges(state);
  }, [state, handleChanges]);

  return (
    <Form className="d-flex" onSubmit={(event: FormEvent) => event.preventDefault()}>
      <Form.Group controlId="formSearch">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="search"
          placeholder="Search our database..."
          value={state.search}
          onInput={(event: SyntheticEvent) => dispatch({
            type: "SET_SEARCH",
            search: (event.target as HTMLInputElement).value
          })}
        />
      </Form.Group>
      <Form.Group controlId="formFilter">
        <Form.Label>Status</Form.Label>
        <Form.Control as="select" onChange={(event: SyntheticEvent) => dispatch({
          type: "SET_STATUS",
          status: (event.target as HTMLSelectElement).value as TStatus
        })}>
          <option>OPEN</option>
          <option>CLOSED</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )
}