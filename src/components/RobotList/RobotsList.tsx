import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useApiData } from "../../app/store/hooks";
import { RootState } from "../../app/store/store";

const apiUrl = process.env.REACT_APP_APIURL as string;

const RobotsList = (): JSX.Element => {
  const { handlerLoadRobots } = useApiData(apiUrl);

  const robotList = useSelector((state: RootState) => state);

  useEffect(() => {
    handlerLoadRobots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="robots-list">
      {robotList.robots.map((robot) => (
        <li className="robot-item">{robot.name}</li>
      ))}
    </ul>
  );
};

export default RobotsList;