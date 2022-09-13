import React from "react";
import s from "./Search.module.css";
import Gold from "../../assets/gold.png";
const Search = () => {
  return (
    <div className={s.search}>
      <div className={s.container}>
        <div className={s.left}>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam,
            placeat sed ducimus saepe eum aliquam officiis architecto magnam
            odio veniam consectetur praesentium qui illum molestiae non
            excepturi corrupti corporis assumenda. Voluptatem iusto voluptatum
            obcaecati totam vel delectus provident? Fugiat inventore repellat
            expedita quis maxime quibusdam optio minima dignissimos placeat eius
            tempora incidunt dolorum sit, ipsum pariatur. Explicabo ipsa quis
            nostrum reprehenderit voluptate natus voluptates, animi ducimus
            voluptas vitae laborum fugiat cupiditate nobis autem quidem nisi ab,
            labore doloribus! Modi temporibus nisi hic, optio ipsa laudantium.
            Incidunt modi optio deserunt. Nisi, accusamus molestiae. Quod
            debitis animi qui in nihil ipsam.
          </p>
          <div className={s.searchColTwo}>
            <div className={s.box}>
              <div>
                <img src={Gold} alt="#" />
              </div>
              <div>
                <h3>WORDS LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className={s.box}>
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.promo}>
            <h4 className={s.save}>GET AN ADDITIONAL 7% OFF</h4>
            <p className={s.timer}>12 HOURS LEFT!</p>
            <p className={s.offers}>VIEW ALL CURRENT OFFERS</p>
          </div>
          <form action="">
            <div className={s.inputWrap}>
              <label htmlFor="">Destination</label>
              <select>
                <option value="">Poltava</option>
                <option value="">Grenda</option>
                <option value="">Emerald Bay</option>
                <option value="">Bora Bora</option>
                <option value="">Kharkiv</option>
                <option value="">Lviv</option>
                <option value="">Vovcha</option>
              </select>
            </div>
            <div className={s.date}>
              <div className={s.inputWrap}>
                <label htmlFor="">Check-In</label>
                <input type="date" />
              </div>
              <div className={s.inputWrap}>
                <label htmlFor="">Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availabilities</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
