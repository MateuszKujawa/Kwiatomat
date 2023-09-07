import React from "react";
import Box from "./Box";
import clsx from "clsx";

import config from "../config";
import { Spinner } from "./Spinner";

interface FormProps {
  boxes: any;
  loading: boolean;
}

export default function Form({ boxes, loading }: FormProps) {
  const [selectedBox, setSelectedBox] = React.useState(0);

  const [email, setEmail] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);

  const isButtomDisabled = selectedBox === 0 || !isEmailValid;

  // order processing
  const [isProcessing, setIsProcessing] = React.useState(false);

  const emailValidation = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handeOrder = async () => {
    setIsProcessing(true);
    const data = {
      boxId: selectedBox,
      email,
    };

    const paymentUrl = await fetch(`${config.apiUrl}/register-transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => res.paymentUrl);

    window.location.href = paymentUrl;
  };

  return (
    <>
      <div className="flex items-center justify-center gap-6">
        {loading ? (
          <p className="text-2xl text-center place-self-center text-stone-500 font-semibold mt-6">
            Loading...
          </p>
        ) : (
          boxes.map((box: any) => (
            <Box
              key={box.id}
              id={box.id}
              price={box.attributes.price}
              onClick={() => {
                setSelectedBox(box.id);
              }}
              isSelected={selectedBox === box.id}
            />
          ))
        )}
      </div>

      <div className="flex flex-col items-center justify-center mx-auto gap-4">
        <input
          type="email"
          placeholder="Wpisz swój adres e-mail"
          className="border-2 border-gray-300 rounded-3xl p-2 mt-8 w-80 pl-5"
          value={email}
          autoComplete="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(emailValidation(e.target.value));
          }}
        />

        <button
          type="submit"
          disabled={isButtomDisabled}
          onClick={() => handeOrder()}
          className={clsx(
            "flex items-center justify-center bg-teal-600 hover:bg-teal-800 transition duration-300 text-white text-lg p-2 rounded-3xl font-bold uppercase w-80",
            isButtomDisabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {isProcessing ? <Spinner /> : "Kupuję i płacę "}
        </button>
      </div>
    </>
  );
}
