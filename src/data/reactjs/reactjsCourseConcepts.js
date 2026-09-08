export const reactjsCourseConcepts = [
  {
    "id": 1,
    "title": "What is React?",
    "category": "basics",
    "level": "beginner",
    "description": "React is a JavaScript library for building user interfaces. It's component-based and uses a virtual DOM for efficient updates.",
    "why": "To build interactive, fast, and scalable web applications with reusable components.",
    "when": "Single-page applications (SPAs), dynamic web apps, frontend development.",
    "code": "// A simple React component\nfunction Welcome() {\n    return <h1>Hello, React!</h1>;\n}\n\n// Rendering to DOM\nReactDOM.render(\n    <Welcome />,\n    document.getElementById('root')\n);"
  },
  {
    "id": 2,
    "title": "JSX (JavaScript XML)",
    "category": "basics",
    "level": "beginner",
    "description": "JSX allows you to write HTML-like syntax in JavaScript. It's transformed to React.createElement() calls.",
    "why": "To write UI code that's familiar and intuitive (like HTML) within JavaScript.",
    "when": "Every React component uses JSX to define its UI.",
    "code": "// JSX syntax\nconst element = <h1 className=\"title\">Hello World!</h1>;\n\n// JSX with expressions\nconst name = \"Alice\";\nconst greeting = <div>Hello, {name}!</div>;\n\n// JSX with attributes\nconst img = <img src=\"image.jpg\" alt=\"Image\" />;\n\n// JSX with children\nconst container = (\n    <div>\n        <h1>Title</h1>\n        <p>Description</p>\n    </div>\n);"
  },
  {
    "id": 3,
    "title": "ReactDOM",
    "category": "basics",
    "level": "beginner",
    "description": "ReactDOM is the package that connects React components to the DOM (Document Object Model).",
    "why": "To mount React components into the actual browser DOM.",
    "when": "Entry point of every React application.",
    "code": "// Rendering to DOM\nReactDOM.render(\n    <App />,\n    document.getElementById('root')\n);\n\n// React 18+\nconst root = ReactDOM.createRoot(\n    document.getElementById('root')\n);\nroot.render(<App />);\n\n// Hydration (for SSR)\nReactDOM.hydrate(<App />, document.getElementById('root'));"
  },
  {
    "id": 4,
    "title": "Components (Functional & Class)",
    "category": "components",
    "level": "beginner",
    "description": "Components are the building blocks of React. They can be functional or class-based.",
    "why": "To break the UI into reusable, isolated pieces.",
    "when": "Everything in React is a component!",
    "code": "// Functional Component (modern)\nfunction Welcome(props) {\n    return <h1>Hello, {props.name}!</h1>;\n}\n\n// Class Component (legacy)\nclass Welcome extends React.Component {\n    render() {\n        return <h1>Hello, {this.props.name}!</h1>;\n    }\n}\n\n// Arrow function component\nconst Welcome = (props) => <h1>Hello, {props.name}!</h1>;"
  },
  {
    "id": 5,
    "title": "Props (Properties)",
    "category": "components",
    "level": "beginner",
    "description": "Props are read-only data passed from parent to child components.",
    "why": "To pass data down the component tree.",
    "when": "Every time you need to pass data from parent to child.",
    "code": "// Parent component\nfunction App() {\n    return <Greeting name=\"Alice\" age={30} />;\n}\n\n// Child component receiving props\nfunction Greeting(props) {\n    return (\n        <div>\n            <h1>Hello, {props.name}!</h1>\n            <p>Age: {props.age}</p>\n        </div>\n    );\n}\n\n// Destructuring props\nfunction Greeting({ name, age }) {\n    return <h1>Hello, {name}! You are {age}.</h1>;\n}"
  },
  {
    "id": 6,
    "title": "State (useState)",
    "category": "hooks",
    "level": "beginner",
    "description": "State is data that changes over time. useState is the most basic Hook for managing state.",
    "why": "To manage data that changes in your component.",
    "when": "Any interactive component that needs to track data.",
    "code": "import { useState } from 'react';\n\nfunction Counter() {\n    const [count, setCount] = useState(0); // [state, setter]\n\n    return (\n        <div>\n            <p>You clicked {count} times</p>\n            <button onClick={() => setCount(count + 1)}>\n                Click me\n            </button>\n        </div>\n    );\n}"
  },
  {
    "id": 7,
    "title": "Event Handling",
    "category": "basics",
    "level": "beginner",
    "description": "React events are similar to DOM events but use camelCase and are passed as functions.",
    "why": "To handle user interactions like clicks, typing, submission, etc.",
    "when": "Every interactive component.",
    "code": "function Button() {\n    const handleClick = (event) => {\n        console.log('Button clicked!', event);\n    };\n\n    const handleSubmit = (e) => {\n        e.preventDefault(); // Prevent default behavior\n        console.log('Form submitted');\n    };\n\n    return (\n        <div>\n            <button onClick={handleClick}>Click me</button>\n            <form onSubmit={handleSubmit}>\n                <input type=\"text\" onChange={(e) => console.log(e.target.value)} />\n                <button type=\"submit\">Submit</button>\n            </form>\n        </div>\n    );\n}"
  },
  {
    "id": 8,
    "title": "Conditional Rendering",
    "category": "basics",
    "level": "beginner",
    "description": "Render different UI based on conditions.",
    "why": "To show/hide elements based on state or props.",
    "when": "Loading states, authentication, feature toggles.",
    "code": "function Greeting({ isLoggedIn }) {\n    // if/else\n    if (isLoggedIn) {\n        return <h1>Welcome back!</h1>;\n    }\n    return <h1>Please sign in.</h1>;\n\n    // Ternary operator\n    return (\n        <div>\n            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}\n        </div>\n    );\n\n    // Logical && (short-circuit)\n    return (\n        <div>\n            {isLoggedIn && <h1>Welcome back!</h1>}\n        </div>\n    );\n}"
  },
  {
    "id": 9,
    "title": "Lists and Keys",
    "category": "basics",
    "level": "beginner",
    "description": "Rendering lists with map() and providing unique keys for each item.",
    "why": "Keys help React identify which items changed, added, or removed.",
    "when": "Rendering any list or array of elements.",
    "code": "function TodoList({ todos }) {\n    return (\n        <ul>\n            {todos.map(todo => (\n                <li key={todo.id}>{todo.text}</li> // key is required!\n            ))}\n        </ul>\n    );\n}\n\n// If no ID, use index (not recommended for reordering)\nreturn (\n    <ul>\n        {todos.map((todo, index) => (\n            <li key={index}>{todo}</li>\n        ))}\n    </ul>\n);"
  },
  {
    "id": 10,
    "title": "Fragments",
    "category": "basics",
    "level": "beginner",
    "description": "Fragments allow grouping elements without adding extra DOM nodes.",
    "why": "To avoid unnecessary wrapper elements in the DOM.",
    "when": "Returning multiple elements from a component.",
    "code": "// Using <></> (short syntax)\nfunction Columns() {\n    return (\n        <>\n            <td>Hello</td>\n            <td>World</td>\n        </>\n    );\n}\n\n// Using React.Fragment\nimport { Fragment } from 'react';\n\nfunction Columns() {\n    return (\n        <Fragment>\n            <td>Hello</td>\n            <td>World</td>\n        </Fragment>\n    );\n}"
  },
  {
    "id": 11,
    "title": "Component Lifecycle",
    "category": "components",
    "level": "beginner",
    "description": "Components go through mount, update, and unmount phases.",
    "why": "To control side effects and optimize performance.",
    "when": "Fetching data, subscriptions, DOM manipulation.",
    "code": "// Class component lifecycle\nclass MyComponent extends React.Component {\n    componentDidMount() { // Called after component mounts\n        console.log('Component mounted');\n    }\n    componentDidUpdate(prevProps) { // Called after update\n        console.log('Component updated');\n    }\n    componentWillUnmount() { // Called before unmount\n        console.log('Component unmounted');\n    }\n    render() { return <div>Hello</div>; }\n}\n\n// Functional component with useEffect (covers all)\nimport { useEffect } from 'react';\n\nfunction MyComponent() {\n    useEffect(() => {\n        console.log('Mount'); // componentDidMount\n        return () => console.log('Unmount'); // componentWillUnmount\n    }, []); // Empty array = run once\n    return <div>Hello</div>;\n}"
  },
  {
    "id": 12,
    "title": "Controlled Components",
    "category": "forms",
    "level": "beginner",
    "description": "Input elements whose value is controlled by React state.",
    "why": "React controls the input value, making it predictable.",
    "when": "Forms where you need validation or to react to changes.",
    "code": "function NameForm() {\n    const [name, setName] = useState('');\n\n    const handleChange = (e) => setName(e.target.value);\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        console.log('Submitted:', name);\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input\n                type=\"text\"\n                value={name}\n                onChange={handleChange}\n            />\n            <button type=\"submit\">Submit</button>\n        </form>\n    );\n}"
  },
  {
    "id": 13,
    "title": "Uncontrolled Components",
    "category": "forms",
    "level": "beginner",
    "description": "Input elements that manage their own state via the DOM.",
    "why": "Simpler when you don't need to react to every change.",
    "when": "Forms where you only need the value on submit.",
    "code": "function NameForm() {\n    const inputRef = useRef(null);\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        console.log('Value:', inputRef.current.value);\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input type=\"text\" ref={inputRef} defaultValue=\"Initial\" />\n            <button type=\"submit\">Submit</button>\n        </form>\n    );\n}"
  },
  {
    "id": 14,
    "title": "Styling in React",
    "category": "basics",
    "level": "beginner",
    "description": "Multiple ways to style React components.",
    "why": "To make your app look good and maintain consistent design.",
    "when": "Every component needs styling!",
    "code": "// 1. Inline styles\nconst divStyle = { color: 'blue', fontSize: '20px' };\nreturn <div style={divStyle}>Hello</div>;\n\n// 2. CSS Modules (file: Button.module.css)\nimport styles from './Button.module.css';\nreturn <button className={styles.button}>Click</button>;\n\n// 3. Styled Components\nimport styled from 'styled-components';\nconst Button = styled.button`\n    background: blue;\n    color: white;\n    padding: 10px;\n`;\n\n// 4. Tailwind CSS\nreturn <button className=\"bg-blue-500 text-white p-2\">Click</button>;"
  },
  {
    "id": 15,
    "title": "React Developer Tools",
    "category": "basics",
    "level": "beginner",
    "description": "Browser extension for debugging React applications.",
    "why": "To debug and inspect React components easily.",
    "when": "Every React developer should use this!",
    "code": "// Features:\n// 1. Inspect component tree\n// 2. View props and state\n// 3. Edit props/state in real-time\n// 4. Profile performance\n// 5. Debug hooks\n\n// Install:\n// - Chrome: React Developer Tools extension\n// - Firefox: React Developer Tools add-on\n\n// Use in code:\nif (process.env.NODE_ENV === 'development') {\n    console.log('Dev tools ready');\n}"
  },
  {
    "id": 16,
    "title": "Children Prop",
    "category": "components",
    "level": "beginner",
    "description": "Pass JSX content between opening and closing tags of a component.",
    "why": "To create reusable wrapper/layout components.",
    "when": "Cards, modals, containers, layouts.",
    "code": "function Card({ title, children }) {\n    return (\n        <div className=\"card\">\n            <h2>{title}</h2>\n            <div className=\"content\">\n                {children} // renders everything between <Card> tags\n            </div>\n        </div>\n    );\n}\n\n// Usage\n<Card title=\"Welcome\">\n    <p>This is the content inside the card.</p>\n    <button>Click me</button>\n</Card>"
  },
  {
    "id": 17,
    "title": "useEffect",
    "category": "hooks",
    "level": "intermediate",
    "description": "Handle side effects in functional components (data fetching, subscriptions, DOM updates).",
    "why": "To perform side effects in functional components.",
    "when": "Data fetching, subscriptions, DOM manipulation, timers.",
    "code": "import { useEffect, useState } from 'react';\n\nfunction DataFetcher() {\n    const [data, setData] = useState(null);\n\n    useEffect(() => {\n        // Run on mount and when dependencies change\n        fetchData().then(setData);\n\n        // Cleanup function\n        return () => {\n            console.log('Cleanup');\n        };\n    }, []); // Empty = run once on mount\n\n    useEffect(() => {\n        console.log('Data changed:', data);\n    }, [data]); // Run when data changes\n\n    return <div>{data}</div>;\n}"
  },
  {
    "id": 18,
    "title": "useContext",
    "category": "context",
    "level": "intermediate",
    "description": "Access context values without prop drilling. Context provides a way to pass data through the component tree without passing props down manually at every level.",
    "why": "To avoid prop drilling and share global data (theme, user, language) across many components.",
    "when": "Theme, user authentication, language preferences, global app state.",
    "code": "// 1. Create Context\nconst ThemeContext = React.createContext('light');\n\n// 2. Provider (provides value to all children)\nfunction App() {\n    const [theme, setTheme] = useState('dark');\n    \n    return (\n        <ThemeContext.Provider value={{ theme, setTheme }}>\n            <Toolbar />\n        </ThemeContext.Provider>\n    );\n}\n\n// 3. Consumer (uses value)\nfunction Toolbar() {\n    const { theme, setTheme } = useContext(ThemeContext);\n    return (\n        <div style={{ background: theme === 'dark' ? '#333' : '#fff' }}>\n            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>\n                Toggle Theme\n            </button>\n        </div>\n    );\n}\n\n// Multiple Contexts\nconst UserContext = React.createContext();\nconst ThemeContext = React.createContext();\n\nfunction App() {\n    return (\n        <UserContext.Provider value={user}>\n            <ThemeContext.Provider value={theme}>\n                <Dashboard />\n            </ThemeContext.Provider>\n        </UserContext.Provider>\n    );\n}"
  },
  {
    "id": 19,
    "title": "useReducer",
    "category": "hooks",
    "level": "intermediate",
    "description": "Alternative to useState for complex state logic.",
    "why": "To handle complex state logic with actions like Redux.",
    "when": "State with multiple sub-values or next state depends on previous.",
    "code": "const initialState = { count: 0 };\n\nfunction reducer(state, action) {\n    switch (action.type) {\n        case 'increment':\n            return { count: state.count + 1 };\n        case 'decrement':\n            return { count: state.count - 1 };\n        case 'reset':\n            return { count: 0 };\n        default:\n            return state;\n    }\n}\n\nfunction Counter() {\n    const [state, dispatch] = useReducer(reducer, initialState);\n\n    return (\n        <div>\n            Count: {state.count}\n            <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n        </div>\n    );\n}"
  },
  {
    "id": 20,
    "title": "useRef",
    "category": "hooks",
    "level": "intermediate",
    "description": "Persist values across renders without causing re-renders. Also used for DOM refs.",
    "why": "To access DOM elements and store mutable values without re-renders.",
    "when": "Focusing inputs, timers, storing previous values.",
    "code": "// DOM refs\nfunction InputFocus() {\n    const inputRef = useRef(null);\n\n    const focusInput = () => {\n        inputRef.current.focus();\n    };\n\n    return (\n        <div>\n            <input ref={inputRef} type=\"text\" />\n            <button onClick={focusInput}>Focus Input</button>\n        </div>\n    );\n}\n\n// Storing mutable values (no re-render)\nfunction Timer() {\n    const intervalRef = useRef(null);\n    \n    useEffect(() => {\n        intervalRef.current = setInterval(() => {\n            console.log('Tick');\n        }, 1000);\n        return () => clearInterval(intervalRef.current);\n    }, []);\n}"
  },
  {
    "id": 21,
    "title": "useMemo",
    "category": "hooks",
    "level": "intermediate",
    "description": "Memoize expensive calculations to avoid re-computation on every render.",
    "why": "To optimize performance by caching expensive calculations.",
    "when": "Expensive computations, data filtering, sorting.",
    "code": "import { useMemo, useState } from 'react';\n\nfunction ExpensiveComponent({ items }) {\n    const [filter, setFilter] = useState('');\n\n    // Only re-calculate when items or filter changes\n    const filteredItems = useMemo(() => {\n        console.log('Filtering items...');\n        return items.filter(item =>\n            item.toLowerCase().includes(filter.toLowerCase())\n        );\n    }, [items, filter]);\n\n    return (\n        <div>\n            <input value={filter} onChange={(e) => setFilter(e.target.value)} />\n            {filteredItems.map(item => <div key={item}>{item}</div>)}\n        </div>\n    );\n}"
  },
  {
    "id": 22,
    "title": "useCallback",
    "category": "hooks",
    "level": "intermediate",
    "description": "Memoize functions to prevent unnecessary re-creation.",
    "why": "To prevent child components from re-rendering unnecessarily.",
    "when": "Passing callbacks to memoized child components.",
    "code": "import { useCallback, useState } from 'react';\n\nfunction Parent() {\n    const [count, setCount] = useState(0);\n\n    // Function is only re-created when count changes\n    const handleClick = useCallback(() => {\n        console.log('Clicked!', count);\n    }, [count]);\n\n    return (\n        <div>\n            <button onClick={() => setCount(count + 1)}>Count: {count}</button>\n            <Child onClick={handleClick} />\n        </div>\n    );\n}\n\nfunction Child({ onClick }) {\n    return <button onClick={onClick}>Child Button</button>;\n}"
  },
  {
    "id": 23,
    "title": "Custom Hooks",
    "category": "hooks",
    "level": "intermediate",
    "description": "Reusable logic extracted into custom hooks.",
    "why": "To reuse stateful logic across multiple components.",
    "when": "Fetching data, local storage, form handling, etc.",
    "code": "// useLocalStorage.js\nfunction useLocalStorage(key, initialValue) {\n    const [storedValue, setStoredValue] = useState(() => {\n        try {\n            const item = localStorage.getItem(key);\n            return item ? JSON.parse(item) : initialValue;\n        } catch (error) {\n            return initialValue;\n        }\n    });\n\n    const setValue = (value) => {\n        try {\n            setStoredValue(value);\n            localStorage.setItem(key, JSON.stringify(value));\n        } catch (error) {\n            console.error(error);\n        }\n    };\n\n    return [storedValue, setValue];\n}\n\n// Usage\nfunction App() {\n    const [name, setName] = useLocalStorage('name', '');\n    return (\n        <input\n            value={name}\n            onChange={(e) => setName(e.target.value)}\n        />\n    );\n}"
  },
  {
    "id": 24,
    "title": "Context API (Deep Dive)",
    "category": "context",
    "level": "intermediate",
    "description": "Advanced Context patterns: Provider composition, Context with useReducer, and optimizing Context performance.",
    "why": "To manage global state efficiently with better performance and organization.",
    "when": "Medium to large apps, complex state management, when Redux is overkill.",
    "code": "// Context with useReducer (like Redux)\nconst AppContext = createContext();\n\nconst initialState = { user: null, theme: 'light' };\n\nfunction reducer(state, action) {\n    switch (action.type) {\n        case 'SET_USER':\n            return { ...state, user: action.payload };\n        case 'TOGGLE_THEME':\n            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };\n        default:\n            return state;\n    }\n}\n\nfunction AppProvider({ children }) {\n    const [state, dispatch] = useReducer(reducer, initialState);\n    return (\n        <AppContext.Provider value={{ state, dispatch }}>\n            {children}\n        </AppContext.Provider>\n    );\n}\n\n// Custom hook to use context\nfunction useApp() {\n    const context = useContext(AppContext);\n    if (!context) throw new Error('useApp must be used within AppProvider');\n    return context;\n}\n\n// Usage in components\nfunction Profile() {\n    const { state, dispatch } = useApp();\n    \n    const login = () => {\n        dispatch({ type: 'SET_USER', payload: { name: 'Alice' } });\n    };\n    \n    return (\n        <div>\n            <p>User: {state.user?.name || 'Guest'}</p>\n            <button onClick={login}>Login</button>\n            <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>\n                Toggle Theme\n            </button>\n        </div>\n    );\n}\n\n// Context Performance Optimization\n// Split contexts to avoid unnecessary re-renders\nconst UserContext = createContext();\nconst ThemeContext = createContext();\n\nfunction App() {\n    return (\n        <UserProvider>\n            <ThemeProvider>\n                <Dashboard />\n            </ThemeProvider>\n        </UserProvider>\n    );\n}"
  },
  {
    "id": 25,
    "title": "Props Drilling vs Context",
    "category": "context",
    "level": "intermediate",
    "description": "Props drilling is passing data through many levels. Context is a better solution for deep data.",
    "why": "Context avoids passing props through many levels.",
    "when": "Theme, user auth, global state.",
    "code": "// ❌ Props Drilling (bad)\nfunction App() {\n    const [user, setUser] = useState('Alice');\n    return <Level1 user={user} />;\n}\nfunction Level1({ user }) { return <Level2 user={user} />; }\nfunction Level2({ user }) { return <Level3 user={user} />; }\nfunction Level3({ user }) { return <div>{user}</div>; }\n\n// ✅ Using Context (good)\nconst UserContext = React.createContext();\n\nfunction App() {\n    const [user] = useState('Alice');\n    return (\n        <UserContext.Provider value={user}>\n            <Level1 />\n        </UserContext.Provider>\n    );\n}\nfunction Level1() { return <Level2 />; }\nfunction Level3() {\n    const user = useContext(UserContext);\n    return <div>{user}</div>;\n}"
  },
  {
    "id": 26,
    "title": "Lifting State Up",
    "category": "state",
    "level": "intermediate",
    "description": "Moving state to the closest common ancestor of components that need it.",
    "why": "To share state between multiple components.",
    "when": "Sibling components need to share data.",
    "code": "function TemperatureConverter() {\n    const [temperature, setTemperature] = useState('');\n\n    return (\n        <div>\n            <CelsiusInput\n                temperature={temperature}\n                onTemperatureChange={setTemperature}\n            />\n            <FahrenheitInput\n                temperature={temperature}\n                onTemperatureChange={setTemperature}\n            />\n        </div>\n    );\n}\n\nfunction CelsiusInput({ temperature, onTemperatureChange }) {\n    const handleChange = (e) => {\n        onTemperatureChange(e.target.value);\n    };\n    return (\n        <input value={temperature} onChange={handleChange} />\n    );\n}"
  },
  {
    "id": 27,
    "title": "React.memo",
    "category": "performance",
    "level": "intermediate",
    "description": "Memoize components to prevent unnecessary re-renders.",
    "why": "To optimize performance by preventing re-renders.",
    "when": "Components that re-render frequently with same props.",
    "code": "import { memo } from 'react';\n\n// Component wrapped with memo\nconst Child = memo(function Child({ name }) {\n    console.log('Child rendered');\n    return <div>Hello, {name}!</div>;\n});\n\nfunction Parent() {\n    const [count, setCount] = useState(0);\n    const [name] = useState('Alice');\n\n    return (\n        <div>\n            <button onClick={() => setCount(count + 1)}>\n                Count: {count}\n            </button>\n            <Child name={name} /> // Only re-renders when name changes\n        </div>\n    );\n}"
  },
  {
    "id": 28,
    "title": "PureComponent",
    "category": "performance",
    "level": "intermediate",
    "description": "Class component version of memo, automatically implements shouldComponentUpdate.",
    "why": "To optimize performance with shallow prop/state comparison.",
    "when": "Class components that only depend on props and state.",
    "code": "import { PureComponent } from 'react';\n\nclass Child extends PureComponent {\n    render() {\n        console.log('Child rendered');\n        return <div>Hello, {this.props.name}!</div>;\n    }\n}\n\nclass Parent extends React.Component {\n    state = { count: 0, name: 'Alice' };\n\n    render() {\n        return (\n            <div>\n                <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n                    Count: {this.state.count}\n                </button>\n                <Child name={this.state.name} />\n            </div>\n        );\n    }\n}"
  },
  {
    "id": 29,
    "title": "React Router (Basics)",
    "category": "routing",
    "level": "intermediate",
    "description": "Client-side routing for single-page applications.",
    "why": "To navigate between pages without full page reload.",
    "when": "Every SPA with multiple views/pages.",
    "code": "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n    return (\n        <BrowserRouter>\n            <nav>\n                <Link to=\"/\">Home</Link>\n                <Link to=\"/about\">About</Link>\n                <Link to=\"/users\">Users</Link>\n            </nav>\n            <Routes>\n                <Route path=\"/\" element={<Home />} />\n                <Route path=\"/about\" element={<About />} />\n                <Route path=\"/users\" element={<Users />} />\n                <Route path=\"*\" element={<NotFound />} />\n            </Routes>\n        </BrowserRouter>\n    );\n}"
  },
  {
    "id": 30,
    "title": "React Router (Advanced)",
    "category": "routing",
    "level": "intermediate",
    "description": "Nested routes, route parameters, and navigation hooks.",
    "why": "To handle dynamic routes and complex navigation.",
    "when": "User profiles, detail pages, nested layouts.",
    "code": "// Route parameters\n<Route path=\"/users/:id\" element={<UserDetail />} />\n\nfunction UserDetail() {\n    const { id } = useParams(); // Get URL parameter\n    const navigate = useNavigate(); // Navigate programmatically\n    const location = useLocation(); // Get current location\n\n    const handleGoBack = () => navigate(-1); // Go back\n\n    return (\n        <div>\n            <h1>User ID: {id}</h1>\n            <button onClick={handleGoBack}>Go Back</button>\n        </div>\n    );\n}\n\n// Nested routes\n<Route path=\"/dashboard\" element={<Dashboard />}>\n    <Route path=\"profile\" element={<Profile />} />\n    <Route path=\"settings\" element={<Settings />} />\n</Route>"
  },
  {
    "id": 31,
    "title": "Form Handling (React Hook Form)",
    "category": "forms",
    "level": "intermediate",
    "description": "Efficient form handling with validation using React Hook Form.",
    "why": "To handle forms efficiently with validation.",
    "when": "Login, registration, user input forms.",
    "code": "import { useForm } from 'react-hook-form';\n\nfunction RegistrationForm() {\n    const { register, handleSubmit, formState: { errors } } = useForm();\n\n    const onSubmit = (data) => {\n        console.log(data);\n    };\n\n    return (\n        <form onSubmit={handleSubmit(onSubmit)}>\n            <input\n                {...register('email', { required: 'Email is required' })}\n            />\n            {errors.email && <p>{errors.email.message}</p>}\n\n            <input\n                {...register('password', { minLength: 8 })}\n            />\n            {errors.password && <p>Min length 8</p>}\n\n            <button type=\"submit\">Register</button>\n        </form>\n    );\n}"
  },
  {
    "id": 32,
    "title": "State Management (Redux)",
    "category": "state",
    "level": "intermediate",
    "description": "Managing global state across the entire app.",
    "why": "To manage global state across many components.",
    "when": "Large applications with complex state.",
    "code": "// Redux Toolkit (modern Redux)\nimport { configureStore, createSlice } from '@reduxjs/toolkit';\nimport { Provider, useSelector, useDispatch } from 'react-redux';\n\nconst counterSlice = createSlice({\n    name: 'counter',\n    initialState: { value: 0 },\n    reducers: {\n        increment: (state) => { state.value += 1; },\n        decrement: (state) => { state.value -= 1; }\n    }\n});\n\nconst store = configureStore({ reducer: counterSlice.reducer });\n\nfunction Counter() {\n    const count = useSelector((state) => state.value);\n    const dispatch = useDispatch();\n\n    return (\n        <div>\n            <button onClick={() => dispatch(increment())}>+</button>\n            {count}\n            <button onClick={() => dispatch(decrement())}>-</button>\n        </div>\n    );\n}"
  },
  {
    "id": 33,
    "title": "Props Types",
    "category": "components",
    "level": "intermediate",
    "description": "Type-checking props to catch bugs.",
    "why": "To catch type errors and document component interfaces.",
    "when": "Every component! Use TypeScript for better experience.",
    "code": "// With TypeScript (recommended)\ninterface UserProps {\n    name: string;\n    age?: number;\n    onClick: () => void;\n}\n\nfunction User({ name, age, onClick }: UserProps) {\n    return <button onClick={onClick}>{name} ({age})</button>;\n}\n\n// With PropTypes (runtime checks)\nimport PropTypes from 'prop-types';\n\nUser.propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number,\n    onClick: PropTypes.func.isRequired\n};\n\nUser.defaultProps = {\n    age: 18\n};"
  },
  {
    "id": 34,
    "title": "Render Props",
    "category": "components",
    "level": "intermediate",
    "description": "A technique to share code using a prop whose value is a function.",
    "why": "To share logic between components.",
    "when": "Before hooks, now replaced by custom hooks.",
    "code": "function DataFetcher({ url, render }) {\n    const [data, setData] = useState(null);\n    const [loading, setLoading] = useState(true);\n\n    useEffect(() => {\n        fetch(url)\n            .then(res => res.json())\n            .then(data => {\n                setData(data);\n                setLoading(false);\n            });\n    }, [url]);\n\n    return render({ data, loading });\n}\n\n// Usage\n<DataFetcher\n    url=\"/api/users\"\n    render={({ data, loading }) => (\n        loading ? <div>Loading...</div> :\n        data.map(user => <div key={user.id}>{user.name}</div>)\n    )}\n/>"
  },
  {
    "id": 35,
    "title": "Portals",
    "category": "advanced",
    "level": "intermediate",
    "description": "Render children outside the parent DOM hierarchy.",
    "why": "To render modals, tooltips, popups outside the parent.",
    "when": "Modals, tooltips, dropdowns, popovers.",
    "code": "import { createPortal } from 'react-dom';\n\nfunction Modal({ isOpen, children, onClose }) {\n    if (!isOpen) return null;\n\n    // Renders modal outside the parent DOM\n    return createPortal(\n        <div className=\"modal-overlay\">\n            <div className=\"modal\">\n                <button onClick={onClose}>X</button>\n                {children}\n            </div>\n        </div>,\n        document.getElementById('modal-root') // DOM node to render into\n    );\n}\n\n// Usage\n<Modal isOpen={showModal} onClose={() => setShowModal(false)}>\n    <p>Modal content here</p>\n</Modal>"
  },
  {
    "id": 36,
    "title": "Error Boundaries",
    "category": "advanced",
    "level": "intermediate",
    "description": "Catch JavaScript errors in component tree and display fallback UI.",
    "why": "To prevent entire app from crashing due to component errors.",
    "when": "Wrap parts of your app that might have errors.",
    "code": "class ErrorBoundary extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = { hasError: false };\n    }\n\n    static getDerivedStateFromError(error) {\n        return { hasError: true };\n    }\n\n    componentDidCatch(error, errorInfo) {\n        console.log('Error caught:', error, errorInfo);\n        // Log to error reporting service\n    }\n\n    render() {\n        if (this.state.hasError) {\n            return <h1>Something went wrong.</h1>;\n        }\n        return this.props.children;\n    }\n}\n\n// Usage\n<ErrorBoundary>\n    <MyComponent />\n</ErrorBoundary>"
  },
  {
    "id": 37,
    "title": "useLayoutEffect",
    "category": "hooks",
    "level": "advanced",
    "description": "Runs synchronously after DOM mutations but before the browser paints.",
    "why": "To measure DOM elements before the browser paints.",
    "when": "Measuring DOM nodes, animations, tooltip positioning.",
    "code": "import { useLayoutEffect, useRef, useState } from 'react';\n\nfunction MeasureElement() {\n    const ref = useRef(null);\n    const [height, setHeight] = useState(0);\n\n    useLayoutEffect(() => {\n        // Runs before the browser paints\n        setHeight(ref.current.offsetHeight);\n    }, []);\n\n    return (\n        <div>\n            <div ref={ref}>Content here</div>\n            <p>Height: {height}px</p>\n        </div>\n    );\n}"
  },
  {
    "id": 38,
    "title": "useImperativeHandle",
    "category": "hooks",
    "level": "advanced",
    "description": "Customize the ref value exposed to parent components.",
    "why": "To control what ref exposes to parent components.",
    "when": "Building reusable components that need controlled refs.",
    "code": "import { forwardRef, useImperativeHandle, useRef } from 'react';\n\nconst FancyInput = forwardRef((props, ref) => {\n    const inputRef = useRef();\n\n    useImperativeHandle(ref, () => ({\n        focus: () => {\n            inputRef.current.focus();\n        },\n        clear: () => {\n            inputRef.current.value = '';\n        },\n        getValue: () => {\n            return inputRef.current.value;\n        }\n    }));\n\n    return <input ref={inputRef} {...props} />;\n});\n\nfunction Parent() {\n    const ref = useRef();\n\n    const handleClick = () => {\n        ref.current.focus();\n        ref.current.clear();\n        console.log(ref.current.getValue());\n    };\n\n    return (\n        <div>\n            <FancyInput ref={ref} />\n            <button onClick={handleClick}>Focus and Clear</button>\n        </div>\n    );\n}"
  },
  {
    "id": 39,
    "title": "useDebugValue",
    "category": "hooks",
    "level": "advanced",
    "description": "Display a label for custom hooks in React DevTools.",
    "why": "To make custom hooks easier to debug.",
    "when": "Building custom hooks for reuse.",
    "code": "import { useState, useDebugValue } from 'react';\n\nfunction useFriendStatus(friendID) {\n    const [isOnline, setIsOnline] = useState(null);\n\n    // Shows in React DevTools\n    useDebugValue(isOnline ? 'Online' : 'Offline');\n\n    // Or with formatting\n    useDebugValue(isOnline, (value) => value ? '🟢 Online' : '🔴 Offline');\n\n    return isOnline;\n}"
  },
  {
    "id": 40,
    "title": "useTransition",
    "category": "hooks",
    "level": "advanced",
    "description": "Mark state updates as non-urgent to keep UI responsive.",
    "why": "To keep UI responsive during expensive updates.",
    "when": "Search, filtering large datasets, slow operations.",
    "code": "import { useState, useTransition } from 'react';\n\nfunction Search() {\n    const [query, setQuery] = useState('');\n    const [results, setResults] = useState([]);\n    const [isPending, startTransition] = useTransition();\n\n    const handleChange = (e) => {\n        const value = e.target.value;\n        setQuery(value);\n\n        // Mark search as non-urgent\n        startTransition(() => {\n            const filtered = performExpensiveSearch(value);\n            setResults(filtered);\n        });\n    };\n\n    return (\n        <div>\n            <input value={query} onChange={handleChange} />\n            {isPending && <span>Searching...</span>}\n            {results.map(item => <div key={item}>{item}</div>)}\n        </div>\n    );\n}"
  },
  {
    "id": 41,
    "title": "useDeferredValue",
    "category": "hooks",
    "level": "advanced",
    "description": "Defer updating a value to prevent blocking the UI.",
    "why": "To keep UI responsive while updating heavy components.",
    "when": "Similar to useTransition, but with input values.",
    "code": "import { useState, useDeferredValue, useMemo } from 'react';\n\nfunction Search() {\n    const [query, setQuery] = useState('');\n    const deferredQuery = useDeferredValue(query);\n\n    const results = useMemo(() => {\n        // Only re-calculates when deferredQuery changes\n        return performExpensiveSearch(deferredQuery);\n    }, [deferredQuery]);\n\n    return (\n        <div>\n            <input\n                value={query}\n                onChange={(e) => setQuery(e.target.value)}\n                placeholder=\"Search...\"\n            />\n            <div style={{ opacity: query !== deferredQuery ? 0.5 : 1 }}>\n                {results.map(item => <div key={item}>{item}</div>)}\n            </div>\n        </div>\n    );\n}"
  },
  {
    "id": 42,
    "title": "Suspense",
    "category": "advanced",
    "level": "advanced",
    "description": "Handle asynchronous operations and code splitting with fallback UI.",
    "why": "To handle code splitting and async data gracefully.",
    "when": "Lazy loading components, data fetching.",
    "code": "import { Suspense, lazy } from 'react';\n\n// Lazy load component\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nfunction App() {\n    return (\n        <div>\n            <Suspense fallback={<div>Loading...</div>}>\n                <LazyComponent />\n            </Suspense>\n        </div>\n    );\n}\n\n// Suspense with data fetching (React 18)\n<Suspense fallback={<Loading />}>\n    <UserData />\n</Suspense>"
  },
  {
    "id": 43,
    "title": "Concurrent Mode (React 18)",
    "category": "advanced",
    "level": "advanced",
    "description": "Rendering multiple versions of UI simultaneously.",
    "why": "To create smoother, more responsive user experiences.",
    "when": "Complex UIs, heavy rendering, responsive applications.",
    "code": "// React 18 concurrent features\nimport { createRoot } from 'react-dom/client';\n\n// Enable concurrent mode\nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);\n\n// useTransition and useDeferredValue are concurrent features\n// startTransition marks updates as non-urgent\n// Suspense integrates with concurrent rendering\n\n// Render both old and new UI simultaneously\n<div>\n    <OldUI />\n    <NewUI />\n</div>"
  },
  {
    "id": 44,
    "title": "Code Splitting",
    "category": "performance",
    "level": "advanced",
    "description": "Split bundle into smaller chunks to load faster.",
    "why": "To reduce initial load time and improve performance.",
    "when": "Large applications with many routes.",
    "code": "// Route-based code splitting\nimport { lazy, Suspense } from 'react';\nimport { Routes, Route } from 'react-router-dom';\n\nconst Home = lazy(() => import('./routes/Home'));\nconst About = lazy(() => import('./routes/About'));\nconst Dashboard = lazy(() => import('./routes/Dashboard'));\n\nfunction App() {\n    return (\n        <Suspense fallback={<Loading />}>\n            <Routes>\n                <Route path=\"/\" element={<Home />} />\n                <Route path=\"/about\" element={<About />} />\n                <Route path=\"/dashboard\" element={<Dashboard />} />\n            </Routes>\n        </Suspense>\n    );\n}\n\n// Component-based splitting\nconst HeavyComponent = lazy(() => import('./HeavyComponent'));"
  },
  {
    "id": 45,
    "title": "Server-Side Rendering (SSR)",
    "category": "advanced",
    "level": "advanced",
    "description": "Render React components on the server to send HTML to the client.",
    "why": "For better SEO and faster initial page load.",
    "when": "SEO-critical apps, marketing pages, e-commerce.",
    "code": "// server.js (Node.js)\nimport express from 'express';\nimport { renderToString } from 'react-dom/server';\nimport App from './App';\n\nconst app = express();\n\napp.get('*', (req, res) => {\n    const html = renderToString(<App />);\n    res.send(`\n        <!DOCTYPE html>\n        <html>\n            <head><title>SSR React</title></head>\n            <body>\n                <div id=\"root\">${html}</div>\n                <script src=\"bundle.js\"></script>\n            </body>\n        </html>\n    `);\n});\n\n// client.js\nimport { hydrateRoot } from 'react-dom/client';\nhydrateRoot(document.getElementById('root'), <App />);"
  },
  {
    "id": 46,
    "title": "Next.js (Framework)",
    "category": "ecosystem",
    "level": "advanced",
    "description": "The most popular React framework with SSR, static generation, and more.",
    "why": "To build full-stack React apps with great performance and SEO.",
    "when": "Production applications, e-commerce, blogs.",
    "code": "// pages/index.js\nexport default function Home() {\n    return <h1>Hello Next.js!</h1>;\n}\n\n// API routes\nexport default function handler(req, res) {\n    res.status(200).json({ name: 'John Doe' });\n}\n\n// getServerSideProps (SSR)\nexport async function getServerSideProps() {\n    const res = await fetch('https://api.example.com/data');\n    const data = await res.json();\n    return { props: { data } };\n}\n\n// getStaticProps (SSG)\nexport async function getStaticProps() {\n    return { props: { data } };\n}"
  },
  {
    "id": 47,
    "title": "Zustand (State Management)",
    "category": "state",
    "level": "advanced",
    "description": "A small, fast state management solution with minimal boilerplate.",
    "why": "To manage global state with less boilerplate than Redux.",
    "when": "Medium to large apps needing global state.",
    "code": "import create from 'zustand';\n\n// Create store\nconst useStore = create((set) => ({\n    count: 0,\n    increment: () => set((state) => ({ count: state.count + 1 })),\n    decrement: () => set((state) => ({ count: state.count - 1 })),\n    reset: () => set({ count: 0 })\n}));\n\n// Use in component\nfunction Counter() {\n    const { count, increment, decrement, reset } = useStore();\n\n    return (\n        <div>\n            <button onClick={decrement}>-</button>\n            {count}\n            <button onClick={increment}>+</button>\n            <button onClick={reset}>Reset</button>\n        </div>\n    );\n}\n\n// Select specific state\nconst count = useStore((state) => state.count);"
  },
  {
    "id": 48,
    "title": "React Query (Data Fetching)",
    "category": "ecosystem",
    "level": "advanced",
    "description": "Powerful data fetching and caching library.",
    "why": "To handle server state with caching, retries, and stale-while-revalidate.",
    "when": "Any app that fetches data from APIs.",
    "code": "import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';\n\nconst queryClient = new QueryClient();\n\nfunction Users() {\n    const { data, isLoading, error } = useQuery({\n        queryKey: ['users'],\n        queryFn: async () => {\n            const res = await fetch('/api/users');\n            return res.json();\n        }\n    });\n\n    const mutation = useMutation({\n        mutationFn: (newUser) => fetch('/api/users', {\n            method: 'POST',\n            body: JSON.stringify(newUser)\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries({ queryKey: ['users'] });\n        }\n    });\n\n    if (isLoading) return <div>Loading...</div>;\n    if (error) return <div>Error: {error.message}</div>;\n\n    return <div>{data.map(user => <div key={user.id}>{user.name}</div>)}</div>;\n}"
  },
  {
    "id": 49,
    "title": "Formik (Forms)",
    "category": "forms",
    "level": "advanced",
    "description": "Popular form library for handling validation, errors, and submission.",
    "why": "To simplify form handling with built-in validation.",
    "when": "Complex forms with validation.",
    "code": "import { useFormik } from 'formik';\n\nfunction LoginForm() {\n    const formik = useFormik({\n        initialValues: { email: '', password: '' },\n        validate: (values) => {\n            const errors = {};\n            if (!values.email) errors.email = 'Required';\n            if (!values.password) errors.password = 'Required';\n            return errors;\n        },\n        onSubmit: (values) => {\n            console.log('Form data:', values);\n        }\n    });\n\n    return (\n        <form onSubmit={formik.handleSubmit}>\n            <input\n                name=\"email\"\n                onChange={formik.handleChange}\n                value={formik.values.email}\n            />\n            {formik.errors.email && <div>{formik.errors.email}</div>}\n            \n            <input\n                name=\"password\"\n                type=\"password\"\n                onChange={formik.handleChange}\n                value={formik.values.password}\n            />\n            {formik.errors.password && <div>{formik.errors.password}</div>}\n            \n            <button type=\"submit\">Login</button>\n        </form>\n    );\n}"
  },
  {
    "id": 50,
    "title": "Testing (Jest + React Testing Library)",
    "category": "ecosystem",
    "level": "advanced",
    "description": "Testing React components with Jest and React Testing Library.",
    "why": "To ensure components work correctly and prevent regressions.",
    "when": "Every serious React project!",
    "code": "import { render, screen, fireEvent } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\n// Component test\ntest('counter increments when button clicked', () => {\n    render(<Counter />);\n    \n    const button = screen.getByText('Increment');\n    const count = screen.getByText('Count: 0');\n    \n    fireEvent.click(button);\n    expect(count).toHaveTextContent('Count: 1');\n});\n\n// User event (more realistic)\ntest('form submission', async () => {\n    render(<LoginForm />);\n    \n    await userEvent.type(screen.getByLabelText('Email'), 'test@test.com');\n    await userEvent.type(screen.getByLabelText('Password'), 'password123');\n    await userEvent.click(screen.getByRole('button', { name: 'Login' }));\n    \n    expect(screen.getByText('Welcome!')).toBeInTheDocument();\n});"
  },
  {
    "id": 51,
    "title": "Firebase Integration",
    "category": "ecosystem",
    "level": "advanced",
    "description": "Backend-as-a-Service for authentication, database, hosting.",
    "why": "To quickly add backend features without managing servers.",
    "when": "Prototypes, MVPs, authentication, real-time features.",
    "code": "import { initializeApp } from 'firebase/app';\nimport { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';\nimport { getFirestore, collection, addDoc } from 'firebase/firestore';\n\n// Initialize Firebase\nconst app = initializeApp(firebaseConfig);\nconst auth = getAuth(app);\nconst db = getFirestore(app);\n\nfunction Login() {\n    const handleGoogleLogin = async () => {\n        const provider = new GoogleAuthProvider();\n        try {\n            const result = await signInWithPopup(auth, provider);\n            console.log('User:', result.user);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n\n    const addData = async () => {\n        await addDoc(collection(db, 'users'), {\n            name: 'Alice',\n            email: 'alice@test.com'\n        });\n    };\n\n    return <button onClick={handleGoogleLogin}>Login with Google</button>;\n}"
  },
  {
    "id": 52,
    "title": "Redux Toolkit (Modern Redux)",
    "category": "state",
    "level": "expert",
    "description": "The official, opinionated way to write Redux logic.",
    "why": "To write Redux with less boilerplate and best practices.",
    "when": "Large apps needing robust state management.",
    "code": "import { configureStore, createSlice } from '@reduxjs/toolkit';\nimport { Provider, useSelector, useDispatch } from 'react-redux';\n\n// Create slice\nconst userSlice = createSlice({\n    name: 'user',\n    initialState: { data: null, loading: false, error: null },\n    reducers: {\n        fetchStart: (state) => { state.loading = true; },\n        fetchSuccess: (state, action) => {\n            state.loading = false;\n            state.data = action.payload;\n        },\n        fetchError: (state, action) => {\n            state.loading = false;\n            state.error = action.payload;\n        }\n    }\n});\n\nexport const { fetchStart, fetchSuccess, fetchError } = userSlice.actions;\n\n// Async thunk\nexport const fetchUser = (id) => async (dispatch) => {\n    dispatch(fetchStart());\n    try {\n        const response = await fetch(`/api/users/${id}`);\n        const data = await response.json();\n        dispatch(fetchSuccess(data));\n    } catch (error) {\n        dispatch(fetchError(error.message));\n    }\n};\n\nconst store = configureStore({ reducer: { user: userSlice.reducer } });"
  },
  {
    "id": 53,
    "title": "React Native",
    "category": "ecosystem",
    "level": "expert",
    "description": "Build mobile apps using React components.",
    "why": "To build native mobile apps with JavaScript and React.",
    "when": "Cross-platform mobile development.",
    "code": "// React Native component\nimport { View, Text, Button, StyleSheet } from 'react-native';\n\nfunction App() {\n    const [count, setCount] = useState(0);\n\n    return (\n        <View style={styles.container}>\n            <Text style={styles.title}>Count: {count}</Text>\n            <Button\n                title=\"Increment\"\n                onPress={() => setCount(count + 1)}\n            />\n        </View>\n    );\n}\n\nconst styles = StyleSheet.create({\n    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n    title: { fontSize: 24, fontWeight: 'bold' }\n});"
  },
  {
    "id": 54,
    "title": "Next.js App Router",
    "category": "ecosystem",
    "level": "expert",
    "description": "Next.js 13+ App Router with server components.",
    "why": "To leverage React Server Components and better performance.",
    "when": "Building new Next.js apps with React 18+.",
    "code": "// app/page.js (Server Component)\nasync function getData() {\n    const res = await fetch('https://api.example.com/data');\n    return res.json();\n}\n\nexport default async function Page() {\n    const data = await getData(); // Directly await in server component\n    return <div>{data.message}</div>;\n}\n\n// app/layout.js (Layout component)\nexport default function Layout({ children }) {\n    return (\n        <html>\n            <body>\n                <nav>Navigation</nav>\n                {children}\n            </body>\n        </html>\n    );\n}"
  },
  {
    "id": 55,
    "title": "React Server Components (RSC)",
    "category": "advanced",
    "level": "expert",
    "description": "Components that run on the server and send HTML to the client.",
    "why": "To reduce bundle size and improve performance.",
    "when": "Data-heavy components, Next.js 13+ apps.",
    "code": "// Server Component (file extension .server.jsx or in Next.js)\nimport { db } from './db';\n\nasync function UserList() {\n    // This runs on the server\n    const users = await db.query('SELECT * FROM users');\n    \n    return (\n        <ul>\n            {users.map(user => (\n                <li key={user.id}>{user.name}</li>\n            ))}\n        </ul>\n    );\n}\n\n// Client Component (file extension .client.jsx or 'use client')\n'use client';\n\nfunction InteractiveButton() {\n    const [count, setCount] = useState(0);\n    return (\n        <button onClick={() => setCount(count + 1)}>\n            Clicked {count} times\n        </button>\n    );\n}"
  },
  {
    "id": 56,
    "title": "Recoil (State Management)",
    "category": "state",
    "level": "expert",
    "description": "A state management library for React with atom-based approach.",
    "why": "For fine-grained state updates and better performance.",
    "when": "Complex state with derived values.",
    "code": "import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';\n\n// Atom (piece of state)\nconst todoListState = atom({\n    key: 'todoListState',\n    default: []\n});\n\n// Selector (derived state)\nconst todoCountState = selector({\n    key: 'todoCountState',\n    get: ({ get }) => {\n        const list = get(todoListState);\n        return list.length;\n    }\n});\n\nfunction TodoApp() {\n    const [todos, setTodos] = useRecoilState(todoListState);\n    const count = useRecoilValue(todoCountState);\n\n    const addTodo = (text) => {\n        setTodos([...todos, { id: Date.now(), text }]);\n    };\n\n    return (\n        <div>\n            Total todos: {count}\n            <button onClick={() => addTodo('New todo')}>Add</button>\n        </div>\n    );\n}"
  },
  {
    "id": 57,
    "title": "Storybook",
    "category": "ecosystem",
    "level": "expert",
    "description": "Build and test UI components in isolation.",
    "why": "To develop components independently and document them.",
    "when": "Design systems, component libraries.",
    "code": "// Button.stories.jsx\nimport { Button } from './Button';\n\nexport default {\n    title: 'Components/Button',\n    component: Button,\n    argTypes: {\n        variant: { control: 'select', options: ['primary', 'secondary'] }\n    }\n};\n\nexport const Primary = {\n    args: {\n        children: 'Primary Button',\n        variant: 'primary'\n    }\n};\n\nexport const Secondary = {\n    args: {\n        children: 'Secondary Button',\n        variant: 'secondary'\n    }\n};\n\n// With state\nexport const WithState = {\n    render: () => {\n        const [count, setCount] = useState(0);\n        return (\n            <Button onClick={() => setCount(count + 1)}>\n                Clicked {count} times\n            </Button>\n        );\n    }\n};"
  },
  {
    "id": 58,
    "title": "React Helmet (SEO)",
    "category": "ecosystem",
    "level": "expert",
    "description": "Manage document head (title, meta tags, etc.) in React.",
    "why": "To improve SEO and social sharing.",
    "when": "SEO-critical pages, SSR apps.",
    "code": "import { Helmet } from 'react-helmet-async';\n\nfunction ProductPage({ product }) {\n    return (\n        <>\n            <Helmet>\n                <title>{product.name} - My Store</title>\n                <meta name=\"description\" content={product.description} />\n                <meta property=\"og:title\" content={product.name} />\n                <meta property=\"og:image\" content={product.image} />\n                <link rel=\"canonical\" href={`/products/${product.id}`} />\n                <script type=\"application/ld+json\">\n                    {JSON.stringify(product.schema)}\n                </script>\n            </Helmet>\n            <div>Product content...</div>\n        </>\n    );\n}"
  },
  {
    "id": 59,
    "title": "React Hook Form + Zod Validation",
    "category": "forms",
    "level": "expert",
    "description": "Powerful form handling with TypeScript validation using Zod.",
    "why": "Type-safe forms with excellent developer experience.",
    "when": "Forms in TypeScript projects.",
    "code": "import { useForm } from 'react-hook-form';\nimport { zodResolver } from '@hookform/resolvers/zod';\nimport { z } from 'zod';\n\n// Schema definition\nconst userSchema = z.object({\n    name: z.string().min(2, 'Name must be at least 2 characters'),\n    email: z.string().email('Invalid email address'),\n    age: z.number().min(18, 'Must be 18 or older')\n});\n\ntype UserFormData = z.infer;\n\nfunction UserForm() {\n    const {\n        register,\n        handleSubmit,\n        formState: { errors, isSubmitting }\n    } = useForm({\n        resolver: zodResolver(userSchema)\n    });\n\n    const onSubmit = async (data) => {\n        // data is fully typed and validated\n        await submitToApi(data);\n    };\n\n    return (\n        <form onSubmit={handleSubmit(onSubmit)}>\n            <input {...register('name')} placeholder=\"Name\" />\n            {errors.name && <p>{errors.name.message}</p>}\n            \n            <input {...register('email')} placeholder=\"Email\" />\n            {errors.email && <p>{errors.email.message}</p>}\n            \n            <input type=\"number\" {...register('age', { valueAsNumber: true })} />\n            {errors.age && <p>{errors.age.message}</p>}\n            \n            <button type=\"submit\" disabled={isSubmitting}>\n                Submit\n            </button>\n        </form>\n    );\n}"
  },
  {
    "id": 60,
    "title": "React Spring (Animations)",
    "category": "ecosystem",
    "level": "expert",
    "description": "Physics-based animations for React.",
    "why": "To create smooth, physics-based animations.",
    "when": "Animations, transitions, micro-interactions.",
    "code": "import { useSpring, animated } from '@react-spring/web';\n\nfunction AnimatedBox() {\n    const [isVisible, setIsVisible] = useState(false);\n\n    const spring = useSpring({\n        opacity: isVisible ? 1 : 0,\n        transform: isVisible ? 'scale(1)' : 'scale(0.8)',\n        config: { tension: 300, friction: 10 }\n    });\n\n    return (\n        <div>\n            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>\n            <animated.div style={spring}>\n                This animates!\n            </animated.div>\n        </div>\n    );\n}\n\n// Trails (staggered animations)\nconst items = ['Item 1', 'Item 2', 'Item 3'];\nconst trails = useTrail(items.length, {\n    from: { opacity: 0, y: 20 },\n    to: { opacity: 1, y: 0 }\n});"
  },
  {
    "id": 61,
    "title": "React DnD (Drag and Drop)",
    "category": "ecosystem",
    "level": "expert",
    "description": "Drag and drop functionality for React.",
    "why": "To implement drag and drop interfaces.",
    "when": "Kanban boards, sortable lists, file uploads.",
    "code": "import { DndProvider, useDrag, useDrop } from 'react-dnd';\nimport { HTML5Backend } from 'react-dnd-html5-backend';\n\nfunction DraggableItem({ id, text, moveItem }) {\n    const [{ isDragging }, drag] = useDrag({\n        type: 'ITEM',\n        item: { id },\n        collect: (monitor) => ({\n            isDragging: monitor.isDragging()\n        })\n    });\n\n    const [{ isOver }, drop] = useDrop({\n        accept: 'ITEM',\n        drop: (item) => moveItem(item.id, id),\n        collect: (monitor) => ({\n            isOver: monitor.isOver()\n        })\n    });\n\n    return (\n        <div\n            ref={(node) => drag(drop(node))}\n            style={{\n                opacity: isDragging ? 0.5 : 1,\n                background: isOver ? 'lightblue' : 'white',\n                padding: '10px',\n                margin: '5px',\n                border: '1px solid #ccc'\n            }}\n        >\n            {text}\n        </div>\n    );\n}"
  },
  {
    "id": 62,
    "title": "React Virtualized (Virtual Lists)",
    "category": "performance",
    "level": "expert",
    "description": "Efficiently render large lists by only rendering visible items.",
    "why": "To render thousands of items without performance issues.",
    "when": "Large lists, data tables, infinite scrolling.",
    "code": "import { FixedSizeList } from 'react-window';\n\nfunction LargeList({ items }) {\n    const Row = ({ index, style }) => (\n        <div style={style}>\n            {items[index]}\n        </div>\n    );\n\n    return (\n        <FixedSizeList\n            height={500}\n            width={300}\n            itemCount={items.length}\n            itemSize={35}\n        >\n            {Row}\n        </FixedSizeList>\n    );\n}\n\n// With infinite loading\nimport { useInfiniteLoader } from 'react-window-infinite-loader';\n\nfunction InfiniteList() {\n    const { data, loadMore, hasMore } = useInfiniteData();\n\n    const loader = useInfiniteLoader({\n        isItemLoaded: (index) => !!data[index],\n        loadMoreItems: (startIndex, stopIndex) => loadMore(),\n        itemCount: hasMore ? data.length + 1 : data.length\n    });\n\n    return (\n        <FixedSizeList\n            height={500}\n            width={300}\n            itemCount={data.length}\n            itemSize={35}\n            onItemsRendered={loader.onItemsRendered}\n        >\n            {Row}\n        </FixedSizeList>\n    );\n}"
  },
  {
    "id": 63,
    "title": "Advanced Testing (MSW, Cypress)",
    "category": "ecosystem",
    "level": "expert",
    "description": "Mock API calls and end-to-end testing.",
    "why": "To test API integration and end-to-end workflows.",
    "when": "Comprehensive testing strategy.",
    "code": "// Mock Service Worker (MSW) - mock API\nimport { rest } from 'msw';\nimport { setupServer } from 'msw/node';\n\nconst server = setupServer(\n    rest.get('/api/users', (req, res, ctx) => {\n        return res(ctx.json([{ id: 1, name: 'Alice' }]));\n    })\n);\n\nbeforeAll(() => server.listen());\nafterEach(() => server.resetHandlers());\nafterAll(() => server.close());\n\n// Cypress E2E test\ndescribe('Login Flow', () => {\n    it('should login successfully', () => {\n        cy.visit('/login');\n        cy.get('[name=\"email\"]').type('test@test.com');\n        cy.get('[name=\"password\"]').type('password123');\n        cy.get('button[type=\"submit\"]').click();\n        cy.url().should('include', '/dashboard');\n    });\n});"
  },
  {
    "id": 64,
    "title": "Accessibility (a11y) in React",
    "category": "advanced",
    "level": "expert",
    "description": "Building accessible applications for all users.",
    "why": "To make apps usable by everyone, including users with disabilities.",
    "when": "Every application!",
    "code": "// Accessible component\nfunction AccessibleButton({ label, onClick }) {\n    return (\n        <button\n            onClick={onClick}\n            aria-label={label}\n            role=\"button\"\n            tabIndex={0}\n            onKeyDown={(e) => {\n                if (e.key === 'Enter' || e.key === ' ') {\n                    e.preventDefault();\n                    onClick();\n                }\n            }}\n        >\n            {label}\n        </button>\n    );\n}\n\n// Accessible modal\nfunction AccessibleModal({ isOpen, onClose, children }) {\n    const modalRef = useRef();\n\n    useEffect(() => {\n        const focusable = modalRef.current?.querySelectorAll(\n            'button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])'\n        );\n        focusable?.[0]?.focus();\n    }, [isOpen]);\n\n    if (!isOpen) return null;\n\n    return createPortal(\n        <div\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\"modal-title\"\n            ref={modalRef}\n        >\n            <h2 id=\"modal-title\">Modal Title</h2>\n            {children}\n            <button onClick={onClose}>Close</button>\n        </div>,\n        document.getElementById('modal-root')\n    );\n}"
  },
  {
    "id": 65,
    "title": "React Compiler",
    "category": "advanced",
    "level": "expert",
    "description": "Automatic memoization of components and values.",
    "why": "To automatically optimize React apps without manual work.",
    "when": "React 19+ apps, Next.js apps with compiler enabled.",
    "code": "// Before React Compiler (manual)\nfunction Component({ data }) {\n    const expensive = useMemo(() => compute(data), [data]);\n    const handleClick = useCallback(() => { /* ... */ }, []);\n    return <ExpensiveChild onClick={handleClick} data={expensive} />;\n}\n\n// After React Compiler (automatic)\n// No useMemo, useCallback needed!\nfunction Component({ data }) {\n    // Compiler automatically memoizes expensive calculations\n    const expensive = compute(data);\n    const handleClick = () => { /* ... */ };\n    return <ExpensiveChild onClick={handleClick} data={expensive} />;\n}\n\n// Enable in next.config.js\nconst nextConfig = {\n    experimental: {\n        reactCompiler: true\n    }\n};"
  },
  {
    "id": 66,
    "title": "React 19 Features",
    "category": "advanced",
    "level": "expert",
    "description": "Latest React features including actions, useOptimistic, useActionState.",
    "why": "To use the latest React features for better UX.",
    "when": "React 19+ applications.",
    "code": "// useActionState (new)\nimport { useActionState } from 'react';\n\nasync function updateName(prevState, formData) {\n    const name = formData.get('name');\n    // Update server, etc.\n    return { success: true, name };\n}\n\nfunction Profile() {\n    const [state, formAction, isPending] = useActionState(updateName, { name: '' });\n\n    return (\n        <form action={formAction}>\n            <input name=\"name\" defaultValue={state.name} />\n            <button type=\"submit\" disabled={isPending}>\n                Update\n            </button>\n        </form>\n    );\n}\n\n// useOptimistic (optimistic updates)\nimport { useOptimistic } from 'react';\n\nfunction CommentList() {\n    const [comments, setComments] = useState([]);\n    const [optimisticComments, addOptimisticComment] = useOptimistic(\n        comments,\n        (state, newComment) => [...state, { ...newComment, pending: true }]\n    );\n\n    const addComment = async (text) => {\n        addOptimisticComment({ text });\n        await postComment(text);\n        // Refresh actual comments\n    };\n}"
  }
];
