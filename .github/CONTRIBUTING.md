# Contributing Guidelines

The Node for Max Examples repository is an open source project, and contributions and help from the community is strongly encouraged and important to improve the software. Here are some things we'd like you to keep in mind in order to help with keeping the process smooth and organized.

## Bug Reports / Example Suggestions

If you've come across a bug in one of the examples, would like to suggest a new example, suggest an enhancement to a current example, or just ask a question, please use the GitHub Issues section for [n4m-examples][issues]. In order to make things easier for the maintainers and others the following would be helpful:

* **Share Info** Please try to share as much helpful info as possible.
* **Use the search.** It's possible that someone already filed the issue or asked the question you have in mind, so please try to avoid duplicates.
* **Distinct test case** Please try to provide detailed info about your bug, example suggestion, feature request, or question. In the case of a bug please try to share clear reproducible steps or ideally even an isolated, reproducible test case.

## Contributing Changes / Pull Requests

We are happy to accept your contributions in the form of pull requests from the GitHub Community. Please make sure your contributions are well-formatted, pass the tests (use `npm run test`) and make use of commonly understood commit messages.

## Quick Code Style Guide

* Use tab characters for spacing
* No trailing whitespace and also blank lines should have no whitespace
* Make use of strict equals === unless type coercion is intended
* Follow conventions already established in project's source code
* Validate changes with eslint and build/test the project to make sure you didn't break anything