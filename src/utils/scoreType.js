export const scoreType = (type) => {
  switch (type) {
    case "POINT_100":
      return 100;
    case "POINT_10_DECIMAL":
      return 10;
    case "POINT_10":
      return 10;
    case "POINT_5":
      return 5;
    case "POINT_3":
      return 3;

    default:
      break;
  }
};
