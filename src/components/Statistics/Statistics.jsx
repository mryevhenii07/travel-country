import React from "react";
import { Button } from "../../shared/Container.styled";
const Statistics = ({ onClick }) => (
  <div>
    <Button type="submit" id="good" onClick={onClick}>
      good
    </Button>
    <Button type="submit" id="neutral" onClick={onClick}>
      Neutral
    </Button>
    <Button type="submit" id="bad" onClick={onClick}>
      Bad
    </Button>
  </div>
);

export default Statistics;
