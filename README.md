# Breakpoint team test

## Introduction
Thank you for participating in our interview test. We value your expertise and are excited to see how you approach this challenge. Please read the instructions carefully to understand the requirements and expectations.

---

## Task & Objective
You will be provided with two images, and your task is to replicate the layout and design of these images as closely as possible by configuring and customizing our **"vanilla template."**

We are looking for candidates who can:

- Accurately **replicate the provided designs** while adhering to the restrictions.
- Write **modular, scalable, and maintainable** SCSS and JavaScript.
- Use **configuration-driven styling** rather than unnecessary overrides.
- **Demonstrate attention to detail**, including typography, spacing, and responsiveness.

The goal is **to achieve an accurate representation of the screenshots provided** within the limitations outlined in: **"Important Considerations (Scope & Restrictions)"**, while maintaining clean, modular, and scalable code.

---

## Setup

### 1. Download the Project

Download the project at this [link](https://github.com/PressPage/breakpoint-test/archive/refs/heads/master.zip)

In case you need it this is the link to the repo [GitHub Repository](https://github.com/PressPage/breakpoint-test). 
. It's important that you create your own repo and work on it.

### 2. Setting up Your Repository

Create a new repository in your personal GitHub account. Make sure your repository is **private** and grant us access for review. Please do not fork it or clone it!
Push an initial commit to your new repository, with the content of the downloaded files then make the necessary changes and commit them separately. You can then create a new pull request from your repository.


### 3. Running the Project

Install dependencies:
  ```sh
  npm i
  ```

Start the development server:
  ```sh
  yarn dev newsroom
  ```

> The server does not auto-refresh. Refresh manually to see updates.

Preview your implementation at:
  - `http://localhost:3000` (Homepage)
  - `http://localhost:3000/article.html` (Article page)

### 4. Reference Screenshots

Expected results are provided in the root folder:

  - `test-homepage-result.png`
  - `test-article-result.png`

---

## Important Considerations (Scope & Restrictions)

### ✔ Allowed Changes:
- **SCSS** modifications (for theming and layout adjustments).
- **JS manipulations** (but only for the **article page**).
- **Config file adjustments** (preferably modify existing settings rather than creating new styles from scratch).
- **Customizations should be added in the** `newsroom/vt/settings/custom` **folder**.
- **Use predefined configuration options** whenever possible, e.g., adjusting buttons via `theming/buttons` in `config/scss`.

### ❌ Not Allowed:
- **Modifying HTML files** (structure must remain unchanged).
- **Hardcoding inline styles**—stick to SCSS and configuration-driven styles.
- **Adding external libraries**—only built-in dependencies should be used (only use vanilla Javascript & SCSS).

### ✔ Required:
- The design **must be responsive** across different screen sizes.
- Code must be **clean, reusable, and modular** to ensure maintainability.
- Maintain consistency with existing **naming conventions and architecture**.
- For this assessment only vanilla JavaScript is permitted.

---

## Design Guidelines

> Below are a few guidelines that cannot be gotten from a screenshot, so we've provided them for you. For this assessment, we've omitted the need to change any fonts, you can keep these as they are.

- **Text color:** `#222`
- **Background color (pastel light blue):** `#ECF2FF`
- **Slider image aspect ratio:** `2.4`
- **Card border radius:** `24px`

### Buttons

| Type             | Background | Text Color | Border           | Border-radius |
| :--------------- | :--------- | :--------- | :--------------- | :------------ |
| **Filled**       | `#222`     | `#fff`     | `2px solid #222` | 50px          |
| **Hollow**       | `#fff`     | `#222`     | `2px solid #222` | 50px          |
| **Hover (Both)** | `#444`     | `#fff`     | `2px solid #444` | 50px          |


---

## Submission

Once you have completed the task:

1. Ensure all changes are pushed to your **private repository**.
2. Grant us access so we can review your implementation.

We look forward to seeing your work! 🚀

