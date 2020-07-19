import list from "./templates/list.hbs";
import counrty from "./templates/country.hbs";
import refs from "./refs";
import { pnotifyFunk } from "./pnotify";

export let createMarkUp = (array) => {
  if (array.length > 2 && array.length < 9) {
    const obj = list(array);
    refs.countryList.innerHTML = obj;
  } else if (array.length <= 2) {
    const obj = counrty(array);
    refs.countryList.innerHTML = obj;
  } else if (array.length > 10) {
    pnotifyFunk();
    refs.countryList.innerHTML = "";
  }
};
