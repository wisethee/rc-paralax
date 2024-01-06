import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * 1,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: "600px",
        height: "100%",
        margin: "12rem auto",
      }}
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugiat
        ratione temporibus tempora, minus, doloremque sequi explicabo omnis
        veritatis culpa laborum. Quas quasi minima quae ducimus laborum quo
        asperiores sit.
      </p>
    </div>
  );
}
