import { useState } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "./actions";

const Review = ({ steps }) => {
  const { name, age } = steps;
  const dispatch = useDispatch();
  dispatch(getData(steps))
  return (
    <h4>
      Your name is {name.value} and age is {age.value}
    </h4>
  );
};
Review.propTypes = {
  steps: PropTypes.object,
};
const Chatbot = () => {
  const navigate = useNavigate();
  const handleChatEnd = () => {
    setTimeout(() => {
      navigate("/exit");
    }, 5000);
  };
  const generateAgeOptions = () => {
    const options = [];

    for (let age = 18; age <= 40; age++) {
      options.push({ value: String(age), label: String(age), trigger: "7" });
    }
    return options;
  };

  const [steps, setSteps] = useState([
    {
      id: "1",
      message: "Hello, Welcome to student info system!",
      delay: 3000,
      trigger: "2",
    },
    {
      id: "2",
      options: [{ value: "Got it", label: "Got it", trigger: "3" }],
    },
    {
      id: "3",
      message: "Enter your Name",
      trigger: "name",
    },
    {
      id: "name",
      user: true,
      trigger: "5",
    },
    {
      id: "5",
      message: "Hi {previousValue}! What is your age?",
      trigger: "age",
    },
    {
      id: "age",
      options: generateAgeOptions(),
    },
    {
      id: "7",
      message: "Great! Check out your summary",
      trigger: "review",
    },
    {
      id: "review",
      component: <Review />,
      trigger: "update",
    },
    {
      id: "update",
      delay: 1500,
      message: "Would you like to update some field?",
      trigger: "update-question",
    },
    {
      id: "update-question",
      options: [
        { value: "yes", label: "Yes", trigger: "update-yes" },
        { value: "no", label: "No", trigger: "end-message" },
      ],
    },
    {
      id: "update-yes",
      message: "What field would you like to update?",
      trigger: "update-fields",
    },
    {
      id: "update-fields",
      options: [
        { value: "name", label: "Name", trigger: "update-name" },
        { value: "age", label: "Age", trigger: "update-age" },
      ],
    },
    {
      id: "update-name",
      update: "name",
      trigger: "7",
    },
    {
      id: "update-age",
      update: "age",
      trigger: "7",
    },
    {
      id: "end-message",
      message: "Thank you. In 5 seconds, bot will exit.",
      end: true,
    },
  ]);
  
  return (
    <ChatBot
      style={{ position: "fixed", bottom: "0", right: "10px" }}
      steps={steps}
      handleEnd={handleChatEnd}
    />
  );
};

export default Chatbot;
