
This project demonstrates a clean separation of **business logic** and **UI components** using React. The form supports dynamic select fields (country, state, city), editable form data, validation, and API integration.

---

## 📁 Folder Structure

```
customer-form-app/
├── src/
│   ├── components/
│   │   └── CustomerForm.jsx         # UI for the form
│   ├── hooks/
│   │   ├── useCustomerFormHandler.js # Custom hook with business logic
│   │   └── __tests__/
│   │       └── useCustomerFormHandler.test.js  # Jest test
│   └── services/
│       └── api/
│           └── customer.js          # API functions for fetching and saving data
```

---

## 💡 Features

- Business logic handled entirely inside a **custom React hook**: `useCustomerFormHandler`
- UI is separate in a **dumb component**: `CustomerForm1`
- Simulates fetching:
  - Countries
  - States (based on selected country)
  - Cities (based on selected state)
  - Pre-filling form fields when editing
- Validation and form submission
- ✅ Jest-based test for hook behavior

---

## 🧠 Concepts Covered

- Separation of Concerns (SoC)
- Reusable API service layer
- Controlled components in React
- Dynamic select dropdowns based on API response
- Unit testing with **Jest**
- Easily scalable for multiple forms or complex logic

---

## 🚀 How to Run

1. Install dependencies:# ifo-component-structure
   ```
   npm install
   ```

2. Start the app:
   ```
   npm start
   ```

3. Run tests:
   ```
   npm test
   ```

---

## 🔁 Reusability Tips

- You can create other forms using similar patterns with custom hooks.
- The API functions (`services/api`) can be reused across other hooks or components.
- Replace the simulated API calls with real ones from your backend.

---

## 🧪 Testing UI Components

Although this example includes a **unit test for the hook**, you can extend it with **Jest** or **React Testing Library** to test UI components and interactions.

If needed, you can also integrate **Storybook** for visual component testing.

---

## 📦 Deployment Ready

This code structure supports:
- Storybook integration
- React Router (for step forms)
- Multi-step forms
- Formik or React Hook Form integration
- Centralized error handling and toast messages

---
