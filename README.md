# super-email

## Description

> ⚠️ Warning! This is a very early version. You SHOULD NOT use this in production yet.

### Overview

Create compatible emails in different email clients using React and render them to HTML with ease to be sent later with your preferred email service on Node.js

You can render the same email on the browser without render it to HTML, just using React!

### The problem

Writing emails is hard due to compatibility issues on email clients, but it is even harder when you are limited to only use primitive HTML tags and a few CSS properties only.

In order to solve the problem previously mentioned, there are some good libraries out there ([MJM](https://mjml.io/) or [HEML](https://heml.io/) among others) which aim to combate this problem.
Even using these libraries (and other) in some cases I got frustated and I didn't feel comfortable enough due to new syntax and rules, reusability, composability and poor (or none) about templates variables, etc.

### The solution

What it would happen if we use a familiar syntax, emails components-based, template rendering by default among other cool things, keeping of course an elegant structure, simple and clean. So... Where is the solution to this? Using React and JSX. Of course, if the project is already using React, you have more reasons to use this library.

React is used to build web apps, iOS apps, Android apps, macOS apps, Windows apps, Linux apps, VR apps, TV apps, and many more things! Why not use React to build powerful and awesome emails with support for different email clients by default?

## Installation

`npm install --save super-email` or `yarn add super-email`.

## Usage

```js
// src/components/NewUserWelcomeEmail.js

import React from "react";
import { Email } from "super-email";

const NewUserWelcomeEmail = ({ firstName }) => (
  <Email title="Welcome to ACME">Hello {firstName}!</Email>
);

export default NewUserWelcomeEmail;
```

```js
// src/index.js

import { renderToHtml } from "super-email";
import NewUserWelcomeEmail from "./components/NewUserWelcomeEmail";

const user = {
  email: "johnsemail@example.com",
  firstName: "John"
};

// Send an email with your preferred email client
sendEmail({
  from: "hello@acme.com",
  to: user.email,
  // Render to HTML pretty easy
  html: renderToHtml(<NewUserWelcomeEmail firstName={user.firstName} />)
});
```

## Built-in components

You could build all these components by yourself, but the main idea here is to make things easier so you can focus on things really matter.

All the components listed here have been built with compatibility in mind for emails. You can wrap them and build your owns to safely renders awesome emails on different email clients.

If you use this components, you won't have to worry about anything since one of the main purposes of this library is to offer as much compatibility as possible under the hood by default.

### Email

The most basic emails sent should contain at least this component. You must use this as your foundation for your emails.

```js
Email.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string,
  children: PropTypes.any.isRequired
};
```

### Container

This is a simple container to wrap all the content and make it centered.

```js
Container.propTypes = {
  children: PropTypes.any.isRequired
};
```

### Row

This is a row which contains one or more columns.

```js
Row.propTypes = {
  children: PropTypes.any
};
```

### Column

This is a column whichs can have a specific width.

```js
Column.defaultProps = {
  width: 12
};

Column.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.any
};
```

### Box

This is the equivalent to a `div`.

```js
Box.propTypes = {
  children: PropTypes.any
};
```

### Text

Use `Text` for all the texts. You can use this component to build your owns such as `Heading`, `Paragraph` and so on. Just pass down some styles and it will be ready to go!

```js
Text.PropTypes = {
  children: PropTypes.any.isRequired
};
```

### Image

"A picture is worth a thousand words."

```js
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
```

### Link

Use `Link` for your basic links with or withour underline. You can use this component as a foundation to build you own components such as buttons. Give it some styles and it will be ready to go!

```js
Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};
```

## Custom components

Just create React components as always! Use the built-in components inside your own custom components in order to minimize risks, avoid headaches with weird rendered on email clients and have the best compatibility.

```js
// src/components/Footer.js

import React from "react";
import { Box, Text } from "super-email";

const Footer = () => (
  <Box>
    <Text style={{ textAlign: "center" }}>This is the email footer!</Text>
  </Box>
);

export default Footer;
```

## Custom templates

There is no magic here! Templates are common and familiar React components which you can pass down some props to. You can render props as normal. This is JSX and React world! Awesome.

```js
// src/components/NewUserWelcomeEmail.js

import React from "react";
import { Email, Container, Row, Column, Text } from "super-email";

// Your own components
import Header from "./Header";
import Footer from "./Footer";

const NewUserWelcomeEmail = ({ firstName }) => (
  <Email title="Welcome to ACME">
    <Container>
      <Header />
      <Row>
        <Column>
          <Text>Hello {firstName}!</Text>
        </Column>
      </Row>
      <Footer />
    </Container>
  </Email>
);

export default NewUserWelcomeEmail;
```

## Feedback

Please, get in touch if you want to improve something or just let know about a bug. You can open a detailed issue and I will do all the best!
