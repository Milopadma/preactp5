import { useState } from "preact/hooks";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ReactP5Wrapper,
  P5CanvasInstance,
  SketchProps,
} from "react-p5-wrapper";

import "./app.css";

type newSketchProps = SketchProps & {
  amount: number;
};

const sketch = (p: P5CanvasInstance<newSketchProps>) => {
  const width = p.windowWidth;
  const height = p.windowHeight;
  const x = width / 2;
  const y = height / 2;
  let amount = p.amount;

  p.setup = () => {
    p.createCanvas(width, height);
  };

  p.updateWithProps = (p) => {
    if (p.amount) {
      amount = p.amount;
    }
  };

  p.draw = () => {
    p.background(0);
    p.stroke(255);
    p.strokeWeight(2);
    p.noFill();
    // p.ellipse(x, y, p.random(), width);
    // p.ellipse(x - 80, y, p.random(), width);
    // p.ellipse(x + 80, y, p.random(), width);
    p.ellipse(p.amount, y, p.random(), width);
    console.log(p.amount);
  };
};

export function App() {
  const [selected, setSelected] = useState(0);
  const [amount, setAmount] = useState(5);
  console.log(selected);

  return (
    <>
      <section class="font-mono">
        <header>
          <h1>mylo</h1>
        </header>
        <nav class="grid grid-cols-3 gap-2 font-mono">
          <motion.button id="0" class="px-8 m-1" onClick={() => setSelected(0)}>
            Hub
          </motion.button>
          <motion.button id="1" class="px-8 m-1" onClick={() => setSelected(1)}>
            About
          </motion.button>
          <motion.button id="2" class="px-8 m-1" onClick={() => setSelected(2)}>
            Contact
          </motion.button>
        </nav>
      </section>
      <section class="font-mono">
        <motion.div
          animate={{
            opacity: selected === 0 ? 1 : 0,
            scale: selected === 0 ? 1 : 0,
            backgroundColor: selected === 0 ? "black" : "white",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          class="absolute top-0  z--10 left-0 h-screen w-screen overflow-hidden"
        ></motion.div>
        <section class="absolute top-0 left-0 z--9">
          <ReactP5Wrapper sketch={sketch} amount={amount} />
        </section>
      </section>
    </>
  );
}
