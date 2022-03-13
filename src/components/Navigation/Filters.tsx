import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
  const setFilters = useCallback(
    (filters) => setRidesContext((context) => ({ ...context, filters })),
    [setRidesContext]
  );

  const getCities = () =>
    states.reduce((acc, state) => {
      return [...acc, ...state?.cities];
    }, []);
  const [cities, setCities] = useState<string[]>(getCities());
  const cityRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!filters.state) {
      setCities(getCities());
      cityRef.current.value = "";
      return;
    }

    const state = states.find((state) => state.name === filters.state);
    if (state) setCities(state.cities);
    if (!filters.city) cityRef.current.value = "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.state, setCities, setFilters]);

  const handleStateChange = (e: any) => {
    const value = e.target.value;
    if (value === "None" || value === "") {
      setFilters({});
    } else {
      setFilters({
        state: value,
        city: states[value]?.cities.includes(filters.city) ? filters.city : "",
      });
    }
  };

  const handleCityChange = (e: any) => {
    const value = e.target.value;
    if (value === "None" || value === "") {
      setFilters({ ...filters, city: undefined });
    } else {
      setFilters({ ...filters, city: e.target.value });
    }
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
            defaultValue={filters.state || ""}
            {...listInputActions(handleStateChange)}
          />
          <i className="material-icons">arrow_drop_down</i>
          <datalist id="filter_state_list">
            <option value="None" />
            {states?.map((state, i) => (
              <option key={i + " " + state.name} value={state.name} />
            ))}
          </datalist>
        </div>
        <div className={styles.select}>
          <input
            placeholder="City"
            list="filter_city_list"
            defaultValue={filters.city || ""}
            {...listInputActions(handleCityChange)}
            ref={cityRef}
          />
          <i className="material-icons">arrow_drop_down</i>
          <datalist id="filter_city_list">
            <option value="None" />
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
