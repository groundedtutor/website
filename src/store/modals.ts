import { map } from "nanostores";

export const $modalCloseState = map<Partial<Record<string, boolean>>>();

export const closeModal = (modalId: string) => {
    $modalCloseState.setKey(modalId, undefined);
}

export const isModalOpen = (modalId: string) => {
    return $modalCloseState.get()?.[modalId] ?? false;
}

export const openModal = (modalId: string) => {
    $modalCloseState.setKey(modalId, true);
}
