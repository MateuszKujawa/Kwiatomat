import React from "react";

function NeedHelp() {
  return (
    <div className="w-full h-fit text-center bg-rose-300 p-6">
      <h3 className="font-bold text-stone-700 font-bold text-left text-lg leading-loose">
        Potrzebujesz pomocy?
      </h3>
      <p className="text-sm text-stone-700 text-left">
        Przeczytaj odpowiedzi na{" "}
        <a href="#" className="text-purple-600">
          najczęstsze pytania.
        </a>
        <br></br>Skontaktuj się z nami:<br></br>
        tel: 123 456 789, info@florespracownia.pl
      </p>
    </div>
  );
}

export default NeedHelp;
