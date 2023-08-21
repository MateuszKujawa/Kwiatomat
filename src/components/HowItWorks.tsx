import React from "react";
import Img_paczkomat from "./images/paczkomat.jpg";

function HowItWorks() {
  return (
    <>
      <p className="text-2xl text-center mx-auto pt-10 pb-2 place-self-center text-stone-500 font-semibold">
        Bukowa 27 w Bierzglinku<br></br>Zapraszamy!
      </p>

      <img src={Img_paczkomat} className="mx-auto w-auto h-auto py-5"></img>

      <p className="text-3xl text-center mx-auto pt-2 place-self-center text-stone-500 font-semibold">
        Jak to działa?
      </p>

      <p className="text-center p-8">
        Jeśli jesteś pod kwiatomatem i chciałbyś dokonać zakupu wystarczy, że
        zaznaczysz na tej stronie skrytkę, którą wybierasz, a potem klikniesz
        przycisk "kupuję i płacę". Zostaniesz przeniesiony do bezpiecznej
        płatości online. Po zakupie skrytka automatycznie otworzy się. Po
        wyjęciu zawartości ze skrytki zamknij drzwiczki. W przypadku
        jakichkolwiek problemów, pytań bądź awarii prosimy o
        <a href="#kontakt" className="text-purple-600">
          {" "}
          kontakt.
        </a>
      </p>
    </>
  );
}

export default HowItWorks;
