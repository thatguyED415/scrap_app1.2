# Scrap Weight Calculator

A web-based application for iOS and Android that calculates the total scrap weight value against current pricing.

## Features

- Calculate the value of scrap metal based on weight and metal type
- View current scrap metal prices
- Responsive design that works on both iOS and Android devices
- Real-time calculation as you input weight
- Mobile-friendly interface with touch gestures

## How to Use

1. Open the application in a web browser on your iOS or Android device
2. Select the type of metal from the dropdown menu
3. Enter the weight in pounds (lbs)
4. View the calculated total value in the results section
5. On mobile devices, you can swipe left/right to navigate between input and results sections

## Supported Metal Types

The application currently supports the following metal types with their respective prices per pound:

- Clean Copper: $3.40/lb
- Insulated Wire: $2.25/lb
- Romex: $1.70/lb
- LV Wire: $1.00/lb
- MC: $1.00/lb

## Installation and Deployment

### Local Testing

1. Clone or download this repository
2. Open the `index.html` file in a web browser
3. The application should load and be ready to use

### Mobile Testing

To test on mobile devices:

1. Host the application on a web server or use a local development server
2. Access the application URL from your mobile device's browser
3. For the best experience, add the application to your home screen:
   - iOS: Tap the share button and select "Add to Home Screen"
   - Android: Tap the menu button and select "Add to Home Screen" or "Install App"

### Deployment Options

For production deployment, you can:

1. Host on any static web hosting service (GitHub Pages, Netlify, Vercel, etc.)
2. Deploy to a CDN for better performance
3. Integrate with a backend service if you need to update metal prices dynamically

## Technical Details

This application is built using:

- HTML5 for structure
- CSS3 for styling and responsive design
- JavaScript (ES6+) for functionality
- No external libraries or frameworks are required

The application is designed to be lightweight and fast, with special considerations for mobile devices:

- Responsive design that adapts to different screen sizes
- Touch-friendly interface with appropriate tap target sizes
- Swipe gestures for mobile navigation
- iOS and Android-specific adjustments

## Future Enhancements

Potential future enhancements could include:

- Adding more metal types and categories
- Implementing a backend API to fetch real-time market prices
- Adding user accounts to save calculation history
- Supporting different weight units (kg, g, oz, etc.)
- Adding a dark mode option

## Testing the Application

To verify the application works correctly:

1. Open the application and ensure all UI elements are displayed properly
2. Test on different devices and screen sizes to verify responsive design
3. Try the following test cases:
   - Enter 10 lbs of copper (should calculate to $35.00)
   - Enter 20 lbs of aluminum (should calculate to $15.00)
   - Enter 50 lbs of Romex (should calculate to $15.00)
   - Enter 5 lbs of LV Wire (should calculate to $5.00)
   - Enter 100 lbs of MC (should calculate to $100.00)
   - Try entering invalid values (negative numbers, text) to test error handling

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please open an issue in the GitHub repository.