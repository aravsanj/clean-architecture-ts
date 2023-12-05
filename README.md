# Clean Architecture Learning Repository in TypeScript

This repository is created for learning and implementing the principles of clean architecture. It follows a modular structure with separate layers for application, domain, infrastructure, and presentation.

## Project Structure

The project is organized into the following folders:

- **application**: Contains application-specific business logic, including use cases.
- **domain**: Defines the core domain entities and business rules.
- **infrastructure**: Houses the implementation details like databases, external APIs, and other external tools.
- **presentation**: Handles the user interface and communication with the external world.

## Entity

- **User**: Represents the core entity of the application.

## Use Case

- **CreateUser**: Illustrates a simple use case for creating a new user.

## Repository

- **UserRepository**: Manages the persistence of user-related data.

## Getting Started

Follow these steps to get the project up and running:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/aravsanj/clean-architecture-ts

2. **Install Dependencies:**
   ```bash
   pnpm i

2. **Run the Application:**
   ```bash
   pnpm dev

# License

This project is licensed under the MIT License.

# Author

Aravind Sanjeev. saravind436@gmail.com

