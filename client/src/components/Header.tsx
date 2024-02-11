import { useTodoContext } from "../contexts/todoContext";

function Header() {
  const { isDarkMode } = useTodoContext();
  const isMobile = window.innerWidth <= 600;
  console.log(isDarkMode);

  let bgImage: string;

  if (isMobile) {
    bgImage = isDarkMode
      ? "url('./bg-mobile-dark.jpg')"
      : "url('./bg-mobile-light.jpg')";
  } else {
    bgImage = isDarkMode
      ? "url('./bg-desktop-dark.jpg')"
      : "url('./bg-desktop-light.jpg')";
  }

  return (
    <header
      className="h-[30rem] w-screen bg-cover transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: bgImage,
      }}
    ></header>
  );
}

export default Header;
