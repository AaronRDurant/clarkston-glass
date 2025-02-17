export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-left p-8">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Clarkston Glass
      </h1>
      <p className="mt-4 text-lg max-w-2xl text-center">
        Proudly serving Southeast Michigan for over 30 years, Clarkston Glass is
        your trusted partner for all glass solutions. Whether residential or
        commercial, we offer high-quality glass services tailored to your needs.
      </p>
      <div className="mt-6 text-lg max-w-2xl text-left">
        <p>Our specialties include:</p>
        <ul className="list-disc list-inside mt-4">
          <li>Glass Shower Doors & Enclosures</li>
          <li>Window Repair & Glass Replacement</li>
          <li>Auto Glass Repair & Windshield Replacement</li>
          <li>Glass Railings</li>
          <li>Table Tops</li>
          <li>Custom Mirrors</li>
          <li>Glass Doors & Walls</li>
          <li>Cabinet Glass</li>
          <li>Screen Repair</li>
          <li>Storefronts</li>
        </ul>
        <p className="mt-4">
          No matter the size of the job, you can trust us to get it done right
          the first time.
        </p>
      </div>
    </div>
  );
}
