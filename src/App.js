import { Component } from "react";
import { v4 as uuid4 } from "uuid";

import portfolioContext from "./context/portfolioContext";
import Home from "./components/Home/Home";
import AddProject from "./components/AddProject/AddProject";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

import "./App.css";

const initialProjectsList = [
  {
    id: uuid4(),
    name: "Food Munch",
    link: "https://fmvenkatesh.ccbp.tech/",
    description: `
      Embark on a culinary journey with Food Munch, a fully responsive website meticulously crafted using HTML, CSS, and Bootstrap. Navigate through an intuitive navbar with sections like 'Choose Us,' 'Explore Menu,' 'Delivery,' 'Payment,' and 'Follow Us' for an immersive user experience.

      Discover our commitment to quality and exceptional service in the 'Choose Us' section, while the 'Explore Menu' entices you with visually appealing cards providing detailed information on each delectable dish. Seamless 'Delivery' and 'Payment' options make ordering a breeze, complete with real-time tracking.

      Stay connected with the latest offerings and promotions across social media through the 'Follow Us' integration. With user-friendly navigation and information-packed cards, Food Munch offers a delightful experience for food enthusiasts. Excited to showcase this project in my portfolio, where technology meets taste for a seamless and delicious journey!
    `,
    img: "https://res.cloudinary.com/dg78ao4vi/image/upload/v1704533811/motherson/uknwlguqr7vuakrda7qj.png",
  },
  {
    id: uuid4(),
    name: "Wikipedia Search Application",
    link: "https://wikipevenkatesh.ccbp.tech/",
    description: `
      Dive into the world of information with the Wikipedia Search Application. I developed a custom search application where users can explore curated results and delve deeper into detailed explanations on Wikipedia by clicking on specific results.

      This project showcases my proficiency in creating user-friendly interfaces and integrating API functionalities. The intuitive design allows for seamless exploration and learning. Check out the Wikipedia Search Application to enhance your knowledge journey!
    `,
    img: "https://res.cloudinary.com/dg78ao4vi/image/upload/v1704535287/motherson/uoyefoptpcrc0lhviddy.png",
  },
  {
    id: uuid4(),
    name: "Password Manager",
    link: "https://pwdmanager.ccbp.tech/",
    description: `
      Enhance your digital security with the Password Manager, a React-based application designed to streamline and elevate your password management experience. Seamlessly manage your credentials with functionalities such as adding new passwords, concealing them with stars for added security, and the option to reveal them when needed.

      Explore a clean and user-friendly interface that dynamically reacts to user interactions. Experience the perfect balance between simplicity and security. Visit the Password Manager and safeguard your credentials effortlessly!
    `,
    img: "https://res.cloudinary.com/dg78ao4vi/image/upload/v1704534628/motherson/y9sdfixbwpokoiq6z7ai.png",
  },
  {
    id: uuid4(),
    name: "Todo App",
    link: "https://todosvenkatesh.ccbp.tech/",
    description: `
      Immerse yourself in the world of dynamic web applications with the Todo App. Gain insights into employing the Document Object Model (DOM) and utilizing local storage functionalities for efficient task management. This project exemplifies my skills in creating interactive and practical web applications.

      Experience the convenience of managing your tasks dynamically and efficiently. Check out the Todo App and elevate your understanding of web application development!
    `,
    img: "https://res.cloudinary.com/dhaj9wlmu/image/upload/v1704112910/Todo_App_-_Google_Chrome_01-01-2024_18_10_06_trsvch.png",
  },
];


const localStorageKey = "portfolio_projects_data";

class App extends Component {
  state = {
    projectsList: [],
  };

  componentDidMount = () => {
    const storedProjectsList = localStorage.getItem(localStorageKey);
    const parseStoredProjectsList = JSON.parse(storedProjectsList);
    console.log(parseStoredProjectsList);
    if (parseStoredProjectsList === null) {
      this.setState({ projectsList: initialProjectsList });
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(initialProjectsList)
      );
    } else {
      this.setState({ projectsList: parseStoredProjectsList });
    }
  };

  componentDidUpdate = () => {
    const { projectsList } = this.state;
    const stringifyProjectList = JSON.stringify(projectsList);
    localStorage.setItem(localStorageKey, stringifyProjectList);
  };

  addProject = (projectItem) => {
    const { projectsList } = this.state;
    const updatedProjectsList = [projectItem, ...projectsList];
    this.setState({ projectsList: updatedProjectsList });
  };

  render() {
    const { projectsList } = this.state;
    console.log(projectsList + "render");
    return (
      <portfolioContext.Provider
        value={{ projectsList, addProject: this.addProject }}
      >
        <Home />
        <AddProject />
        <Projects />
        <Contacts />
      </portfolioContext.Provider>
    );
  }
}

export default App;
