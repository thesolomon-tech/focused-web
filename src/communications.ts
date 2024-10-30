import { FocusedDetails } from "./types";
export const get_from_storage = async (): Promise<FocusedDetails | false> => {
  try {
    const storage = await chrome.storage.local.get("details");
    const result: FocusedDetails = storage.details;
    return result ? result : false;
  } catch (error) {
    console.error("Error saving to chrome storage:", error);
    throw error;
  }
};

export const set_to_storage = async (
  details: FocusedDetails
): Promise<void> => {
  try {
    await chrome.storage.local.set({ details });
  } catch (error) {
    console.error("Error saving to chrome storage:", error);
    throw error;
  }
};
