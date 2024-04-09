import React, { useEffect, useState } from "react";
const Champions = () => {
  const [championsData, setChampionsData] = useState(null);
  const [championsList, setChanpionsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/tr_TR/champion.json"
        );

        if (!response.ok) {
          throw new Error("Veri çekilemedi");
        }

        const data = await response.json();
        setChampionsData(data.data);
        let champions = [];
        for (let i in data.data) {
          champions.push(data.data[i]);
        }
        setChanpionsList(champions);
        console.log(champions);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchData();
  }, []); // Boş bağımlılık dizisi, sadece bir kere çalışması için

  if (!championsData) {
    return <div>Loading...</div>;
  }

  // Veriyi kullanarak istediğiniz işlemleri gerçekleştirin
  // Örneğin: const champions = championsData.data;

  return (
    <div className="championsRow">
      {championsList.map((x, index) => (
        <ChampionsTemplate key={index} championInfo={x} />
      ))}
    </div>
  );
};

function ChampionsTemplate({ key, championInfo }) {
  return (
    <div className="championsColumn" key={key}>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championInfo.id}_0.jpg`}
        alt={championInfo.name}
      />
      <h2 className="name">{championInfo.name}</h2>
      <h3 className="title">{championInfo.title}</h3>
      <p className="txJustify">{championInfo.blurb || ""}</p>
      <p className="championsRow">
        <i className="fa fa-gamepad"></i> {championInfo.info.attack}
        <i className="fa fa-shield"></i> {championInfo.info.defense}
        <i className="fa fa-bolt"></i> {championInfo.info.magic}
        <i className="fa fa-star-half-full"></i> {championInfo.info.difficulty}
      </p>
    </div>
  );
}

export default Champions;
