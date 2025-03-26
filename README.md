# Breakpoint team test

### Introduction

Thank you for participating in our interview test. We value your opinion and expertise, and we're excited to see how you approach this challenge. Please read these instructions carefully to ensure you understand the requirements and expectations.

### Task

You will be provided with two images, and your task is to replicate the layout and design of these images as closely as possible by configuring and customising our basic template called "vanilla template".

### Setup

**1- Forking the Project**
To begin, please fork the project from [https://github.com/PressPage/breakpoint-test](https://github.com/PressPage/breakpoint-test). This will create a copy of the project in your own GitHub account.

**2- Setting up Your Repository** Push any changes you make to your own forked repository. Please make sure your repository is private and grant us access to it. This will allow us to review your work and provide feedback.

**3- Running the Project**
To run the servers that serve the pages and assets, follow these steps:

- Run `npm i` to install the required dependencies
- Run `yarn dev newsroom` to start the development server. Note that this command will not reload the page, but it will rebuild the SCSS and bundle the JS files upon saving. Simply refresh the page to see the changes.
- Once the servers are running you can visit [http://localhost:3000](http://localhost:3000) and [http://localhost:3000/article.html](http://localhost:3000/article.html) to have a preview of your result
- You can find the screenshots of the expected result in the root folder of the project as **test-article-result.png** and **test-homepage-result.png**

### Important Considerations

When working on this task, please keep the following factors in mind:

- Only SCSS and JS changes are allowed
- JS manipulation is only allowed in the article page
- HTML files should **not** be modified
- Using jQuery is **not** allowed
- Ensure the design is responsive
- Focus on editing the configuration files as much as possible (located in newsroom/vt/settings/config/scss) and add customizations in the custom folder (newsroom/vt/settings/custom).
  Example: configuring buttons in the theming/buttons folder within the config/scss directory.

### Design guidelines

- Text color overall: #222
- The pastel light blue color code: #ECF2FF
- Slider image aspect ratio: 2.4
- Cards border radius: 24px
- Buttons:

  // filled

  - background color: #222
  - border: 2px solid #222
  - color: #fff

  // hollow

  - background color: #fff
  - border: 2px solid #222
  - color: #222

  // on hover (both)

  - background color: #444
  - border: 2px solid #444
  - color: #fff

  border-radius: 50px

### Objectives

We're looking for a candidate with an eye for detail who can cleverly match the provided designs while demonstrating a deep understanding of best practices in coding, with a focus on writing modular and scalable code that can be easily reused in future projects.

### **Submission**

Once you have completed the task, please ensure that your changes are pushed to your private repository, and we will review your work. We're looking forward to seeing your implementation and feedback.
