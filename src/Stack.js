import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  onActiveIndexChange // optional callback for parent
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format", description: "Card 1" },
          { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format", description: "Card 2" },
          { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format", description: "Card 3" },
          { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format", description: "Card 4" }
        ]
  );

  const activeIndex = 0;
  const activeDescription = cards[activeIndex]?.description || "";

  if (onActiveIndexChange) {
    onActiveIndexChange(activeIndex);
  }

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.5rem"
    }}>
      
      {/* Description on the left with fade animation */}
      <motion.div
        key={activeDescription} // triggers re-animation when description changes
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          color: 'black',
          minWidth: 250,
          maxWidth: 350,
          fontSize: '12px',
          textShadow: '0 0 8px #fff, 0 0 16px #a0a0ff',
          padding: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '8px'
        }}
      >
        <h2 style={{
          margin: 0,
          fontSize: '1.2rem',
          color: '#000'
        }}>
          {activeDescription}
        </h2>
        <p style={{
          marginTop: '0.5rem',
          lineHeight: 1.4,
          color: '#333'
        }}>
          This is a brief description or additional details about {activeDescription}.
        </p>
      </motion.div>

      {/* Stack of cards on the right */}
      <div
        className="stack-container"
        style={{
          width: cardDimensions.width,
          height: cardDimensions.height,
          perspective: 600,
        }}
      >
        {cards.map((card, index) => {
          const randomRotate = randomRotation
            ? Math.random() * 10 - 5
            : 0;

          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
            >
              <motion.div
                className="card"
                onClick={() => sendToBackOnClick && sendToBack(card.id)}
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                }}
                style={{
                  width: cardDimensions.width,
                  height: cardDimensions.height,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="card-image"
                  style={{ width: "100%", height: "100%", borderRadius: "12px" }}
                />
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
    </div>
  );
}
