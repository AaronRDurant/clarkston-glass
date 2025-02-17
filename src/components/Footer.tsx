export default function Footer() {
  return (
    <footer
      className="w-full p-4 text-center border-t border-gray-300 dark:border-gray-700 transition-all duration-300"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
    >
      © {new Date().getFullYear()} Clarkston Glass. All rights reserved.
    </footer>
  );
}
