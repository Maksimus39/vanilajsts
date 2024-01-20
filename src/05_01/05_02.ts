import {GovernmentBuildingsType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovernmentBuildingsType>) => {
   return governmentBuildings.map(b=>b.address.street.title)
}