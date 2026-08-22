// ReactJS Interview Questions - Part 2 (Questions 51-100)
export const reactjsInterviewPart2 = `### Advanced Questions

51. **What is React.lazy?**
    - **Answer**: Dynamic import of components. Modern: React.lazy with Suspense.
    - **Example**:
      \`\`\`jsx
      // Modern lazy loading
      import { lazy, Suspense } from 'react';
      // Lazy components
      const Dashboard = lazy(() => import('./Dashboard'));
      const Profile = lazy(() => import('./Profile'));
      const Settings = lazy(() => import('./Settings'));

      function App() {
        const [page, setPage] = useState('dashboard');

        const PageComponent = {
          dashboard: Dashboard,
          profile: Profile,
          settings: Settings
        }[page];

        return (
          <Suspense fallback={<LoadingSpinner />}>
            <PageComponent />
          </Suspense>
        );
      }
      \`\`\`
    - **Note**: Each lazy import creates a separate chunk — loaded only when the component first renders.

52. **How do you implement lazy loading in React?**
    - **Answer**: React.lazy + Suspense. Modern: Route-based splitting, named exports.
    - **Example**:
      \`\`\`jsx
      // Modern lazy loading patterns
      // Named export
      const LazyComponent = lazy(() =>
        import('./Component').then(module => ({
          default: module.NamedComponent
        }))
      );
      // With error boundary
      function App() {
        return (
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <LazyComponent />
            </Suspense>
          </ErrorBoundary>
        );
      }
      // Multiple lazy components
      const routes = {
        '/': lazy(() => import('./Home')),
        '/about': lazy(() => import('./About'))
      };
      \`\`\`
    - **Note**: Wrap lazy routes in error boundaries — chunk loading failures (offline) would otherwise crash the app.

53. **What is the Suspense component?**
    - **Answer**: Fallback UI for lazy-loaded components. Modern: Data fetching suspense, streaming.
    - **Example**:
      \`\`\`jsx
      // Modern Suspense
      // React 19: Data fetching with Suspense
      function DataComponent() {
        // use() hook for data fetching
        const data = use(fetchData());
        return <div>{data}</div>;
      }
      function App() {
        return (
          // Nested suspense
          <Suspense fallback={<Loading />}>
            <DataComponent />
            <Suspense fallback={<LoadingMore />}>
              <MoreDataComponent />
            </Suspense>
          </Suspense>
        );
      }
      \`\`\`
    - **Note**: Nested Suspense boundaries let fast content render while slow sections show their own fallbacks.

54. **How do you use the Suspense component with React.lazy?**
    - **Answer**: Wrap lazy components with Suspense. Modern: Suspense with data fetching.
    - **Example**:
      \`\`\`jsx
      // Modern Suspense usage
      function Router() {
        return (
          <Suspense fallback={<GlobalLoader />}>
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<PageLoader />}>
                  <HomePage />
                </Suspense>
              } />
              <Route path="/about" element={
                <Suspense fallback={<PageLoader />}>
                  <AboutPage />
                </Suspense>
              } />
            </Routes>
          </Suspense>
        );
      }
      \`\`\`
    - **Note**: A global Suspense at the router level catches anything missed by nested boundaries.

55. **What is the difference between React.lazy and dynamic imports?**
    - **Answer**: React.lazy: Specialized for components. Dynamic imports: General module loading. Modern: React.lazy uses dynamic imports internally.
    - **Example**:
      \`\`\`jsx
      // React.lazy
      const LazyComponent = lazy(() => import('./Component'));
      // Dynamic import (general)
      const loadModule = async () => {
        const module = await import('./utils');
        return module.default();
      };
      // Prefetching with dynamic imports
      const prefetchComponent = () => {
        import('./HeavyComponent');
      };
      \`\`\`
    - **Note**: Prefetch heavy chunks on hover/idle to make lazy navigation feel instant.

56. **How do you handle side effects in a React application?**
    - **Answer**: useEffect, custom hooks, event handlers. Modern: useEffect for side effects, useLayoutEffect for DOM.
    - **Example**:
      \`\`\`jsx
      // Modern side effect handling
      function DataFetcher({ url, children }) {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        useEffect(() => {
          const controller = new AbortController();

          const fetchData = async () => {
            try {
              const response = await fetch(url, {
                signal: controller.signal
              });
              const result = await response.json();
              setData(result);
            } catch (err) {
              if (err.name !== 'AbortError') {
                setError(err);
              }
            }
          };

          fetchData();
          return () => controller.abort();
        }, [url]);

        return children(data, error);
      }
      // Usage
      <DataFetcher url="/api/data">
        {(data, error) => (
          error ? <Error /> : data ? <Display data={data} /> : <Loading />
        )}
      </DataFetcher>
      \`\`\`
    - **Note**: AbortController cleanup prevents race conditions when url changes rapidly.

57. **What is the useReducer hook?**
    - **Answer**: Manage complex state with reducer pattern. Modern: useReducer with context, middleware.
    - **Example**:
      \`\`\`jsx
      // Modern useReducer
      const initialState = { count: 0, loading: false, error: null };
      function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return { ...state, count: state.count + 1 };
          case 'decrement':
            return { ...state, count: state.count - 1 };
          case 'incrementAsync':
            return { ...state, loading: true };
          case 'incrementAsyncSuccess':
            return { ...state, count: state.count + action.payload, loading: false };
          default:
            return state;
        }
      }
      function Counter() {
        const [state, dispatch] = useReducer(reducer, initialState);

        const incrementAsync = () => {
          dispatch({ type: 'incrementAsync' });
          setTimeout(() => {
            dispatch({ type: 'incrementAsyncSuccess', payload: 1 });
          }, 1000);
        };

        return (
          <div>
            <p>Count: {state.count}</p>
            {state.loading && <p>Loading...</p>}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={incrementAsync}>+ Async</button>
          </div>
        );
      }
      \`\`\`
    - **Note**: Reducers must be pure — side effects belong in effects or event handlers, not inside the reducer.

58. **How does useReducer differ from useState?**
    - **Answer**: useReducer: Complex logic, multiple sub-values. useState: Simple state, single values. Modern: useReducer for state machines, complex forms.
    - **Example**:
      \`\`\`jsx
      // Modern comparison
      // useState (Simple)
      function SimpleForm() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        return (
          <form>
            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={email} onChange={e => setEmail(e.target.value)} />
          </form>
        );
      }
      // useReducer (Complex)
      const formReducer = (state, action) => {
        switch (action.type) {
          case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
          case 'VALIDATE':
            return { ...state, errors: validate(state) };
          case 'SUBMIT':
            return { ...state, submitting: true };
          default:
            return state;
        }
      };
      \`\`\`
    - **Note**: When multiple state fields change together, a reducer centralizes transitions and prevents invalid states.

59. **How do you use custom hooks in React?**
    - **Answer**: Extract reusable logic into custom hooks. Modern: Custom hooks for data fetching, subscriptions.
    - **Example**:
      \`\`\`jsx
      // Modern custom hooks
      // Data fetching hook
      function useFetch(url, options = {}) {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
          const controller = new AbortController();
          const fetchData = async () => {
            try {
              const response = await fetch(url, {
                ...options,
                signal: controller.signal
              });
              const result = await response.json();
              setData(result);
            } catch (err) {
              if (err.name !== 'AbortError') {
                setError(err);
              }
            } finally {
              setLoading(false);
            }
          };
          fetchData();
          return () => controller.abort();
        }, [url, JSON.stringify(options)]);

        return { data, loading, error };
      }
      // Usage
      function UserList() {
        const { data, loading, error } = useFetch('/api/users');
        if (loading) return <Loading />;
        if (error) return <Error error={error} />;
        return <div>{data.map(user => <User key={user.id} user={user} />)}</div>;
      }
      \`\`\`
    - **Note**: Custom hooks compose other hooks — each call gets independent state, like component instances.

60. **How do you create a custom hook?**
    - **Answer**: Function starting with "use", calling other hooks. Modern: Custom hooks for any reusable logic.
    - **Example**:
      \`\`\`jsx
      // Modern custom hook patterns
      // Storage hook
      function useStorage(key, initialValue) {
        const [stored, setStored] = useState(() => {
          try {
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
          } catch {
            return initialValue;
          }
        });

        const setValue = useCallback((value) => {
          try {
            const valueToStore = value instanceof Function ? value(stored) : value;
            setStored(valueToStore);
            window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
          } catch (error) {
            console.warn('Error setting session storage:', error);
          }
        }, [key, stored]);

        const remove = useCallback(() => {
          window.sessionStorage.removeItem(key);
          setStored(initialValue);
        }, [key, initialValue]);

        return { value: stored, setValue, remove };
      }
      // Event listener hook
      function useEventListener(eventName, handler, element = window) {
        const savedHandler = useRef(handler);

        useEffect(() => {
          savedHandler.current = handler;
        }, [handler]);

        useEffect(() => {
          const isSupported = element && element.addEventListener;
          if (!isSupported) return;

          const eventListener = event => savedHandler.current(event);
          element.addEventListener(eventName, eventListener);
          return () => element.removeEventListener(eventName, eventListener);
        }, [eventName, element]);
      }
      \`\`\`
    - **Note**: The savedHandler ref pattern keeps listeners stable while always calling the latest handler.

61. **What are compound components?**
    - **Answer**: Components that work together as a group. Modern: Compound components with context.
    - **Example**:
      \`\`\`jsx
      // Modern compound components
      function Tabs({ children }) {
        const [activeTab, setActiveTab] = useState(0);

        return (
          <TabContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="tabs">
              <div className="tab-list">
                {children}
              </div>
              <div className="tab-panels">
                {/* Render active panel */}
              </div>
            </div>
          </TabContext.Provider>
        );
      }
      function Tab({ index, children }) {
        const { activeTab, setActiveTab } = useContext(TabContext);

        return (
          <button
            className={\\\`tab \${activeTab === index ? 'active' : ''}\\\`}
            onClick={() => setActiveTab(index)}
          >
            {children}
          </button>
        );
      }
      function TabPanel({ index, children }) {
        const { activeTab } = useContext(TabContext);
        if (activeTab !== index) return null;
        return <div className="tab-panel">{children}</div>;
      }
      \`\`\`
    - **Note**: Compound components share implicit state via context — flexible APIs like <Tabs><Tab/><TabPanel/></Tabs>.

62. **How do you implement compound components?**
    - **Answer**: Parent component with context, child components consume. Modern: Context for shared state.
    - **Example**:
      \`\`\`jsx
      // Modern compound component implementation
      const SelectContext = createContext();
      function Select({ children, value, onChange, className }) {
        const [isOpen, setIsOpen] = useState(false);

        const contextValue = useMemo(() => ({
          value,
          onChange,
          isOpen,
          toggle: () => setIsOpen(v => !v),
          close: () => setIsOpen(false)
        }), [value, onChange, isOpen]);

        return (
          <SelectContext.Provider value={contextValue}>
            <div className={\\\`select \${className}\\\`}>
              {children}
            </div>
          </SelectContext.Provider>
        );
      }
      function SelectTrigger({ children }) {
        const { toggle } = useContext(SelectContext);
        return <button onClick={toggle}>{children}</button>;
      }
      function SelectOptions({ children }) {
        const { isOpen } = useContext(SelectContext);
        if (!isOpen) return null;
        return <div className="select-options">{children}</div>;
      }
      \`\`\`
    - **Note**: Memoize the context value — otherwise every parent render recreates it and re-renders all children.

63. **What is the difference between class-based and function-based components?**
    - **Answer**: Class: Legacy, lifecycle methods. Functional: Modern, hooks, simpler. Modern: Functional components are recommended.
    - **Example**:
      \`\`\`jsx
      // Modern (Functional)
      function UserProfile({ userId }) {
        const [user, setUser] = useState(null);

        useEffect(() => {
          fetchUser(userId).then(setUser);
        }, [userId]);

        return <div>{user?.name}</div>;
      }
      // Legacy (Class)
      class UserProfile extends Component {
        state = { user: null };

        componentDidMount() {
          this.fetchUser();
        }

        componentDidUpdate(prevProps) {
          if (prevProps.userId !== this.props.userId) {
            this.fetchUser();
          }
        }

        fetchUser() {
          fetchUser(this.props.userId).then(user =>
            this.setState({ user })
          );
        }

        render() {
          return <div>{this.state.user?.name}</div>;
        }
      }
      \`\`\`
    - **Note**: One useEffect with [userId] dependency replaces componentDidMount + componentDidUpdate entirely.

64. **How do you handle authentication in a React application?**
    - **Answer**: Context, protected routes, auth providers. Modern: Server components with auth.
    - **Example**:
      \`\`\`jsx
      // Modern authentication
      const AuthContext = createContext(null);
      function AuthProvider({ children }) {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

        const login = useCallback(async (email, password) => {
          const user = await api.login(email, password);
          setUser(user);
          return user;
        }, []);

        const logout = useCallback(async () => {
          await api.logout();
          setUser(null);
        }, []);

        useEffect(() => {
          api.getCurrentUser()
            .then(setUser)
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
        }, []);

        return (
          <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
          </AuthContext.Provider>
        );
      }
      // Protected route
      function PrivateRoute({ children }) {
        const { user, loading } = useContext(AuthContext);
        if (loading) return <Loading />;
        if (!user) return <Navigate to="/login" />;
        return children;
      }
      \`\`\`
    - **Note**: Store tokens in httpOnly cookies when possible — localStorage tokens are vulnerable to XSS.

65. **What are render props?**
    - **Answer**: Share code using a prop that returns JSX. Modern: Hooks often replace render props.
    - **Example**:
      \`\`\`jsx
      // Modern render props (still useful)
      function DataProvider({ render, children }) {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        useEffect(() => {
          fetchData()
            .then(setData)
            .catch(setError);
        }, []);

        // Render prop or children as function
        const content = render ? render(data, error) : children(data, error);
        return content;
      }
      // Usage
      <DataProvider>
        {(data, error) => (
          error ? <Error error={error} /> :
          data ? <Display data={data} /> :
          <Loading />
        )}
      </DataProvider>
      \`\`\`
    - **Note**: children-as-function is the modern flavor of render props — same power, cleaner call sites.

66. **How do you use render props in React?**
    - **Answer**: Pass function as prop, call with state/data. Modern: Use with hooks for state management.
    - **Example**:
      \`\`\`jsx
      // Modern render props with hooks
      function MouseTracker({ children, render }) {
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouseMove = useCallback((e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        }, []);

        return (
          <div onMouseMove={handleMouseMove}>
            {render ? render(position) : children(position)}
          </div>
        );
      }
      // Combining with custom hooks
      function useMouse() {
        const [position, setPosition] = useState({ x: 0, y: 0 });

        useEffect(() => {
          const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
          window.addEventListener('mousemove', handler);
          return () => window.removeEventListener('mousemove', handler);
        }, []);

        return position;
      }
      \`\`\`
    - **Note**: The useMouse hook version is simpler — hooks replaced most render prop patterns.

67. **What is the Context API, and how does it replace Redux in certain scenarios?**
    - **Answer**: Context API: Built-in, simpler, lighter. Redux: More powerful, middleware, complex. Modern: Context for simple state, Redux for complex.
    - **Example**:
      \`\`\`jsx
      // Modern context for simple state
      const StoreContext = createContext();
      function StoreProvider({ children }) {
        const [state, setState] = useState({});
        const dispatch = useCallback((action) => {
          setState(prev => {
            switch (action.type) {
              case 'SET_USER':
                return { ...prev, user: action.payload };
              default:
                return prev;
            }
          });
        }, []);
        return (
          <StoreContext.Provider value={{ state, dispatch }}>
            {children}
          </StoreContext.Provider>
        );
      }
      \`\`\`
    - **Note**: Context + useReducer covers small apps; reach for Redux/Zustand when you need middleware or devtools.

68. **How do you handle file uploads in React?**
    - **Answer**: File input, FormData, progress tracking. Modern: React Dropzone, upload progress.
    - **Example**:
      \`\`\`jsx
      // Modern file upload
      function FileUpload({ onUpload, accept, multiple }) {
        const [files, setFiles] = useState([]);
        const [uploading, setUploading] = useState(false);
        const [progress, setProgress] = useState(0);

        const handleDrop = useCallback((dropped) => {
          setFiles(dropped);
        }, []);

        const handleUpload = useCallback(async () => {
          setUploading(true);
          setProgress(0);
          const formData = new FormData();
          files.forEach(file => formData.append('files', file));

          const xhr = new XMLHttpRequest();
          xhr.upload.onprogress = (e) => {
            setProgress((e.loaded / e.total) * 100);
          };

          try {
            const response = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
              signal: xhr
            });
            const result = await response.json();
            onUpload(result);
          } catch (error) {
            console.error('Upload failed:', error);
          } finally {
            setUploading(false);
            setProgress(0);
          }
        }, [files, onUpload]);

        return (
          <div className="upload-container">
            <Dropzone onDrop={handleDrop} accept={accept} multiple={multiple}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag & drop files here, or click to select</p>
                </div>
              )}
            </Dropzone>
            {files.length > 0 && (
              <div>
                <ul>
                  {files.map(file => (
                    <li key={file.name}>{file.name}</li>
                  ))}
                </ul>
                {uploading && (
                  <div>
                    <progress value={progress} max="100" />
                    <span>{Math.round(progress)}%</span>
                  </div>
                )}
                <button onClick={handleUpload} disabled={uploading}>
                  Upload
                </button>
              </div>
            )}
          </div>
        );
      }
      \`\`\`
    - **Note**: fetch has no upload progress — use XMLHttpRequest or axios for progress tracking.

69. **What are code splitting and lazy loading in React?**
    - **Answer**: Split code into chunks, load on demand. Modern: Bundler-based splitting, Suspense.
    - **Example**:
      \`\`\`jsx
      // Modern code splitting
      // Route-based splitting
      const routes = [
        {
          path: '/',
          component: lazy(() => import('./pages/Home'))
        },
        {
          path: '/dashboard',
          component: lazy(() => import('./pages/Dashboard'))
        }
      ];
      // Component-based splitting
      const HeavyComponent = lazy(() => import('./HeavyComponent'));
      // Conditional splitting
      const Component = lazy(() =>
        shouldLoadHeavy()
          ? import('./HeavyComponent')
          : import('./LightComponent')
      );
      \`\`\`
    - **Note**: Route-level splitting gives the biggest wins — users only download pages they visit.

70. **How do you implement code splitting?**
    - **Answer**: Dynamic imports, React.lazy, loadable-components. Modern: Vite/Webpack automatic splitting.
    - **Example**:
      \`\`\`jsx
      // Modern code splitting patterns
      // Named chunk
      const Component = lazy(() =>
        import(/* webpackChunkName: "component" */ './Component')
      );
      // Prefetch
      const prefetchComponent = () => {
        import('./Component');
      };
      // Loading on interaction
      const handleClick = () => {
        import('./HeavyComponent').then(module => {
          const Component = module.default;
          // Render the component
        });
      };
      \`\`\`
    - **Note**: Vite splits automatically at dynamic import boundaries — no magic comments needed.

### Expert Questions

71. **What are React Server Components?**
    - **Answer**: Components that run on the server. Modern: Server Components for data fetching, zero client bundle.
    - **Example**:
      \`\`\`jsx
      // React Server Component (Next.js App Router)
      // app/page.js
      import { Suspense } from 'react';
      import { ClientComponent } from './ClientComponent';

      // Server Component (runs on server)
      export default async function Page() {
        const data = await fetchData(); // Server-side data
        return (
          <div>
            <ServerData data={data} />
            <Suspense fallback={<Loading />}>
              <ClientComponent />
            </Suspense>
          </div>
        );
      }
      // Server Component with streaming
      async function ServerData({ data }) {
        // Runs on server
        const processed = await processData(data);
        return <div>{processed}</div>;
      }
      \`\`\`
    - **Note**: Server Components can't use state/effects — they render once on the server and never hydrate.

72. **What are React 19 new features?**
    - **Answer**: Actions, useOptimistic, use, compiler. Modern: React 19 features.
    - **Example**:
      \`\`\`jsx
      // React 19 features
      import { use, useOptimistic, useActionState } from 'react';

      // use() hook for promises
      function Component() {
        const data = use(fetchData());
        return <div>{data}</div>;
      }
      // useOptimistic for optimistic updates
      function App() {
        const [state, setOptimistic] = useOptimistic(
          { items: [] },
          (state, newItem) => ({
            items: [...state.items, newItem]
          })
        );
        const add = (item) => {
          setOptimistic(item);
          actualAdd(item);
        };
        return <List items={state.items} onAdd={add} />;
      }
      // useActionState for forms
      function Form() {
        const [state, action] = useActionState(formAction, {});
        return (
          <form action={action}>
            <input name="field" />
            <button type="submit">Submit</button>
          </form>
        );
      }
      \`\`\`
    - **Note**: React 19 makes async transitions first-class — forms can await server actions natively.

73. **What is the React Compiler (React Forget)?**
    - **Answer**: Automatic memoization optimization. Modern: Compiler reduces need for useMemo/useCallback.
    - **Example**:
      \`\`\`jsx
      // Before React Compiler
      function Component({ data }) {
        const processed = useMemo(() => process(data), [data]);
        const handleClick = useCallback(() => {
          handle(processed);
        }, [processed]);
        return <div onClick={handleClick}>{processed}</div>;
      }
      // After React Compiler
      function Component({ data }) {
        // Compiler automatically handles memoization
        const processed = process(data);
        const handleClick = () => {
          handle(processed);
        };
        return <div onClick={handleClick}>{processed}</div>;
      }
      \`\`\`
    - **Note**: The compiler memoizes at build time — manual useMemo/useCallback become mostly unnecessary.

74. **What is React Server Component and how does it differ from Client Component?**
    - **Answer**: Server: Server-only, zero bundle size, direct data access. Client: Client-side, bundle, stateful. Modern: Server Components for data fetching.
    - **Example**:
      \`\`\`jsx
      // Server Component (app/server-component.js)
      // Runs on server, can use async/await
      export default async function ServerComponent() {
        const data = await db.query('SELECT * FROM users');
        return <div>{data.map(user => <User key={user.id} user={user} />)}</div>;
      }
      // Client Component (app/client-component.js)
      'use client'; // Mark as client component
      import { useState } from 'react';
      export default function ClientComponent() {
        const [count, setCount] = useState(0);
        return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
      }
      \`\`\`
    - **Note**: Server Components can import Client Components, but not vice versa — pass data via props instead.

75. **What are Server Actions in React?**
    - **Answer**: Server-side mutations from client. Modern: Server Actions for form handling.
    - **Example**:
      \`\`\`jsx
      // Server Actions
      // app/actions.js
      'use server';
      export async function createPost(formData) {
        const title = formData.get('title');
        const content = formData.get('content');
        await db.posts.create({ title, content });
        revalidatePath('/posts');
      }
      // Client component using Server Action
      'use client';
      import { createPost } from './actions';
      export function CreatePost() {
        const [state, formAction] = useActionState(createPost, { errors: {} });
        return (
          <form action={formAction}>
            <input name="title" />
            <textarea name="content" />
            {state.errors && <div>{state.errors}</div>}
            <button type="submit">Submit</button>
          </form>
        );
      }
      \`\`\`
    - **Note**: Server Actions are RPC endpoints — always validate input server-side, never trust the client.

76. **What is the use hook in React?**
    - **Answer**: Read promises and context in components. Modern: use() for data fetching.
    - **Example**:
      \`\`\`jsx
      // use() hook for promises
      import { use, Suspense } from 'react';
      const fetchData = () => fetch('/api/data').then(r => r.json());
      function DataComponent({ dataPromise }) {
        const data = use(dataPromise);
        return <div>{data}</div>;
      }
      function App() {
        const dataPromise = fetchData();
        return (
          <Suspense fallback={<Loading />}>
            <DataComponent dataPromise={dataPromise} />
          </Suspense>
        );
      }
      // use() for context
      import { use } from 'react';
      const ThemeContext = createContext('light');
      function ThemedComponent() {
        const theme = use(ThemeContext);
        return <div className={theme}>Content</div>;
      }
      \`\`\`
    - **Note**: Unlike other hooks, use() can be called conditionally — it follows normal JS control flow.

77. **What is the difference between use and useContext?**
    - **Answer**: use: Works with promises and context, more flexible. useContext: Only for context. Modern: use is more versatile.
    - **Example**:
      \`\`\`jsx
      // useContext (context only)
      const theme = useContext(ThemeContext);
      // use (context and promises)
      const theme = use(ThemeContext);
      const data = use(fetchDataPromise);
      \`\`\`
    - **Note**: use() can appear inside conditionals and loops — useContext cannot.

78. **What are React Actions?**
    - **Answer**: Functions that handle form submissions. Modern: Actions in React 19.
    - **Example**:
      \`\`\`jsx
      // React Actions
      import { useActionState } from 'react';
      // Action function
      const submitAction = async (prevState, formData) => {
        const name = formData.get('name');
        try {
          await api.submit(name);
          return { success: true };
        } catch (error) {
          return { error: error.message };
        }
      };
      function Form() {
        const [state, submit, pending] = useActionState(submitAction, {});
        return (
          <form action={submit}>
            <input name="name" disabled={pending} />
            <button type="submit" disabled={pending}>
              {pending ? 'Submitting...' : 'Submit'}
            </button>
            {state.error && <div className="error">{state.error}</div>}
          </form>
        );
      }
      \`\`\`
    - **Note**: useActionState returns pending state automatically — no manual isSubmitting management.

79. **What are React transitions?**
    - **Answer**: Mark updates as non-urgent. Modern: useTransition for smooth UX.
    - **Example**:
      \`\`\`jsx
      // React transitions
      import { useTransition } from 'react';
      function Search() {
        const [input, setInput] = useState('');
        const [results, setResults] = useState([]);
        const [isPending, startTransition] = useTransition();

        const handleChange = (e) => {
          const value = e.target.value;
          setInput(value);
          // Mark as transition
          startTransition(() => {
            const filtered = searchData(value);
            setResults(filtered);
          });
        };

        return (
          <div>
            <input value={input} onChange={handleChange} />
            {isPending && <div>Searching...</div>}
            <Results data={results} />
          </div>
        );
      }
      \`\`\`
    - **Note**: Transitions keep typing responsive — React interrupts the heavy update if new input arrives.

80. **What is useTransition hook?**
    - **Answer**: Manage transitions between states. Modern: useTransition for UI responsiveness.
    - **Example**:
      \`\`\`jsx
      // useTransition patterns
      function TabSwitcher() {
        const [tab, setTab] = useState('home');
        const [isPending, startTransition] = useTransition();

        const handleTabChange = (newTab) => {
          startTransition(() => {
            setTab(newTab);
          });
        };

        return (
          <div>
            <Tabs onTabChange={handleTabChange} />
            {isPending && <div>Loading...</div>}
            <TabContent tab={tab} />
          </div>
        );
      }
      \`\`\`
    - **Note**: Urgent updates (typing, clicks) stay instant; transitions render in the background.

81. **What is useOptimistic hook?**
    - **Answer**: Provide optimistic updates. Modern: useOptimistic for instant UI feedback.
    - **Example**:
      \`\`\`jsx
      // useOptimistic hook
      function CommentList() {
        const [comments, setComments] = useState([]);
        const [optimisticComments, addOptimistic] = useOptimistic(
          comments,
          (state, newComment) => [...state, { ...newComment, optimistic: true }]
        );

        const handleSubmit = async (text) => {
          const newComment = { id: Date.now(), text };
          addOptimistic(newComment);
          try {
            const saved = await api.saveComment(text);
            setComments(prev => [...prev, saved]);
          } catch (error) {
            // Revert on error
            setComments(prev => prev.filter(c => c.id !== newComment.id));
          }
        };

        return <CommentList comments={optimisticComments} onSubmit={handleSubmit} />;
      }
      \`\`\`
    - **Note**: Optimistic state automatically reverts to the real state when the transition completes or errors.

82. **What is the useDeferredValue hook?**
    - **Answer**: Defer updates to non-urgent updates. Modern: useDeferredValue for smooth UI.
    - **Example**:
      \`\`\`jsx
      // useDeferredValue hook
      function SearchResults({ query }) {
        const [input, setInput] = useState('');
        const deferredInput = useDeferredValue(input, { timeoutMs: 200 });

        // Results only update when deferredInput changes
        const results = useMemo(() => {
          return searchData(deferredInput);
        }, [deferredInput]);

        return (
          <div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>{results.length} results</div>
            <Results data={results} />
          </div>
        );
      }
      \`\`\`
    - **Note**: useDeferredValue is a value-level alternative to useTransition — no callback wrapping needed.

83. **What is the useId hook?**
    - **Answer**: Generate unique IDs for accessibility. Modern: useId for stable IDs.
    - **Example**:
      \`\`\`jsx
      // useId hook
      import { useId } from 'react';
      function InputWithLabel({ label }) {
        const id = useId();
        return (
          <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" />
          </div>
        );
      }
      // Multiple IDs
      function Form() {
        const id1 = useId();
        const id2 = useId();
        return (
          <div>
            <label htmlFor={id1}>Username</label>
            <input id={id1} />
            <label htmlFor={id2}>Password</label>
            <input id={id2} type="password" />
          </div>
        );
      }
      \`\`\`
    - **Note**: useId is SSR-safe — IDs match between server and client, unlike Math.random() approaches.

84. **What are React Refresh boundaries?**
    - **Answer**: Hot reloading boundaries. Modern: React Refresh for development.
    - **Example**:
      \`\`\`jsx
      // React Refresh (automatically handled by tools)
      // vite.config.js or webpack config
      export default {
        server: {
          hmr: {
            // React Refresh enabled
          }
        }
      };
      // Components can be updated without losing state
      export default function Component() {
        const [count, setCount] = useState(0);
        // Edit this component and save
        // State is preserved
        return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
      }
      \`\`\`
    - **Note**: Fast Refresh preserves state on edits but resets when you change a component's hook order.

85. **What are React StrictMode improvements?**
    - **Answer**: Catches issues in development. Modern: StrictMode for React 18+.
    - **Example**:
      \`\`\`jsx
      // Modern StrictMode
      import { StrictMode } from 'react';
      function App() {
        return (
          <StrictMode>
            <Component />
          </StrictMode>
        );
      }
      // StrictMode checks:
      // - Unsafe lifecycle methods
      // - Legacy string refs
      // - Find unexpected side effects
      // - Detect outdated context API
      // - Double-rendering for side effect detection
      \`\`\`
    - **Note**: Double-invoked effects in dev expose missing cleanup — fix them before they leak in production.

86. **How do you handle Performance Optimization in React?**
    - **Answer**: Profiling, React DevTools, optimization techniques. Modern: React Profiler, useMemo, useCallback.
    - **Example**:
      \`\`\`jsx
      // Modern performance optimization
      import { Profiler } from 'react';
      function App() {
        const onRender = (id, phase, actualDuration) => {
          console.log(\\\`Component \${id} took \${actualDuration}ms\\\`);
        };
        return (
          <Profiler id="App" onRender={onRender}>
            <Component />
          </Profiler>
        );
      }
      // Lazy loading for routes
      const routes = {
        '/': lazy(() => import('./Home')),
        '/about': lazy(() => import('./About'))
      };
      // Virtual scrolling for long lists
      import { FixedSizeList } from 'react-window';
      function VirtualList({ items }) {
        return (
          <FixedSizeList
            height={400}
            width={300}
            itemCount={items.length}
            itemSize={50}
          >
            {({ index, style }) => (
              <div style={style}>{items[index]}</div>
            )}
          </FixedSizeList>
        );
      }
      \`\`\`
    - **Note**: Virtualize lists beyond ~100 rows — rendering thousands of DOM nodes kills scroll performance.

87. **How do you use memoization in React?**
    - **Answer**: React.memo, useMemo, useCallback. Modern: React Compiler for automatic memoization.
    - **Example**:
      \`\`\`jsx
      // Modern memoization
      // Component memoization
      const MemoizedComponent = React.memo(({ data }) => {
        // Re-renders only when data changes
        return <div>{data}</div>;
      });
      // Value memoization
      const MemoizedValue = useMemo(() => {
        return computeExpensiveValue(a, b);
      }, [a, b]);
      // Function memoization
      const MemoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      \`\`\`
    - **Note**: Memoize only what profiling shows is slow — blanket memoization adds maintenance cost.

88. **What are the performance optimization techniques in React?**
    - **Answer**: Memoization, code splitting, lazy loading. Modern: React Compiler, Concurrent features.
    - **Example**:
      \`\`\`jsx
      // Comprehensive optimization
      function OptimizedComponent() {
        // 1. Memoize expensive computation
        const processed = useMemo(() => {
          return expensiveOperation(data);
        }, [data]);

        // 2. Memoize callbacks
        const handleClick = useCallback(() => {
          handle(processed);
        }, [processed]);

        // 3. Lazy load heavy components
        const Heavy = lazy(() => import('./Heavy'));

        // 4. Use transition for non-urgent updates
        const [isPending, startTransition] = useTransition();

        // 5. Virtual lists for large data
        const VirtualizedList = useMemo(() => {
          return <VirtualList items={largeData} />;
        }, [largeData]);

        return (
          <div>
            <Suspense fallback={<Loading />}>
              <Heavy />
            </Suspense>
            {VirtualizedList}
            <button onClick={() => startTransition(() => {
              // Non-urgent update
              setData(newData);
            })}>
              Update
            </button>
          </div>
        );
      }
      \`\`\`
    - **Note**: Combine techniques: split code, defer non-urgent updates, virtualize lists, memoize hot paths.

89. **How do you useMemo and useCallback hooks?**
    - **Answer**: useMemo: Memoize values. useCallback: Memoize functions. Modern: Use when needed, React Compiler reduces need.
    - **Example**:
      \`\`\`jsx
      // Modern useMemo and useCallback
      function SearchComponent({ searchTerm, onSearch }) {
        // Memoize expensive computation
        const results = useMemo(() => {
          const start = performance.now();
          const filtered = performSearch(searchTerm);
          console.log('Search took:', performance.now() - start, 'ms');
          return filtered;
        }, [searchTerm]);

        // Memoize function
        const handleClick = useCallback((item) => {
          trackClick(item);
          onSearch(item);
        }, [onSearch]);

        // Memoize object
        const config = useMemo(() => ({
          refreshInterval: 5000,
          maxResults: 100
        }), []);

        return <ResultList results={results} onItemClick={handleClick} config={config} />;
      }
      \`\`\`
    - **Note**: useMemo(() => obj, []) keeps object identity stable — critical for dependency arrays and memo.

90. **How do you handle state updates in functional components?**
    - **Answer**: useState, useReducer, useOptimistic. Modern: Various state hooks.
    - **Example**:
      \`\`\`jsx
      // Modern state management
      function StateComponent() {
        // Simple state
        const [count, setCount] = useState(0);

        // Complex state
        const [state, dispatch] = useReducer(reducer, initialState);

        // Optimistic updates
        const [optimistic, addOptimistic] = useOptimistic(state);

        // Non-urgent updates
        const [isPending, startTransition] = useTransition();

        // Lazy initialization
        const [data, setData] = useState(() => {
          return expensiveInitialState();
        });

        // Updating based on previous state
        const increment = () => {
          setCount(prev => prev + 1);
          startTransition(() => {
            setData(prev => ({ ...prev, count: prev.count + 1 }));
          });
        };

        return (
          <div>
            <p>Count: {count}</p>
            <p>Data: {JSON.stringify(data)}</p>
            <button onClick={increment}>Increment</button>
            {isPending && <span>Processing...</span>}
          </div>
        );
      }
      \`\`\`
    - **Note**: Always use functional updates when new state depends on old — batching makes direct reads stale.

91. **What is the difference between useEffect and useLayoutEffect?**
    - **Answer**: useEffect: Runs after paint. useLayoutEffect: Runs before paint. Modern: UseLayoutEffect for DOM measurements.
    - **Example**:
      \`\`\`jsx
      // Modern useEffect vs useLayoutEffect
      function Component() {
        const [height, setHeight] = useState(0);
        const ref = useRef(null);

        // Runs after paint (asynchronous)
        useEffect(() => {
          console.log('Effect after paint');
          // Side effects, subscriptions
        }, []);

        // Runs before paint (synchronous)
        useLayoutEffect(() => {
          // Measure DOM before paint
          const newHeight = ref.current.getBoundingClientRect().height;
          setHeight(newHeight);
        }, []);

        return (
          <div ref={ref}>
            Height: {height}px
          </div>
        );
      }
      \`\`\`
    - **Note**: useLayoutEffect blocks painting — use only to avoid visual flicker from DOM measurements.

92. **How do you use useEffect for cleanup?**
    - **Answer**: Return cleanup function. Modern: Cleanup for subscriptions, intervals.
    - **Example**:
      \`\`\`jsx
      // Modern useEffect cleanup
      function Component({ userId }) {
        const [user, setUser] = useState(null);

        useEffect(() => {
          let mounted = true;
          const controller = new AbortController();

          async function fetchUser() {
            try {
              const response = await fetch(\\\`/api/users/\\\${userId}\\\`, {
                signal: controller.signal
              });
              const data = await response.json();
              if (mounted) {
                setUser(data);
              }
            } catch (error) {
              if (error.name !== 'AbortError' && mounted) {
                console.error('Fetch error:', error);
              }
            }
          }

          fetchUser();

          // Cleanup
          return () => {
            mounted = false;
            controller.abort();
          };
        }, [userId]);

        return <div>{user?.name}</div>;
      }
      \`\`\`
    - **Note**: Cleanup runs before the next effect and on unmount — the right place to cancel async work.

93. **How do you handle asynchronous operations in useEffect?**
    - **Answer**: Async functions inside effect. Modern: AbortController, cleanup.
    - **Example**:
      \`\`\`jsx
      // Modern async effects
      function DataFetcher() {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
          let cancelled = false;

          const fetchData = async () => {
            setLoading(true);
            try {
              const response = await fetch('/api/data');
              if (!response.ok) throw new Error('Network error');
              const result = await response.json();
              if (!cancelled) {
                setData(result);
                setError(null);
              }
            } catch (err) {
              if (!cancelled) {
                setError(err.message);
                setData(null);
              }
            } finally {
              if (!cancelled) {
                setLoading(false);
              }
            }
          };

          fetchData();

          // Cleanup
          return () => {
            cancelled = true;
          };
        }, []); // Empty deps = run once

        if (loading) return <Loading />;
        if (error) return <Error message={error} />;
        return <Display data={data} />;
      }
      \`\`\`
    - **Note**: The effect callback can't be async itself — define the async function inside and call it.

94. **What is the purpose of the useContext hook?**
    - **Answer**: Access context value directly. Modern: useContext with TypeScript.
    - **Example**:
      \`\`\`jsx
      // Modern useContext
      // Define context with TypeScript
      interface ThemeContextType {
        theme: 'light' | 'dark';
        toggleTheme: () => void;
      }
      const ThemeContext = createContext<ThemeContextType>({
        theme: 'light',
        toggleTheme: () => {}
      });

      // Custom hook for context
      function useTheme() {
        const context = useContext(ThemeContext);
        if (!context) {
          throw new Error('useTheme must be used within ThemeProvider');
        }
        return context;
      }

      // Component using context
      function ThemedComponent() {
        const { theme, toggleTheme } = useTheme();
        return (
          <div className={theme}>
            <button onClick={toggleTheme}>
              Switch to {theme === 'light' ? 'dark' : 'light'}
            </button>
          </div>
        );
      }
      \`\`\`
    - **Note**: Wrapping useContext in a custom hook centralizes the missing-provider error check.

95. **How do you use useContext with a Context Provider?**
    - **Answer**: Provider wraps components, useContext accesses. Modern: Composition with context.
    - **Example**:
      \`\`\`jsx
      // Modern context provider
      function App() {
        const [theme, setTheme] = useState('light');

        // Memoize context value
        const contextValue = useMemo(() => ({
          theme,
          toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
        }), [theme]);

        return (
          <ThemeContext.Provider value={contextValue}>
            <Header />
            <MainContent />
            <Footer />
          </ThemeContext.Provider>
        );
      }
      // Nested context providers
      function NestedProviders() {
        return (
          <ThemeProvider>
            <AuthProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </AuthProvider>
          </ThemeProvider>
        );
      }
      \`\`\`
    - **Note**: Without useMemo, every App render creates a new value object and re-renders all consumers.

96. **What is the purpose of the useImperativeHandle hook?**
    - **Answer**: Expose custom methods to parent. Modern: useImperativeHandle with forwardRef.
    - **Example**:
      \`\`\`jsx
      // Modern useImperativeHandle
      const FancyInput = forwardRef((props, ref) => {
        const inputRef = useRef(null);
        const [value, setValue] = useState('');

        useImperativeHandle(ref, () => ({
          focus: () => {
            inputRef.current.focus();
          },
          clear: () => {
            setValue('');
          },
          getValue: () => value,
          setValue: (newValue) => setValue(newValue)
        }), [value]); // Include dependencies

        return (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="fancy-input"
          />
        );
      });

      function Parent() {
        const inputRef = useRef(null);

        const handleClear = () => {
          inputRef.current?.clear();
          inputRef.current?.focus();
        };

        return (
          <div>
            <FancyInput ref={inputRef} />
            <button onClick={handleClear}>Clear and Focus</button>
          </div>
        );
      }
      \`\`\`
    - **Note**: Expose a minimal API — the parent shouldn't reach into the child's internals.

97. **How do you implement server-side rendering with React?**
    - **Answer**: Next.js, custom SSR setup. Modern: Next.js App Router.
    - **Example**:
      \`\`\`jsx
      // Next.js 14+ App Router
      // app/layout.js
      export default function RootLayout({ children }) {
        return (
          <html lang="en">
            <body>{children}</body>
          </html>
        );
      }
      // app/page.js (Server Component)
      import { Suspense } from 'react';
      import { ClientComponent } from './ClientComponent';

      export default async function Page() {
        const data = await fetch('https://api.example.com/data', {
          next: { revalidate: 60 } // ISR
        }).then(r => r.json());

        return (
          <div>
            <h1>Server Component</h1>
            <ServerData data={data} />
            <Suspense fallback={<Loading />}>
              <ClientComponent />
            </Suspense>
          </div>
        );
      }
      \`\`\`
    - **Note**: The revalidate option enables ISR — static speed with fresh data on an interval.

98. **What is Next.js and how does it enhance React applications?**
    - **Answer**: React framework with SSR, routing, optimization. Modern: App Router, Server Components, Turbopack.
    - **Example**:
      \`\`\`jsx
      // Next.js 14 features
      // app/page.js
      import { headers, cookies } from 'next/headers';

      export default async function Page() {
        const headerList = headers();
        const cookieStore = cookies();

        const userAgent = headerList.get('user-agent');
        const theme = cookieStore.get('theme')?.value || 'light';

        return (
          <div className={theme}>
            <h1>Next.js 14</h1>
            <p>User Agent: {userAgent}</p>
          </div>
        );
      }
      // API routes (app/api/route.js)
      export async function GET(request) {
        const data = await fetchData();
        return Response.json(data);
      }
      \`\`\`
    - **Note**: File-based routing in app/ — folders become URL segments, page.js defines the route UI.

99. **What is static site generation (SSG) and how do you implement it in Next.js?**
    - **Answer**: Pre-render pages at build time. Modern: Next.js SSG with ISR.
    - **Example**:
      \`\`\`jsx
      // Next.js SSG
      // app/posts/page.js
      export async function generateStaticParams() {
        const posts = await fetchPosts();
        return posts.map(post => ({
          id: post.id.toString()
        }));
      }
      export default async function PostPage({ params }) {
        const post = await getPost(params.id);
        return (
          <article>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
          </article>
        );
      }
      // ISR (Incremental Static Regeneration)
      export const revalidate = 3600; // Revalidate every hour
      \`\`\`
    - **Note**: generateStaticParams pre-builds dynamic routes — instant loads with CDN caching.

100. **How do you handle API routes in Next.js?**
     - **Answer**: Serverless functions in app/api. Modern: Route handlers, server actions.
     - **Example**:
       \`\`\`jsx
       // Next.js API routes
       // app/api/posts/route.js
       import { NextResponse } from 'next/server';
       import { db } from './lib/db';

       export async function GET(request) {
         const posts = await db.post.findMany();
         return NextResponse.json(posts);
       }
       export async function POST(request) {
         const data = await request.json();
         const post = await db.post.create({ data });
         return NextResponse.json(post, { status: 201 });
       }
       // Dynamic route
       // app/api/posts/[id]/route.js
       export async function GET(request, { params }) {
         const post = await db.post.findUnique({
           where: { id: params.id }
         });
         if (!post) {
           return NextResponse.json(
             { error: 'Post not found' },
             { status: 404 }
           );
         }
         return NextResponse.json(post);
       }
       \`\`\`
     - **Note**: Route handlers run as serverless functions — stateless, so connect to DB per request or use a pool.
`;
