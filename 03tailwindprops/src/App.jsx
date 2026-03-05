import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl mb-2">Hi Guys!</h1>
      <Card
        name="Sparsh"
        description="Hi guys"
        image="https://images.pexels.com/photos/32203209/pexels-photo-32203209.jpeg"
        btnText="Like"
      />
      <br />
      <Card
        name="Beach"
        description="Relaxing beach with golden sunset."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      />
    </>
  );
}

export default App;
