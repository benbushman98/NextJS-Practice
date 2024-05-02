import React from "react";
import '@/assets/styles/globals.css';

export  const metadata = {
    title: 'Property Pulse | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, properties for rent',
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
