# React Design Patterns

- [Container/Presentational (Smart/Dumb) Components](#1-containerpresentational-smartdumb-components)
- [Higher-Order Components (HOC)](#2-higher-order-components-hoc)
- [Render Props](#3-render-props)
- [Controlled vs Uncontrolled Components](#4-controlled-vs-uncontrolled-components)
- [Compound Components](#5-compound-components)
- [Hooks-based Patterns](#6-hooks-based-patterns)
- [Provider Pattern](#7-provider-pattern)
- [State Reducer Pattern](#8-state-reducer-pattern)
- [Function-as-a-Child (FaCC)](#9-function-as-a-child-facc)
- [Slot/Template Pattern](#10-slottemplate-pattern)
- [Module Pattern](#11-module-pattern)
- [Observer Pattern](#12-observer-pattern)
- [Facade Pattern](#13-facade-pattern)
- [Command Pattern](#14-command-pattern)
- [Strategy Pattern](#15-strategy-pattern)

This document provides an overview of common design patterns used in React development to create clean, maintainable, and reusable components.

---

## 1. Container/Presentational (Smart/Dumb) Components

- **Container Component**: Manages state and business logic.
- **Presentational Component**: Focuses solely on UI rendering using props.
- **Use Case**: Encourages separation of concerns.

---

## 2. Higher-Order Components (HOC)

- **Definition**: A function that takes a component and returns a new enhanced component.
- **Use Case**: Logic reuse like theming, authentication, etc.

```jsx
const withLogger = (Component) => (props) => {
  console.log(props);
  return <Component {...props} />;
};
```

---

## 3. Render Props

- **Definition**: Share behavior using a prop whose value is a function.
- **Use Case**: Dynamic behavior sharing between components.

```jsx
<MouseTracker render={(position) => <Display position={position} />} />
```

---

## 4. Controlled vs Uncontrolled Components

- **Controlled**: React manages the form state.
- **Uncontrolled**: DOM manages the state using `ref`.
- **Use Case**: Optimize performance or handle legacy forms.

---

## 5. Compound Components

- **Definition**: Components that work together using shared context/state.
- **Use Case**: Tab panels, dropdowns, accordions, etc.

```jsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab />
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel />
  </Tabs.Panels>
</Tabs>
```

---

## 6. Hooks-based Patterns

### a. Custom Hooks

Encapsulate reusable logic.

```jsx
function useLocalStorage(key, defaultValue) { ... }
```

### b. Hook Factories

Generate customized hooks based on parameters.

---

## 7. Provider Pattern

- **Definition**: Share global state/data using React Context.
- **Use Case**: Auth, theme, user settings.

```jsx
<AuthProvider><App /></AuthProvider>
```

---

## 8. State Reducer Pattern

- **Definition**: Externalize state transitions.
- **Use Case**: Allow flexible behavior control from the outside.

---

## 9. Function-as-a-Child (FaCC)

- **Definition**: Children are a function instead of JSX.

```jsx
<MyComponent>{(data) => <Child data={data} />}</MyComponent>
```

---

## 10. Slot/Template Pattern

- **Definition**: Use `children` to customize layout.

```jsx
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
```

---

## 11. Module Pattern

- **Definition**: Organize logic and components into domain-specific folders.

    ```js
    /components
    /Auth
    AuthProvider.js
    useAuth.js
    ```

## 12. Observer Pattern

- **Definition**: React to data changes in observable objects (e.g., MobX, RxJS).
- **Use Case**: Real-time apps, data streams.

---

## 13. Facade Pattern

- **Definition**: Hide complex operations behind a simple API.
- **Use Case**: API wrappers, service abstractions.

---

## 14. Command Pattern

- **Definition**: Encapsulate requests as objects.
- **Use Case**: Undo/redo functionality.

---

## 15. Strategy Pattern

- **Definition**: Define a family of algorithms and choose one dynamically.

```jsx
const renderStrategy = strategies[props.type] || defaultStrategy;
```

---

These design patterns can be used in combination to architect complex React applications with better structure, modularity, and flexibility.
