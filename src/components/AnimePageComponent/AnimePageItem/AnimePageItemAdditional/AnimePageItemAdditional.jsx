import React from "react";
import { useState } from "react";
import Characters from "../Characters/Characters";
import Overview from "../Overview/Overview";
import Recomendations from "../Recomendations/Recomendations";
import Staff from "../Staff/Staff";
import * as Styles from "../styles";

const AnimePageItemAdditional = ({ data }) => {
  const tabs = ["overview", "characters", "recomendations", "staff"];

  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <Styles.AnimePageAdditional>
      <Styles.AnimePageAdditionalTabs>
        {tabs.map((item, index) => {
          return (
            <Styles.AnimePageAdditionalTabsText
              tab={currentTab}
              item={item}
              key={index}
              onClick={() => setCurrentTab(item)}
            >
              {item}
            </Styles.AnimePageAdditionalTabsText>
          );
        })}
      </Styles.AnimePageAdditionalTabs>

      {currentTab === "overview" ? (
        <Overview data={data} setCurrentTab={setCurrentTab} />
      ) : null}
      {currentTab === "characters" ? (
        <Characters data={data} limit={9999} />
      ) : null}
      {currentTab === "recomendations" ? (
        <Recomendations data={data} limit={9999} />
      ) : null}
      {currentTab === "staff" ? <Staff data={data} limit={9999} /> : null}
    </Styles.AnimePageAdditional>
  );
};

export default AnimePageItemAdditional;
