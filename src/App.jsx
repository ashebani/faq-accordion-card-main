import { useState } from "react";
import arrow from "./images/icon-arrow-down.svg";

function App() {
  const [questionIndex, setQuestionIndex] = useState();
  const [open, setOpen] = useState(false);

  return (
    <div className="App relative ">
      <img
        className="hidden md:block absolute top-[60%] w-40 overflow-visible z-10 left-4 -translate-x-1/2 -translate-y-1/2 "
        src={require("./images/illustration-box-desktop.svg").default}
        alt="Flowers"
      />
      <main className="bg-white relative scale-1 w-[86vw] overflow-visible md:overflow-hidden   max-w-3xl md:max-w-4xl mx-6  rounded-3xl px-6 py-14 md:px-24 md:grid md:grid-cols-2  ">
        <section className="mt-20 md:overflow-hidden">
          <picture
            className="absolute
             top-12 left-[51%] w-[250px] -translate-x-1/2 -translate-y-1/2 md:top-[50%] md:left-10 md:w-[70%]   md:-translate-y-1/2"
          >
            <source
              media="(min-width:765px)"
              srcSet={require("./images/bg-pattern-desktop.svg").default}
            />
            <img
              src={require("./images/bg-pattern-mobile.svg").default}
              alt="Flowers"
            />
          </picture>
          <picture className="absolute -top-5 left-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-40 md:w-[60%]  md:-translate-y-1/2">
            <source
              media="(min-width:765px)"
              srcset={
                require("./images/illustration-woman-online-desktop.svg")
                  .default
              }
            />
            <img
              src={
                require("./images/illustration-woman-online-mobile.svg").default
              }
              alt="Flowers"
            />
          </picture>
        </section>
        <section>
          <h1 className="mb-8 md:text-left text-center text-3xl font-bold text-veryDarkDesaturatedBlue">
            FAQ
          </h1>
          {/* TODO: Use Map function to loop over all the questions */}
          <div className="grid gap-4 text-textDarkGrayishBlue  ">
            {frequentQuestions.map((part, index) => {
              return (
                <div
                  key={index}
                  className="border-b-2  border-dividerLightGrayishBlue pb-5"
                >
                  <div
                    onClick={() => {
                      if (index === questionIndex) {
                        setQuestionIndex(undefined);
                      } else {
                        setQuestionIndex(index);
                      }
                    }}
                    className="flex cursor-pointer  items-center justify-between"
                  >
                    <h3
                      className={` text-sm font-semibold ${
                        index === questionIndex
                          ? "font-bold text-veryDarkDesaturatedBlue"
                          : ""
                      }`}
                    >
                      {part.question}
                    </h3>
                    <img
                      className={`w-3 h-full ${
                        index === questionIndex
                          ? "rotate-180 duration-300"
                          : "rotate-0 duration-300"
                      }`}
                      src={arrow}
                      alt="arrow"
                    />
                  </div>
                  <p
                    className={`text-sm pt-2 ${
                      index === questionIndex ? "block " : "hidden "
                    } `}
                  >
                    {part.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

const frequentQuestions = [
  {
    question: "How many team members can I invite?",
    answer: `You can invite up to 2 additional users on the Free plan. There is no limit on 
  team members for the Premium plan.`,
  },

  {
    question: "What is the maximum file upload size? ",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
