Let us assume that the application is coded with Python.

About common steps in a CI setup: linting, testing, and building. 

The specific tool for taking care of testing would be Pytest which helps to write simple and scalable test cases for databases, APIs, or UI (mainly APIs). Pytest is free and open source software, suitable from simple unit tests to complex functional tests. It might be easy to use also.

The specific tool for linting is more difficult to choose. Black would be suitable for cleaning and maintaining the code. Only it does not adhere standard style guide (PEP8) 100% and is not suitable for any customization, which sounds quite worrying. Other option might be flake8, which finds style errors and reads out where they are coming from, but is does not fix any formatting issues, so it does not fit for all projects or needs. Also Pylama, which is a code audit tool composed of a large number of linters could be useful.

Python is an interpreted language so there is no need for a separate build step. In larger sence as building/CI tool I would choose Travis-CI, which is said to be well designed, free for open source projects, and easy to learn. Travis allows automate testing and code deployment. Seems very interesting option.

Alternative for set up the CI besides Jenkins and GitHub Actions could be the above mentioned Travis-CI. I believe Travis-CI setup suits both self-hosted and a cloud-based environment. Selection would be based to the suitability of billing options and specific needs of the project. This question is not easy to answer for me because of limited exprerience in this field.