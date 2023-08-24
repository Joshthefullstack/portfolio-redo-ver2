import { useState, useEffect, useRef } from "react";
import HomePage from "./pages/HomePage";
function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursor = useRef(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const setClick = () => {
    if(cursor.current.classList.contains('click')){
      cursor.current.classList.remove('click');
      void cursor.current.offsetWidth;
      cursor.current.classList.add('click')
    } else{
      cursor.current.classList.add('click')
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', setClick)
  }, []);


  return (
    <div className="App">
      <HomePage/>
      <div className="cursor" ref={cursor} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}></div>
    </div>
  );
}

export default App;
