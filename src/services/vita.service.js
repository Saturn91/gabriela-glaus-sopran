import { getFlowTextFromFirebase } from "./firebase-flowtext-service";

export function getVita() {
    return getFlowTextFromFirebase('vita');
}
