import ProductCard from "./ProductCard";
import LikeButton from "./LikeButton";
import StudentList from "./StudentList";

function App() {
  return (
    <div>
      <h1>React Assignment</h1>

      {/* Task 1: Product Cards */}
      <h2>Task 1: Product Cards</h2>

      <ProductCard
        title="Laptop"
        price="150000"
        category="Electronics"
      />

      <ProductCard
        title="Running Shoes"
        price="8000"
        category="Sports"
      />

      {/* Task 2: Like Button */}
      <LikeButton />

      {/* Task 3: Student List */}
      <StudentList />
    </div>
  );
}

export default App;