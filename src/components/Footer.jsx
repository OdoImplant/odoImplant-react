function Footer() {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <img
            className="w-auto h-7"
            src="src/assets/odoimplant-02-1.png"
            alt=""
          />
        </a>

        <p className="text-sm text-gray-600 ">
          © Copyright 2021. All Rights Reserved.
        </p>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 "
            aria-label="Reddit"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." />
            </svg>
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." />
            </svg>
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 "
            aria-label="Github"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
