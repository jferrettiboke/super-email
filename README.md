# super-email

## Description

> ⚠️ Warning! This is a very early version. You SHOULD NOT use this in production yet.

### Overview

Create compatible emails in different email clients using React and render them to HTML with ease to be sent later with your preferred email service on Node.js

Check the [use cases](#use-cases) section and know in detail what you can do with this library.

### The problem

Writing emails is hard due to compatibility issues with email clients, but it is even harder when you are limited to only use primitive HTML tags and a few CSS properties only.

In order to solve the problem previously mentioned, there are some good libraries out there ([MJM](https://mjml.io/) or [HEML](https://heml.io/) among others) which aim to combat this problem.
Even using these libraries (and other) in some cases I got frustrated and I didn't feel comfortable enough due to new syntax and rules and poor support (or none) about templates variables and many more things.

### The solution

What it would happen if we use a familiar syntax, emails components-based, template rendering by default among other cool things, keeping, of course, an elegant structure, simple and clean. So... Where is the solution to this? Using React and JSX. Of course, if the project is already using React, you have more reasons to use this library.

React is used to build web apps, iOS apps, Android apps, macOS apps, Windows apps, Linux apps, VR apps, TV apps, and many more things! Why not use React to build powerful and awesome emails with support for different email clients by default?

## Use cases

#### Sending emails from Node.js

This is the most frequent use case for this library. You can send transactional and marketing emails using your own email templates built with the built-in components from this library.

#### Online email version

You can render the same email on the browser in order to make an online version of the email in case the user can't visualize the email good on his/her email client. This is the famous link saying "View email on the browser" or similar.

#### Live email editor

You can create a live editor to visualize how marketing emails look like with some real data before sending it to thousands of users.

#### Testing emails

You can test your emails! You could want to use Jest to test all your emails with snapshots.

#### Creating a UI for emails

Emails are presentational components, so you can have all your emails very well organized with tools like [Storybook](https://storybook.js.org/) or [React Styleguidist](https://react-styleguidist.js.org/).

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
  subject: `Welcome to Acme`,
  // Render to HTML pretty easy
  html: renderToHtml(<NewUserWelcomeEmail firstName={user.firstName} />)
});
```

## Built-in components

You could build all these components by yourself, but the main idea here is to make things easier so you can focus on things really matter.

All the components listed here have been built with compatibility in mind for emails. You can wrap them and build your own components to safely renders awesome emails on different email clients.

If you use these components, you won't have to worry about anything since one of the main purposes of this library is to offer as much compatibility as possible under the hood by default.

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

This is a column which can have a specific width. I recommend using 4 columns like maximum for a given row. It is preferred to use only 2 or 3.

There are 12 column widths. This is similar to Bootstrap grid. If you don't specify any width, it will be 12 by default which means 100%.

```js
const widths = {
  "1": `${1 * 100 / 12}%`,
  "2": `${2 * 100 / 12}%`,
  "3": `${3 * 100 / 12}%`,
  "4": `${4 * 100 / 12}%`,
  "5": `${5 * 100 / 12}%`,
  "6": `${6 * 100 / 12}%`,
  "7": `${7 * 100 / 12}%`,
  "8": `${8 * 100 / 12}%`,
  "9": `${9 * 100 / 12}%`,
  "10": `${10 * 100 / 12}%`,
  "11": `${11 * 100 / 12}%`,
  "12": `${12 * 100 / 12}%`
};
```

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

Use `Text` for all the texts. You can use this component to build your own components such as `Heading`, `Paragraph` and so on. Just pass down some styles and it will be ready to go!

```js
Text.propTypes = {
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

Use `Link` for your basic links with or without underline. You can use this component as a foundation to build your own components such as buttons. Give it some styles and it will be ready to go!

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
