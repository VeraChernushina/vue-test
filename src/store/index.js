import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      cart: [
        {
          id: 0,
          title: "BXC",
          price: 12644,
          total_price: 12644,
          image: "/src/assets/bxc.svg",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
          qty: 1,
        },
        {
          id: 1,
          title: "G2H",
          price: 12644,
          total_price: 25288,
          image: "/src/assets/g2h.svg",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
          qty: 2,
        },
      ],
      total: 37932,
      qty: 3,
      installation: false,
      products: [
        {
          id: 0,
          title: "BXC",
          price: 12644,
          description:
            "Вытяжное устройство для механической системы вентиляции",
          image: "/src/assets/bxc.svg",
          price_range_ru: "6 848 ₽ – 56 584 ₽",
          price_range_en: "77.60 € – 643.86 €",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
        },
        {
          id: 1,
          title: "G2H",
          price: 12644,
          description:
            "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          image: "/src/assets/g2h.svg",
          price_range_ru: "6 848 ₽ – 56 584 ₽",
          price_range_en: "77.60 € – 643.86 €",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
        },
        {
          id: 2,
          title: "GHN",
          price: 12644,
          description: "Вытяжное устройство с датчиком присутствия",
          image: "/src/assets/ghn.svg",
          price_range_ru: "6 848 ₽ – 56 584 ₽",
          price_range_en: "77.60 € – 643.86 €",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
        },
        {
          id: 3,
          title: "TDA",
          price: 12644,
          description: "Вытяжное устройство с датчиком присутствия",
          image: "/src/assets/tda.svg",
          price_range_ru: "6 848 ₽ – 56 584 ₽",
          price_range_en: "77.60 € – 643.86 €",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
        },
        {
          id: 4,
          title: "TDR",
          price: 12644,
          description:
            "Вытяжное устройство для механической системы вентиляции",
          image: "/src/assets/bxc.svg",
          price_range_ru: "6 848 ₽ – 56 584 ₽",
          price_range_en: "77.60 € – 643.86 €",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
        },
        {
          id: 5,
          title: "L2H",
          price: 12644,
          description:
            "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          image: "/src/assets/g2h.svg",
          price_range_ru: "6 848 ₽ – 56 584 ₽",
          price_range_en: "77.60 € – 643.86 €",
          parameters:
            "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
          vendor_code: "G2H1065",
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
