import React, { useState, useEffect } from "react";

const ClickableSlider = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const [sliderWidth, setSliderWidth] = useState(window.innerWidth);

  const slides = [
    {
      title: "Step 1 - Find the Best Location",
      description: [
        "Use mapping tools to find ideal sites for renewable energy.",
        "Consider sunlight or wind availability to optimize energy.",
        "Minimize environmental impact while selecting locations.",
      ],
    },
    {
      title: "Step 2 - Recommend the Spot",
      description: [
        "Show the best locations with clear benefits for energy savings.",
        "Explain why it’s eco-friendly and efficient.",
        "Focus on reducing carbon footprint.",
      ],
    },
    {
      title: "Step 3 - Install the System",
      description: [
        "Set up solar panels or turbines in eco-friendly ways.",
        "Ensure maximum energy generation with minimal disruption.",
        "Follow safety and sustainability regulations.",
      ],
    },
    {
      title: "Step 4 - Monitor & Train",
      description: [
        "Give users real-time monitoring tools.",
        "Offer easy-to-follow training on system use.",
        "Promote energy savings and sustainability.",
      ],
    },
    {
      title: "Step 5 - Collect Feedback",
      description: [
        "Ask users for feedback on system performance.",
        "Improve future installations based on their input.",
        "Show the long-term impact on savings and the planet.",
      ],
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      setSliderWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const calculatePosition = (index) => {
    const increment = 120;
    const half = activeIndex;
    let x = 0,
      z = 0,
      zIndex,
      scaleX = 1,
      scaleY = 1,
      transformOrigin = "";

    if (index < half) {
      zIndex = index + 1;
      x = sliderWidth / 2 - increment * (half - index + 1);
      z = -increment * (half - index + 1);
    } else if (index > half) {
      zIndex = slides.length - index;
      x = sliderWidth / 2 + increment * (index - half + 1);
      z = -increment * (index - half + 1);
    } else {
      zIndex = slides.length;
      x = sliderWidth / 2;
      z = 1;
      scaleX = scaleY = 1.2;
      transformOrigin = "initial";
    }

    return {
      transform: `translate3d(${
        x - 150
      }px, 0, ${z}px) scale3d(${scaleX}, ${scaleY}, 1)`,
      zIndex,
      transformOrigin: transformOrigin || `${sliderWidth / 2}px center`,
    };
  };

  return (
    <div className="bg-gradient-to-b from-white-900 to-white-700 h-screen overflow-hidden">
      <h1 className="text-center text-black text-4xl font-outfit">
        Roadmap By GenShakti🍃
      </h1>
      <div className="mt-20 h-56 relative w-full perspective-1000">
        {slides.map((slide, index) => {
          const positionStyles = calculatePosition(index);
          return (
            <div
              key={index}
              className="absolute w-96 bg-gradient-to-r from-green-700/45 via-green-500/45 to-transparent border border-double border-transparent rounded-3xl backdrop-blur-md transition-all duration-400 transform-gpu"
              style={{
                transform: positionStyles.transform,
                zIndex: positionStyles.zIndex,
                transformOrigin: positionStyles.transformOrigin,
              }}
              onClick={() => handleClick(index)}
            >
              <div className="p-8">
                <h2 className="text-2xl font-outfit">{slide.title}</h2>
                <div className="text-lg font-dongle">
                  <ul className="list-none p-0">
                    {slide.description.map((item, idx) => (
                      <li key={idx} className="p-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClickableSlider;
