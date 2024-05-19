# Canvas Editor Documentation

## Overview

The Canvas Editor is a powerful tool designed for creating and customizing ad templates dynamically. This editor allows users to upload images, adjust text, change colors, and generate creative content seamlessly. Leveraging modern web technologies, it ensures smooth performance and a user-friendly experience.

## Features

- **Dynamic Image Upload**: Users can upload images to be integrated into the canvas.
- **Text Customization**: Easily add and edit ad content text and call-to-action (CTA) text.
- **Color Picker**: Select and apply colors to different elements on the canvas.
- **Template Customization**: Modify the background color and integrate pre-defined design patterns.
- **Real-time Rendering**: Instant updates to the canvas as changes are made.

## Tools and Technologies

- **React**: A JavaScript library for building user interfaces.
- **HTML5 Canvas**: Used for rendering the dynamic images and custom graphics.
- **PropTypes**: Ensures the components receive the correct types of props.
- **CSS (TailwindCSS)**: For styling the application.
- **Web Workers**: Offloads the heavy lifting of image processing to background threads, ensuring the main thread remains responsive.

### Development Tools

- **ESLint**: A tool for identifying and fixing linting issues in JavaScript code.
- **ESLint Plugins**: Plugins for React and React Hooks to ensure best practices are followed.

## Installation

To get started with the Canvas Editor, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 12.x or later)
- **npm** (version 6.x or later)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/canvas-editor.git
   cd canvas-editor
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   This command will start the development server and you can view the application in your browser at `http://localhost:3000`.

## Usage

Once the development server is running, navigate to the application in your browser. You can start customizing your ad template by uploading images, editing text, and selecting colors. The canvas will render your changes in real-time.

## Project Structure

- **components/**: Contains the React components such as `CanvasComponent`, `ColorPicker`, and `Input`.
- **workers/**: Contains the Web Worker script `canvasWorker.js` for handling image processing.
- **data/**: Holds the template data (`templatedata.json`).
- **App.js**: Main entry point of the application.
- **App.css**: Custom styles for the application.

## Screenshots


