import { Fragment, useEffect, useState } from "react";
import styles from "./app.module.css";
import DeleteAll from "./Components/DeleteAllButton/DeleteAll";
import ToDoinput from "./Components/TodoInput/ToDoinput";
import ToDolist from "./Components/ToDoLisitItems/ToDolist";

const base_URL =
  "https://to-do-react-app-f0b6e-default-rtdb.firebaseio.com/tasks.json";

const App = function () {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState();

  //! delete all tasks that are created by the user:

  const deleteAll = function () {
    setTasks([]);
  };

  //? making a GET Request to firebase:

  const fetchedTaskData = async function () {
    setIsLoading(true);
    try {
      const fetchResponse = await fetch(base_URL);

      if (!fetchResponse.ok) {
        throw new Error("Sorry, Something went wrong!");
      }

      const dataGenerated = await fetchResponse.json();
      console.log(dataGenerated);

      const tasks_created = [];

      for (const key in dataGenerated) {
        tasks_created.push({
          id: key,
          date: dataGenerated[key].createdOn,
          description: dataGenerated[key].description,
          status: dataGenerated[key].status,
        });
      }
      setTasks(tasks_created);
    } catch (error) {
      setErrors(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchedTaskData();
  }, []);

  //? posting data to firebase:
  const createTaskHandler = async function (task) {
    try {
      const response = await fetch(base_URL, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("could not post the data somehow");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <div className={styles.inputForm_container}>
        <ToDoinput dataPostHandler={createTaskHandler} />
      </div>
      {errors && (
        <p
          style={{
            color: "red",
            fontSize: "0.95rem",
            margin: "1rem",
            textAlign: "center",
          }}
        >
          {/* {errors} */}
          Something should have went wrong..!
        </p>
      )}
      <div className={styles.inputList_container}>
        {isLoading && (
          <div className={styles.spinner_container}>
            <div className={styles.loading}></div>
          </div>
        )}

        <div className={styles.badges_container}>
          {!isLoading && tasks.length > 0 && (
            <button className={styles.refreshButton} onClick={fetchedTaskData}>
              Refresh
            </button>
          )}

          {!isLoading && tasks.length > 0 && (
            <p className={styles.counter}>Total Tasks: {tasks.length}</p>
          )}

          {!isLoading && tasks.length > 1 && (
            <DeleteAll deleteAllmethod={deleteAll} />
          )}
        </div>

        {!isLoading && tasks.length > 0 && <ToDolist listData={tasks} />}
      </div>
    </Fragment>
  );
};

export default App;
