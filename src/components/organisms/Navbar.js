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
                "navbar lg:px-14 flex flex-wrap items-center lg:py-0 py-2 " +
                styles.bgColor
            }
        >
            {logo}
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
                                              "lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:" +
                                              styles.hoverColor
                                          }
                                          activeStyle={{
                                              borderColor: styles.activeColor,
                                          }}
                                          to={button.link}
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
