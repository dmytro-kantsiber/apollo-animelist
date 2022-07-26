import React from "react";
import { useTrackedState } from "../../../../context/AppContext";
import * as Styles from "./styles";

const AnimeListInfo = ({ setCurrentList, lists, currentList }) => {
  const state = useTrackedState();

  return (
    <Styles.AnimeListInfoWrapper>
      <div>
        <Styles.AnimeListProfileImage>
          <img src={state.user?.avatar} alt="avatar"></img>
        </Styles.AnimeListProfileImage>
        <Styles.AnimeListProfileNickname>
          {state.user?.username}
        </Styles.AnimeListProfileNickname>
      </div>
      <div>
        <Styles.AnimeListProfileTabs>
          <Styles.AnimeListProfileTabsItemAll
            onClick={() => setCurrentList("All")}
            currentList={currentList}
          >
            ALL
          </Styles.AnimeListProfileTabsItemAll>
          {lists.map((list, index) => {
            return (
              <Styles.AnimeListProfileTabsItem
                key={index}
                onClick={() => setCurrentList(list)}
                currentList={currentList}
                list={list}
              >
                {list}
              </Styles.AnimeListProfileTabsItem>
            );
          })}
        </Styles.AnimeListProfileTabs>
      </div>
    </Styles.AnimeListInfoWrapper>
  );
};

export default AnimeListInfo;
