function Footer() {
  return (
    <footer className="bg-red-500">
      <ul className="flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
        <li>
          <a href="https://github.com/Frederick-Chon" target="_blank" className="font-bold">
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/frederickchon"
            target="_blank"
            className="font-bold"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a 
            href="https://drive.google.com/file/d/16TKWjO-y54dwMB2qGTqD0vkDJByLTHJJ/view?usp=sharing"
            target="_blank"
            className="font-bold"
          >
            Resume
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;