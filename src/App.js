import { Fragment, useEffect, useState } from "react";
import styles from "./app.module.css";
import ToDoinput from "./Components/TodoInput/ToDoinput";
import ToDolist from "./Components/ToDoLisitItems/ToDolist";

const App = function () {
  const [tasks, setTasks] = useState([]);

  //? making a GET Request to firebase:
  const fetchedTaskData = async function () {
    const fetchResponse = await fetch(
      "https://to-do-react-app-f0b6e-default-rtdb.firebaseio.com/tasks.json"
    );
    const dataGenerated = await fetchResponse.json();

    const tasks_created = [];

    for (const key in dataGenerated) {
      tasks_created.push({
        id: key,
        date: dataGenerated[key].date,
        description: dataGenerated[key].description,
        status: dataGenerated[key].status,
      });
    }
    setTasks(tasks_created);
  };

  useEffect(() => {
    fetchedTaskData();
  }, []);

  return (
    <Fragment>
      <div className={styles.inputForm_container}>
        <ToDoinput />
      </div>
      <div className={styles.inputList_container}>
        <ToDolist listData={tasks} />
      </div>
    </Fragment>
  );
};

export default App;
