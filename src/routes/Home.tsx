import React, { Fragment, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Jumbotron } from "react-bootstrap";
import { Issues } from "../components/Issues";

export type TStatus = "OPEN" | "CLOSED";
export interface IState {
  search: string;
  status: TStatus;
}

export function Home() {
  const [state, setState] = useState<IState>({
    search: "",
    status: "OPEN"
  });

  return (
    <Fragment>
      <Jumbotron className="text-center">
        <h1>React issues</h1>
      </Jumbotron>
      <SearchBar {...state} handleChanges={(changes: IState) => setState(changes)} />
      <Issues {...state} />
    </Fragment>
  );
}