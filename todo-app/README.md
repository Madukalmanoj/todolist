# 📝 Todo List App

A beautiful, modern todo list application built with React, TypeScript, and Vite. Stay organized and get things done with this feature-rich todo manager!

![Todo App Preview](https://img.shields.io/badge/React-18.x-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## ✨ Features

- ✅ **Add, Edit, Delete Todos** - Full CRUD operations
- 🎯 **Mark as Complete** - Check off finished tasks
- 🔍 **Filter Todos** - View All, Active, or Completed items
- 💾 **Auto-Save** - Persistent storage using localStorage
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful glass morphism design with animations
- ⌨️ **Keyboard Friendly** - Full keyboard navigation support
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 16.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed:
```bash
node --version
npm --version
```

### Installation & Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *This will install all required packages including React, TypeScript, and Vite.*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The app will automatically open at `http://localhost:5173`
   
   If it doesn't open automatically, manually navigate to:
   ```
   http://localhost:5173
   ```

### 🎉 That's it! Your todo app is now running!

## 📋 Available Scripts

In the project directory, you can run:

### `npm run dev`
- Starts the development server
- Opens the app at `http://localhost:5173`
- Hot reloads when you make changes

### `npm run build`
- Builds the app for production
- Creates optimized files in the `dist/` folder

### `npm run preview`
- Serves the production build locally
- Useful for testing the built version

### `npm run lint`
- Runs ESLint to check for code issues
- Helps maintain code quality

## 🎯 How to Use the App

### Adding Todos
1. Type your task in the input field at the top
2. Click "Add Todo" or press Enter
3. Your todo appears in the list below

### Managing Todos
- **Mark Complete**: Click the checkbox next to any todo
- **Edit Todo**: Double-click on the todo text to edit it
- **Delete Todo**: Hover over a todo and click the trash icon (🗑️)

### Filtering & Organization
- **View All**: See all todos (default)
- **View Active**: See only incomplete todos
- **View Completed**: See only finished todos
- **Clear Completed**: Remove all completed todos at once

### Data Persistence
- All todos are automatically saved to your browser's localStorage
- Your todos will persist between browser sessions
- No account or internet connection required

## 🏗️ Project Structure

```
todo-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── AddTodo.tsx    # Add new todos
│   │   ├── TodoItem.tsx   # Individual todo items
│   │   ├── TodoList.tsx   # Todo list container
│   │   └── TodoFilter.tsx # Filter controls
│   ├── hooks/
│   │   └── useTodos.ts    # Custom hook for todo logic
│   ├── types.ts           # TypeScript type definitions
│   ├── App.tsx            # Main app component
│   ├── App.css            # Main app styles
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md             # This file
```

## 🛠️ Technologies Used

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with animations
- **ESLint** - Code linting and quality

## 🎨 Design Features

- **Glass Morphism**: Modern frosted glass effect
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Mobile-first design approach
- **Modern Typography**: Clean, readable fonts
- **Accessibility**: WCAG compliant design

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port (5174, 5175, etc.)

### Dependencies Issues
If you encounter dependency issues:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Browser Compatibility
This app works on all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🚀 Deployment

To deploy your todo app:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Surge.sh

## 📝 License

This project is open source and available under the MIT License.

---

**Happy organizing! 🎉**

*Made with ❤️ using React, TypeScript, and Vite*