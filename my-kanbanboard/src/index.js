import React from "react";
import ReactDOM from "react-dom";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

import "./styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "To-Do",
      backgroundColor: "red",
      cards: [
        {
          id: 1,
          title: "Write post",
          description: (
            <div>
              <label className="text">459</label> <br />
              <label className="text">Lorem ipsum dolor</label>
              <br />
              <label className="text">Lorem ipsum dolor</label>
              <br />
              <label className="text">Lorem ipsum dolor</label>
              <br />
              <label className="text" style={{ color: "red" }}>
                Lorem ipsum dolor (123)
              </label>
              <br />
            </div>
          ),
        },
        {
          id: 2,
          title: "Project (1)",
          description: (
            <div>
              <label className="text">Lorem ipsum dolor</label> <br />
              <label className="text">
                Lorem ipsum dolor sit amet, consectetur
              </label>
              <br />
              <label className="text">
                Lorem ipsum dolor sit amet, consectetur
              </label>
              <br />
              <label className="text">
                <p>Lorem ipsum dolor sit amet</p>
              </label>
              <br />
              <label className="text" style={{ color: "red" }}>
                Project (2)
              </label>
              <br />
            </div>
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Planning",
      cards: [
        {
          id: 9,
          title: "Project (3)",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: " Design",
      cards: [
        {
          id: 10,
          title: "Project (4)",
          description: "Card content",
        },
        {
          id: 11,
          title: "Project (5)",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Testing ",
      cards: [
        {
          id: 12,
          title: "Project (6)",
          description: "Card content",
        },
        {
          id: 13,
          title: "Project (7)",
          description: "Card content",
        },
      ],
    },
  ],
};

function U_r_Board () {
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onCardRemove={console.log}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard,
      })}
      onCardNew={console.log}
    />
  );
}

function App() {
  return (
    <div>
      <U_r_Board/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
