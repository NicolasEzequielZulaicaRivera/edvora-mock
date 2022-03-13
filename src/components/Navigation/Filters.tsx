import { useContext, useEffect, useRef, useState } from "react";
import { listInputActions } from "../../inc/common";
import RidesContext from "../../inc/RidesContext";
import { stateType } from "../../inc/types";
import styles from "./Navbar.module.scss";

const states: stateType[] = [
  {
    name: "Alabama",
    cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
  },
  {
    name: "Alaska",
    cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka"],
  },
  {
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Glendale", "Scottsdale"],
  },
  {
    name: "Arkansas",
    cities: [
      "Little Rock",
      "Fort Smith",
      "Fayetteville",
      "Springdale",
      "Jonesboro",
    ],
  },
];

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const [ridesContext, setRidesContext] = useContext(RidesContext);
  const filters = ridesContext.filters;
  const setFilters = (filters) =>
    setRidesContext((context) => ({ ...context, filters }));

  const getCities = () =>
    filters.state
      ? states[filters.state]
      : states.reduce((acc, state) => {
          return [...acc, ...state?.cities];
        }, []);
  const [cities, setCities] = useState<string[]>(getCities());
  const cityRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const state = states.find((state) => state.name === filters.state);
    if (state) {
      setCities(state.cities);
      cityRef.current.value = "";
    }
  }, [filters.state, setCities]);

  const handleStateChange = (e: any) => {
    setFilters({ ...filters, state: e.target.value });
  };

  const handleCityChange = (e: any) => {
    console.log(e.target.value);
  };

  // info: onMouseLeave could be replaced by onBlur(*)

  return (
    <div
      className={styles.filters}
      onMouseLeave={() => false && setIsOpen(false)}
    >
      <div className={styles.wrap + " " + (isOpen ? styles.open : "")}>
        <div className={styles.label} onClick={toggleOpen}>
          <i className="material-icons">sort</i>Filters
        </div>
        <hr />
        <div className={styles.select}>
          <input
            placeholder="State"
            list="filter_state_list"
            {...listInputActions(handleStateChange)}
          />
          <i className="material-icons">arrow_drop_down</i>
          <datalist id="filter_state_list">
            {states?.map((state, i) => (
              <option key={i + " " + state.name} value={state.name} />
            ))}
          </datalist>
        </div>
        <div className={styles.select}>
          <input
            placeholder="City"
            list="filter_city_list"
            {...listInputActions(handleCityChange)}
            ref={cityRef}
          />
          <i className="material-icons">arrow_drop_down</i>
          <datalist id="filter_city_list">
            {cities?.map((city, i) => (
              <option key={i + " " + city} value={city} />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default Filters;
