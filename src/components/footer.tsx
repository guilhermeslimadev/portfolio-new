export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-1 px-4 text-xs  gap-4 font-light md:text-sm text-gray-300">
      <span>Guilherme Lima &copy; Copiryght 2025</span>

      <a
        href="https://www.linkedin.com/in/guilhermelimadev/"
        className="hover:text-blue-500 transition-colors hover:underline"
        target="_blank"
      >
        Linkedin
      </a>
      <a
        href="https://github.com/guilhermeslimadev"
        className="hover:text-blue-500 transition-colors hover:underline"
        target="_blank"
      >
        Github
      </a>
      <a
        href="https://wa.me/5511966144965"
        target="_blank"
        className="hover:text-blue-500 transition-colors hover:underline"
      >
        Whatsapp
      </a>
    </footer>
  );
}
