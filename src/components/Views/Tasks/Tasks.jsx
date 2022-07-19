import "./Tasks.styles.css";

import { useResize } from "../../../hooks/useResize";
import { Header } from "../../Header/Header";
import { cardsData } from "./data";
import { Card } from "../../Card/Card";
import { TaskForm } from "../../TaskForm/TaskForm";

export default function Tasks() {
  const { isPhone } = useResize();

  const limitString = (str) => {
    if (str.length > 370)
      return { string: str.slice(0, 367).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  const renderAllCards = () => {
    return cardsData.map((data) => <Card key={data.id} data={data} />);
  };

  return (
    <>
      <Header />
      <main id="tasks">
        <TaskForm />
        <section className="wrapper_list">
          <div className="list_header">
            <h2>Mis tareas</h2>
          </div>
          {isPhone ? (
            <div className="list phone">{renderAllCards()}</div>
          ) : (
            <div className="list_group">
              <div className="list">
                <h4>Nuevas</h4>
                {renderAllCards()}
              </div>
              <div className="list">
                <h4>En proceso</h4>
                {renderAllCards()}
              </div>
              <div className="list">
                <h4>Finalizadas</h4>
                {renderAllCards()}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
