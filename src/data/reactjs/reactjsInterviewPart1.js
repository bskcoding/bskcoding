// ReactJS Interview Questions - Part 1 (Questions 1-50)
export const reactjsInterviewPart1 = `## ReactJS Interview Questions

### Basic Questions

1. **What is React in 2026?**
   - **Answer**: React is a JavaScript library for building user interfaces with component-based architecture. Modern React (18+) features automatic batching, concurrent rendering, and Suspense.
   - **Example**:
     \`\`\`jsx
     // Modern React (2026)
     import { StrictMode } from 'react';
     import { createRoot } from 'react-dom/client';

     const root = createRoot(document.getElementById('root'));
     root.render(
       <StrictMode>
         <App />
       </StrictMode>
     );
     \`\`\`
   - **Note**: StrictMode double-renders in development to surface side effects — it has no effect in production.

2. **What are the main features of React 2026?**
   - **Answer**: Component-based, Virtual DOM, Hooks, Suspense, Concurrent features. Modern: Server Components, Actions, useOptimistic, useTransition.
   - **Example**:
     \`\`\`jsx
     // Modern features
     import { useOptimistic, useTransition } from 'react';

     function App() {
       const [isPending, startTransition] = useTransition();
       const [optimisticState, addOptimistic] = useOptimistic(
         state,
         (currentState, newValue) => ({ ...currentState, ...newValue })
       );
     }
     \`\`\`
   - **Note**: Concurrent features let React interrupt rendering to keep the UI responsive during heavy updates.

3. **What are the advantages of using React?**
   - **Answer**: Declarative UI, component reusability, strong ecosystem, performance. Modern: React Server Components, improved developer experience.
   - **Example**:
     \`\`\`jsx
     // Modern component patterns
     // Server Component (Next.js)
     async function ServerComponent() {
       const data = await fetchData();
       return <ClientComponent data={data} />;
     }
     // Client Component with hooks
     'use client';
     function ClientComponent({ data }) {
       const [state, setState] = useState(data);
       return <div>{state}</div>;
     }
     \`\`\`
   - **Note**: Server Components run only on the server — zero JS shipped for them, smaller bundles.

4. **What is JSX and how does it work in 2026?**
   - **Answer**: JavaScript XML, HTML-like syntax in JS, transformed by build tools. Modern: JSX transforms, automatic runtime, TypeScript support.
   - **Example**:
     \`\`\`jsx
     // Modern JSX (with automatic runtime)
     // No need to import React
     function Component() {
       const className = 'container';
       return <div className={className}>Hello</div>;
     }
     // JSX with fragment shorthand
     const element = (
       <>
         <Header />
         <Content />
       </>
     );
     \`\`\`
   - **Note**: With the automatic runtime (React 17+), JSX compiles without importing React explicitly.

5. **How does JSX transform into JavaScript?**
   - **Answer**: Babel/TypeScript transforms JSX to React.createElement or jsx transforms. Modern: Automatic jsx transform (React 17+).
   - **Example**:
     \`\`\`jsx
     // Modern transform
     // Input
     function App() {
       return <div className="app">Hello</div>;
     }
     // Output (automatic runtime)
     import { jsx as _jsx } from 'react/jsx-runtime';
     function App() {
       return _jsx('div', { className: 'app', children: 'Hello' });
     }
     \`\`\`
   - **Note**: The automatic runtime imports from react/jsx-runtime instead of calling React.createElement.

6. **What are components in React?**
   - **Answer**: Building blocks, reusable pieces of UI. Modern: Server/Client components, function components.
   - **Example**:
     \`\`\`jsx
     // Modern component patterns
     // Server Component
     async function ServerComponent() {
       const data = await fetchData();
       return <div>{data}</div>;
     }
     // Client Component
     'use client';
     function ClientComponent({ children }) {
       const [count, setCount] = useState(0);
       return (
         <button onClick={() => setCount(c => c + 1)}>
           {children} {count}
         </button>
       );
     }
     \`\`\`
   - **Note**: Component names must start with a capital letter — lowercase tags are treated as HTML elements.

7. **Explain the difference between functional and class components.**
   - **Answer**: Functional: Hooks, simpler, preferred in 2026. Class: Lifecycle methods, legacy (less common).
   - **Example**:
     \`\`\`jsx
     // Modern - Functional Component
     function UserComponent({ id }) {
       const [user, setUser] = useState(null);
       useEffect(() => {
         fetchUser(id).then(setUser);
       }, [id]);
       return user ? <div>{user.name}</div> : <div>Loading...</div>;
     }
     // Legacy - Class Component (deprecated)
     class UserComponent extends React.Component {
       state = { user: null };
       componentDidMount() {
         fetchUser(this.props.id).then(user => this.setState({ user }));
       }
       render() {
         return this.state.user ? <div>{this.state.user.name}</div> : <div>Loading...</div>;
       }
     }
     \`\`\`
   - **Note**: Hooks cannot be used in class components; classes remain supported but new code should be functional.

8. **What is the virtual DOM and how does it work?**
   - **Answer**: In-memory representation of real DOM for efficient updates. Modern: Fiber architecture, concurrent rendering.
   - **Example**:
     \`\`\`jsx
     // React's reconciliation process
     function Counter() {
       const [count, setCount] = useState(0);
       return (
         <div>
           <h1>{count}</h1>
           <button onClick={() => setCount(count + 1)}>
             Increment
           </button>
         </div>
       );
     }
     // Only updates the text content of h1, not the entire tree
     \`\`\`
   - **Note**: React diffs the new tree against the previous one (reconciliation) and applies minimal DOM mutations.

9. **How do you create a React application in 2026?**
   - **Answer**: create-react-app, vite, Next.js. Modern: Vite is preferred for faster builds.
   - **Example**:
     \`\`\`bash
     # Modern approach with Vite
     npm create vite@latest my-app -- --template react
     # With TypeScript
     npm create vite@latest my-app -- --template react-ts
     # Or Next.js
     npx create-next-app@latest my-app
     \`\`\`
   - **Note**: Vite dev server starts in milliseconds vs minutes for CRA — it's now the community standard.

10. **What are props in React?**
    - **Answer**: Read-only data passed from parent to child. Modern: Prop types, default props, destructuring.
    - **Example**:
      \`\`\`jsx
      // Modern prop patterns
      interface UserProps {
        id: string;
        name: string;
        age?: number;
        onUpdate?: (user: User) => void;
      }
      function User({ id, name, age = 18, onUpdate }: UserProps) {
        return (
          <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            {onUpdate && (
              <button onClick={() => onUpdate({ id, name, age })}>
                Update
              </button>
            )}
          </div>
        );
      }
      \`\`\`
    - **Note**: Props flow one way (down) — children communicate back via callback props.

11. **How do you pass data between components?**
    - **Answer**: Props, Context, State management (Redux, Zustand). Modern: Server components, server actions.
    - **Example**:
      \`\`\`jsx
      // Modern data flow
      // Parent -> Child via props
      function Parent() {
        const [user, setUser] = useState({ name: 'John' });
        return <Child user={user} setUser={setUser} />;
      }
      // Context for deep passing
      const UserContext = createContext();
      function App() {
        const [user, setUser] = useState(null);
        return (
          <UserContext.Provider value={{ user, setUser }}>
            <DeepChild />
          </UserContext.Provider>
        );
      }
      \`\`\`
    - **Note**: Lift state to the closest common ancestor before reaching for Context or external stores.

12. **What is state in React?**
    - **Answer**: Mutable data that affects component rendering. Modern: State hooks, useReducer, useOptimistic.
    - **Example**:
      \`\`\`jsx
      // Modern state management
      function Counter() {
        // Basic state
        const [count, setCount] = useState(0);
        // Derived state
        const double = count * 2;
        // Complex state with reducer
        const [state, dispatch] = useReducer(reducer, initialState);
        // Optimistic updates
        const [optimisticCount, setOptimisticCount] = useOptimistic(
          count,
          (current, newCount) => current + newCount
        );
        return (
          <div>
            <p>Count: {count}</p>
            <p>Double: {double}</p>
          </div>
        );
      }
      \`\`\`
    - **Note**: Don't store derivable values in state — compute them during render instead.

13. **How do you manage state in a React component?**
    - **Answer**: useState, useReducer, Context, external state. Modern: use, useOptimistic, useActionState (React 19).
    - **Example**:
      \`\`\`jsx
      // Modern state patterns
      import { use, useActionState } from 'react';
      // use for promises
      function UserData({ userPromise }) {
        const user = use(userPromise);
        return <div>{user.name}</div>;
      }
      // useActionState for forms
      function LoginForm() {
        const [state, formAction] = useActionState(loginAction, initialState);
        return (
          <form action={formAction}>
            <input name="email" type="email" />
            <button type="submit">Login</button>
          </form>
        );
      }
      \`\`\`
    - **Note**: The use() hook can read promises directly inside components when wrapped in Suspense.

14. **Explain the lifecycle methods in React (modern context).**
    - **Answer**: Modern: useEffect for all lifecycle needs. Legacy: componentDidMount, componentDidUpdate, componentWillUnmount.
    - **Example**:
      \`\`\`jsx
      // Modern lifecycle with hooks
      function Component() {
        // Mount and update
        useEffect(() => {
          console.log('Component mounted/updated');
        });
        // Mount only
        useEffect(() => {
          console.log('Component mounted');
        }, []);
        // Update on specific dependencies
        useEffect(() => {
          console.log('Prop changed:', prop);
        }, [prop]);
        // Cleanup
        useEffect(() => {
          const timer = setInterval(() => {}, 1000);
          return () => clearInterval(timer);
        }, []);
      }
      \`\`\`
    - **Note**: An effect with no dependency array runs after every render — usually a sign of missing dependencies.

15. **What are hooks in React?**
    - **Answer**: Functions that allow using React features in functional components. Modern: Built-in hooks, custom hooks, new hooks (use, useOptimistic).
    - **Example**:
      \`\`\`jsx
      // Modern hooks
      import { use, useOptimistic, useTransition } from 'react';
      // Custom hook
      function useLocalStorage(key, initialValue) {
        const [stored, setStored] = useState(() => {
          try {
            return JSON.parse(localStorage.getItem(key)) ?? initialValue;
          } catch {
            return initialValue;
          }
        });
        useEffect(() => {
          localStorage.setItem(key, JSON.stringify(stored));
        }, [key, stored]);
        return [stored, setStored];
      }
      \`\`\`
    - **Note**: Custom hooks must start with "use" so lint rules can verify hook usage rules are followed.

16. **Explain the useState hook.**
    - **Answer**: Manages state in functional components. Modern: Functional updates, lazy initialization.
    - **Example**:
      \`\`\`jsx
      // Modern useState patterns
      function UserProfile() {
        // Lazy initialization
        const [user, setUser] = useState(() => {
          const saved = localStorage.getItem('user');
          return saved ? JSON.parse(saved) : null;
        });
        // Functional update
        const updateAge = (age) => {
          setUser(prev => ({
            ...prev,
            age: prev.age + age
          }));
        };
        // State with dependencies
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);
      }
      \`\`\`
    - **Note**: Lazy initialization (passing a function) avoids expensive computation on every render.

17. **Explain the useEffect hook.**
    - **Answer**: Handles side effects in functional components. Modern: Cleanup, dependencies, async patterns.
    - **Example**:
      \`\`\`jsx
      // Modern useEffect patterns
      function DataComponent({ id }) {
        const [data, setData] = useState(null);

        useEffect(() => {
          let cancelled = false;

          async function fetchData() {
            setIsLoading(true);
            try {
              const result = await api.fetch(id);
              if (!cancelled) {
                setData(result);
              }
            } catch (error) {
              if (!cancelled) {
                setError(error);
              }
            } finally {
              if (!cancelled) {
                setIsLoading(false);
              }
            }
          }
          fetchData();
          return () => { cancelled = true; };
        }, [id]); // Only when id changes

        return <div>{data}</div>;
      }
      \`\`\`
    - **Note**: Always clean up subscriptions, timers, and abort controllers to prevent memory leaks.

18. **What is the Context API?**
    - **Answer**: Global state management without prop drilling. Modern: useContext, Server Components context.
    - **Example**:
      \`\`\`jsx
      // Modern Context API
      const ThemeContext = createContext({
        theme: 'light',
        toggleTheme: () => {}
      });
      function ThemeProvider({ children }) {
        const [theme, setTheme] = useState('light');
        const toggleTheme = () => {
          setTheme(t => t === 'light' ? 'dark' : 'light');
        };
        return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
          </ThemeContext.Provider>
        );
      }
      // Use in any component
      function ThemedButton() {
        const { theme, toggleTheme } = useContext(ThemeContext);
        return <button onClick={toggleTheme}>{theme}</button>;
      }
      \`\`\`
    - **Note**: Every consumer re-renders when context value changes — memoize the value object to limit this.

19. **How do you use the Context API to manage state?**
    - **Answer**: Create context, Provider, useContext hook. Modern: Context with reducer, selector patterns.
    - **Example**:
      \`\`\`jsx
      // Modern context with reducer
      const StateContext = createContext();
      function AppProvider({ children }) {
        const [state, dispatch] = useReducer(appReducer, initialState);
        const value = useMemo(() => ({ state, dispatch }), [state]);
        return (
          <StateContext.Provider value={value}>
            {children}
          </StateContext.Provider>
        );
      }
      // Custom hook for consumption
      function useAppState() {
        const context = useContext(StateContext);
        if (!context) throw new Error('Missing provider');
        return context;
      }
      \`\`\`
    - **Note**: Throwing inside a custom hook when the provider is missing gives clear errors early.

20. **What are refs in React?**
    - **Answer**: Access DOM nodes or persist values. Modern: useRef, forwardRef, useImperativeHandle.
    - **Example**:
      \`\`\`jsx
      // Modern ref usage
      function InputComponent() {
        const inputRef = useRef(null);
        const [count, setCount] = useState(0);
        // Persistent value that doesn't trigger re-render
        const countRef = useRef(0);

        const focusInput = () => {
          inputRef.current?.focus();
        };

        const updateCount = () => {
          countRef.current += 1;
          setCount(c => c + 1);
        };

        return (
          <>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus</button>
            <button onClick={updateCount}>Update (count: {count})</button>
          </>
        );
      }
      \`\`\`
    - **Note**: Mutating ref.current doesn't trigger re-render — refs are for imperative access, not display data.

21. **How do you create and use refs?**
    - **Answer**: useRef for function components, createRef for classes. Modern: Ref callbacks, forwardRef.
    - **Example**:
      \`\`\`jsx
      // Modern ref patterns
      // Forward ref
      const CustomInput = forwardRef((props, ref) => {
        return <input {...props} ref={ref} />;
      });
      // Ref callback
      function Component() {
        const setRef = useCallback((node) => {
          if (node) {
            // Do something with node
          }
        }, []);
        return <div ref={setRef} />;
      }
      // useImperativeHandle
      const FancyInput = forwardRef((props, ref) => {
        const inputRef = useRef();
        useImperativeHandle(ref, () => ({
          focus: () => inputRef.current.focus(),
          scrollIntoView: () => inputRef.current.scrollIntoView()
        }));
        return <input ref={inputRef} />;
      });
      \`\`\`
    - **Note**: forwardRef lets parent components reach into child DOM nodes while keeping encapsulation.

22. **What is React Router and how has it evolved?**
    - **Answer**: Library for navigation in React apps. Modern: React Router v6, data loaders, actions.
    - **Example**:
      \`\`\`jsx
      // Modern React Router v6
      import { createBrowserRouter, RouterProvider } from 'react-router-dom';
      const router = createBrowserRouter([
        {
          path: '/',
          element: <Root />,
          loader: async () => {
            const data = await fetch('/api/data');
            return data.json();
          },
          action: async ({ request }) => {
            const formData = await request.formData();
            return saveData(formData);
          },
          children: [
            {
              path: 'dashboard',
              element: <Dashboard />,
              loader: dashboardLoader
            }
          ]
        }
      ]);
      function App() {
        return <RouterProvider router={router} />;
      }
      \`\`\`
    - **Note**: Data routers move fetching out of components into loaders — cleaner separation of concerns.

23. **How do you perform navigation in a React application?**
    - **Answer**: Link, useNavigate, useParams. Modern: useNavigate, useLoaderData.
    - **Example**:
      \`\`\`jsx
      // Modern navigation
      import { Link, useNavigate, useLoaderData } from 'react-router-dom';
      function Navigation() {
        const navigate = useNavigate();
        const data = useLoaderData();

        return (
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" state={{ from: 'nav' }}>About</Link>
            <button onClick={() => navigate('/contact', { replace: true })}>
              Contact
            </button>
            <button onClick={() => navigate(-1)}>Back</button>
          </nav>
        );
      }
      \`\`\`
    - **Note**: Use replace: true for redirects after login so back button doesn't return to the login page.

24. **What is the difference between controlled and uncontrolled components?**
    - **Answer**: Controlled: State managed by React. Uncontrolled: State managed by DOM. Modern: Controlled is preferred, useRef for uncontrolled.
    - **Example**:
      \`\`\`jsx
      // Modern controlled component
      function ControlledForm() {
        const [value, setValue] = useState('');
        return (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="controlled"
          />
        );
      }
      // Uncontrolled (use when needed)
      function UncontrolledForm() {
        const inputRef = useRef(null);
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(inputRef.current.value);
        };
        return (
          <form onSubmit={handleSubmit}>
            <input ref={inputRef} className="uncontrolled" />
          </form>
        );
      }
      \`\`\`
    - **Note**: Controlled inputs give instant validation and formatting; uncontrolled avoid re-renders per keystroke.

25. **How do you handle forms in React?**
    - **Answer**: Controlled components, uncontrolled, form libraries. Modern: React Hook Form, Server Actions.
    - **Example**:
      \`\`\`jsx
      // Modern form handling
      import { useForm } from 'react-hook-form';
      import { useActionState } from 'react';

      function ModernForm() {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const [state, formAction] = useActionState(submitAction, null);

        return (
          <form onSubmit={handleSubmit((data) => {
            formAction(data);
          })}>
            <input
              {...register('email', {
                required: 'Email required',
                pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <button type="submit">Submit</button>
            {state?.message && <div>{state.message}</div>}
          </form>
        );
      }
      \`\`\`
    - **Note**: React Hook Form uses uncontrolled inputs internally — great performance with minimal re-renders.

26. **How do you handle events in React?**
    - **Answer**: Synthetic events, event handlers. Modern: Event delegation, useCallback for performance.
    - **Example**:
      \`\`\`jsx
      // Modern event handling
      function EventComponent() {
        const [events, setEvents] = useState([]);

        // Memoized handler
        const handleClick = useCallback((id, e) => {
          console.log('Clicked:', id);
          setEvents(prev => [...prev, { id, timestamp: Date.now() }]);
        }, []);

        return (
          <div onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClick.bind(null, 1)}>
              Click me
            </button>
            <input
              onChange={(e) => {
                const value = e.target.value;
                // Debounced update
              }}
            />
          </div>
        );
      }
      \`\`\`
    - **Note**: React synthetic events wrap native events providing cross-browser consistency.

27. **What is a higher-order component (HOC)?**
    - **Answer**: Function that takes a component and returns enhanced component. Modern: Hooks replace many HOC use cases.
    - **Example**:
      \`\`\`jsx
      // Modern HOC (still useful in some cases)
      function withAuth(WrappedComponent) {
        return function AuthenticatedComponent(props) {
          const { user, loading } = useAuth();

          if (loading) return <LoadingSpinner />;
          if (!user) return <LoginPage />;

          return <WrappedComponent {...props} user={user} />;
        };
      }
      // Usage
      const ProtectedPage = withAuth(PageComponent);
      // Alternative: Custom hook
      function useProtectedPage() {
        const { user, loading } = useAuth();
        if (loading) return { loading: true };
        if (!user) return { unauthorized: true };
        return { user };
      }
      \`\`\`
    - **Note**: HOCs add wrapper layers in DevTools — prefer custom hooks for logic reuse today.

28. **What is the purpose of keys in React?**
    - **Answer**: Identify items in lists for efficient updates. Modern: Stable keys, key for arrays.
    - **Example**:
      \`\`\`jsx
      // Modern key usage
      function UserList({ users }) {
        return (
          <ul>
            {users.map(user => (
              // Use stable unique key
              <li key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        );
      }
      // When no stable keys
      const items = data.map((item, index) => ({
        ...item,
        // Generate stable key
        _key: \`\${item.type}-\${item.id}\`
      }));
      \`\`\`
    - **Note**: Keys help React match old and new elements between renders — wrong keys cause state bugs.

29. **What is the significance of the key prop?**
    - **Answer**: Helps React identify changed, added, removed items. Modern: Key with index (only as last resort).
    - **Example**:
      \`\`\`jsx
      // Modern key patterns
      // Good - stable IDs
      <li key={user.id}>{user.name}</li>
      // Good - composite key
      <li key={\`\${user.id}-\${user.type}\`}>{user.name}</li>
      // Bad - index (can cause issues)
      <li key={index}>{item.name}</li>
      // Key with custom component
      <UserCard key={user.id} user={user} />
      \`\`\`
    - **Note**: Index keys break when items reorder — input state can jump to the wrong row.

30. **How do you optimize performance in a React application?**
    - **Answer**: React.memo, useMemo, useCallback, lazy loading. Modern: React Compiler (formerly React Forget).
    - **Example**:
      \`\`\`jsx
      // Modern performance optimization
      import { useCallback, useMemo, lazy, Suspense } from 'react';

      const HeavyComponent = lazy(() => import('./HeavyComponent'));

      function OptimizedComponent({ data, onSave }) {
        // Memoize expensive computation
        const processedData = useMemo(() => {
          return processData(data);
        }, [data]);

        // Memoize callbacks
        const handleSave = useCallback((item) => {
          onSave(item);
        }, [onSave]);

        return (
          <Suspense fallback={<Loading />}>
            <HeavyComponent
              data={processedData}
              onSave={handleSave}
            />
          </Suspense>
        );
      }
      export default React.memo(OptimizedComponent);
      \`\`\`
    - **Note**: Profile first — premature memoization adds complexity without measurable gains.

### Intermediate Questions

31. **What are React fragments?**
    - **Answer**: Group elements without extra DOM node. Modern: Fragment shorthand <>, keyed fragments.
    - **Example**:
      \`\`\`jsx
      // Modern fragments
      function Component() {
        return (
          <>
            <h1>Title</h1>
            <p>Content</p>
          </>
        );
      }
      // Keyed fragment
      function List() {
        return (
          <React.Fragment key="list-key">
            <Item key="1" />
            <Item key="2" />
          </React.Fragment>
        );
      }
      \`\`\`
    - **Note**: Fragments keep the DOM clean — no unnecessary wrapper divs breaking CSS layouts.

32. **How do you use React fragments?**
    - **Answer**: <React.Fragment> or <>. Modern: Short syntax is preferred.
    - **Example**:
      \`\`\`jsx
      // Modern fragment patterns
      function TableRows({ items }) {
        return (
          <>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </>
        );
      }
      function Layout({ children }) {
        return (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        );
      }
      \`\`\`
    - **Note**: Only the long syntax supports keys — needed when mapping fragments in lists.

33. **What is the difference between React.Fragment and a regular HTML element?**
    - **Answer**: Fragment doesn't create DOM node. Modern: Better performance, cleaner DOM.
    - **Example**:
      \`\`\`jsx
      // With div (adds extra node)
      function WithDiv() {
        return (
          <div>
            <h1>Title</h1>
            <p>Content</p>
          </div>
        );
      }
      // With fragment (no extra node)
      function WithFragment() {
        return (
          <>
            <h1>Title</h1>
            <p>Content</p>
          </>
        );
      }
      \`\`\`
    - **Note**: Extra wrapper divs can break flex/grid layouts — fragments solve this cleanly.

34. **What are error boundaries in React?**
    - **Answer**: Catch JavaScript errors in component tree. Modern: Error boundaries, fallback UI.
    - **Example**:
      \`\`\`jsx
      // Modern error boundary
      class ErrorBoundary extends React.Component {
        state = { hasError: false, error: null };

        static getDerivedStateFromError(error) {
          return { hasError: true, error };
        }

        componentDidCatch(error, errorInfo) {
          console.error('Error caught:', error, errorInfo);
          // Send to error tracking service
          reportError(error);
        }

        render() {
          if (this.state.hasError) {
            return (
              <div role="alert">
                <h2>Something went wrong</h2>
                <details>
                  <summary>Error details</summary>
                  <pre>{this.state.error?.toString()}</pre>
                </details>
                <button onClick={() => window.location.reload()}>
                  Reload page
                </button>
              </div>
            );
          }
          return this.props.children;
        }
      }
      \`\`\`
    - **Note**: Error boundaries catch render/lifecycle errors but NOT event handlers, async code, or SSR errors.

35. **How do you implement an error boundary in React?**
    - **Answer**: Class component with getDerivedStateFromError. Modern: Error boundaries are class components only.
    - **Example**:
      \`\`\`jsx
      // Modern error boundary usage
      function App() {
        return (
          <ErrorBoundary fallback={<ErrorDisplay />}>
            <Suspense fallback={<Loading />}>
              <UserDashboard />
            </Suspense>
          </ErrorBoundary>
        );
      }
      // With multiple boundaries
      function ComponentWithBoundaries() {
        return (
          <>
            <ErrorBoundary fallback={<CardError />}>
              <CriticalWidget />
            </ErrorBoundary>
            <ErrorBoundary fallback={<ListError />}>
              <DataList />
            </ErrorBoundary>
          </>
        );
      }
      \`\`\`
    - **Note**: Place boundaries around independent sections so one failure doesn't blank the whole app.

36. **What is PropTypes in React?**
    - **Answer**: Type checking for props. Modern: TypeScript is preferred over PropTypes.
    - **Example**:
      \`\`\`jsx
      // Legacy PropTypes (not recommended for new code)
      import PropTypes from 'prop-types';
      function User({ name, age, email }) {
        return <div>{name}</div>;
      }
      User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        email: PropTypes.string
      };

      // Modern TypeScript approach
      interface UserProps {
        name: string;
        age?: number;
        email?: string;
      }
      function User({ name, age = 18, email }: UserProps) {
        return <div>{name}</div>;
      }
      \`\`\`
    - **Note**: PropTypes only warn at runtime in development; TypeScript catches type errors at compile time.

37. **How do you validate props using PropTypes?**
    - **Answer**: Define propTypes object. Modern: TypeScript is recommended.
    - **Example**:
      \`\`\`jsx
      // Advanced PropTypes (for migration)
      import PropTypes from 'prop-types';
      MyComponent.propTypes = {
        // Single value
        name: PropTypes.string,
        // Required
        age: PropTypes.number.isRequired,
        // Object with shape
        user: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string
        }),
        // Array of specific values
        roles: PropTypes.arrayOf(PropTypes.oneOf(['admin', 'user'])),
        // Custom validator
        custom: (props, propName, component) => {
          if (props[propName] && props[propName].length > 10) {
            return new Error('Too long');
          }
        }
      };
      \`\`\`
    - **Note**: Custom validators receive all props — enabling cross-field validation rules.

38. **What is the difference between Props and State?**
    - **Answer**: Props: External, immutable. State: Internal, mutable. Modern: Props for data flow, state for internal.
    - **Example**:
      \`\`\`jsx
      // Modern props vs state
      function UserComponent({ user, onUpdate }) {
        // Props - external, read-only
        // State - internal, mutable
        const [localCount, setLocalCount] = useState(0);

        // State can start from props
        const [localUser, setLocalUser] = useState(user);

        // Update local state without affecting props
        const handleLocalChange = (newName) => {
          setLocalUser(prev => ({ ...prev, name: newName }));
        };

        return (
          <div>
            <h3>{localUser.name}</h3>
            <p>Local count: {localCount}</p>
            <button onClick={() => setLocalCount(c => c + 1)}>
              Increment local
            </button>
            {/* Propagate changes up */}
            <button onClick={() => onUpdate(localUser)}>
              Save changes
            </button>
          </div>
        );
      }
      \`\`\`
    - **Note**: Copying props into state creates sync bugs — prefer deriving during render or syncing via effects deliberately.

39. **How do you use default props in React?**
    - **Answer**: defaultProps or default parameter in destructuring. Modern: Default parameters in function.
    - **Example**:
      \`\`\`jsx
      // Modern default props
      interface UserProps {
        name: string;
        age?: number;
        role?: 'user' | 'admin';
      }
      // Using default parameters
      function User({
        name,
        age = 18,
        role = 'user'
      }: UserProps) {
        return (
          <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
          </div>
        );
      }
      // For components that need default props in complex cases
      User.defaultProps = {
        age: 18,
        role: 'user'
      };
      \`\`\`
    - **Note**: Default parameters apply even when undefined is passed explicitly — more predictable than defaultProps.

40. **What are React Portals?**
    - **Answer**: Render children outside parent DOM hierarchy. Modern: Portals for modals, tooltips.
    - **Example**:
      \`\`\`jsx
      // Modern portal
      function Modal({ children, isOpen, onClose }) {
        if (!isOpen) return null;

        return ReactDOM.createPortal(
          <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={onClose}>×</button>
              {children}
            </div>
          </div>,
          document.getElementById('modal-root')
        );
      }
      function App() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        return (
          <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <h2>Modal Content</h2>
              <p>This is rendered in portal</p>
            </Modal>
          </div>
        );
      }
      \`\`\`
    - **Note**: Portals escape overflow:hidden and z-index traps of parents — events still bubble through the React tree.

41. **How do you create a portal in React?**
    - **Answer**: ReactDOM.createPortal(children, domNode). Modern: use with event bubbling, context.
    - **Example**:
      \`\`\`jsx
      // Modern portal patterns
      // Multiple portals
      function Tooltip({ children, target }) {
        const [show, setShow] = useState(false);
        const portalNode = useMemo(() =>
          document.createElement('div'),
        []);

        useEffect(() => {
          document.body.appendChild(portalNode);
          return () => {
            document.body.removeChild(portalNode);
          };
        }, [portalNode]);

        return ReactDOM.createPortal(
          <>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {target}
            </div>
            {show && children}
          </>,
          portalNode
        );
      }
      \`\`\`
    - **Note**: Create the portal container once with useMemo and clean it up on unmount to avoid leaks.

42. **What is server-side rendering (SSR)?**
    - **Answer**: Render React on server, send HTML to client. Modern: Next.js, RSC (React Server Components).
    - **Example**:
      \`\`\`jsx
      // Modern SSR with Next.js (App Router)
      // app/page.js
      export default async function Page() {
        const data = await fetchData();
        return (
          <div>
            <h1>Server Component</h1>
            <ClientComponent data={data} />
          </div>
        );
      }
      // Server Component with hydration
      'use client';
      function ClientComponent({ data }) {
        return <div>{data}</div>;
      }
      \`\`\`
    - **Note**: SSR improves first paint and SEO; hydration then attaches interactivity on the client.

43. **How does SSR differ from client-side rendering?**
    - **Answer**: SSR: HTML from server, faster initial load. CSR: HTML from client, more interactive. Modern: Hybrid approaches, streaming SSR.
    - **Example**:
      \`\`\`jsx
      // Modern hybrid approach
      // Next.js streaming SSR
      export default async function Page() {
        return (
          <div>
            <Suspense fallback={<Loading />}>
              <SlowComponent />
            </Suspense>
            <ImmediateComponent />
          </div>
        );
      }
      \`\`\`
    - **Note**: Streaming SSR sends the shell immediately and streams slow sections as they resolve.

44. **What is the purpose of Redux in React?**
    - **Answer**: Centralized state management. Modern: Redux Toolkit, RTK Query.
    - **Example**:
      \`\`\`jsx
      // Modern Redux Toolkit
      import { createSlice, configureStore } from '@reduxjs/toolkit';
      const userSlice = createSlice({
        name: 'user',
        initialState: { data: null, loading: false },
        reducers: {
          setUser: (state, action) => {
            state.data = action.payload;
          },
          setLoading: (state, action) => {
            state.loading = action.payload;
          }
        }
      });
      // RTK Query
      import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
      const api = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
        endpoints: (builder) => ({
          getUsers: builder.query({
            query: () => '/users'
          })
        })
      });
      \`\`\`
    - **Note**: Redux Toolkit uses Immer internally — you can "mutate" draft state safely.

45. **Explain the basic concepts of Redux.**
    - **Answer**: Store, Actions, Reducers, Dispatch, Selectors. Modern: RTK simplifies all concepts.
    - **Example**:
      \`\`\`jsx
      // Modern Redux concepts
      // Store
      const store = configureStore({
        reducer: {
          user: userReducer,
          posts: postsReducer
        }
      });
      // Actions (created automatically by RTK)
      // Reducers (in slices)
      // Dispatch
      const dispatch = useDispatch();
      dispatch(setUser(newUser));
      // Selectors
      const user = useSelector(state => state.user.data);
      \`\`\`
    - **Note**: Single source of truth, state is read-only, changes happen via pure reducers — the three Redux principles.

46. **How do you connect Redux with a React application?**
    - **Answer**: Provider, useDispatch, useSelector. Modern: Redux Toolkit simplifies connection.
    - **Example**:
      \`\`\`jsx
      // Modern Redux connection
      import { Provider, useDispatch, useSelector } from 'react-redux';
      // App setup
      function App() {
        return (
          <Provider store={store}>
            <UserComponent />
          </Provider>
        );
      }
      // Component
      function UserComponent() {
        const dispatch = useDispatch();
        const user = useSelector(state => state.user);
        const status = useSelector(state => state.status, shallowEqual);

        const handleUpdate = (data) => {
          dispatch(updateUser(data));
        };

        return <div>{user.name}</div>;
      }
      \`\`\`
    - **Note**: useSelector subscribes to the store — components re-render only when their selected slice changes.

47. **What is the difference between Redux and Context API?**
    - **Answer**: Redux: Complex, middleware, performance. Context: Simple, built-in, less overhead. Modern: Choose based on complexity.
    - **Example**:
      \`\`\`jsx
      // Modern comparison
      // Context (Simple)
      const ThemeContext = createContext('light');
      function App() {
        const [theme, setTheme] = useState('light');
        return (
          <ThemeContext.Provider value={theme}>
            <Component />
          </ThemeContext.Provider>
        );
      }
      // Redux (Complex)
      // More suitable for large apps with complex state
      const store = configureStore({
        reducer: {
          theme: themeReducer,
          user: userReducer,
          posts: postsReducer,
          notifications: notificationsReducer
        }
      });
      \`\`\`
    - **Note**: Context re-renders ALL consumers on any change; Redux selectors enable fine-grained subscriptions.

48. **What is React.memo?**
    - **Answer**: Memoizes functional components. Modern: React.memo with comparison function.
    - **Example**:
      \`\`\`jsx
      // Modern React.memo
      const UserCard = React.memo(function UserCard({ user, onUpdate }) {
        console.log('Rendering:', user.id);
        return (
          <div>
            <h3>{user.name}</h3>
            <button onClick={() => onUpdate(user.id)}>Update</button>
          </div>
        );
      }, (prevProps, nextProps) => {
        // Custom comparison
        return prevProps.user.id === nextProps.user.id;
      });
      // Usage
      function UserList({ users }) {
        return (
          <div>
            {users.map(user => (
              <UserCard key={user.id} user={user} onUpdate={handleUpdate} />
            ))}
          </div>
        );
      }
      \`\`\`
    - **Note**: Shallow comparison by default — object/function props defeat memo unless stabilized with useMemo/useCallback.

49. **How do you use React.memo to optimize performance?**
    - **Answer**: Wrap components that re-render frequently. Modern: Use with useCallback, useMemo.
    - **Example**:
      \`\`\`jsx
      // Modern memoization patterns
      // Memoized component
      const MemoizedList = React.memo(({ items, onItemClick }) => {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id} onClick={() => onItemClick(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        );
      });
      // Parent component
      function Parent() {
        const [items, setItems] = useState([]);
        // Memoize handlers
        const handleItemClick = useCallback((id) => {
          console.log('Item clicked:', id);
        }, []);
        // Memoize data
        const processedItems = useMemo(() => {
          return items.filter(item => item.active);
        }, [items]);
        return <MemoizedList items={processedItems} onItemClick={handleItemClick} />;
      }
      \`\`\`
    - **Note**: memo + stable props = skipped re-renders; unstable props silently disable the optimization.

50. **Explain the useCallback hook.**
    - **Answer**: Memoize callback functions. Modern: Use for event handlers, dependencies.
    - **Example**:
      \`\`\`jsx
      // Modern useCallback
      function SearchComponent({ onSearch }) {
        // Memoized callback
        const handleSearch = useCallback((query) => {
          const results = performSearch(query);
          onSearch(results);
          // Log search
          trackSearch(query);
        }, [onSearch]); // Dependencies

        const handleKeyPress = useCallback((e) => {
          if (e.key === 'Enter') {
            handleSearch(e.target.value);
          }
        }, [handleSearch]);

        return (
          <input
            type="text"
            onKeyPress={handleKeyPress}
            placeholder="Search..."
          />
        );
      }
      \`\`\`
    - **Note**: useCallback(fn, deps) returns the same function reference until deps change — identity stability for memoized children.
`;
