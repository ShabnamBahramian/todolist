import List from "./list";

const Todo = () => {
  return (
      <section className="container mx-auto h-250">
        <img
          className="container z-0"
          src={require("../components/assets/pic/pic.jpg")}
          alt=""
        />
        <section className="absolute mx-auto right-0 left-0">
          <List />
        </section>
      </section>
  
  );
};
export default Todo;
