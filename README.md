# ⚡ Dev Stack

> A modern, responsive web application designed for developers to explore, filter, and assemble their ultimate technology stack seamlessly.

---

## 🚀 Technologies Used

This project is built using a modern frontend stack designed for speed, component modularity, and clean UI styling:

- **React** – Component-based library for dynamic UI rendering
- **Vite** – Next-generation, lightning-fast frontend tooling
- **Tailwind CSS** – Utility-first CSS framework for rapid responsive design
- **DaisyUI** – Component library extension for clean Tailwind UI elements
- **React-Toastify** – Custom interactive toast notifications

---

## ✨ Key Features

1. **Interactive Technology Grid**
   - Displays dynamic technology cards loaded directly from an external JSON dataset with rating stars, difficulty levels, and category badges.
2. **Real-time Stack Builder (Sidebar)**
   - Add technologies to your personal stack sidebar with instant updates, active item counts, and duplicate selection prevention.
3. **Responsive Mobile-First UI**
   - Clean, adaptive design optimized for mobile, tablet, and desktop views featuring brand linear gradient accents and dynamic badge styling.

---

## 📚 React Concepts & Technical Answers

### What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript files. It is used in React because it makes building UI components visual, readable, and intuitive, combining layout structure and component logic in one place.

---

### What is the difference between props and state?

- **Props (Properties):** Read-only data passed down from a parent component to a child component. The receiving component cannot change its own props.
- **State:** Internal data managed within a single component that can change over time based on user interactions. When state changes, the component re-renders.

---

### What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets a functional component create and manage its own state. In this project, `useState` is used inside `TechSection.jsx` to manage the array of technologies (`technologies`) and track items currently added to the user's stack (`selectedStack`).

---

### What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook handles side effects in React components, such as data fetching, subscriptions, or DOM manipulation. In this project, it is used to fetch technology data asynchronously from `technologies.json` on initial component mount, keeping the static data external rather than hardcoding it inside the component.

---

### Why does every item in a `.map()` list need a unique `key` prop?

React uses the unique `key` prop to identify which items in a list have changed, been added, or been removed. It helps React's virtual DOM render list updates efficiently and accurately without re-rendering the entire list unnecessarily.

---

### What is conditional rendering? Show one place you used it.

Conditional rendering means displaying specific UI components or elements depending on whether a state or condition evaluates to `true` or `false`.

**Example in `YourStackSidebar.jsx`:**

```jsx
{count === 0 ? (
  <div className="empty-state">No technologies selected yet.</div>
) : (
  <div className="selected-items-list">
    {selectedStack.map((item) => (/* Render item */))}
  </div>
)}
```

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- **Parent to Child (Data Flow Down):** Data is passed down using **props**. The parent attributes the data to the child component tag, and the child receives it as an argument in its props parameter.

```jsx
// Parent Component
const TechSection = () => {
  const techData = { name: "React", category: "Frontend" };

  return <TechCard tech="{techData}" />;
};

// Child Component
const TechCard = ({ tech }) => {
  return <h3>{tech.name}</h3>;
};
```
