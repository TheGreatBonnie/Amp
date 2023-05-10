import { Desc as TDesc } from "../api/desc/Desc";

export const DESC_TITLE_FIELD = "name";

export const DescTitle = (record: TDesc): string => {
  return record.name || String(record.id);
};
