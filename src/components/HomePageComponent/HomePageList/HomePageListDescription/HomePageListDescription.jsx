import React from "react";

const HomePageListDescription = ({ description }) => {
  let temp = description
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replaceAll("&quot;", "");

  String.fromHtmlEntities = function (string) {
    return (string + "").replace(/&#\d+;/gm, function (s) {
      return String.fromCharCode(s.match(/\d+/gm)[0]);
    });
  };
  let desc = String.fromHtmlEntities(temp);
  return (
    <div> {description.length > 200 ? desc.slice(0, 200) + "..." : desc}</div>
  );
};

export default HomePageListDescription;
