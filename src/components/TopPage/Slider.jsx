import { useState } from "react"
const Slider = () => {
    const [position, setPosition] = useState(50);

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;

    if (percentage >= 0 && percentage <= 100) {
      setPosition(percentage);
    }
  };
  return (
<>
    <div className="volume-container">
        <div className="volume-slider" onMouseMove={handleMouseMove}></div>
        <div className="volume-ball"style={{left:`${position}`}}></div>
    </div>
</>
  )
}

export default Slider