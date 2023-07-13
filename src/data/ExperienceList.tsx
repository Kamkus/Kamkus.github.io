export default [
  {
    name: "Aplikacja zarządzania biznesami",
    video: (
      <iframe
        className="mt-1 h-[300px] sm:w-[450px] md:w-[530px] lg:w-[460px] xl:w-[560px]"
        src="https://www.youtube.com/embed/xL0MGnz7b6o?autoplay=0&fs=1&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=4&end=0&origin=https://youtubeembedcode.com"
      ></iframe>
    ),
    usedTechnology: ["VueJs", "Pinia", "Tailwindcss", "JavaScript", "MySql", "Lua"],
    text: "System zarządzania firmami dla gry GTA V Online. Backend oraz frontend napisałem całkowicie od zera, w backendzie pisząc w języku lua a na frontendzie stylowanie i skrypt stworzone zostały przy użyciu Tailwindcss oraz VueJs. Do podziału aplikacji na strony i podstrony użyłem VueRouter a do przetrzymywania danych i uzyskiwania do nich dostępu na każdej stronie użyłem Pinia store. Po backendzie zostały stworzone endpointy do m.in walidacji stanu konta firmowego, zmiany rangi, zatrudnianie oraz wyrzucanie pracowników.",
    date: "20.03.2023",
  },
  {
    name: "Radial Menu",
    video: (
      // <iframe
      //   className="mt-1 h-[300px] sm:w-[450px] md:w-[530px] lg:w-[460px] xl:w-[560px]"
      //   src="https://www.youtube.com/embed/RdI-svxgMKo?autoplay=0&fs=1&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=4&end=0&origin=https://youtubeembedcode.com"
      // ></iframe>
      <div className="w-[300px] sm:w-[450px] md:w-[530px] lg:w-[460px] xl:w-[560px] flex items-center justify-center h-[300px]">
        <img src="./svgs/image.png" className="max-w-full max-h-full"/>
      </div>
    ),
    usedTechnology: ["Lua","Tailwindcss", "JavaScript", "VueJS", "HTML5", "CSS3"],
    text: "Menu kołowe stworzone na zlecenie do użytku na prywatnych serwerach GTA V Online. Backend napisany w lua i frontend napisany przy pomocy frameworka VueJs oraz wystylowany przy pomocy Tailwindcss. Warunkowe renderowanie menu wywoływane przez backend, ilość elementów menu zależna od informacji wysyłanych przez backend, reaktywny napis i ikona na środku menu zależna od elementu na który aktualnie najeżdżamy.",
    date: "28.11.2022",
  },
  {
    name: "Drzewko Umiejętności",
    video: (
      <iframe
        className="mt-1 h-[300px] sm:w-[450px] md:w-[530px] lg:w-[460px] xl:w-[560px]"
        src="https://www.youtube.com/embed/Q4PwzMfvIpY?autoplay=0&fs=1&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
      ></iframe>
    ),
    usedTechnology: ["Lua", "JavaScript", "JQuery", "HTML5", "CSS3", "MySql"],
    text: "Drzewko Umiejętności dla gry GTA V Online. W skład projektu wchodził napisany przeze mnie backend w języku lua, oraz frontend napisany i wystylowany przy użyciu CSS3 oraz JQuery. Każdorazowe wywołanie otwarcia drzewka umiejętności wiązało się pobraniem informacji o aktualnym stanie umiejętności gracza z bazy danych. Po dodaniu umiejętności frontend za pomocą endpointu wysyłał na backend informacje odnoście wykorzystanych punktów i aktualizował informację w bazie danych. Skrypt sprzedawany był na forum prywatych serwerów GTA V",
    date: "26.02.2022",
  },
  {
    name: "Sklep z przedmiotami",
    video: (
      <iframe
        className="mt-1 h-[300px] sm:w-[450px] md:w-[530px] lg:w-[460px] xl:w-[560px]"
        src="https://www.youtube.com/embed/f2ATUdONaUw?autoplay=0&fs=1&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=4&end=0&origin=https://youtubeembedcode.com"
      ></iframe>
    ),
    usedTechnology: ["Lua", "JavaScript", "JQuery", "HTML5", "CSS3"],
    text: "Sklep z przedmiotami dla gry GTA V Online. Projekt składa się z backendu napisanego przeze mnie w języku lua, oraz frontendu wystylowanego oraz napisanego przeze mnie przy pomocy CSS3 oraz biblioteki JQuery. Zadaniem backendu było wywołanie otwarcia sklepu przy użyciu asynchronicznej kolejki eventów, odbieranie informacji na temat stanu koszyka po zakupie przy pomocy stworzonego endpointu oraz walidacji stanu konta i dodawania przedmiotów graczowi. Skrypt sprzedawany był na forum prywatych serwerów GTA V",
    date: "17.02.2022",
  },
  {
    name: "System powiadomień",
    video: (
      <iframe
        className="mt-1 h-[300px] sm:w-[450px] md:w-[530px] lg:w-[460px] xl:w-[560px]"
        src="https://www.youtube.com/embed/RdI-svxgMKo?autoplay=0&fs=1&iv_load_policy=3&showinfo=1&rel=0&cc_load_policy=0&start=4&end=0&origin=https://youtubeembedcode.com"
      ></iframe>
    ),
    usedTechnology: ["Lua", "JavaScript", "JQuery", "HTML5", "CSS3"],
    text: "System notyfikacji dla gry GTA V Online. W ramach tego projektu napisałem backend w języku lua, który odpowiada za wywoływanie danego typu notyfikacji(jednego z czterech dostępnych), oraz frontend przy użyciu biblioteki JQuery. Ostylowanie od podstaw używając CSS3. Komunikacja między backendem a frontendem za pomocą asynchronicznej kolejki eventów zapewnionej przez twórców gry. Skrypt był sprzedawany na forum prywatnych serwerów GTA V.",
    date: "02.02.2022",
  },
];
