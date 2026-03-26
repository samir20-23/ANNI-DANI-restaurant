# ANNI-DANI Restaurant App

## 📱 About ANNI-DANI

ANNI-DANI is a modern restaurant management and ordering application providing an elegant user experience for browsing menus, viewing restaurant information, and managing orders. The application features a beautiful 3D carousel interface, interactive menu browsing, and seamless ordering capabilities.

## 🛠️ Technology Stack

### Frontend
- **Next.js** - React framework for building fast, modern web applications
- **TypeScript** - For type-safe JavaScript development
- **CSS/PostCSS** - Styling and preprocessing
- **ESLint** - Code quality and style enforcement

### Backend
- **Laravel** - PHP web application framework
- **PHP** - Server-side programming language
- **Composer** - PHP dependency management
- **SQLite/MySQL** - Database (configured in Laravel)

## 📋 Project Structure

```
ANNI-DANI/
├── aani-dani/                 # Frontend (Next.js)
│   ├── app/
│   │   ├── components/        # React components
│   │   ├── lib/              # Utility functions & data
│   │   ├── contact/          # Contact page
│   │   ├── menu/             # Menu page
│   │   └── page.tsx          # Home page
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│   └── tsconfig.json         # TypeScript configuration
│
└── anni-dani_backend/         # Backend (Laravel)
    ├── app/                   # Application logic
    ├── config/               # Configuration files
    ├── database/             # Migrations & seeders
    ├── routes/               # API routes
    ├── composer.json         # Backend dependencies
    └── .env                  # Environment variables
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher) - Required for frontend
- **PHP** (v8.1 or higher) - Required for backend
- **Composer** - PHP package manager
- **Git** - Version control

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/samir20-23/ANNI-DANI-restaurant.git
cd ANNI-DANI-restaurant
```

#### 2. Frontend Setup (Next.js)
```bash
cd aani-dani

# Install dependencies
npm install

# Copy environment variables (if .env.local exists)
# cp .env.example .env.local

# Run development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

#### 3. Backend Setup (Laravel)
```bash
cd ../anni-dani_backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed

# Start Laravel development server
php artisan serve
```

The backend API will be available at `http://localhost:8000`

## 📦 Build & Production

### Frontend Build
```bash
cd aani-dani

# Create optimized production build
npm run build

# Start production server
npm start
```

### Backend Deployment
```bash
cd anni-dani_backend

# Create database backup before deployment
# php artisan backup:run

# Clear cache and rebuild
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Deploy to production server
# Configure  hosting provider accordingly
```

## 📂 Key Features

- **3D Menu Carousel** - Interactive food item showcase
- **Category-based Menu** - Browse items by category
- **Restaurant Information** - Location, contact details, hours
- **Space Showcase** - Beautiful restaurant ambiance gallery
- **Responsive Design** - Optimized for mobile and desktop
- **Food Cards** - Detailed item information with images
- **Contact Page** - Easy customer communication

## 🔧 Available Commands

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run dec       # Decode command (custom)
```

### Backend
```bash
php artisan serve                 # Start development server
php artisan migrate               # Run migrations
php artisan db:seed              # Seed database
php artisan tinker               # Interactive shell
php artisan make:model Model -m  # Create model with migration
```

## 📝 Environment Configuration

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```
APP_NAME=ANNI-DANI
APP_ENV=local
DB_CONNECTION=sqlite
DB_DATABASE=database.sqlite
```

## 🔐 Security Considerations

- Keep sensitive data in `.env` files (never commit to repo)
- Use HTTPS in production
- Validate all user inputs
- Implement proper authentication and authorization
- Keep dependencies updated

## 📞 Contact & Support

For issues or questions regarding development:
- Check GitHub issues
- Review documentation in each directory
- Contact development team

## 📄 License

Please check LICENSE file in repository for licensing information.

## 🎯 Development Status

Active development - Features and improvements ongoing.

---

**Last Updated**: March 2026 by samir 
