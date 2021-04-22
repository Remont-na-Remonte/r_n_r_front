import { NavLink } from "react-router-dom";

function Navbar(props) {
    const logo = props.logo ? props.logo : null;
    const styles = props.styles
        ? props.styles
        : {
              bgColor: "bg-white",
              textColor: "text-gray-700",
              activeColor: "#F472B6",
              hoverColor: "border-indigo-400",
          };
    const buttons = props.buttons ? props.buttons : null;

    return (
        <header
            className={
                "navbar shadow-md lg:px-12 flex flex-wrap items-center lg:py-0 py-2 relative z-50 w-full " +
                styles.bgColor
            }
        >
            {logo}
            <div className="shadow flex mx-16">
                <input
                    className="w-full rounded p-2"
                    type="text"
                    placeholder="Поиск по..."
                />
                <button className="bg-white w-auto flex justify-end items-center text-gray-400 p-2 hover:text-blue-400">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                        />
                    </svg>
                </button>
            </div>
            <div
                className="hidden lg:flex lg:items-center lg:w-auto w-full lg:mx-4"
                id="menu"
            >
                <nav>
                    <ul
                        className={
                            "lg:flex items-center justify-between text-base pt-4 lg:pt-0 " +
                            styles.textColor
                        }
                    >
                        {buttons
                            ? buttons.map((button) => {
                                  return (
                                      <NavLink
                                          className={
                                              "lg:p-4 lg:px-6 py-3 px-0 block border-b-2 border-transparent hover:" +
                                              styles.hoverColor
                                          }
                                          activeStyle={{
                                              borderColor: styles.activeColor,
                                          }}
                                          to={button.link}
                                          key={button.id}
                                      >
                                          {button.text}
                                      </NavLink>
                                  );
                              })
                            : null}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
