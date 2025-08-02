# 🎬 PixSnap VideoHub

A modern, responsive React video gallery application that lets users discover, play, and save high-quality videos from Pexels API. Built with a focus on user experience and modern web design.

![VideoHub Banner](https://via.placeholder.com/1200x400/0f0f23/ffd700?text=PixSnap+VideoHub)

## ✨ Features

### 🎥 **Video Discovery & Playback**
- Browse thousands of high-quality videos from Pexels
- Direct video playback in the grid with full controls
- Automatic quality selection (HD/SD optimization)
- Video poster images for faster loading
- Smooth video player with play/pause/seek controls

### 🔍 **Smart Search & Categories**
- Real-time search with instant results
- 12 curated video categories with one-click browsing
- Clean, professional category navigation
- Mobile-responsive search interface
- Search query persistence and clearing

### ❤️ **Save & Manage Videos**
- One-click video saving with visual feedback
- Persistent storage using localStorage
- Individual video removal (unsave functionality)
- Bulk remove all saved videos
- Save status indicators and animations
- Saved videos counter display

### 📱 **Modern UI/UX**
- Clean, professional dark theme design
- Responsive grid layout adapting to screen sizes
- Smooth hover effects and animations
- Mobile-first hamburger navigation
- Professional typography with Inter font
- Accessibility-focused design

### 🚀 **Enhanced Functionality**
- Download videos directly to device
- Share video links via clipboard
- Toast notifications for user feedback
- Loading states with custom spinner
- Error handling for API failures
- Back-to-top navigation

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with Hooks
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios for API calls
- **Notifications**: React Toastify
- **Styling**: CSS3 with modern features
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **API**: Pexels Video API

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhiraj100/PixSnap-VideoHub.git
   cd pixsnap-videohub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🔑 API Configuration

The application uses the Pexels Video API with the following configuration:

- **API Key**: `Use your API Key`
- **Endpoint**: `https://api.pexels.com/videos/search`
- **Rate Limit**: 200 requests per hour (free tier)

### API Usage Example
```bash
curl -H "Authorization: "Use your API Key" \
"https://api.pexels.com/videos/search?query=nature&per_page=80"
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx              # Main video grid with playback
│   ├── Saved.jsx            # Saved videos management
│   ├── Navbar.jsx           # Professional navigation
│   └── Loader.jsx           # Loading component
├── App.jsx                  # Main app component & routing
├── index.css               # Complete styling system
├── main.jsx                # App entry point
└── spinner.gif             # Loading animation
```

## 🎯 Available Categories

- 🌿 **Nature** - Landscapes, wildlife, natural scenery
- ✈️ **Travel** - Destinations, adventures, exploration
- 🏙️ **City** - Urban environments, architecture
- 🚗 **Cars** - Vehicles, automotive content
- 👗 **Fashion** - Style, clothing, trends
- 🐾 **Animals** - Wildlife, pets, creatures
- 💻 **Technology** - Gadgets, innovation, tech
- 💼 **Business** - Corporate, professional content
- 🍕 **Food** - Cuisine, cooking, gastronomy
- ⚽ **Sports** - Athletics, fitness, competition
- 🎵 **Music** - Musical instruments, performances
- 💪 **Fitness** - Workouts, health, wellness

## 🎮 How to Use

### **Browsing Videos**
1. Visit the home page to see featured nature videos
2. Click category buttons for specific content types
3. Use the search bar for custom queries
4. Scroll through the responsive video grid

### **Playing Videos**
1. Hover over any video to see the play button overlay
2. Click the video or play button to start playback
3. Use standard video controls (play, pause, seek, volume)
4. Videos automatically adapt to your connection speed

### **Saving Videos**
1. Click the heart icon on any video to save it
2. Saved videos show a golden heart indicator
3. Access saved videos via the "Saved" button in navigation
4. Remove individual videos or clear all at once

### **Mobile Experience**
1. Tap the hamburger menu (≡) for mobile navigation
2. Full-screen category selection
3. Touch-optimized video controls
4. Responsive grid adapts to screen size

## 🎨 Design Features

### **Visual Design**
- Modern dark theme with professional aesthetics
- Golden accent color (#ffd700) for highlights
- Clean typography with proper hierarchy
- Subtle shadows and hover effects

### **User Interface**
- Intuitive navigation with clear visual hierarchy
- Responsive grid system for optimal viewing
- Professional button designs with hover states
- Clean search interface with real-time feedback

### **User Experience**
- Smooth animations and transitions
- Loading states for better perceived performance
- Toast notifications for user feedback
- Accessibility-focused design patterns

## 📱 Responsive Design

- **Desktop**: Multi-column grid with hover effects
- **Tablet**: Adaptive grid with touch-friendly controls
- **Mobile**: Single column with full-screen navigation
- **All Devices**: Optimized video playback and controls

## 🚀 Performance Features

- **Lazy Loading**: Videos load with metadata preload
- **Quality Selection**: Automatic HD/SD optimization
- **Caching**: LocalStorage for saved videos persistence
- **Optimized Images**: Poster frames for quick preview
- **Efficient Rendering**: React best practices implementation

## 🔧 Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📊 Browser Support

- ✅ Chrome (recommended for best performance)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues & Solutions

**Video Loading Issues**: Ensure stable internet connection for HD video streaming  
**Mobile Performance**: Some older devices may experience slower loading  
**API Limits**: Free tier has 200 requests/hour limit

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Pexels](https://www.pexels.com/) for providing the amazing video API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Inter typography
- React community for the excellent documentation and tools

## 📞 Support

If you have any questions or need help with the project:

- 📧 Email: abhirajyadav303@gmail.com

---

**Made with ❤️ by Abhiraj Yadav**  
*Building beautiful web experiences, one component at a time.*