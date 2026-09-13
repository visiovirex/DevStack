# 🚀 DevStack

### Build Your Ideal Development Stack

DevStack is a React and TypeScript web application that helps developers explore different technologies and create their own development stack. Users can browse technology cards, add technologies to their stack, remove individual technologies, or remove the entire stack.

## 🌐 Live Demo

**Live Website:** https://dev-stack-jet.vercel.app/

## 📸 Project Overview

DevStack provides a simple and interactive way to explore development technologies and build a personalized technology stack.

Users can:

* Explore different development technologies
* Add technologies to their stack
* Remove technologies from their stack
* Get instant toast notifications for stack actions
* See an empty-stack message when no technology is selected

## 🛠️ Technologies Used

* **React** — Building the user interface
* **TypeScript** — Type-safe JavaScript
* **Tailwind CSS** — Styling and responsive design
* **DaisyUI** — UI components
* **React Toastify** — Toast notifications
* **Vite** — Development and build tool
* **JSON** — Storing technology data
* **React Hooks** — `useState`, `use`, and `Suspense`

## ✨ 3 Key Features

### 1. 🧩 Build Your Technology Stack

Users can select technologies and add them to their personal stack. A technology cannot be added more than once.

### 2. 🔔 Toast Notifications

React Toastify provides instant feedback when a technology is added, removed, removed from the entire stack, or when a duplicate technology is selected.

### 3. 📱 Responsive & Interactive UI

The application has a responsive design for different screen sizes, including a mobile navigation menu and interactive technology cards.

---

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write and understand.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change when the user interacts with the application.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and update state in a React component.

I used it to store the selected technologies in `Technologies.tsx` and to control the mobile menu in `Navbar.tsx`.

I also used it in `App.tsx` to keep the technology data promise stable.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run side effects after a component renders, such as fetching data.

I did **not use `useEffect`** in this project. Instead, I used React's `use()` with a Promise and `Suspense` to load the JSON data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React efficiently update the correct item when the list changes.

For example:

```tsx
{technologies.map((technology) => (
  <TechnologiesCard
    key={technology.id}
    technology={technology}
  />
))}
```

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it for the stack section. If there are no selected technologies, it shows **"Your Stack is Empty"**. Otherwise, it shows the selected technologies.

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your Stack is Empty</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through **props**.

A child can communicate back to the parent by calling a function that the parent passes through props.

In this project, `Technologies.tsx` passes `technology`, `selectedTechnologies`, and `handleAddToStack` to `TechnologiesCard`.

When the user clicks **Add to Stack**, the child calls `handleAddToStack()` and sends the technology back to the parent.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── banner/
│   │   └── Banner.tsx
│   ├── footer/
│   │   └── Footer.tsx
│   ├── navbar/
│   │   └── Navbar.tsx
│   ├── technologies/
│   │   ├── Technologies.tsx
│   │   └── TechnologiesCard.tsx
│   └── type/
│       └── technologiesType.ts
│
├── App.tsx
├── index.css
└── main.tsx

public/
└── data.json
```

---

## 👨‍💻 Author

**Rabby**

Built with ❤️ using React and TypeScript.
