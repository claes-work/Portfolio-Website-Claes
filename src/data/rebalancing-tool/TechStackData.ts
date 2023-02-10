import { ref } from "vue";
import type { Ref } from "vue";
import type { TechData } from "@/models/TechData";
export const techStackData: Ref<TechData[]> = ref([
    {
        icon: "url(src/assets/images/tech-icons/vite_logo.png)",
        title: "Vite",
        usageList: [
            "Development tool"
        ],
        description: "I chose vite, because it is built on top of the native ES modules feature in modern browsers, which allows it to start a development server and hot-reload changes in the browser much faster than tools that rely on webpack or other bundlers.",
        implementedBy: {
            profileImg: "",
            tag: "@claes-work",
            fullName: "Sebastian Claes"
        }
    },
    {
        icon: "url(src/assets/images/tech-icons/vuejs_logo.png)",
        title: "Vue3",
        usageList: [
            "Composition API",
            "Vue Router",
            "Pinia <span>(state management)</span>"
        ],
        description: "Vue.js is a good choice for professional development because it provides a powerful and flexible framework for building complex user interfaces. It has a clear and simple structure, which makes it easy to learn and understand. Additionally, Vue's reactive data model and powerful two-way data binding make it easy to build responsive and dynamic user interfaces. It also has a large and active community, which means that there are many resources and third-party packages available to help developers. Furthermore, Vue offers official tools like Vue CLI, Vue Devtools, and Vue-Router, that help to set up, debug and maintain the application easily. All these features make Vue a great choice for professional development.",
        implementedBy: {
            profileImg: "",
            tag: "@claes-work",
            fullName: "Sebastian Claes"
        }
    },
    {
        icon: "url(src/assets/images/tech-icons/typescript_logo.png)",
        title: "TypeScript",
        usageList: [
            "Static type checking",
            "Interfaces",
            "Enums",
            "Decorators"
        ],
        description: "TypeScript is one of my favorite choices because it provides optional static type checking and other features that can help to catch errors early in the development process and make the code more maintainable. It also allows developers to use features such as interfaces, classes, and decorators that are not found in JavaScript, which can make the code more organized and easier to understand. Additionally, TypeScript has a growing community and is supported by many popular frameworks and libraries, making it easy to integrate into a variety of projects. Furthermore, TypeScript code is transpiled to JavaScript, so it can run on any JavaScript environment, which means that it can be used in any web or backend development with JavaScript. Overall, TypeScript's static type checking, class-based object-oriented programming, and other features make it a great choice for large-scale enterprise applications.",
        implementedBy: {
            profileImg: "",
            tag: "@claes-work",
            fullName: "Sebastian Claes"
        }
    },
    {
        icon: "url(src/assets/images/tech-icons/sass_logo.png)",
        title: "Sass",
        usageList: [
            "Variables",
            "Mixins",
            "Nesting"
        ],
        description: "Sass is a better choice than plain css because it provides a powerful set of features that make styling web pages more efficient and maintainable. Sass allows you to use variables, nesting, mixins and functions, which makes it easy to reuse and organize the code. With Sass, you can also use mathematical operations, functions, and other advanced features that help to make your stylesheets more dynamic and expressive. Additionally, Sass also allows you to use partials, which are smaller Sass files that can be imported into other Sass files, making it easy to organize and maintain large projects. Furthermore, it has a large and active community, which means that there are many resources and third-party packages available to help developers. All these features make Sass a great choice for professional development.",
        implementedBy: {
            profileImg: "",
            tag: "@claes-work",
            fullName: "Sebastian Claes"
        }
    },
    {
        icon: "url(src/assets/images/tech-icons/figma_logo.png)",
        title: "Figma",
        usageList: [
            "Wireframes",
            "Full design"
        ],
        description: "Having a design before starting development helps to ensure that the project's goals and requirements are clearly understood, and that the final product will meet those requirements. It also helps to identify potential issues and constraints early on, which can save time and resources during the development process. Additionally, a design provides a clear plan for development, which can help to keep the project on track and ensure that the final product is cohesive and visually appealing.",
        implementedBy: {
            profileImg: "",
            tag: "@claes-work",
            fullName: "Sebastian Claes"
        }
    }
])
