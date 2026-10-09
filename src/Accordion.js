import { useState } from "react";
import "./style/main.scss";
const accordionContents = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      " Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS,  and JavaScript. It is suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "  Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question:
      " How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return <Accordion />;
}

function Accordion() {
  const [open, setOpen] = useState(null);

  const checkActive = function (id) {
    setOpen(id === open ? null : id);
  };

  return (
    <main className="accordion-container">
      <h1 className="accordion-container__heading">
        <img
          className="icons accordion-container__star"
          src="/assets/images/icon-star.svg"
          alt="star icon"
        />{" "}
        <span>FAQs</span>
      </h1>

      <ul className="accordion">
        {accordionContents.map((accordion, index) => (
          <AccordionList
            data={accordion}
            open={open}
            onToggle={checkActive}
            key={accordion.question}
            id={index + 1}
          />
        ))}
      </ul>
    </main>
  );
}

function AccordionList({ data, open, onToggle, id }) {
  const isOpen = open === id;
  const panelId = `faq-answer ${id}`;
  const buttonId = `faq-answer ${id}`;
  return (
    <li className={`accordion-list ${isOpen ? "accordion-list--active" : ""}`}>
      <h2 className="accordion-list__heading">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => {
            onToggle(id);
          }}
          className="accordion-list__button"
        >
          <span className="accordion-list__question">{data.question}</span>
          <img
            className="icons accordion-lists__icon"
            src={
              isOpen
                ? "/assets/images/icon-minus.svg"
                : "/assets/images/icon-plus.svg"
            }
            alt={isOpen ? "minus icon" : "plus icon"}
          />
        </button>
      </h2>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        // hidden={!isOpen}
        className="accordion-list__panel"
      >
        {isOpen ? <p className="accordion-list__answer">{data.answer}</p> : ""}
      </div>
    </li>
  );
}

// function Footer() {
//   return (
//     <footer class="attribution">
//       <span>Challenge by </span>
//       <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
//       Coded by{" "}
//       <a href="https://github.com/abdulsalamopeyemi">
//         Opeyemi Abdulsalam Rufus
//       </a>
//     </footer>
//   );
// }

//  function

/**
 * 
 *   FAQs



  

 * 
 */
