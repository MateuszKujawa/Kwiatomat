import React, { useEffect } from "react";
import Form from "./Form";
import config from "../config";

function Main() {
  const [loading, setLoading] = React.useState(true);
  const [boxes, setBoxes] = React.useState([]);

  useEffect(() => {
    // fetch data from API
    const fetchData = async () => {
      const data = await fetch(`${config.strapiUrl}/api/boxes?filters[available][$eq]=1`)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setBoxes(res.data);
        });

      return data;
    };

    fetchData();
  }, []);

  return <>
      <div className="mt-20">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="font-serif text-5xl text-center uppercase text-primary_orange-500 mt-6">
          Kwiatomat
        </h1>
        <p className="text-2xl text-center place-self-center text-stone-500 font-semibold mt-6 max-w-[250px]">
          {!loading && boxes.length === 0 ? "Wszystkie kwiatki zostału juz kupione IKS PE PE" : "Wybierz skrytkę i przejdź do płatności"}
        </p>
      </div>
    </div>

    {!loading && boxes.length > 0 && (
      <Form boxes={boxes} loading={loading} />
    )}
  </>
}

export default Main;
