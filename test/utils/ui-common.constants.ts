interface IUITimeouts {

    /** An element becoming displayed, enabled or interactable */
    ELEMENT_MS: number;

    /** page switches */
    NAVIGATION_MS: number;
}

export const TIMEOUT: IUITimeouts = {
    ELEMENT_MS: 5000,
    NAVIGATION_MS: 30000,
};